const THEME_KEY = "site-theme";
const LOCALE_KEY = "site-locale";

const fallbackMessages = {
  en: {
    "brand.name": "João Miguel Marcondes",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.languages": "Languages",
    "control.theme": "Theme",
    "control.language": "Language",
    "aria.mainNavigation": "Main navigation",
    "aria.languageSwitcher": "Language selector",
    "aria.switchToPortuguese": "Switch to Portuguese",
    "aria.switchToEnglish": "Switch to English",
    "aria.themeToggle": "Theme toggle",
    "aria.loading": "Loading",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "loader.text": "Loading content...",
    "footer.rights": "All rights reserved.",
    "page.home.title": "João Miguel Marcondes — Portfolio",
    "home.heading": "Technology & Multimedia Portfolio",
    "home.bio": "I am a young professional in Technology and Multimedia, with hands-on experience in software development, automation, technical support, and digital media production.",
    "home.bio2": "I enjoy learning quickly, solving practical problems, and turning ideas into functional projects.",
    "home.highlight": "Current focus",
    "home.highlightText": "Building robust web interfaces with accessibility and performance in mind.",
    "home.alert": "Available for internship opportunities.",
    "page.about.title": "About — João Miguel Marcondes",
    "about.heading": "About me",
    "about.text": "I am a communicative and proactive professional with solid skills in web development, multimedia editing, and IT systems maintenance.",
    "about.text2": "I enjoy collaborative projects and applying new technologies to practical and creative solutions.",
    "page.experience.title": "Experience — João Miguel Marcondes",
    "experience.heading": "Professional Experience",
    "experience.role1": "Multimedia Technician — Escola Henrique Sommer (2023 - 2024)",
    "experience.p1": "Developed C code for automation projects and contributed to robotics initiatives with machine learning concepts.",
    "experience.p2": "Handled installation, configuration, and maintenance of hardware, software, printers, and network resources.",
    "experience.p3": "Applied skills: Arduino, C, Inkscape, automation, troubleshooting, agile practices.",
    "experience.warning": "Projects required strict deadlines and rapid troubleshooting.",
    "page.skills.title": "Technical Skills — João Miguel Marcondes",
    "skills.heading": "Technical Competences",
    "skills.hover": "Hover or tap to play demo",
    "skills.badge.frontend": "Frontend",
    "skills.badge.multimedia": "Multimedia",
    "skills.badge.motion": "Motion",
    "skills.badge.data": "Data",
    "skills.badge.design": "Design",
    "skills.badge.programming": "Programming",
    "skills.card1.title": "HTML",
    "skills.card1.text": "Semantic structure for modern web pages.",
    "skills.card1.alt": "HTML code example",
    "skills.card2.title": "CSS",
    "skills.card2.text": "Responsive styling and interface animations.",
    "skills.card2.alt": "CSS styling example",
    "skills.card3.title": "JavaScript",
    "skills.card3.text": "Interactivity and logic for dynamic experiences.",
    "skills.card3.alt": "JavaScript code example",
    "skills.card4.title": "Excel & Data Management",
    "skills.card4.text": "Data organization, analysis, and practical reporting.",
    "skills.card4.alt": "Excel spreadsheet and data chart",
    "skills.card5.title": "Adobe Photoshop & Premiere",
    "skills.card5.text": "Photo editing and video post-production workflows.",
    "skills.card5.alt": "Adobe Photoshop and Premiere editing workspace",
    "skills.card6.title": "Motion graphics & narrative editing",
    "skills.card6.text": "Motion graphics demos and narrative editing rhythm.",
    "page.education.title": "Education — João Miguel Marcondes",
    "education.heading": "Education",
    "education.school": "Henrique's Summer High School — Leiria",
    "education.level": "Professional Level 4 in Multimedia (Expected completion: 2026)",
    "education.item1": "Technical training in professional photography and digital editing.",
    "education.item2": "Website and multimedia application development.",
    "education.item3": "Hands-on audio, video, and design project creation.",
    "page.languages.title": "Languages — João Miguel Marcondes",
    "languages.heading": "Languages",
    "languages.pt.title": "Portuguese",
    "languages.pt.level": "Native",
    "languages.pt.item1": "Full fluency in written and spoken communication.",
    "languages.pt.item2": "Used in academic and professional projects.",
    "languages.en.title": "English",
    "languages.en.level": "Advanced (C1)",
    "languages.en.item1": "Technical documentation and scientific article reading.",
    "languages.en.item2": "Fluent verbal communication for meetings and presentations.",
    "languages.en.item3": "Experience in international projects and online tools.",
    "languages.fr.title": "French",
    "languages.fr.level": "Elementary (A2)",
    "languages.fr.item1": "Basic understanding of simple texts and conversations.",
    "languages.fr.item2": "Limited communication for daily contexts.",
    "languages.fr.item3": "Basic French training for travel and initial interactions."
  },
  pt: {
    "brand.name": "João Miguel Marcondes",
    "nav.home": "Início",
    "nav.about": "Sobre mim",
    "nav.experience": "Experiência",
    "nav.skills": "Competências",
    "nav.education": "Educação",
    "nav.languages": "Línguas",
    "control.theme": "Tema",
    "control.language": "Idioma",
    "aria.mainNavigation": "Navegação principal",
    "aria.languageSwitcher": "Seletor de idioma",
    "aria.switchToPortuguese": "Mudar para português",
    "aria.switchToEnglish": "Switch to English",
    "aria.themeToggle": "Alternar tema",
    "aria.loading": "A carregar",
    "theme.light": "Claro",
    "theme.dark": "Escuro",
    "loader.text": "A carregar conteúdo...",
    "footer.rights": "Todos os direitos reservados.",
    "page.home.title": "João Miguel Marcondes — Portefólio",
    "home.heading": "Portefólio de Tecnologia e Multimédia",
    "home.bio": "Sou um jovem profissional da área de Tecnologia e Multimédia, com experiência em desenvolvimento de software, automação, suporte técnico e produção digital.",
    "home.bio2": "Gosto de aprender rapidamente, resolver problemas práticos e transformar ideias em projetos funcionais.",
    "home.highlight": "Foco atual",
    "home.highlightText": "Construir interfaces web robustas com acessibilidade e desempenho.",
    "home.alert": "Disponível para oportunidades de estágio.",
    "page.about.title": "Sobre mim — João Miguel Marcondes",
    "about.heading": "Sobre mim",
    "about.text": "Sou um profissional comunicativo e proativo com competências sólidas em desenvolvimento web, edição multimédia e manutenção de sistemas informáticos.",
    "about.text2": "Gosto de participar em projetos colaborativos e aplicar novas tecnologias em soluções práticas e criativas.",
    "page.experience.title": "Experiência — João Miguel Marcondes",
    "experience.heading": "Experiência Profissional",
    "experience.role1": "Técnico de Multimédia — Escola Henrique Sommer (2023 - 2024)",
    "experience.p1": "Desenvolvi código em C para projetos de automação e contribuí para iniciativas de robótica com conceitos de machine learning.",
    "experience.p2": "Fiquei responsável pela instalação, configuração e manutenção de hardware, software, impressoras e recursos de rede.",
    "experience.p3": "Competências aplicadas: Arduino, C, Inkscape, automação, troubleshooting e práticas ágeis.",
    "experience.warning": "Os projetos exigiam prazos rigorosos e resolução rápida de problemas.",
    "page.skills.title": "Competências Técnicas — João Miguel Marcondes",
    "skills.heading": "Competências Técnicas",
    "skills.hover": "Passe o rato ou toque para reproduzir",
    "skills.badge.frontend": "Frontend",
    "skills.badge.multimedia": "Multimédia",
    "skills.badge.motion": "Motion",
    "skills.badge.data": "Dados",
    "skills.badge.design": "Design",
    "skills.badge.programming": "Programação",
    "skills.card1.title": "HTML",
    "skills.card1.text": "Estrutura semântica para páginas web modernas.",
    "skills.card1.alt": "Exemplo de código HTML",
    "skills.card2.title": "CSS",
    "skills.card2.text": "Estilo visual responsivo e animações de interface.",
    "skills.card2.alt": "Exemplo de estilos CSS",
    "skills.card3.title": "JavaScript",
    "skills.card3.text": "Interatividade e lógica para experiências dinâmicas.",
    "skills.card3.alt": "Exemplo de código JavaScript",
    "skills.card4.title": "Excel & Gestão de Dados",
    "skills.card4.text": "Organização de dados, análise e relatórios práticos.",
    "skills.card4.alt": "Folha de cálculo e gráfico de dados",
    "skills.card5.title": "Adobe Photoshop & Premiere",
    "skills.card5.text": "Fluxos de edição de imagem e pós-produção de vídeo.",
    "skills.card5.alt": "Ambiente de edição no Adobe Photoshop e Premiere",
    "skills.card6.title": "Motion graphics & edição narrativa",
    "skills.card6.text": "Demonstrações de motion graphics e ritmo narrativo.",
    "page.education.title": "Educação — João Miguel Marcondes",
    "education.heading": "Educação",
    "education.school": "Henrique's Summer High School — Leiria",
    "education.level": "Nível 4 Profissional em Multimédia (Conclusão prevista: 2026)",
    "education.item1": "Formação técnica em fotografia profissional e edição digital.",
    "education.item2": "Desenvolvimento de websites e aplicações multimédia.",
    "education.item3": "Criação prática de projetos de áudio, vídeo e design.",
    "page.languages.title": "Línguas — João Miguel Marcondes",
    "languages.heading": "Línguas",
    "languages.pt.title": "Português",
    "languages.pt.level": "Nativo",
    "languages.pt.item1": "Fluência completa na comunicação oral e escrita.",
    "languages.pt.item2": "Utilização em projetos académicos e profissionais.",
    "languages.en.title": "Inglês",
    "languages.en.level": "Avançado (C1)",
    "languages.en.item1": "Leitura de documentação técnica e artigos científicos.",
    "languages.en.item2": "Comunicação verbal fluente em reuniões e apresentações.",
    "languages.en.item3": "Experiência com projetos internacionais e ferramentas online.",
    "languages.fr.title": "Francês",
    "languages.fr.level": "Elementar (A2)",
    "languages.fr.item1": "Compreensão básica de textos e diálogos simples.",
    "languages.fr.item2": "Comunicação limitada para contextos do dia a dia.",
    "languages.fr.item3": "Formação básica para viagens e interações iniciais."
  }
};

