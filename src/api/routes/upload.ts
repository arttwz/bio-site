import { Hono } from 'hono';

const upload = new Hono<{ Bindings: { MY_BUCKET: R2Bucket } }>();

upload.post('/avatar', async (c) => {
  const body = await c.req.arrayBuffer();
  const filename = `${crypto.randomUUID()}.jpg`;
  
  await c.env.MY_BUCKET.put(`avatar/${filename}`, body);
  
  return c.json({ url: `/uploads/avatar/${filename}` });
});

export default upload;
