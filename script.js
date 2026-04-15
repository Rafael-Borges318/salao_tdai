function init() {
  const n = CONFIG.nome;
  const c = CONFIG.cidade;
  const h = CONFIG.horarios;
  const d = CONFIG.descricao;
  const wpp = CONFIG.whatsapp;

  document.getElementById("header-nome").textContent = n;
  document.getElementById("hero-desc").textContent = d;
  document.getElementById("hero-circle-nome").textContent = n;
  document.getElementById("seal-horarios").textContent = h;
  document.getElementById("about-titulo").textContent = `Olá, sou ${n}`;
  document.getElementById("dif-cidade").textContent = c;
  document.getElementById("loc-cidade").textContent = c;
  document.getElementById("loc-cidade2").textContent = c;
  document.getElementById("loc-horarios").textContent = h;
  document.getElementById("footer-nome").textContent = n;
  document.getElementById("footer-nome2").textContent = n;
  document.getElementById("footer-cidade").textContent = c;
  document.getElementById("footer-horarios").textContent = h;
  document.getElementById("ano").textContent = new Date().getFullYear();

  const wppLink = `https://wa.me/${wpp}`;
  document.getElementById("header-wpp").href = wppLink;
  document.getElementById("footer-wpp").href = wppLink;
  document.getElementById("wpp-float-link").href = wppLink;
}

function agendar(tipo) {
  const msgs = {
    pe: "Olá, quero marcar horário para fazer o pé. Qual dia e horário você tem disponível?",
    mao: "Olá, quero marcar horário para fazer a mão. Qual dia e horário você tem disponível?",
    pe_mao:
      "Olá, quero marcar horário para fazer pé e mão. Qual dia e horário você tem disponível?",
  };

  const msg = encodeURIComponent(msgs[tipo]);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, "_blank");
}

function scrollToServicos() {
  document.getElementById("servicos").scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-top");
  if (window.scrollY > 400) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

function adjustHeroGrid() {
  const grid = document.getElementById("hero-grid");
  if (window.innerWidth >= 900) {
    grid.style.gridTemplateColumns = "1fr 1fr";
  } else {
    grid.style.gridTemplateColumns = "1fr";
  }
}

function adjustHygieneGrid() {
  const grid = document.getElementById("hygiene-grid");
  if (window.innerWidth >= 900) {
    grid.style.gridTemplateColumns = "1fr 1fr";
  } else {
    grid.style.gridTemplateColumns = "1fr";
  }
}

window.addEventListener("resize", () => {
  adjustHeroGrid();
  adjustHygieneGrid();
});

init();
adjustHeroGrid();
adjustHygieneGrid();
