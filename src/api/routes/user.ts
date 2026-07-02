import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth';

const user = new Hono<{ Bindings: { DB: D1Database } }>();

// Rota pública: Buscar perfil pelo username
user.get('/:username', async (c) => {
  const username = c.req.param('username');
  
  const profile = await c.env.DB.prepare(
    "SELECT id, username, avatar, bio, views FROM users WHERE username = ?"
  ).bind(username).first();

  if (!profile) return c.json({ error: "Usuário não encontrado" }, 404);

  // Incrementa visualização (opcional)
  await c.env.DB.prepare("UPDATE users SET views = views + 1 WHERE id = ?")
    .bind(profile.id).run();

  return c.json(profile);
});

// Rota protegida: Atualizar dados do perfil
user.put('/update', authMiddleware, async (c) => {
  const body = await c.req.json();
  const user = c.get('user'); // Usuário extraído do JWT pelo middleware

  await c.env.DB.prepare(
    "UPDATE users SET bio = ?, avatar = ? WHERE id = ?"
  ).bind(body.bio, body.avatar, user.id).run();

  return c.json({ message: "Perfil atualizado com sucesso" });
});

export default user;
