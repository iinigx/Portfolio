// ============================================================
//  AQUÍ EDITAS TODO: tus datos y tus proyectos.
//  No hace falta tocar los .html, style.css ni script.js.
// ============================================================

const PERFIL = {
  nombre: "Iñigo Rojo Crespo",
  foto: "img/inigo.jpg",              // tu foto (carpeta img/)
  cv: "cv/cv-inigo-rojo.pdf",         // tu currículum en PDF (carpeta cv/)
  rol: "2º DAM · Desarrollo de Aplicaciones Multiplataforma",
  titular: "Estudiante de 2º de DAM, me centro en el desarrollo web front-end.",
  bio: [
    "Estudio Desarrollo de Aplicaciones Multiplataforma y me gusta construir webs completas con HTML, CSS y JavaScript.",
    "Aquí voy subiendo los proyectos que hago en clase: Java, Android, desarrollo web y más."
  ],
  datos: [
    { etiqueta: "Estudios", valor: "2º DAM (CFGS)" },
    { etiqueta: "Lenguajes", valor: "Java, JavaScript, Python" },
    { etiqueta: "Inglés", valor: "Preparando el C1" },
    { etiqueta: "Me interesa", valor: "Front-end y APIs REST" }
  ]
};

// Orden en que salen los apartados (asignaturas) en la página de Proyectos.
// Las que no estén aquí salen después, en el orden en que aparecen abajo.
const ORDEN_ASIGNATURAS = ["Diseño de interfaces"];

// Cada proyecto es un bloque { ... }. Copia uno, pégalo arriba y cambia los datos.
// Campos opcionales:
//   repo     enlace al repositorio de GitHub
//   demo     enlace a una demo online
//   detalle  página propia del proyecto (por ejemplo "proyecto-hotelapp.html")
//   descarga archivo .zip con el código (por ejemplo "proyectos/.../hotelapp.zip")
//   imagen   captura (por ejemplo "img/hotelapp.png")
const PROYECTOS = [
  {
    titulo: "HotelApp, sistema de reservas",
    asignatura: "Diseño de interfaces",
    fecha: "2026-11",
    descripcion: "Aplicación de escritorio para un hotel: lista de habitaciones, búsqueda por número e informes de reservas con filtros y totales. Interfaz diseñada en FXML.",
    tecnologias: ["Java", "JavaFX", "FXML", "XML"],
    detalle: "proyecto-hotelapp.html",
    descarga: "proyectos/diseno-de-interfaces/hotelapp.zip",
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Analizador multiproceso de texto",
    asignatura: "PSP",
    fecha: "2026-09",
    descripcion: "Un proceso Coordinador lanza varios procesos Trabajador con ProcessBuilder para analizar un texto en paralelo y juntar los resultados.",
    tecnologias: ["Java", "ProcessBuilder"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Hilos y sincronización en Java",
    asignatura: "PSP",
    fecha: "2026-10",
    descripcion: "Práctica con experimentos y ejercicios sobre hilos, condiciones de carrera y mecanismos de sincronización.",
    tecnologias: ["Java", "Hilos"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Recursos y permisos en Android",
    asignatura: "PMDM",
    fecha: "2026-10",
    descripcion: "Práctica con los recursos de res/, la clase R y el permiso de cámara, resuelta con Views (XML) y con Jetpack Compose.",
    tecnologias: ["Android", "Jetpack Compose", "XML"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "El segundo cerebro de Iñigo",
    asignatura: "Proyecto personal",
    fecha: "2026-10",
    descripcion: "Agenda web con tareas con fecha y hora, calendario de clases por la mañana, tareas por la tarde y archivos guardados.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Web de finanzas personales",
    asignatura: "Proyecto personal",
    fecha: "2026-10",
    descripcion: "Gestor de cuentas con flujo de dinero, fondos y formulario para añadir dinero, en tema oscuro y morado.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
    imagen: ""
  }
];

