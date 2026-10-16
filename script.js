/* ============ EDIT EVERYTHING HERE ============ */
const birthdayData = {

    herName: "Wani Cutoo",

    song: "assets/Elvis Presley - Can't Help Falling in Love (Lyrics).mp3",

    photos: [
        "assets/image 11 (2).jpeg",
        "assets/image 3.jpeg",
        "assets/image 1.jpeg",
        "wani 1.jpeg",
        "wani 2.jpeg",
        "wani 3.jpeg"
    ],

    photoCaptions: [
        "That smile ❤️",
        "Seriously... how are you this pretty?",
        "My favorite face.",
        "You really don't realize how beautiful you are.",
        "Okay, this picture is unfair.",
        "Yeah... I really like this one."
    ],

    littleThings: [
        "The way you talk.",
        "Your random messages.",
        "The way you make me smile.",
        "Your little habits.",
        "Those conversations that somehow last forever.",
        "The way seeing your name makes me happy.",
        "How you make ordinary moments special.",
        "Just... you."
    ],

    // chat-bubble style cards (no specific events, edit freely)
    moments: [
        "The conversations that were supposed to be short... but somehow lasted forever.",
        "The random things we talk about.",
        "The moments where you made me laugh without even trying.",
        "Those messages that instantly make my mood better.",
        "The little things I'll probably remember for a long time."
    ],

    letter: `
    Happy Birthday, Waniaaa! ❤️

Finally, agaya apka day, Waniaaa! I hope tum hamesha khush raho, aur Allah kare ke is birthday ke baad tumhari life mein kabhi koi sadness na aaye. May Allah bless you with all the happiness in the world, meri jaan. I love you so much, my love. ❤️

Jabse tum meri life mein aayi ho na, everything feels so much better. Pata nahi kaise, but tumhare aane ke baad choti choti cheezein bhi bohat achi lagne lagi hain. Tumhare saath har moment special lagta hai, and mashAllah, humein bhi 2 saal hone wale hain saath. Time ka pata hi nahi chala ke kab itna guzar gaya. ❤️

Pichle birthday pe main tumhare saath nahi tha, but iss baar hoon, and InshAllah hamesha tumhare saath rahunga. I want to be there for you in every situation, tumhari happiness mein bhi aur tumhare sad moments mein bhi. I want to be the person jiske paas tum bina soche apni har baat share kar sako. I promise ke main hamesha tumhari feelings ki care karunga, tumhe samajhne ki koshish karunga aur kabhi jaan boojh kar tumhara dil nahi dukhaunga. ❤️

Aaj main bohat happy hoon, pata nahi kyun mujhe aisa lag raha hai jaise mera khud ka birthday ho. Maybe because tum meri life ka itna important part ho ke tumhari happiness meri happiness ban gayi hai. Tumhara special day mere liye bhi bohat special hai, meri jaan. ❤️

I just want you to know ke you mean so much to me, Wania. I hope tumhari life ka ye new year tumhare liye bohat saari happiness, success, peace aur beautiful memories le kar aaye. Allah tumhari har achi dua qubool kare, tumhe hamesha apni hifazat mein rakhe aur tumhare face ki ye pyari si smile hamesha aise hi rakhe. Ameen. ❤️

Happy Birthday once again, meri baby, meri jaan, my love, my everything. ❤️

I love you sooo much, Waniaaa. More than words can explain. I hope hum hamesha aise hi saath rahein aur InshAllah ek din apni saari dreams saath mein poori karein. ❤️

HAPPY BIRTHDAY, MY BABYYYY! ❤️
    `,

    reasons: [
        "Because you make ordinary conversations special.",
        "Because your smile genuinely makes me happy.",
        "Because I love the way you are.",
        "Because you became one of my favorite people.",
        "Because talking to you never feels boring.",
        "Because you make me smile without trying.",
        "Because you're effortlessly you.",
        "Because somehow you make my days better.",
        "Because I just love having you in my life.",
        "And honestly... I could keep going forever."
    ],

    future: [
        "More conversations.",
        "More laughs.",
        "More stupid little moments.",
        "More memories.",
        "And a few memories we're still waiting to make. ❤️"
    ],

    surpriseMessage: `
    If this little website could give you one thing, I'd want it to give you a huge smile today. ❤️
    `,

    // "#" at the start = big heading. {name} = her name.
    endingLines: [
        "Before you go...",
        "I just want you to know something.",
        "You are genuinely one of the most special people in my life.",
        "And I hope you never forget how loved and appreciated you are.",
        "I hope this birthday is only the beginning of an amazing year for you.",
        "#Happy Birthday, {My Love} ❤️",
        "Keep smiling.",
        "Keep being you.",
        "And let's make plenty of beautiful memories ahead. ❤️",
        "#I love you."
    ],

    // shown one after another when the tiny heart (bottom of "ahead of us") is tapped 3 times
    easterEggTitle: "Psst... you found the secret 👀",
    easterEggIntro: "Okay, one more thing...",
    easterEggMessage: `
    You're stuck with me now. ❤️😂
    `
};
/* ============================================= */

