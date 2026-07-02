# Bio-Site Full Stack

Sistema inspirado no guns.lol, construído com React + Cloudflare.

## Tecnologias
- Frontend: React + Vite + TailwindCSS + Framer Motion
- Backend: Cloudflare Workers + Hono + D1 + R2

## Configuração
1. Instale o Wrangler: `npm install -g wrangler`
2. Autentique: `wrangler login`
3. Crie o banco D1 e R2 no dashboard da Cloudflare.
4. Atualize o `wrangler.toml` com os IDs dos recursos.
5. Deploy: `npm run deploy`
