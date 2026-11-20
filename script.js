/* ====== แก้ข้อมูลตรงนี้ได้เลย ====== */
const CONFIG = {
  name: "ตะวัน",                  // ชื่อ/ชื่อเล่นแฟน
  age: 22,                        // อายุที่ครบในปีนี้
  unlockAt: "2026-11-21T00:00:00", // เวลาที่เริ่มเป่าเค้กได้ (เวลาเครื่องของผู้เปิด)
  gate: {
    code: "28022019",             // รหัสผ่าน (วันครบรอบ ววดดปปปป ปีเป็น ค.ศ.)
    clue: "คำใบ้: วันครบรอบของเรา |(ปีเป็น ค.ศ.)",
    hint: "เดือนที่แตกต่างจากพวก |ปีที่ SEVENTEEN |ปล่อยอัลบั้มที่ 3 ของค่าย |ชื่อ An Ode |และ Ode to You World Tour",
    teases: [
      "น้องลืมเค้าแล้ว|จำได้แต่ชู้วทั้งหลาย|(แงวทั้งหลาย|แระชู้วอีกมากมาย) 😤",
      "ถึงกับต้องขอใบ้เลยหรอเบบี๋ 🥲|วันครบรอบนะ ไม่ใช่วันสอบ",
      "จำวันคอนเสิร์ตได้|แต่วันของเราจำไม่ได้ ฮึ 🙄",
      "ใบ้ให้ก็ได้|แต่เค้าน้อยใจนะ|จดไว้ในใจแล้ว 📝"
    ],
    wrong: [
      "ผิดจ้าาา ว๊ายยย ลืมได้ไงเนี่ย 😤",
      "ไม่ใช่ๆ นึกดีๆ สิน้องอ้วง 🥲",
      "อ่อนมากกก ขอใบ้เลยมั้ย 🙄",
      "เค้าน้อยใจแย้วนะ ลองใหม่ 😤"
    ]
  },
  letter:
`สุขสันต์วันเกิดนะ|น้องงง 🎂

แก่ขึ้น|อีกปีแย้ว แต่น้องก้ยัง|เป็นเด็ก|ตะเล้ก|ของเค้า|อยู่ดี อิอิ

ขอให้|สุขภาพแข็งแรง กิน|ของเผ็ด|หรือนม|แล้ว|ท้องไม่เสีย
กินน้ำเยอะๆ จะได้|เป็นร้อนใน|น้อยลง
ขอให้|งานน้อยๆ จาได้|มาฟัดๆ|เค้าด้าย 💕`,
  cats: [
    { name: "ไข่ตุ๋น", img: "photos/khaitun.jpg", pos: "50% 40%" },
    { name: "ปลาเผา", img: "photos/plapao.jpg", pos: "50% 50%" },
    { name: "หมูปิ้ง", img: "photos/mupping.jpg", pos: "70% 45%" }
  ],
  quiz: [
    { q: "เค้าเกิดวันไหน?", right: "9 ธันวาคม 2004", wrong: ["21 พฤศจิกายน 2004", "9 ธันวาคม 2005", "19 ธันวาคม 2004"] },
    { q: "เค้าชอบ YouTuber คนไหนมากที่สุด?", right: "9arm", wrong: ["rubsarb", "คืนพุธมุดผ้าห่ม", "YaiMakMak"] },
    { q: "เค้าชอบอาหารชาติไหนมากที่สุด?", right: "ญี่ปุ่น", wrong: ["เกาหลี", "อเมริกัน", "ไทย"] },
    { q: "เค้าชอบกีฬาอะไรมากที่สุด?", right: "ว่ายน้ำ", wrong: ["ฟุตบอล", "บาสเกตบอล", "แบดมินตัน"] },
    { q: "เค้าชอบสีอะไรมากที่สุด?", right: "Sky Blue", wrong: ["Red", "Mint Green", "Lavender"] }
  ],
  mocks: [
    "ว๊ายยย อ่อนๆ 🤭",
    "ผิดจ้าาา ไม่ใส่ใจเค้าเลยนะเนี่ย 🙄",
    "ตอบแบบนี้เลยหรอเบบี๋ 555 ลองใหม่!",
    "โอ๊ยยย ผิดอีกแย้ว คิดดีๆ สิน้องอ้วง 😤",
    "เสียใจนะ เค้าน้อยใจแย้ว 🥲 ตอบใหม่!"
  ],
  reasons: [
    "น้องรักเค้ามากๆ (ถึงแม้จะ|รักแงวมากกว่า|เค้าก็ตาม)",
    "เบบี๋ตามใจเค้าเก่ง (ถึงแม้ว่า|จาแอบดื้อ|อยู่บ้าง|ก็ตาม)",
    "น้องอ้วงนุ่มนิ่ม|กอดแล้ว|หลับฟินๆ (ถึงแม้น้อง|จาแอบถ่ายภาพ|Blackmail|เค้าก็ตาม)",
    "น้องเถียงชนะเค้าทุกที (เพราะน้อง|เปงกฏ)",
    "น้องเป็นของเค้า|คนเดียว (ถึงแม้|แมวสามตัว|จะแย่งเวลา|ไปหมด|ก็ตาม)"
  ],
  gift: "🎟️ จางดขอเบิ้มๆ 1 สัปดาห์"
};
/* ================================== */

