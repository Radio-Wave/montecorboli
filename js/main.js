/* Montecorboli: small site helpers.

   FORMS: GitHub Pages can't receive form posts itself. Create a free form at
   https://formspree.io (or similar), then paste the endpoint below, e.g.
   "https://formspree.io/f/abcdwxyz". Until then, forms show a friendly note
   instead of sending. */
const FORM_ENDPOINT = "";
const NEWSLETTER_ENDPOINT = ""; // can be the same Formspree form, or a Mailchimp/Buttondown URL

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
      toggle.textContent = "Menu";
    })
  );
}

// Gentle reveal on scroll
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 })
  : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// Home carousel: slow crossfade, pauses on hover/focus, arrows, dots, keyboard
const carousel = document.querySelector(".carousel");
if (carousel) {
  const slides = [...carousel.querySelectorAll(".slide")];
  const caption = carousel.querySelector(".carousel-caption");
  const dotsBox = carousel.querySelector(".dots");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null;

  const dots = slides.map((s, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Picture ${n + 1} of ${slides.length}`);
    b.addEventListener("click", () => { show(n); restart(); });
    dotsBox.appendChild(b);
    return b;
  });

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => {
      s.classList.toggle("on", k === i);
      s.setAttribute("aria-hidden", k !== i);
      if (k === i) { const img = s.querySelector("img"); if (img) img.loading = "eager"; }
    });
    dots.forEach((d, k) => d.setAttribute("aria-current", k === i));
    const cap = slides[i].querySelector("figcaption");
    if (caption && cap) caption.textContent = cap.textContent;
  }
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => { if (!still && !timer) timer = setInterval(() => show(i + 1), 6000); };
  const restart = () => { stop(); start(); };

  carousel.querySelector("[data-prev]").addEventListener("click", () => { show(i - 1); restart(); });
  carousel.querySelector("[data-next]").addEventListener("click", () => { show(i + 1); restart(); });
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { show(i - 1); restart(); }
    if (e.key === "ArrowRight") { show(i + 1); restart(); }
  });
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  show(0);
  start();
}

// "Ask about this painting": start the message for them
document.querySelectorAll("[data-painting]").forEach((a) =>
  a.addEventListener("click", () => {
    const msg = document.querySelector("#enquire textarea[name=message]");
    if (msg && !msg.value) msg.value = `I'm interested in "${a.dataset.painting}". `;
    const subj = document.querySelector('#enquire input[name="_subject"]');
    if (subj) subj.value = `Art enquiry: ${a.dataset.painting}`;
    setTimeout(() => msg && msg.focus({ preventScroll: true }), 400);
  })
);

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Form submission
async function submitForm(form, endpoint) {
  const status = form.querySelector(".form-status");
  const say = (msg, cls) => {
    if (status) { status.textContent = msg; status.className = "form-status " + cls; }
  };

  if (!endpoint) {
    say("Thank you! The form isn't connected yet. This is a preview of the site.", "err");
    return;
  }

  const btn = form.querySelector("button[type=submit]");
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    say("Thank you, I'll write back soon.", "ok");
  } catch {
    say("Sorry, something went wrong. Please try again in a moment.", "err");
  } finally {
    if (btn) btn.disabled = false;
  }
}

document.querySelectorAll("form[data-enquiry]").forEach((f) =>
  f.addEventListener("submit", (e) => { e.preventDefault(); submitForm(f, FORM_ENDPOINT); })
);
document.querySelectorAll("form[data-newsletter]").forEach((f) =>
  f.addEventListener("submit", (e) => { e.preventDefault(); submitForm(f, NEWSLETTER_ENDPOINT || FORM_ENDPOINT); })
);
