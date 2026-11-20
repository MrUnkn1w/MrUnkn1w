/* ====== แก้ข้อมูลตรงนี้ได้เลย ====== */
const CONFIG = {
  name: "ที่รัก",                 // ชื่อ/ชื่อเล่นแฟน
  birthday: "12-25",              // วันเกิด รูปแบบ เดือน-วัน (MM-DD)
  from: "จากคนที่รักเธอที่สุด",     // ชื่อคนเขียน
  letter:
`สุขสันต์วันเกิดนะคนดีของเรา 🎂

ขอบคุณที่เกิดมา ขอบคุณที่เข้ามาในชีวิตของเรา
ขอบคุณที่อยู่ข้างกัน ทั้งวันที่ยิ้มและวันที่เหนื่อย

ขอให้ปีนี้เป็นปีที่เธอมีความสุข สุขภาพแข็งแรง
ทุกความฝันเป็นจริง และมีเราอยู่ข้างๆ เธอเสมอ

รักเธอมากนะ ❤️`,
  timeline: [
    { date: "วันที่เราเจอกัน",   text: "วันแรกที่ได้รู้จักเธอ" },
    { date: "วันที่เริ่มคุยกัน",  text: "คุยกันไม่หยุดเลยใช่ไหม" },
    { date: "วันที่เป็นแฟนกัน",  text: "วันที่ดีที่สุดของเรา" },
    { date: "วันนี้",            text: "และเราจะไปด้วยกันอีกไกล" }
  ],
  // ใส่รูปไว้ในโฟลเดอร์ photos/ แล้วแก้ชื่อไฟล์ตรงนี้
  photos: [
    { src: "photos/1.jpg", caption: "รูปที่ 1" },
    { src: "photos/2.jpg", caption: "รูปที่ 2" },
    { src: "photos/3.jpg", caption: "รูปที่ 3" },
    { src: "photos/4.jpg", caption: "รูปที่ 4" }
  ],
  reasons: [
    "เพราะรอยยิ้มของเธอทำให้วันแย่ๆ ของเราดีขึ้น",
    "เพราะเธอเป็นตัวของตัวเองเสมอ",
    "เพราะเธอใจดีกับทุกคน",
    "เพราะอยู่กับเธอแล้วสบายใจ",
    "เพราะเสียงหัวเราะของเธอน่ารักที่สุด",
    "เพราะเธอเป็นเธอ แค่นั้นเลย"
  ],
  gift: "🎟️ คูปองพิเศษ: ไปกินข้าวร้านที่เธออยากไป 1 ครั้ง (เราเลี้ยงเอง!)"
};
/* ================================== */

const $ = id => document.getElementById(id);
$("name").textContent = CONFIG.name;
$("letter").textContent = CONFIG.letter + "\n\n" + CONFIG.from;

// ไทม์ไลน์
$("timeline").innerHTML = CONFIG.timeline.map(t =>
  `<div class="tl"><b>${t.date}</b><small>${t.text}</small></div>`).join("");

// แกลเลอรี (ถ้ารูปไม่มี จะซ่อนไว้)
$("gallery").innerHTML = CONFIG.photos.map((p, i) =>
  `<figure style="--r:${(i % 2 ? 1 : -1) * (1 + i % 3)}deg">
     <img src="${p.src}" alt="" onerror="this.closest('figure').remove()">
     <figcaption>${p.caption}</figcaption></figure>`).join("");

// นับถอยหลัง
function nextBirthday() {
  const [m, d] = CONFIG.birthday.split("-").map(Number);
  const now = new Date();
  let t = new Date(now.getFullYear(), m - 1, d);
  if (t < new Date(now.getFullYear(), now.getMonth(), now.getDate())) t = new Date(now.getFullYear() + 1, m - 1, d);
  return t;
}
function tick() {
  const t = nextBirthday(), now = new Date();
  if (t.toDateString() === now.toDateString()) {
    $("countdown").innerHTML = `<div style="font-size:1.2rem">🎉 วันนี้วันเกิดเธอ! 🎉</div>`;
    return;
  }
  const s = Math.floor((t - now) / 1000);
  const v = [[Math.floor(s / 86400), "วัน"], [Math.floor(s % 86400 / 3600), "ชม."],
             [Math.floor(s % 3600 / 60), "นาที"], [s % 60, "วินาที"]];
  $("countdown").innerHTML = v.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");
}
tick(); setInterval(tick, 1000);

// หัวใจลอย
setInterval(() => {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = ["❤️", "💖", "💕", "🌸"][Math.random() * 4 | 0];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), 12000);
}, 600);

// คอนเฟตติ
const cv = $("confetti"), cx = cv.getContext("2d");
let bits = [];
function resize() { cv.width = innerWidth; cv.height = innerHeight; }
resize(); addEventListener("resize", resize);
function boom() {
  const colors = ["#ff6b9d", "#ffd54f", "#7ee0ff", "#b388ff", "#fff", "#ff8a65"];
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

// เป่าเทียน
$("cake").onclick = () => {
  const f = $("flame");
  if (f.classList.toggle("out")) {
    boom();
    $("hint").textContent = "🎉 สุขสันต์วันเกิดนะ! อย่าลืมขอพรด้วยล่ะ 🎉";
  } else {
    $("hint").textContent = "แตะที่เค้กเพื่อเป่าเทียน 🕯️";
  }
};

// สุ่มเหตุผล
let last = -1;
$("reasonBtn").onclick = () => {
  let i; do { i = Math.random() * CONFIG.reasons.length | 0; } while (i === last && CONFIG.reasons.length > 1);
  last = i; $("reason").textContent = "💗 " + CONFIG.reasons[i];
};

// ของขวัญ
$("gift").onclick = () => {
  $("gift").classList.add("open"); $("gift").textContent = "🎉";
  $("giftMsg").textContent = CONFIG.gift; boom();
};

// แสดงผลตอนเลื่อน
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("show")), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// เพลง (ใส่ไฟล์ music.mp3 ไว้ข้างๆ index.html)
const au = $("music"), mb = $("musicBtn");
mb.classList.add("off");
mb.onclick = () => {
  if (au.paused) { au.play().then(() => mb.classList.remove("off")).catch(() => {}); }
  else { au.pause(); mb.classList.add("off"); }
};