const $ = id => document.getElementById(id);
const root = document.documentElement;
// ตัดบรรทัดตามวลี: "|" = จุดที่ขึ้นบรรทัดใหม่ได้, วลีระหว่างนั้นจะไม่ถูกหักกลางคำ
const fmt = s => s.split(/( |\||\n)/).map(t =>
  t === "|" ? "<wbr>" : t === "\n" ? "<br>" : t === " " ? " " : t === "" ? "" : `<span class="nw">${t}</span>`).join("");
const shakeEl = el => { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); };

$("name").textContent = CONFIG.name;
$("age").textContent = "TURNING " + CONFIG.age;
{
  const d = new Date(CONFIG.unlockAt), p = n => String(n).padStart(2, "0");
  $("eyebrow").textContent = `${p(d.getDate())} / ${p(d.getMonth() + 1)} / ${d.getFullYear()} · BIRTHDAY MODE ON`;
}
$("letter").innerHTML = fmt(CONFIG.letter);

// คอนเฟตติ
const cv = $("confetti"), cx = cv.getContext("2d");
let bits = [];
function resize() { cv.width = innerWidth; cv.height = innerHeight; }
resize(); addEventListener("resize", resize);
function boom() {
  const colors = ["#5ac8fa", "#8b5cf6", "#ff4d8d", "#ffd166", "#ffffff", "#9be7ff"];
  for (let i = 0; i < 160; i++) bits.push({
    x: cv.width / 2, y: cv.height / 2.2,
    vx: (Math.random() - .5) * 16, vy: Math.random() * -14 - 3,
    s: 5 + Math.random() * 6, c: colors[Math.random() * colors.length | 0],
    r: Math.random() * 6, vr: (Math.random() - .5) * .4
  });
}
(function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  bits = bits.filter(b => b.y < cv.height + 20);
  bits.forEach(b => {
    b.x += b.vx; b.y += b.vy; b.vy += .35; b.vx *= .99; b.r += b.vr;
    cx.save(); cx.translate(b.x, b.y); cx.rotate(b.r);
    cx.fillStyle = b.c; cx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); cx.restore();
  });
  requestAnimationFrame(loop);
})();

// อนุภาคลอย
setInterval(() => {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = ["♥", "✦", "✧", "♡"][Math.random() * 4 | 0];
  h.style.color = ["#5ac8fa", "#ff4d8d", "#8b5cf6"][Math.random() * 3 | 0];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 12 + Math.random() * 20 + "px";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), 12000);
}, 700);

/* ---------- หน้ารหัสผ่าน ---------- */
{
  const G = CONFIG.gate, len = G.code.length;
  const pwEl = $("pw"), cells = $("cells"), msg = $("pwmsg"), box = $("hintBox");
  let hintN = 0, wrongN = 0, entered = false;
  $("clue").innerHTML = fmt(G.clue);
  const draw = () => {
    const v = pwEl.value;
    cells.innerHTML = Array.from({ length: len }, (_, i) =>
      `<b class="${i === v.length && !entered ? "on" : ""}">${v[i] || ""}</b>`).join("");
  };
  function tryCode() {
    const v = pwEl.value;
    msg.classList.remove("ok");
    if (v.length < len) { msg.textContent = `ต้องใส่ ${len} หลักนะเบบี๋`; shakeEl(cells); return; }
    if (v === G.code) {
      entered = true; draw();
      msg.classList.add("ok"); msg.textContent = "ถูกต้อง! ยังจำเค้าได้อยู่นี่นา 🥹";
      boom();
      setTimeout(() => {
        $("pwscreen").classList.add("leave");
        root.classList.add("in");
        setTimeout(() => { $("pwscreen").hidden = true; scrollTo(0, 0); }, 650);
      }, 900);
      return;
    }
    msg.textContent = G.wrong[wrongN++ % G.wrong.length];
    shakeEl(cells);
    setTimeout(() => { if (!entered) { pwEl.value = ""; draw(); } }, 450);
  }
  pwEl.addEventListener("input", () => {
    pwEl.value = pwEl.value.replace(/\D/g, "").slice(0, len);
    draw();
    if (pwEl.value.length === len) tryCode();
  });
  pwEl.addEventListener("focus", draw);
  pwEl.addEventListener("blur", () => { cells.querySelectorAll(".on").forEach(b => b.classList.remove("on")); });
  $("pwform").onsubmit = e => { e.preventDefault(); tryCode(); };
  $("hintBtn").onclick = () => {
    box.hidden = false;
    box.innerHTML = `<p class="tease">${fmt(G.teases[hintN++ % G.teases.length])}</p><p>💡 ${fmt(G.hint)}</p>`;
    shakeEl(box);
    pwEl.focus();
  };
  draw();
  pwEl.focus();
}