const state = {
  locale: "en",
  messages: fallbackMessages
};

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.setAttribute("data-theme", theme);
}

function initializeTheme() {
  const saved = getStoredTheme();
  const theme = saved === "light" || saved === "dark" ? saved : getSystemTheme();
  applyTheme(theme);
}

function setupThemeToggle() {
  const toggle = document.querySelector("[data-action='toggle-theme']");
  if (!toggle) return;
  const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
  toggle.value = current;
  toggle.textContent = current === "dark" ? "☀" : "☾";
  toggle.setAttribute("aria-label", t("aria.themeToggle"));
  if (toggle.dataset.bound === "true") return;
  toggle.dataset.bound = "true";
  toggle.addEventListener("click", () => {
    const now = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const next = now === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
    toggle.value = next;
    toggle.textContent = next === "dark" ? "☀" : "☾";
    toggle.setAttribute("aria-label", t("aria.themeToggle"));
  });
}

function normalizeLocale(locale) {
  if (!locale) return "en";
  return locale.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function getStoredLocale() {
  return localStorage.getItem(LOCALE_KEY);
}

function detectLocale() {
  return normalizeLocale(getStoredLocale() || navigator.language || "en");
}

function t(key) {
  return state.messages[state.locale][key] || fallbackMessages.en[key] || key;
}

function setStaticAriaLabels() {
  const loaderSpinner = document.querySelector(".radix-spinner");
  if (loaderSpinner) {
    loaderSpinner.setAttribute("aria-label", t("aria.loading"));
  }
}

async function loadLocaleFiles() {
  const localeFiles = ["en", "pt"];
  for (const locale of localeFiles) {
    try {
      const response = await fetch(`./locales/${locale}.json`, { cache: "no-cache" });
      if (!response.ok) continue;
      const data = await response.json();
      state.messages[locale] = { ...state.messages[locale], ...data };
    } catch (error) {
      state.messages[locale] = { ...fallbackMessages[locale] };
    }
  }
}

function applyTranslations() {
  document.documentElement.lang = state.locale === "pt" ? "pt-PT" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria-label")));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    node.setAttribute("alt", t(node.getAttribute("data-i18n-alt")));
  });
  const page = document.body.getAttribute("data-page") || "home";
  document.title = t(`page.${page}.title`);
  document.querySelectorAll("[data-intl-date]").forEach((node) => {
    const dateValue = node.getAttribute("data-intl-date");
    const date = new Date(dateValue);
    node.textContent = new Intl.DateTimeFormat(state.locale, { year: "numeric" }).format(date);
  });
  document.querySelectorAll("[data-intl-number]").forEach((node) => {
    const numberValue = Number(node.getAttribute("data-intl-number"));
    node.textContent = new Intl.NumberFormat(state.locale).format(numberValue);
  });
}

