import { Hono } from 'hono';
import { sign } from 'hono/jwt';

const auth = new Hono<{ Bindings: { DB: D1Database } }>();

auth.post('/register', async (c) => {
  const { username, email, password } = await c.req.json();
  const id = crypto.randomUUID();
  
  await c.env.DB.prepare(
    "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)"
  ).bind(id, username, email, password).run();

  return c.json({ message: "Usuário criado com sucesso" }, 201);
});

auth.post('/login', async (c) => {
  const { username, password } = await c.req.json();
  const user = await c.env.DB.prepare("SELECT * FROM users WHERE username = ?")
    .bind(username).first();

  if (!user || user.password !== password) {
    return c.json({ error: "Credenciais inválidas" }, 401);
  }

  const token = await sign({ id: user.id, username: user.username }, 'SEU_SECRET_JWT');
  return c.json({ token });
});

export default auth;
