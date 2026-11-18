// Instrument dials and the platform schematic. Content is complete without this file.
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const START = -135, SWEEP = 270, C = 120;
  const angle = (v, max) => START + (Math.min(Math.max(v, 0), max) / max) * SWEEP;
  const pt = (deg, r) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [C + r * Math.cos(a), C + r * Math.sin(a)];
  };
  const el = (name, attrs, parent) => {
    const n = document.createElementNS(NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  };

  function drawDial(fig) {
    const svg = fig.querySelector("svg");
    const max = +fig.dataset.max, step = +fig.dataset.step, every = +fig.dataset.labelEvery;
    const from = +fig.dataset.from, to = +fig.dataset.to;
    const unit = fig.querySelector("em")?.textContent || "";

    const id = "alu" + Math.random().toString(36).slice(2, 7);
    const lg = el("linearGradient", { id, x1: 0, y1: 0, x2: 1, y2: 1 }, el("defs", {}, svg));
    [["0", "#eef0ee"], [".35", "#9da19e"], [".55", "#d9dcda"], [".8", "#7d817e"], ["1", "#c9ccca"]].forEach(([o, c]) => el("stop", { offset: o, "stop-color": c }, lg));
    el("circle", { cx: C, cy: C, r: 117, fill: "none", stroke: `url(#${id})`, "stroke-width": 6 }, svg);
    el("circle", { cx: C, cy: C, r: 112, fill: "#151715", stroke: "#000", "stroke-width": 2 }, svg);

    const g = el("g", { class: "needle" }, svg);
    el("path", { d: `M ${C - 3} ${C + 14} L ${C} ${C - 96} L ${C + 3} ${C + 14} Z`, fill: "#ff5f1f" }, g);
    for (let v = 0; v <= max + 1e-9; v += step) {
      const major = Math.abs(v / every - Math.round(v / every)) < 1e-9;
      const a = angle(v, max);
      const [x1, y1] = pt(a, 102), [x2, y2] = pt(a, major ? 86 : 94);
      el("line", { x1, y1, x2, y2, class: "tick", "stroke-width": major ? 3 : 1.5 }, svg);
      if (major) {
        const [tx, ty] = pt(a, 72);
        el("text", { x: tx, y: ty + 5, class: "num", "text-anchor": "middle" }, svg).textContent = v;
      }
    }
    // where it is today: a butterscotch mark outside the scale
    const ta = angle(from, max);
    const [a1, b1] = pt(ta, 106), [a2, b2] = pt(ta, 116);
    el("line", { x1: a1, y1: b1, x2: a2, y2: b2, class: "today" }, svg);
    el("text", { x: C, y: 170, class: "unit", "text-anchor": "middle" }, svg).textContent = unit;
    el("text", { x: C, y: 188, class: "today-label", "text-anchor": "middle" }, svg).textContent = "TODAY " + fig.dataset.from;

    el("circle", { cx: C, cy: C, r: 11, fill: "#c6c9c6" }, svg);
    el("circle", { cx: C, cy: C, r: 4, fill: "#8d918e" }, svg);

    const set = (v) => (g.style.transform = `rotate(${angle(v, max)}deg)`);
    if (reduce) { set(to); return null; }
    g.style.transition = "none";
    set(from);
    return () => { g.getBoundingClientRect(); g.style.transition = ""; set(to); };
  }

  const dials = [...document.querySelectorAll(".dial")].map((f) => [f, drawDial(f)]);

  const schem = document.querySelector(".schematic");
  schem?.querySelectorAll("li").forEach((li, i, all) => {
    const inSpines = li.closest(".layer-spines");
    li.style.setProperty("--i", inSpines ? [...inSpines.children].indexOf(li) : i);
  });
  // arm only what is still below the fold, so nothing visible ever disappears
  if (schem && !reduce && schem.getBoundingClientRect().top > innerHeight) schem.classList.add("armed");

  if (!("IntersectionObserver" in window)) {
    dials.forEach(([, go]) => go && go());
    schem?.classList.add("drawn");
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      if (e.target === schem) schem.classList.add("drawn");
      else dials.find(([f]) => f === e.target)?.[1]?.();
      io.unobserve(e.target);
    }
  }, { threshold: 0.35 });
  dials.forEach(([f]) => io.observe(f));
  if (schem) io.observe(schem);
})();
