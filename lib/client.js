// All scroll animation + form behaviour. Plain module (also bundled for preview.html).
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function initForm() {
  const form = document.getElementById("enquiry");
  const status = document.getElementById("form-status");
  if (!form) return () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const contact = String(d.get("contact") || "").trim();
    const ok = /^\S+@\S+\.\S+$/.test(contact) || /^[+\d][\d\s-]{6,}$/.test(contact);
    form.querySelectorAll("input").forEach((i) => i.removeAttribute("aria-invalid"));
    if (!name) { form.name.setAttribute("aria-invalid", "true"); status.textContent = "Enter your name."; form.name.focus(); return; }
    if (!ok) { form.contact.setAttribute("aria-invalid", "true"); status.textContent = "Enter a valid email address or phone number."; form.contact.focus(); return; }
    // DEMO: no backend yet. Replace this block with a call to your API / email service.
    status.textContent = "Demo only: this form isn’t connected to a mailbox yet, so nothing was sent.";
  };
  form.addEventListener("submit", onSubmit);
  return () => form.removeEventListener("submit", onSubmit);
}

export function init() {
  gsap.registerPlugin(ScrollTrigger);
  const q = (s) => document.querySelector(s);
  const mm = gsap.matchMedia();
  const motion = "(prefers-reduced-motion: no-preference)";

  // 1. Hero: one masked headline entrance, then the photo drifts and the copy lifts away
  mm.add(motion, () => {
    gsap.timeline()
      .fromTo(".hero-bg img", { scale: 1.22 }, { scale: 1.06, duration: 2.8, ease: "power2.out" }, 0)
      .from(".ln > span", { yPercent: 115, duration: 1.1, stagger: 0.12, ease: "power4.out" }, 0.15)
      .from(".hero-copy > *", { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }, 0.9);
    gsap.to(".hero-bg", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-in", { yPercent: -14, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "65% top", scrub: true } });
  });

  // 2. Statement: words light up as you read
  mm.add(motion, () => {
    const w = gsap.utils.toArray(".statement .w");
    gsap.set(w, { opacity: 0.16 });
    gsap.to(w, { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".statement p", start: "top 80%", end: "bottom 50%", scrub: true } });
  });

  // 3. Pinned story: each stage wipes up over the last (scrubbed, fully reversible)
  mm.add(motion, () => {
    const root = q(".story");
    const stages = gsap.utils.toArray(".stage");
    const rail = gsap.utils.toArray(".rail li");
    const n = stages.length;
    const hold = 0.6;
    const total = n - 1 + hold;
    const imgs = stages.map((s) => s.querySelector("img"));
    const scs = stages.map((s) => s.querySelector(".sc"));
    root.classList.add("is-pinned");
    rail[0].classList.add("on");
    stages.forEach((s, i) => gsap.set(s, { zIndex: i + 1, clipPath: i ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 0% 0%)" }));
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".stages", start: "top top", end: `+=${n * 90}%`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: (self) => {
          const a = Math.min(n - 1, Math.round(self.progress * total));
          rail.forEach((r, i) => r.classList.toggle("on", i === a));
        },
      },
    });
    tl.fromTo(imgs[0], { scale: 1.15 }, { scale: 1, duration: 1 }, 0);
    for (let i = 1; i < n; i++) {
      tl.to(stages[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, i - 1)
        .fromTo(imgs[i], { scale: 1.25 }, { scale: 1, duration: 1 }, i - 1)
        .fromTo(scs[i], { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, i - 0.6);
    }
    tl.to({}, { duration: hold }, n - 1);
    return () => { root.classList.remove("is-pinned"); rail.forEach((r) => r.classList.remove("on")); };
  });

  // 4. Capabilities: vertical scroll drives a horizontal track (desktop), photos drift inside their frames
  mm.add(`(min-width: 769px) and ${motion}`, () => {
    const root = q(".caps");
    const track = q(".track");
    root.classList.add("is-pinned");
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const tween = gsap.to(track, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: ".caps-pin", start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true },
    });
    gsap.utils.toArray(".panel").forEach((p) => {
      gsap.fromTo(p.querySelector("img"), { xPercent: 0 }, {
        xPercent: -16, ease: "none",
        scrollTrigger: { trigger: p, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
      });
    });
    return () => root.classList.remove("is-pinned");
  });

  // 5. New photo frames drift slowly inside their crop as they pass
  mm.add(motion, () => {
    gsap.utils.toArray(".px").forEach((f) => {
      gsap.fromTo(f.querySelector("img"), { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    });
  });

  // Nav turns solid after the hero starts to scroll (works with or without motion)
  const nav = q(".nav");
  const navST = ScrollTrigger.create({ start: 60, end: "max", onToggle: (self) => nav.classList.toggle("solid", self.isActive) });

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh);
  const offForm = initForm();
  return () => {
    window.removeEventListener("load", refresh);
    navST.kill();
    offForm();
    mm.revert();
  };
}