function setupLanguageSwitcher() {
  const languageButtons = Array.from(document.querySelectorAll("[data-action='change-language'][data-lang]"));
  if (!languageButtons.length) return;

  const updateActiveLanguage = () => {
    languageButtons.forEach((button) => {
      const isActive = normalizeLocale(button.dataset.lang) === state.locale;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  updateActiveLanguage();

  languageButtons.forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      state.locale = normalizeLocale(button.dataset.lang);
      localStorage.setItem(LOCALE_KEY, state.locale);
      applyTranslations();
      setupThemeToggle();
      updateActiveLanguage();
    });
  });
}

function showLoader() {
  const loader = document.getElementById("global-loader");
  if (!loader) return;
  loader.classList.remove("hidden");
  loader.setAttribute("aria-hidden", "false");
}

function hideLoader() {
  const loader = document.getElementById("global-loader");
  if (!loader) return;
  loader.classList.add("hidden");
  loader.setAttribute("aria-hidden", "true");
}

function setupNavigationLoader() {
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      if (href.startsWith("http") && !href.startsWith(window.location.origin)) return;
      event.preventDefault();
      showLoader();
      window.setTimeout(() => {
        window.location.href = href;
      }, 120);
    });
  });
}

function setupAsyncLoader() {
  let pending = 0;
  const originalFetch = window.fetch.bind(window);
  window.fetch = (...args) => {
    pending += 1;
    showLoader();
    return originalFetch(...args)
      .finally(() => {
        pending -= 1;
        if (pending <= 0) {
          hideLoader();
        }
      });
  };
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", () => {
      showLoader();
    });
  });
}

