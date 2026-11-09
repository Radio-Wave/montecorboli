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

// Pre-tick an interest on the contact form, e.g. contact.html?interest=chef
const params = new URLSearchParams(location.search);
const interest = params.get("interest");
if (interest) {
  const box = document.querySelector(`input[name="interest"][value="${CSS.escape(interest)}"]`);
  if (box) box.checked = true;
}

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
