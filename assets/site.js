// Адрес официального Telegram-бота ClearBank. Вставьте ссылку вида https://t.me/имя_бота (без выдуманных адресов).
const TELEGRAM_BOT_URL = "";
document.querySelectorAll("[data-tg]").forEach(a => { if (TELEGRAM_BOT_URL) { a.href = TELEGRAM_BOT_URL; a.target = "_blank"; a.rel = "noopener"; } });
const nv = document.querySelector(".nv"), bg = document.querySelector(".bg"), mq = matchMedia("(hover:hover) and (min-width:900px)");
const setOpen = (li, v) => { li.classList.toggle("open", v); li.querySelector(".lk").setAttribute("aria-expanded", v); };
document.querySelectorAll(".has-mega").forEach(li => {
  const b = li.querySelector(".lk"); let t;
  b.addEventListener("click", () => setOpen(li, !li.classList.contains("open")));
  li.addEventListener("mouseenter", () => { if (mq.matches) { clearTimeout(t); setOpen(li, true); } });
  li.addEventListener("mouseleave", () => { if (mq.matches) t = setTimeout(() => setOpen(li, false), 180); });
  li.addEventListener("focusout", e => { if (!li.contains(e.relatedTarget)) setOpen(li, false); });
  li.addEventListener("keydown", e => { if (e.key === "Escape") { setOpen(li, false); b.focus(); } });
});
document.addEventListener("click", e => document.querySelectorAll(".has-mega.open").forEach(li => { if (!li.contains(e.target)) setOpen(li, false); }));
bg.addEventListener("click", () => { const v = !nv.classList.contains("m"); nv.classList.toggle("m", v); bg.setAttribute("aria-expanded", v); document.body.style.overflow = v ? "hidden" : ""; });
document.querySelectorAll(".links a").forEach(a => a.addEventListener("click", () => { nv.classList.remove("m"); bg.setAttribute("aria-expanded", false); document.body.style.overflow = ""; }));
const rv = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }); rv.forEach(x => io.observe(x)); } else rv.forEach(x => x.classList.add("in"));
