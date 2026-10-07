// ============================================================
// 🚀 PORTFOLIO SCRIPT — Main application logic
// ============================================================
// This file reads data from data.js and builds the page.
// Students should NOT need to edit this file.
// ============================================================

// ============================================================
// 1. HELPER: Get SVG icon by platform name
// ============================================================
// Returns an inline SVG string for social media icons.
// Supports: github, linkedin, twitter, instagram, email,
//           codepen, devto, medium, youtube
function getSocialIcon(iconName) {
  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,

    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,

    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,

    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,

    codepen: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.144 13.067v-2.134L16.55 12zm1.712 1.324-5.36 3.572V14.89l3.136-2.1zm-13.712 0 2.224 1.49-3.136 2.1V17.89zm5.36 3.572-5.36-3.572 2.224-1.49 3.136 2.1zm.856-4.853L9.224 12l3.136-2.11L15.496 12zM.856 7.063l5.36-3.572V6.89l-3.136 2.1zm13.712 0L12.344 5.57l3.136-2.1V6.89zm-5.36-3.572 5.36 3.572-2.224 1.49-3.136-2.1zM24 7.063v9.874L12 24 0 16.937V7.063L12 0z"/></svg>`,

    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>`,
  };

  return icons[iconName] || icons.github;
}

// ============================================================
// 2. HELPER: Get skill abbreviation for icon
// ============================================================
// Creates a short 2-letter abbreviation from a skill name.
function getSkillAbbreviation(skillName) {
  const words = skillName.split(/[\s\/&]+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return skillName.substring(0, 2).toUpperCase();
}

// ============================================================
// 3. POPULATE PAGE — Fill HTML with data from data.js
// ============================================================
function populatePage() {
  const data = portfolioData;

  // --- Apply accent color from theme settings ---
  if (data.theme && data.theme.accentColor) {
    document.documentElement.style.setProperty("--accent", data.theme.accentColor);
    document.documentElement.style.setProperty(
      "--accent-glow",
      data.theme.accentColor + "26"
    );
  }
  if (data.theme && data.theme.accentColorDark) {
    document.documentElement.style.setProperty("--accent-dark", data.theme.accentColorDark);
  }

  // --- Update page title ---
  document.title = `${data.name} — Portfolio`;

  // --- Nav Logo ---
  document.querySelector(".nav-logo-text").textContent = data.firstName || data.name;

  // --- Hero Section ---
  document.getElementById("heroName").textContent = data.name;
  document.getElementById("heroTagline").textContent = data.tagline;

  // --- About Section ---
  document.getElementById("aboutDescription").textContent = data.about.description;

  // Build highlight cards
  const highlightsContainer = document.getElementById("aboutHighlights");
  data.about.highlights.forEach((item) => {
    const card = document.createElement("div");
    card.className = "highlight-card reveal-up";
    card.innerHTML = `
      <p class="highlight-label">${item.label}</p>
      <p class="highlight-value">${item.value}</p>
    `;
    highlightsContainer.appendChild(card);
  });

  // --- Marquee (scrolling skills) ---
  const marqueeContent = document.getElementById("marqueeContent");
  // We duplicate the list twice so it loops seamlessly
  const skillNames = data.skills.map((s) => s.name);
  const marqueeHTML = [...skillNames, ...skillNames]
    .map(
      (name) =>
        `<span class="marquee-item">${name}</span><span class="marquee-dot"></span>`
    )
    .join("");
  marqueeContent.innerHTML = marqueeHTML;

  // --- Skills Section ---
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.classList.add("reveal-stagger");
  data.skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    const percentage = (skill.level / 5) * 100;
    card.innerHTML = `
      <div class="skill-icon">${getSkillAbbreviation(skill.name)}</div>
      <div class="skill-info">
        <p class="skill-name">${skill.name}</p>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-width="${percentage}%"></div>
        </div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  // --- Projects Section ---
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.classList.add("reveal-stagger");
  data.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-header">
        <div class="project-folder-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div class="project-links">
          ${
            project.liveLink && project.liveLink !== "#"
              ? `<a href="${project.liveLink}" target="_blank" class="project-link" aria-label="Live demo">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                   </svg>
                 </a>`
              : ""
          }
          ${
            project.codeLink && project.codeLink !== "#"
              ? `<a href="${project.codeLink}" target="_blank" class="project-link" aria-label="Source code">
                   ${getSocialIcon("github")}
                 </a>`
              : ""
          }
        </div>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  // --- Education Section ---
  const educationTimeline = document.getElementById("educationTimeline");
  data.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "education-item reveal-up";
    item.innerHTML = `
      <p class="education-duration">${edu.duration}</p>
      <h3 class="education-degree">${edu.degree}</h3>
      <p class="education-institution">${edu.institution}</p>
      <p class="education-description">${edu.description}</p>
    `;
    educationTimeline.appendChild(item);
  });

  // --- Contact Section ---
  const emailEl = document.getElementById("contactEmail");
  emailEl.href = `mailto:${data.contact.email}`;
  emailEl.querySelector(".contact-email-text").textContent = data.contact.email;

  const socialContainer = document.getElementById("socialLinks");
  data.contact.socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.className = "social-link";
    a.setAttribute("aria-label", link.platform);
    a.innerHTML = `${getSocialIcon(link.icon)}<span>${link.platform}</span>`;
    socialContainer.appendChild(a);
  });

  // --- Footer ---
  document.getElementById("footerName").textContent = data.name;
  document.getElementById("footerYear").textContent = `© ${new Date().getFullYear()}`;

  // --- Build Mobile Nav ---
  const mobileNavLinks = document.getElementById("mobileNavLinks");
  const sections = ["about", "skills", "projects", "education", "contact"];
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section}`;
    a.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    a.addEventListener("click", () => closeMobileMenu());
    li.appendChild(a);
    mobileNavLinks.appendChild(li);
  });
}

// ============================================================
// 4. PRELOADER — Hide after page loads
// ============================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");

  // Hide preloader after the loading animation finishes
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("done");
      // Trigger hero animations after preloader
      setTimeout(() => {
        document.querySelectorAll(".hero .reveal-text").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 150);
        });
      }, 300);
    }, 1800); // Match the preloader bar animation duration
  });
}

// ============================================================
// 5. CUSTOM CURSOR (desktop only)
// ============================================================
function initCustomCursor() {
  // Skip on touch devices
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  // Track mouse position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  // Smooth follow for the ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll("a, button, .project-card, .skill-card, .highlight-card");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    });
  });
}

// ============================================================
// 6. STICKY NAVBAR + ACTIVE SECTION HIGHLIGHT
// ============================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section, .hero");

  // Add scrolled class for backdrop blur
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Highlight current section in nav
  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("data-section") === sectionId
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));
}

// ============================================================
// 7. MOBILE MENU — Toggle & close
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================
// 8. SCROLL REVEAL — Intersection Observer animations
// ============================================================
function initScrollReveal() {
  // Elements with .reveal-up or .reveal-stagger
  const revealElements = document.querySelectorAll(".reveal-up, .reveal-stagger");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once revealed, stop observing (one-time animation)
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Animate skill bars when they come into view
  const skillCards = document.querySelectorAll(".skill-card");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          const bar = entry.target.querySelector(".skill-bar-fill");
          if (bar) {
            bar.style.width = bar.getAttribute("data-width");
          }
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillCards.forEach((card) => skillObserver.observe(card));
}

// ============================================================
// 9. DARK MODE TOGGLE
// ============================================================
function initDarkMode() {
  const toggle = document.getElementById("themeToggle");

  // Check saved preference
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

// ============================================================
// 10. SMOOTH SCROLL — Handles anchor link clicks
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navHeight = document.getElementById("navbar").offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
}

// ============================================================
// 11. PARALLAX — Subtle movement on hero shapes
// ============================================================
function initParallax() {
  const shapes = document.querySelectorAll(".hero-shape");

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 8;
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}

// ============================================================
// 🏁 INITIALIZE EVERYTHING
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Populate content from data.js
  populatePage();

  // Step 2: Initialize all interactive features
  initPreloader();
  initCustomCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initDarkMode();
  initSmoothScroll();
  initParallax();
});