const D = birthdayData, N = D.herName, P = D.photos;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = s => s.replace(/\{name\}|\[HER_NAME\]/g, N);
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const rows = s => s.split('\n').map(x => x.trim()).filter(Boolean);
const pick = a => a[Math.floor(Math.random() * a.length)];
const COLS = ['#f6b8cb', '#fff3ea', '#d8b36b', '#e0446f', '#b48cff'];

/* ---- missing images: hide + show placeholder ---- */
document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') { e.target.style.visibility = 'hidden'; e.target.parentElement.classList.add('missing'); }
}, true);

/* ---- render content from config ---- */
$$('.name').forEach(e => e.textContent = N);
$('#heroPhoto').src = P[0]; $('#endPhoto').src = P[0];
const rots = [-3, 2.5, -1.5, 3, -2.5, 1.5];
$('#gal').innerHTML = P.map((s, i) => `<div class="pw rv" style="--d:${(i % 3) * .12}s" data-par="${.03 + (i % 3) * .03}"><figure class="pol" data-i="${i}" style="--r:${rots[i % 6]}deg;--fd:${i * .6}s"><div class="ph"><img src="${s}" alt="Photo ${i + 1}" loading="lazy"></div><figcaption>${esc(D.photoCaptions[i] || '')}</figcaption></figure></div>`).join('');
$('#little').innerHTML = D.littleThings.map((x, i) => `<div class="card glass rv" style="--d:${(i % 4) * .12}s">${esc(x)}</div>`).join('');
$('#moments').innerHTML = D.moments.map(x => `<div class="bubble glass rv">${esc(x)}</div>`).join('');
$('#future').innerHTML = D.future.map((x, i) => `<div class="card glass rv" style="--d:${(i % 2) * .12}s">${esc(x)}</div>`).join('');

/* ---- music ---- */
const audio = new Audio(D.song); audio.loop = true; audio.preload = 'auto';
let audioOK = true;
const upd = () => { const pl = !audio.paused; $('#music').classList.toggle('playing', pl); $('#musState').textContent = audioOK ? (pl ? 'Playing' : 'Paused') : 'No song found'; };
const play = () => { try { const r = audio.play(); if (r && r.catch) r.catch(upd); } catch (e) { } };
audio.addEventListener('error', () => { audioOK = false; upd(); });
audio.addEventListener('play', upd); audio.addEventListener('pause', upd);
audio.addEventListener('timeupdate', () => { $('#bar i').style.width = (audio.currentTime / (audio.duration || 1) * 100) + '%'; });
$('#musBtn').onclick = () => audio.paused ? play() : audio.pause();
$('#muteBtn').onclick = e => { audio.muted = !audio.muted; e.currentTarget.textContent = audio.muted ? '🔇' : '🔊'; };
$('#bar').onclick = e => { if (audio.duration) audio.currentTime = e.offsetX / e.currentTarget.clientWidth * audio.duration; };

/* ---- canvases: stars/hearts background + effects ---- */
const bg = $('#bg'), bx = bg.getContext('2d'), fx = $('#fx'), fc = fx.getContext('2d');
let W = 0, H = 0, ps = [];
const stars = Array.from({ length: 110 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + .3, sp: Math.random() * 1.5 + .5, ph: Math.random() * 6, g: Math.random() < .15 }));
const fh = Array.from({ length: 7 }, () => ({ x: Math.random(), y: Math.random(), s: 12 + Math.random() * 14, v: .00008 + Math.random() * .00012, ph: Math.random() * 6 }));
function resize() {
    const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
    [bg, fx].forEach(c => { c.width = W * d; c.height = H * d; });
    bx.setTransform(d, 0, 0, d, 0, 0); fc.setTransform(d, 0, 0, d, 0, 0);
}
addEventListener('resize', resize); resize();

