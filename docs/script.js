// Site ayarları: boş bırakılan alanlar sayfada gizlenir veya yedek davranışa düşer.
const CONFIG = {
  // https://web3forms.com adresinden turkuazcode@gmail.com için alınan access key.
  // Boşken form, kullanıcının e-posta programını hazır mesajla açar.
  web3formsKey: "2919732f-929f-463f-a9df-16a945f6346c",
  // Örnek: "turkuazcode" (başında @ olmadan). Boşken Instagram satırı gizlenir.
  instagram: "turkuazcode",
  email: "turkuazcode@gmail.com",
};

const EN = {
  "skip": "Skip to content",
  "nav.products": "Products",
  "nav.services": "Services",
  "nav.process": "Process",
  "nav.contact": "Contact",
  "cta.talk": "Let's talk",
  "cta.products": "Explore products",
  "cta.demo": "Request a demo",
  "cta.github": "View on GitHub",

  "hero.badge": "AI-powered software · Türkiye",
  "hero.title": "Software products that speed up your organization with AI.",
  "hero.lead": "We build SaaS platforms, mobile and desktop apps for publishers, learning centers, online stores and municipalities. One team from idea to launch.",
  "mock.inbox": "Inbox",
  "mock.l1": "Linen shirt in size M…",
  "mock.l2": "Where is my parcel?",
  "mock.l3": "How do returns work?",
  "chat.q1": "Hi, do you have the linen shirt in size M? How long does shipping take?",
  "chat.a1": "Hi! Size M is in stock in white and beige. Orders before 4 pm ship the same day; delivery takes 1–3 business days.",
  "mock.auto": "Answered by TurkuazChat · 4 s",
  "mock.reply": "Write a reply…",
  "mock.f1t": "Question draft ready",
  "mock.f1d": "Awaiting editor · Grade 8 math",
  "mock.f2t": "Optical reading complete",
  "mock.f2d": "48 forms processed",
  "facts.products": "products",
  "facts.refs": "client organizations",
  "facts.platforms": "platforms: web, iOS, Android, Windows, Linux",
  "facts.sectors": "sectors: education, e‑commerce, public",
  "refs.eyebrow": "References",
  "refs.title": "Organizations we work with",
  "about.eyebrow": "About us",
  "about.title": "A small, focused team from Ankara",
  "about.p1": "TurkuazCode is a two-person software start-up founded in Ankara. We build products that apply AI to real business problems, from publishers to municipalities, online stores to learning centers.",
  "about.p2": "We use being small to our advantage. There are no middlemen on your project; the person you talk to is the person who writes the code.",
  "about.i1t": "Direct communication",
  "about.i1d": "Throughout the project, you deal with the team building your product.",
  "about.i2t": "End-to-end development",
  "about.i2d": "Design, web, mobile, backend and AI in one team.",
  "about.i3t": "With you after launch",
  "about.i3d": "We monitor what we ship and grow it with you.",
  "nav.about": "About",
  "usedby": "Used by:",

  "products.eyebrow": "Product family",
  "products.title": "Products built for real business problems",
  "products.lead": "We tailor our ready-made products to your organization and build custom modules when you need them.",
  "group.edu": "Education & publishing",
  "group.ecom": "E-commerce",
  "group.public": "Public sector",
  "group.oss": "Open source",
  "suite.title": "Education products",
  "p.pub.t": "Publisher Platform",
  "p.pub.d": "An end-to-end content production platform for publishers. AI drafts, the editor approves, the system typesets the booklet.",
  "p.pub.b1": "Question bank organized by learning outcome",
  "p.pub.b2": "AI-assisted question and solution writing",
  "p.pub.b3": "Test booklet typesetting with PDF and Word export",
  "p.pub.b4": "Every piece of content is approved by an editor",
  "mock.editor": "Question Editor · Grade 8 Math",
  "mock.q": "Question 14 · Exponents",
  "mock.qtext": "equals what?",
  "mock.aidraft": "AI solution draft",
  "mock.solution": "When multiplying powers with the same base, add the exponents: 5 + 3 = 8, so the result is 2⁸.",
  "mock.pending": "Awaiting editor approval",
  "mock.edit": "Edit",
  "mock.approve": "Approve",
  "p.mirror.t": "Mirror Question Platform",
  "p.mirror.d": "Every test in the book becomes a digital practice set. Students scan the QR code and solve new questions on the same outcomes.",
  "p.mirror.b1": "QR code linked to each test in the book",
  "p.mirror.b2": "New practice tests on the same outcomes",
  "p.mirror.b3": "Instant results, rankings and solutions",
  "p.mirror.b4": "Usage and performance reports for the publisher",
  "mock.result": "Test 4 · Result",
  "mock.great": "Great progress!",
  "mock.rank": "Rank: 12th of 340 students",
  "mock.k1": "Exponents",
  "mock.k2": "Square roots",
  "mock.k3": "Data analysis",
  "mock.solutions": "See solutions",
  "mock.newtest": "Solve a new test",
  "p.center.t": "Learning Center Management",
  "p.center.d": "A multi-tenant management platform for tutoring and learning centers. Each organization's data is separate, each role has its own app.",
  "p.center.b1": "Mobile apps for teachers, students and parents",
  "p.center.b2": "Optical answer sheet reading and automatic scoring",
  "p.center.b3": "AI-supported personalized learning",
  "p.center.b4": "Separate data, roles and permissions per organization",
  "mock.panel": "Center Dashboard · Today",
  "mock.attend": "Attendance",
  "mock.optic": "Optical forms",
  "mock.msgs": "Parent messages",
  "mock.r1t": "Mock exam 3 results",
  "mock.r1d": "Parents notified",
  "mock.sent": "Sent",
  "mock.r2t": "Class 11-B homework plan",
  "mock.r2d": "AI prepared a suggestion",
  "mock.review": "In review",
  "pv.chat1": "Is this item in stock?",
  "pv.chat2": "Yes, I'm sending the order link right away.",
  "p.chat.d": "A 24/7 AI customer assistant for stores that sell on Instagram and WhatsApp. It answers DMs, comments and messages in natural Turkish.",
  "p.muni.t": "Municipal Mobile App",
  "p.muni.d": "News, citizen requests and an AI assistant over official documents. Designed with KVKK-compliant data handling.",
  "p.hs.d": "A video player, photo studio and music player in one desktop app. It never modifies your originals and works offline.",

  "services.eyebrow": "Services",
  "services.title": "Let's build your product together",
  "services.lead": "We bring the experience behind our own products to your custom projects.",
  "s.saas.t": "Multi-tenant SaaS platforms",
  "s.saas.d": "With web admin panels and mobile apps; separate data, roles and permissions for each organization.",
  "s.saas.c3": "Subscriptions",
  "s.ai.t": "Applied AI",
  "s.ai.d": "Content generation, customer assistants and document search (RAG). Results go live only after human review.",
  "s.ai.c3": "Assistants",
  "s.app.t": "Mobile and desktop apps",
  "s.app.d": "Flutter and React Native for iOS and Android; Tauri and Rust for Windows and Linux.",
  "s.be.t": "Backend and infrastructure",
  "s.be.d": "Scalable, tested server side, APIs and database design.",

  "process.eyebrow": "Process",
  "process.title": "From idea to launch in four steps",
  "step1.t": "Discovery",
  "step1.d": "We map your needs, your users and your current workflow together.",
  "step2.t": "Prototype",
  "step2.d": "We validate the idea quickly with a clickable first version.",
  "step3.t": "Development",
  "step3.d": "Regular deliveries, with your feedback at every step.",
  "step4.t": "Launch and support",
  "step4.d": "We go live, monitor and grow the product with you.",
  "pr1.t": "AI, with human approval",
  "pr1.d": "Every piece of generated content is checked by an expert before it is published.",
  "pr2.t": "Privacy first",
  "pr2.d": "KVKK-compliant design; data is processed only as much as needed.",
  "pr3.t": "Contributing to open source",
  "pr3.d": "We develop HS Studio in the open, for anyone to use.",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk about your project",
  "contact.lead": "A product demo, a new project or a partnership. Fill in the form or write to us on the channel that suits you. We usually reply within one business day.",
  "ch.email": "Email",
  "ch.phone": "Phone",
  "f.title": "Write to us",
  "f.name": "Full name",
  "f.email": "Email",
  "f.phone": "Phone",
  "f.optional": "(optional)",
  "f.topic": "Topic",
  "t.project": "New project",
  "t.demo": "Demo request",
  "t.partner": "Partnership",
  "t.other": "Other",
  "f.message": "Your message",
  "f.consent1": "I agree that my contact details may be processed to answer my message and transferred to servers abroad through the form service provider.",
  "f.consent2": "Privacy Notice",
  "f.submit": "Send message",

  "footer.about": "AI-powered SaaS platforms, mobile and desktop apps. From Türkiye.",
  "footer.products": "Products",
  "footer.company": "Company",
  "footer.kvkk": "Privacy Notice (KVKK)",
  "footer.rights": "All rights reserved.",

  "kvkk.title": "Privacy Notice (KVKK)",
  "kvkk.p1": "This notice explains, under Article 10 of the Turkish Personal Data Protection Law No. 6698 (KVKK), how the personal data you share through the contact form on turkuazcode.com is processed.",
  "kvkk.h1": "Data controller",
  "kvkk.p2": "TurkuazCode. Contact: turkuazcode@gmail.com",
  "kvkk.h2": "Data processed",
  "kvkk.p3": "Full name, email address, optionally your phone number, and the content of your message.",
  "kvkk.h3": "Purpose and legal basis",
  "kvkk.p4": "Your data is processed only to answer your request and to arrange a demo or project meeting, based on Articles 5/2-c (necessary before entering into a contract) and 5/2-f (legitimate interest) of the Law.",
  "kvkk.h4": "Transfers",
  "kvkk.p5": "Form messages are delivered through an email delivery provider (Web3Forms). Because its servers are located abroad, this transfer relies on your explicit consent under Article 9 of the Law. Your data is not shared with any other third party.",
  "kvkk.h5": "Retention",
  "kvkk.p6": "Correspondence is kept for at most two years after your request is concluded and then deleted.",
  "kvkk.h6": "Your rights",
  "kvkk.p7": "Under Article 11 of the Law, you may ask whether your data is processed, request its correction or deletion, and object to processing. Send your requests to turkuazcode@gmail.com.",
};

