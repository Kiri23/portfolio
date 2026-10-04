# Portfolio

Portafolio personal de Christian Nogueras, construido con HTML, CSS y JavaScript sin framework.

La interfaz usa los tokens y componentes de [Kiri Design System](https://design.kiri231.com/) y ofrece modos claro y oscuro.

## Desarrollo local

```bash
python3 -m http.server 4173 --directory dist
```

Visita `http://localhost:4173`.

## Con Docker

```sh
docker build -t portfolio .
docker run --rm -p 8080:8080 portfolio
```

Abrí http://localhost:8080. Es un Caddy que sirve `dist/` tal cual, en el
8080. `/health` responde `ok`. La imagen la publica el CI en
`ghcr.io/kiri23/portfolio` con cada push a `master`.

## Despliegue

`compose.prod.yaml` lo corre vps2, detrás del borde compartido `kiri-edge`
(Kiri23/kiriInfra): sin puertos propios, el label `caddy: kiri231.com` le dice
al controller del borde a qué contenedor mandar ese dominio. Hoy ese dominio
lo sirve Dokploy (ver issue #3): el contenedor queda listo, pero el DNS
todavía no apunta acá.

Sitio publicado: https://kiri23.github.io/portfolio