function setupSkillVideos() {
  const cards = document.querySelectorAll(".skill-card[data-video]");
  if (!cards.length) return;
  const canHover = window.matchMedia("(hover: hover)").matches;
  const loadVideo = (video) => {
    const source = video.querySelector("source[data-src]");
    if (!source || source.src) return;
    source.src = source.getAttribute("data-src");
    video.load();
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const video = entry.target.querySelector("video");
      if (video) {
        loadVideo(video);
      }
    });
  }, { rootMargin: "160px" });

  cards.forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    observer.observe(card);
    const play = () => {
      loadVideo(video);
      video.play().catch(() => {});
    };
    const stop = () => {
      video.pause();
      video.currentTime = 0;
    };
    if (canHover) {
      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focusin", play);
      card.addEventListener("focusout", stop);
    } else {
      card.addEventListener("click", () => {
        loadVideo(video);
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }
  });
}

function setupSkillMediaFallbacks() {
  document.querySelectorAll(".skill-card img.skill-media").forEach((img) => {
    if (img.dataset.bound === "true") return;
    img.dataset.bound = "true";
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "skill-media-fallback";
      fallback.textContent = img.getAttribute("data-fallback-text") || img.getAttribute("alt") || "Visual indisponível";
      img.replaceWith(fallback);
    });
  });
}

