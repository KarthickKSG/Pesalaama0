import { FastifyInstance } from 'fastify';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { prisma } from '../../lib/prisma.js';
export async function authRoutes(app: FastifyInstance){
  app.post('/register', async (req, reply)=>{
    const b = z.object({email:z.string().email(), password:z.string().min(8), name:z.string()}).parse(req.body);
    const hash = await bcrypt.hash(b.password, 12);
    const role = await prisma.role.upsert({where:{name:'user'}, update:{}, create:{name:'user'}});
    const user = await prisma.user.create({data:{email:b.email,passwordHash:hash,name:b.name,roleId:role.id}});
    return {id:user.id,email:user.email};
  });
  app.post('/login', async (req, reply)=>{
    const b = z.object({email:z.string().email(), password:z.string()}).parse(req.body);
    const user = await prisma.user.findUnique({where:{email:b.email}, include:{role:true}});
    if(!user || !(await bcrypt.compare(b.password, user.passwordHash))) return reply.status(401).send({message:'Invalid credentials'});
    const accessToken = app.jwt.sign({sub:user.id, role:user.role.name},{expiresIn:'15m'});
    const refreshToken = app.jwt.sign({sub:user.id, role:user.role.name},{secret:process.env.JWT_REFRESH_SECRET!,expiresIn:'7d'});
    return {accessToken,refreshToken,user:{id:user.id,email:user.email,role:user.role.name}};
  });
}