const MSG = {
  tr: {
    sending: "Gönderiliyor…",
    ok: "Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.",
    err: "Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan e-posta gönderin: ",
    invalid: "Lütfen işaretli alanları kontrol edin.",
    mailto: "E-posta programınız hazır mesajla açıldı. Açılmadıysa şu adrese yazın: ",
    demoMsg: (p) => `${p} için demo talep etmek istiyorum.`,
    title: "TurkuazCode — Yapay Zekâ Destekli Yazılım Çözümleri",
    langBtn: "EN",
    langLabel: "Switch to English",
    close: "Kapat",
  },
  en: {
    sending: "Sending…",
    ok: "Thank you! Your message has reached us, and we'll get back to you soon.",
    err: "The message could not be sent. Please try again or email us directly: ",
    invalid: "Please check the highlighted fields.",
    mailto: "Your email app opened with a ready message. If it didn't, write to: ",
    demoMsg: (p) => `I'd like to request a demo of ${p}.`,
    title: "TurkuazCode — AI-Powered Software Solutions",
    langBtn: "TR",
    langLabel: "Türkçeye geç",
    close: "Close",
  },
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* yok say */ } },
};

// Türkçe metinler HTML'de duruyor; geçişte geri dönebilmek için ilk yüklemede saklanır.
const TR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  if (!(el.dataset.i18n in TR)) TR[el.dataset.i18n] = el.textContent;
});

