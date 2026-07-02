import { z } from 'zod';

// Esquema para o registro de usuários
export const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

// Esquema para o login
export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// Esquema para atualização de perfil
export const profileUpdateSchema = z.object({
  bio: z.string().max(160).optional(),
  avatar: z.string().url().optional(),
});

// Middleware genérico de validação para Hono
export const validate = (schema: z.ZodSchema) => async (c: any, next: any) => {
  const body = await c.req.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return c.json({ error: 'Dados inválidos', details: result.error.errors }, 400);
  }

  await next();
};
