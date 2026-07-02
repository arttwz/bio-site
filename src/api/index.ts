import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  DB: D1Database;
  MY_BUCKET: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('/*', cors());

app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// As rotas de auth e profile serão importadas aqui
export default app;
