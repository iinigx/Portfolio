(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, texto) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (texto !== undefined) n.textContent = texto;
    return n;
  };

  const partes = PERFIL.nombre.split(" ");
  if ($("nombre")) document.title = "Portfolio de " + PERFIL.nombre;
  if ($("logo")) $("logo").textContent = partes.map((p) => p[0]).join("").slice(0, 3).toUpperCase();
  if ($("pie")) $("pie").textContent = "© " + new Date().getFullYear() + " " + PERFIL.nombre + ". Hecho con HTML, CSS y JavaScript.";

  // Enlace "CV" del menú (solo si hay CV)
  const navCv = $("nav-cv");
  if (navCv && PERFIL.cv) {
    navCv.href = PERFIL.cv;
    navCv.target = "_blank";
    navCv.rel = "noopener";
    navCv.hidden = false;
  }

  const hue = (txt) => {
    let h = 0;
    for (const ch of txt) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return h;
  };
  const fechaBonita = (f) => {
    if (!f) return "";
    const [y, m] = f.split("-");
    const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    return m ? meses[parseInt(m, 10) - 1] + " " + y : y;
  };
  const porFecha = (a, b) => (b.fecha || "").localeCompare(a.fecha || "");

  function ficha(p) {
    const art = el("article", "ficha");
    art.style.setProperty("--h", hue(p.asignatura));
    const meta = el("div", "meta");
    meta.appendChild(el("span", "", p.asignatura));
    meta.appendChild(el("span", "", fechaBonita(p.fecha)));
    art.appendChild(meta);
    art.appendChild(el("h3", "", p.titulo));
    if (p.imagen) {
      const img = el("img");
      img.src = p.imagen;
      img.alt = "Captura de " + p.titulo;
      img.loading = "lazy";
      img.addEventListener("error", () => img.remove());
      art.appendChild(img);
    }
    art.appendChild(el("p", "", p.descripcion));
    const tags = el("ul", "etiquetas");
    p.tecnologias.forEach((t) => tags.appendChild(el("li", "", t)));
    art.appendChild(tags);

    const acc = el("div", "acciones");
    [
      ["Ver proyecto", p.detalle, "interno"],
      ["Descargar código", p.descarga, "descarga"],
      ["Ver código", p.repo, "externo"],
      ["Ver demo", p.demo, "externo"]
    ].forEach(([txt, url, tipo]) => {
      if (!url) return;
      const a = el("a", "", txt);
      a.href = url;
      if (tipo === "descarga") a.setAttribute("download", "");
      if (tipo === "externo") { a.target = "_blank"; a.rel = "noopener"; }
      acc.appendChild(a);
    });
    if (acc.children.length) art.appendChild(acc);
    return art;
  }

  // Agrupa por asignatura respetando ORDEN_ASIGNATURAS
  function agrupar(lista) {
    const orden = typeof ORDEN_ASIGNATURAS !== "undefined" ? [...ORDEN_ASIGNATURAS] : [];
    lista.forEach((p) => { if (!orden.includes(p.asignatura)) orden.push(p.asignatura); });
    return orden
      .map((a) => [a, lista.filter((p) => p.asignatura === a)])
      .filter(([, l]) => l.length);
  }

  // ---------- Página de inicio ----------
  if ($("nombre")) {
    const h1 = $("nombre");
    h1.appendChild(el("span", "ap", partes[0]));
    h1.appendChild(el("span", "", partes.slice(1).join(" ")));
    $("titular").textContent = PERFIL.titular;
    PERFIL.bio.forEach((p) => $("bio").appendChild(el("p", "", p)));
    PERFIL.datos.forEach((d) => {
      const fila = el("div");
      fila.appendChild(el("dt", "", d.etiqueta));
      fila.appendChild(el("dd", "", d.valor));
      $("datos").appendChild(fila);
    });

    if (PERFIL.foto) {
      const img = $("foto");
      img.src = PERFIL.foto;
      img.alt = "Foto de " + PERFIL.nombre;
      img.addEventListener("error", () => { $("retrato").hidden = true; });
      $("retrato").hidden = false;
    }

    const btnCv = $("btn-cv");
    if (btnCv && PERFIL.cv) {
      btnCv.href = PERFIL.cv;
      btnCv.setAttribute("download", "");
      btnCv.hidden = false;
    }

    [...PROYECTOS].sort(porFecha).slice(0, 3).forEach((p) => $("grid-recientes").appendChild(ficha(p)));
  }

  // ---------- Página de proyectos ----------
  if ($("barras")) {
    const estado = { asignatura: null, tecnologia: null };
    const conteo = {};
    PROYECTOS.forEach((p) => p.tecnologias.forEach((t) => (conteo[t] = (conteo[t] || 0) + 1)));
    const tecnologias = Object.entries(conteo).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const maximo = tecnologias.length ? tecnologias[0][1] : 1;
    const asignaturas = agrupar(PROYECTOS).map(([a]) => a);

    function pintarBarras() {
      const ul = $("barras");
      ul.replaceChildren();
      tecnologias.forEach(([nombre, n]) => {
        const li = el("li");
        const b = el("button");
        b.type = "button";
        b.setAttribute("aria-pressed", "false");
        b.appendChild(el("span", "", nombre));
        const pista = el("span", "pista");
        const rel = el("span", "relleno");
        rel.style.width = (n / maximo) * 100 + "%";
        pista.appendChild(rel);
        b.appendChild(pista);
        b.appendChild(el("span", "num", String(n)));
        b.addEventListener("click", () => {
          estado.tecnologia = estado.tecnologia === nombre ? null : nombre;
          refrescar();
        });
        li.appendChild(b);
        ul.appendChild(li);
      });
    }

    function pintarChips() {
      const cont = $("chips");
      cont.replaceChildren();
      [null, ...asignaturas].forEach((a) => {
        const b = el("button", "chip", a === null ? "Todas" : a);
        b.type = "button";
        b.setAttribute("aria-pressed", String(estado.asignatura === a));
        b.addEventListener("click", () => { estado.asignatura = a; refrescar(); });
        cont.appendChild(b);
      });
    }

    function pintarProyectos() {
      const cont = $("grupos");
      cont.replaceChildren();
      const lista = PROYECTOS
        .filter((p) => !estado.asignatura || p.asignatura === estado.asignatura)
        .filter((p) => !estado.tecnologia || p.tecnologias.includes(estado.tecnologia))
        .sort(porFecha);
      $("contador").textContent = lista.length + " de " + PROYECTOS.length + " proyectos";
      if (!lista.length) {
        cont.appendChild(el("p", "vacio", "Ningún proyecto coincide con estos filtros. Prueba con otra combinación."));
        return;
      }
      agrupar(lista).forEach(([asig, items]) => {
        const sec = el("section", "grupo");
        sec.style.setProperty("--h", hue(asig));
        const id = "grupo-" + asig.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        sec.setAttribute("aria-labelledby", id);
        const h2 = el("h2", "grupo-titulo");
        h2.id = id;
        h2.appendChild(document.createTextNode(asig));
        h2.appendChild(el("span", "n", String(items.length)));
        sec.appendChild(h2);
        const grid = el("div", "grid");
        items.forEach((p) => grid.appendChild(ficha(p)));
        sec.appendChild(grid);
        cont.appendChild(sec);
      });
    }

    function refrescar() {
      document.querySelectorAll("#barras button").forEach((b, i) => {
        b.setAttribute("aria-pressed", String(estado.tecnologia === tecnologias[i][0]));
      });
      pintarChips();
      pintarProyectos();
    }

    pintarBarras();
    refrescar();
  }
})();