/* ---------- เค้ก: เป่าได้เมื่อถึงเวลา ---------- */
let unlocked = false, blown = false;
root.classList.add("locked");
$("hint").textContent = "ยังเป่าเค้กไม่ได้นะ รอให้นับถอยหลังจบก่อน 🔒";
function tick() {
  const now = new Date(), at = new Date(CONFIG.unlockAt);
  if (now >= at) {
    if (!unlocked) {
      unlocked = true;
      if (!blown) $("hint").textContent = "ถึงเวลาแล้ว! แตะที่เค้กเพื่อเป่าเทียน 🕯️";
    }
    $("countdown").innerHTML = `<div style="font-size:1.1rem">🎉 วันนี้วันเกิด${CONFIG.name}! 🎉</div>`;
    return;
  }
  const s = Math.floor((at - now) / 1000);
  const v = [[Math.floor(s / 86400), "วัน"], [Math.floor(s % 86400 / 3600), "ชม."],
             [Math.floor(s % 3600 / 60), "นาที"], [s % 60, "วินาที"]];
  $("countdown").innerHTML = v.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");
}
tick(); setInterval(tick, 1000);

$("cake").onclick = () => {
  if (blown) return;
  if (!unlocked) {
    shakeEl($("cake"));
    $("hint").textContent = "ยังไม่ถึงเวลานะ 🔒 รอให้นับถอยหลังจบก่อน";
    return;
  }
  blown = true;
  $("flame").classList.add("out");
  boom();
  $("hint").textContent = "🎉 สุขสันต์วันเกิดนะ! อย่าลืมขอพรด้วยล่ะ 🎉 เลื่อนลงไปดูของขวัญได้เลย ↓";
  root.classList.remove("locked");
  setTimeout(() => $("wish").scrollIntoView({ behavior: "smooth" }), 2500);
};

// แมวทั้งสาม
$("cats").innerHTML = CONFIG.cats.map(c =>
  `<figure class="cat"><img src="${c.img}" alt="${c.name}" style="object-position:${c.pos}"><figcaption>${c.name}</figcaption></figure>`).join("");

// มินิเกม: ต้องตอบถูกครบทุกข้อ ถึงจะเลื่อนไปดูเหตุผลกับของขวัญได้
root.classList.add("gated");
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
let qi = 0, mockI = -1;
function showQ() {
  const box = $("quiz");
  if (qi >= CONFIG.quiz.length) {
    box.innerHTML = `<p class="reason">ถูกครบทั้ง ${CONFIG.quiz.length} ข้อเลย! 🥰 รู้ใจเค้าจริงๆ<br>เลื่อนลงไปดูเหตุผลที่รักน้องกับของขวัญได้เลย ↓</p>`;
    root.classList.remove("gated");
    boom();
    setTimeout(() => $("reasons").scrollIntoView({ behavior: "smooth" }), 1800);
    return;
  }
  const q = CONFIG.quiz[qi];
  box.innerHTML = `<p class="reason">ข้อ ${qi + 1}/${CONFIG.quiz.length}: ${q.q}</p>` +
    shuffle([q.right, ...q.wrong]).map(t => `<button class="btn opt">${t}</button>`).join("") +
    `<p class="mock" id="mock"></p>`;
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (b.textContent === q.right) {
      b.classList.add("good");
      box.querySelectorAll(".opt").forEach(x => x.disabled = true);
      setTimeout(() => { qi++; showQ(); }, 700);
    } else {
      b.classList.add("bad"); b.disabled = true;
      mockI = (mockI + 1 + Math.random() * (CONFIG.mocks.length - 1) | 0) % CONFIG.mocks.length;
      const m = $("mock"); m.textContent = CONFIG.mocks[mockI];
      shakeEl(m);
    }
  });
}
showQ();

// สุ่มเหตุผล
let last = -1;
$("reasonBtn").onclick = () => {
  let i; do { i = Math.random() * CONFIG.reasons.length | 0; } while (i === last && CONFIG.reasons.length > 1);
  last = i; $("reason").innerHTML = "💗 " + fmt(CONFIG.reasons[i]);
};

// ของขวัญ (ป๊อปอัปคูปอง)
const modal = $("modal");
$("coupon").innerHTML = fmt(CONFIG.gift);
const closeModal = () => { modal.hidden = true; };
$("gift").onclick = () => {
  $("gift").classList.add("open"); $("gift").textContent = "🎉";
  modal.hidden = false; modal.querySelector(".mbox").scrollTop = 0; boom();
};
$("mclose").onclick = closeModal;
modal.onclick = e => { if (e.target === modal) closeModal(); };
addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