function burst(x, y, n, o = {}) {
    for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.283, v = (o.v || 4) * (.3 + Math.random());
        ps.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: o.g ?? .06, life: 0, max: (o.life || 70) + Math.random() * 30, c: pick(o.cols || COLS), s: o.s || 2.5, sh: 'c', r: 0, vr: 0 });
    }
}
function hearts(x, y, n) {
    for (let i = 0; i < n; i++) ps.push({ x: x + (Math.random() - .5) * 50, y, vx: (Math.random() - .5), vy: -(1.5 + Math.random() * 2), g: -.002, life: 0, max: 170 + Math.random() * 60, c: pick(['#f6b8cb', '#e0446f']), s: 14 + Math.random() * 12, sh: 'h', r: 0, vr: 0 });
}
function confetti() {
    for (let i = 0; i < 160; i++) ps.push({ x: Math.random() * W, y: -20 - Math.random() * H * .4, vx: (Math.random() - .5) * 2, vy: 2 + Math.random() * 3, g: .02, life: 0, max: 260 + Math.random() * 100, c: pick(COLS), s: 7 + Math.random() * 5, sh: 'r', r: Math.random() * 6, vr: (Math.random() - .5) * .3 });
}
function fireworks(ms) {
    const end = Date.now() + ms;
    (function go() {
        if (Date.now() > end) return;
        burst(W * (.15 + Math.random() * .7), H * (.15 + Math.random() * .35), 70, { v: 5, g: .05, life: 70, s: 2, cols: [pick(COLS), '#fff3ea'] });
        setTimeout(go, 600 + Math.random() * 600);
    })();
}
function frame(now) {
    bx.clearRect(0, 0, W, H);
    for (const s of stars) {
        s.y -= .00002; if (s.y < 0) s.y = 1;
        bx.globalAlpha = (.25 + .75 * Math.abs(Math.sin(now / 1000 * s.sp + s.ph))) * .8;
        bx.fillStyle = s.g ? '#f3d9a0' : '#fff';
        bx.beginPath(); bx.arc(s.x * W, s.y * H, s.r, 0, 6.283); bx.fill();
    }
    bx.fillStyle = '#f6b8cb'; bx.textAlign = 'center';
    for (const h of fh) {
        h.y -= h.v; if (h.y < -.05) h.y = 1.05;
        bx.globalAlpha = .13; bx.font = h.s + 'px serif';
        bx.fillText('♥', (h.x + Math.sin(now / 2500 + h.ph) * .02) * W, h.y * H);
    }
    fc.clearRect(0, 0, W, H);
    ps = ps.filter(p => p.life < p.max);
    for (const p of ps) {
        p.life++; p.vy += p.g; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        fc.globalAlpha = Math.max(0, 1 - p.life / p.max); fc.fillStyle = p.c;
        if (p.sh === 'r') { fc.save(); fc.translate(p.x, p.y); fc.rotate(p.r); fc.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .6); fc.restore(); }
        else if (p.sh === 'h') { fc.font = p.s + 'px serif'; fc.textAlign = 'center'; fc.fillText('♥', p.x, p.y); }
        else { fc.beginPath(); fc.arc(p.x, p.y, p.s, 0, 6.283); fc.fill(); }
    }
    fc.globalAlpha = 1; bx.globalAlpha = 1;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---- helpers: line-by-line sequence, once-in-view ---- */
function sequence(el, arr, gap, done, keep = 99) {
    arr.forEach((l, i) => setTimeout(() => {
        const big = l[0] === '#', p = document.createElement(big ? 'h2' : 'p');
        p.className = 'rv seq' + (big ? ' big' : ''); p.textContent = t(big ? l.slice(1) : l);
        el.appendChild(p);
        requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('in')));
        $$('.seq', el).slice(0, -keep).forEach(x => x.classList.add('gone'));
        if (i === arr.length - 1 && done) setTimeout(done, 1500);
    }, i * gap));
}
function once(el, fn, th = .5) {
    const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { o.disconnect(); fn(); } }, { threshold: th });
    o.observe(el);
}

/* ---- intro ---- */
setTimeout(() => sequence($('#introLines'), ['Hey, you... ❤️', 'I made something for you.', 'And I hope you like it.'], 1900, () => $('#openBtn').classList.remove('hide')), 500);
$('#openBtn').onclick = function () {
    const r = this.getBoundingClientRect();
    this.classList.add('pulse');
    burst(r.left + r.width / 2, r.top + r.height / 2, 150, { v: 8, g: 0, life: 60, cols: ['#f6b8cb', '#d8b36b', '#fff3ea', '#b48cff'] });
    play();
    $('#music').classList.add('on');
    $('#main').classList.add('on');
    $('#intro').classList.add('leave');
    setTimeout(() => { $('#intro').remove(); document.body.classList.remove('locked'); scrollTo(0, 0); startMain(); }, 1500);
};

/* ---- main experience ---- */
let celebrated = false;
function celebrate() {
    if (celebrated) return; celebrated = true;
    $('#made').classList.add('in'); confetti(); fireworks(14000);
    const i = setInterval(() => hearts(Math.random() * W, H + 10, 3), 900);
    setTimeout(() => clearInterval(i), 16000);
}
function startMain() {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
    $$('.rv').forEach(e => io.observe(e));
    once($('#end'), () => setTimeout(() => sequence($('#endLines'), D.endingLines, 2800, celebrate, 3), 3500), .4);
}
$$('[data-scroll]').forEach(b => b.onclick = () => $(b.dataset.scroll).scrollIntoView({ behavior: 'smooth' }));

