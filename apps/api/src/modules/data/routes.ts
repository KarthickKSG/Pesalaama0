import { FastifyInstance } from 'fastify';
import { requireAuth } from '../../middleware/auth.js';
import { prisma } from '../../lib/prisma.js';
import { z } from 'zod';
export async function dataRoutes(app: FastifyInstance){
  app.addHook('preHandler', requireAuth);
  app.get('/', async (req)=> prisma.dataRecord.findMany({where:{userId:(req.user as any).sub}}));
  app.post('/', async (req)=>{
    const b = z.object({title:z.string(), content:z.string()}).parse(req.body);
    return prisma.dataRecord.create({data:{...b,userId:(req.user as any).sub}});
  });
}
