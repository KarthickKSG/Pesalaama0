import { FastifyReply, FastifyRequest } from 'fastify';
export async function requireAuth(req: FastifyRequest, reply: FastifyReply){
  try { await req.jwtVerify(); } catch { return reply.status(401).send({message:'Unauthorized'}); }
}
export function requireRole(roles: string[]){
  return async (req: FastifyRequest, reply: FastifyReply) => {
    await requireAuth(req, reply);
    const role = (req.user as any)?.role;
    if (!roles.includes(role)) return reply.status(403).send({message:'Forbidden'});
  };
}