/* parallax */
const par = $$('[data-par]'); let tick = false;
addEventListener('scroll', () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
        par.forEach(e => { const r = e.parentElement.getBoundingClientRect(); e.style.translate = `0 ${(r.top + r.height / 2 - innerHeight / 2) * -parseFloat(e.dataset.par)}px`; });
        tick = false;
    });
}, { passive: true });

/* ---- lightbox ---- */
let cur = 0; const lb = $('#lb'), lbi = $('#lbImg');
function show(i) {
    cur = (i + P.length) % P.length;
    lbi.style.visibility = ''; lbi.parentElement.classList.remove('missing');
    lbi.src = P[cur]; $('#lbCap').textContent = D.photoCaptions[cur] || '';
}
const closeLb = () => { lb.classList.remove('on'); document.body.style.overflow = ''; };
$('#gal').onclick = e => { const f = e.target.closest('.pol'); if (f) { show(+f.dataset.i); lb.classList.add('on'); document.body.style.overflow = 'hidden'; } };
$('#lbX').onclick = closeLb; $('#lbP').onclick = () => show(cur - 1); $('#lbN').onclick = () => show(cur + 1);
lb.onclick = e => { if (e.target === lb) closeLb(); };
let sx = 0;
lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); }, { passive: true });
addEventListener('keydown', e => {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') show(cur + 1); if (e.key === 'ArrowLeft') show(cur - 1);
});

/* ---- letter ---- */
$('#openLetter').onclick = function () {
    this.hidden = true; $('#env').classList.add('open'); $('#letterSec').classList.add('open');
    const er = $('#env').getBoundingClientRect(); burst(er.left + er.width / 2, er.top + er.height / 2, 45, { v: 2.5, g: .01, life: 100, s: 1.6, cols: ['#d8b36b', '#fff3ea'] });
    setTimeout(() => {
        const L = $('#letter');
        $('.paper', L).innerHTML = D.letter.trim().split(/\n\s*\n/).map((p, i) => `<p class="rv" style="--d:${i * .5}s">${esc(p.trim()).replace(/\n\s*/g, '<br>')}</p>`).join('');
        L.classList.add('on');
        requestAnimationFrame(() => $$('.paper p', L).forEach(p => p.classList.add('in')));
        setTimeout(() => L.scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
    }, 1200);
};

/* ---- reasons + easter egg ---- */
let ri = 0, hc = 0; const rt = $('#reasonText'), heart = $('#bigHeart');
const hp = () => { const r = heart.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
$('#reasonBtn').onclick = function () {
    if (ri >= D.reasons.length) return;
    rt.textContent = D.reasons[ri]; rt.classList.remove('pop'); void rt.offsetWidth; rt.classList.add('pop');
    $('#reasonCount').textContent = `${++ri} / ${D.reasons.length}`;
    hearts(...hp(), 4);
    if (ri === D.reasons.length) {
        this.hidden = true;
        setTimeout(() => { $('#reasonEnd').classList.add('in'); burst(...hp(), 60, { v: 5, g: .03, cols: ['#f6b8cb', '#d8b36b'] }); }, 2600);
    }
};
heart.addEventListener('click', () => hearts(...hp(), 3));
let eggClicks = 0, eggBusy = false; const egg = $('#egg'), eh = $('#eggHeart');
eh.onclick = () => {
    eh.classList.remove('spin'); void eh.offsetWidth; eh.classList.add('spin');
    const r = eh.getBoundingClientRect(); hearts(r.left + r.width / 2, r.top, 2);
    if (++eggClicks < 3 || eggBusy) return;
    eggClicks = 0; eggBusy = true; egg.innerHTML = ''; egg.classList.add('on');
    burst(W / 2, H / 2, 70, { v: 5, g: .03, cols: ['#f6b8cb', '#d8b36b', '#fff3ea'] });
    sequence(egg, [D.easterEggTitle, D.easterEggIntro, D.easterEggMessage.trim()], 1800, () => setTimeout(() => { egg.classList.remove('on'); eggBusy = false; }, 2500));
};

/* ---- gift ---- */
$('#openGift').onclick = function () {
    this.hidden = true; const g = $('#gift'); g.classList.add('open');
    const r = g.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    burst(x, y, 100, { v: 7, g: .04, life: 80, cols: ['#d8b36b', '#fff3ea', '#f6b8cb'] });
    confetti(); hearts(x, y, 14);
    setTimeout(() => sequence($('#giftMsg'), rows(D.surpriseMessage), 2600), 1400);
};
