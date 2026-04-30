import { FastifyInstance } from 'fastify';
import { prisma } from '../../lib/prisma.js';
import { requireRole } from '../../middleware/auth.js';
export async function adminRoutes(app: FastifyInstance){
  app.addHook('preHandler', requireRole(['admin']));
  app.get('/analytics', async ()=>{
    const [users,records] = await Promise.all([prisma.user.count(), prisma.dataRecord.count()]);
    return {users,records};
  });
}
