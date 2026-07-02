import { Context, Next } from 'hono';
import { verify } from 'hono/jwt';

export const authMiddleware = async (c: Context, next: Next) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return c.json({ error: 'Token não fornecido' }, 401);
  }

  try {
    const payload = await verify(token, 'SEU_SECRET_JWT');
    c.set('user', payload);
    await next();
  } catch (e) {
    return c.json({ error: 'Token inválido' }, 401);
  }
};
