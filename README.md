# Portfolio

Portafolio personal de Christian Nogueras, construido con SvelteKit y `adapter-static`: el build genera HTML estático, sin JavaScript de framework en el navegador.

El texto vive en `docs/copy.md`. Los proyectos de Work son un `.md` cada uno en `docs/projects/`: agregar un archivo basta para que salga en la página.

La interfaz usa los tokens y componentes de [Kiri Design System](https://design.kiri231.com/) y ofrece modos claro y oscuro.

## Desarrollo local

```bash
npm install
npm run dev
```

Visita `http://localhost:5173`. `npm run build` deja el sitio en `build/`.

## Con Docker

```sh
docker build -t portfolio .
docker run --rm -p 8080:8080 portfolio
```

Abrí http://localhost:8080. El Dockerfile hace el build con Node y un Caddy sirve `build/` en el
8080. `/health` responde `ok`. La imagen la publica el CI en
`ghcr.io/kiri23/portfolio` con cada push a `master`.

## Despliegue

`compose.prod.yaml` lo corre vps1, detrás del borde compartido `kiri-edge`
(Kiri23/kiriInfra, el mismo caddy-docker-proxy que ya corre en vps2): sin
puertos propios, el label `caddy: kiri231.com` le dice al controller del
borde a qué contenedor mandar ese dominio. El DNS de kiri231.com apunta a
vps1 (Cloudflare proxied).

Sitio publicado: https://kiri231.com (`curl -sI https://kiri231.com/js/main.js`
muestra `via: 1.1 Caddy`). Ya no se publica en GitHub Pages.