let lang = "tr";
const t = (key) => (lang === "en" ? EN[key] : TR[key]) ?? key;

function applyLang(next) {
  lang = next;
  const dict = lang === "en" ? EN : TR;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.documentElement.lang = lang;
  document.title = MSG[lang].title;
  const btn = document.getElementById("langToggle");
  btn.textContent = MSG[lang].langBtn;
  btn.setAttribute("aria-label", MSG[lang].langLabel);
  document.getElementById("kvkkClose").setAttribute("aria-label", MSG[lang].close);
  store.set("lang", lang);
}

const initial = new URLSearchParams(location.search).get("lang") || store.get("lang");
if (initial === "en") applyLang("en");

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "en" ? "tr" : "en");
});

// Header ve mobil menü
const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
});

// Eğitim ürünleri sekmeleri
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus) {
  for (const t of tabs) {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  }
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (step) { e.preventDefault(); selectTab(tabs[(i + step + tabs.length) % tabs.length], true); }
    if (e.key === "Home") { e.preventDefault(); selectTab(tabs[0], true); }
    if (e.key === "End") { e.preventDefault(); selectTab(tabs[tabs.length - 1], true); }
  });
});

// KVKK aydınlatma metni
const kvkk = document.getElementById("kvkkDialog");
document.querySelectorAll("[data-open-kvkk]").forEach((b) => b.addEventListener("click", () => kvkk.showModal()));
document.getElementById("kvkkClose").addEventListener("click", () => kvkk.close());
kvkk.addEventListener("click", (e) => { if (e.target === kvkk) kvkk.close(); });

