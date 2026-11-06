# Mi portfolio

Web estática (HTML, CSS y JavaScript) lista para GitHub Pages. No necesita instalar nada.

## Archivos

- `data.js`: tus datos, tu foto, tu CV y tus proyectos. Es el archivo que editas casi siempre.
- `index.html` (inicio), `proyectos.html` (todos los proyectos por asignatura) y `proyecto-hotelapp.html` (página del proyecto HotelApp).
- `style.css` y `script.js`: el diseño y la lógica. No hace falta tocarlos.
- `img/`: tu foto (`inigo.jpg`) y las capturas de tus proyectos.
- `cv/`: tu currículum en PDF.
- `proyectos/`: el código de tus proyectos, una carpeta por asignatura.

## Subirlo a GitHub Pages

1. Crea un repositorio en GitHub. Si lo llamas `TU-USUARIO.github.io`, la web quedará en `https://TU-USUARIO.github.io`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio (con todas sus carpetas).
3. En el repositorio: Settings, Pages, Source: "Deploy from a branch", rama `main`, carpeta `/ (root)`, Save.
4. Espera uno o dos minutos y abre la dirección que te muestra GitHub.

Con git:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Añadir un proyecto nuevo

1. Abre `data.js` y copia un bloque de `PROYECTOS`. Cambia título, asignatura, fecha, descripción y tecnologías.
2. La `asignatura` es el apartado donde aparece en la página de Proyectos. Si escribes una nueva, se crea el apartado solo.
3. Para poner un apartado el primero, añádelo a `ORDEN_ASIGNATURAS`.
4. Si quieres que se pueda descargar el código, copia la carpeta del proyecto a `proyectos/NOMBRE-ASIGNATURA/`, haz un `.zip` y pon su ruta en `descarga`. No subas carpetas como `target/`, `build/` o `.vscode/`.
5. Sube los cambios con `git add .`, `git commit -m "Añado proyecto"` y `git push`.

## Añadir capturas

1. Copia la imagen a `img/` con nombre en minúsculas, sin espacios ni tildes: `hotelapp.png`.
2. En `data.js`, pon `imagen: "img/hotelapp.png"` en el proyecto. La página `proyecto-hotelapp.html` también muestra `img/hotelapp.png` si existe.
3. Sube la imagen y `data.js` a GitHub.

## Cambiar la foto o el CV

- Foto: sustituye `img/inigo.jpg` (o cambia `foto` en `data.js`). Queda mejor vertical, en proporción 4:5.
- CV: sustituye `cv/cv-inigo-rojo.pdf` por el nuevo con el mismo nombre.