function setupSkillMediaVisualizer() {
  const visualizer = document.getElementById("skill-media-visualizer");
  const visualizerContent = document.getElementById("skill-media-visualizer-content");
  const closeBtn = document.getElementById("skill-media-visualizer-close");

  if (!visualizer || !visualizerContent || !closeBtn) return;

  const closeVisualizer = () => {
    visualizer.classList.remove("active");
    visualizer.setAttribute("aria-hidden", "true");
    visualizerContent.innerHTML = '<button class="skill-media-visualizer-close" id="skill-media-visualizer-close" aria-label="Close visualizer">×</button>';
  };

  const openVisualizer = (source) => {
    visualizerContent.innerHTML = '<button class="skill-media-visualizer-close" id="skill-media-visualizer-close" aria-label="Close visualizer">×</button>';
    const closeBtn = visualizerContent.querySelector(".skill-media-visualizer-close");

    if (source.tagName === "IMG") {
      const img = document.createElement("img");
      img.src = source.src;
      img.alt = source.alt || "Fullscreen view";
      visualizerContent.insertBefore(img, closeBtn);
    } else if (source.tagName === "VIDEO") {
      const video = document.createElement("video");
      video.controls = true;
      video.muted = false;
      video.autoplay = true;
      const sources = source.querySelectorAll("source");
      sources.forEach((src) => {
        const newSource = document.createElement("source");
        newSource.src = src.src || src.getAttribute("data-src");
        newSource.type = src.type;
        video.appendChild(newSource);
      });
      visualizerContent.insertBefore(video, closeBtn);
    }

    visualizer.classList.add("active");
    visualizer.setAttribute("aria-hidden", "false");

    const newCloseBtn = visualizerContent.querySelector(".skill-media-visualizer-close");
    if (newCloseBtn) {
      newCloseBtn.addEventListener("click", closeVisualizer);
    }
  };

  visualizer.addEventListener("click", (e) => {
    if (e.target === visualizer) {
      closeVisualizer();
    }
  });

  document.querySelectorAll(".skill-card .skill-media").forEach((media) => {
    if (media.dataset.visualizerBound === "true") return;
    media.dataset.visualizerBound = "true";
    media.addEventListener("click", () => {
      openVisualizer(media);
    });
  });

  document.querySelectorAll(".skill-card video").forEach((video) => {
    if (video.dataset.visualizerBound === "true") return;
    video.dataset.visualizerBound = "true";
    video.addEventListener("click", () => {
      openVisualizer(video);
    });
  });
}

async function init() {
  initializeTheme();
  state.locale = detectLocale();
  await loadLocaleFiles();
  applyTranslations();
  setStaticAriaLabels();
  setupThemeToggle();
  setupLanguageSwitcher();
  setupNavigationLoader();
  setupAsyncLoader();
  setupSkillMediaFallbacks();
  setupSkillVideos();
  setupSkillMediaVisualizer();
  window.setTimeout(hideLoader, 220);
}

document.addEventListener("DOMContentLoaded", init);