// Instagram
if (CONFIG.instagram) {
  const handle = CONFIG.instagram.replace(/^@/, "");
  document.getElementById("instagramLink").href = `https://www.instagram.com/${encodeURIComponent(handle)}/`;
  document.getElementById("instagramHandle").textContent = `@${handle}`;
  document.getElementById("instagramItem").hidden = false;
}

// "Demo talep et": formu doldurur ve forma kaydırır
const form = document.getElementById("contactForm");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("[data-topic]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.topic;
    const product = key in TR ? t(key) : key;
    form.topic.value = "Demo talebi";
    if (!form.message.value.trim()) form.message.value = MSG[lang].demoMsg(product);
    document.getElementById("iletisim").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(() => form.name.focus({ preventScroll: true }), reduceMotion ? 0 : 500);
  });
});

// Form
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

function setStatus(kind, text, withEmail) {
  status.className = "form-status " + (kind || "");
  status.textContent = text;
  if (withEmail) {
    const a = document.createElement("a");
    a.href = `mailto:${CONFIG.email}`;
    a.textContent = CONFIG.email;
    status.append(a);
  }
}

function validate() {
  let ok = true;
  for (const el of [form.name, form.email, form.message, form.consent]) {
    const valid = el.type === "checkbox" ? el.checked : el.checkValidity() && el.value.trim() !== "";
    el.setAttribute("aria-invalid", String(!valid));
    if (!valid && ok) { el.focus(); ok = false; }
  }
  return ok;
}

form.addEventListener("input", (e) => {
  if (e.target.getAttribute("aria-invalid") === "true") e.target.removeAttribute("aria-invalid");
});
form.addEventListener("change", (e) => {
  if (e.target.type === "checkbox" && e.target.checked) e.target.removeAttribute("aria-invalid");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form.botcheck.checked) return;
  if (!validate()) { setStatus("err", MSG[lang].invalid); return; }

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    topic: form.topic.value,
    message: form.message.value.trim(),
  };

  if (!CONFIG.web3formsKey) {
    const body = `${data.message}\n\n${data.name}\n${data.email}${data.phone ? "\n" + data.phone : ""}`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("[turkuazcode.com] " + data.topic)}&body=${encodeURIComponent(body)}`;
    setStatus("ok", MSG[lang].mailto, true);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = MSG[lang].sending;
  setStatus("", "");
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: CONFIG.web3formsKey,
        subject: `[turkuazcode.com] ${data.topic}: ${data.name}`,
        from_name: "turkuazcode.com",
        replyto: data.email,
        ...data,
      }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.success === false) throw new Error(json.message || res.status);
    form.reset();
    setStatus("ok", MSG[lang].ok);
  } catch {
    setStatus("err", MSG[lang].err, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t("f.submit");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
