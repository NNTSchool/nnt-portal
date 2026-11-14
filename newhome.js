/* NNT School portal: the Novel home-practice area (videos first). */
(function(){
  var CSS = ''
  + '#newv{display:block;overflow-y:auto;text-align:left;padding:0;background:radial-gradient(ellipse 80% 45% at 10% -5%,rgba(70,240,196,.22),rgba(70,240,196,0) 70%),radial-gradient(ellipse 65% 50% at 105% 25%,rgba(124,92,255,.34),rgba(124,92,255,0) 70%),radial-gradient(ellipse 70% 45% at -5% 105%,rgba(255,122,138,.16),rgba(255,122,138,0) 70%),linear-gradient(180deg,#080a22 0%,#0c0b2e 55%,#100c33 100%);}#newv .nw{max-width:760px;margin:0 auto;padding:18px 16px 60px}'
  + '#newv .nbk{background:transparent;border:1.5px solid rgba(255,255,255,.45);color:#fff;border-radius:99px;padding:7px 16px;font:700 15px system-ui;cursor:pointer}'
  + '#newv h2{font-size:30px;margin:16px 0 2px;color:#fff}#newv .sub{color:#f0e9ff;font-size:16px;margin:0 0 18px;max-width:none}'
  + '#newv .st{display:flex;align-items:center;gap:14px;border-radius:18px;padding:16px;margin:12px 0;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);color:#fff}'
  + '#newv .st .n{color:#04121f;flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px}'
  + '#newv .st.off{opacity:.5}#newv .st.off .n{background:rgba(255,255,255,.28)}#newv .st b{font-size:19px}#newv .st small{display:block;color:#f0e9ff;font-size:14px;margin-top:2px}'
  + '#newv .vc{border-radius:16px;padding:14px 16px;margin:10px 0;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.22);color:#fff}'
  + '#newv .vc .t{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:700}#newv .vc .t span{margin-left:auto;font-size:14px;color:#f0e9ff;font-weight:600;white-space:nowrap}'
  + '#newv .bar{height:10px;border-radius:9px;background:rgba(255,255,255,.18);margin:10px 0 6px;overflow:hidden}#newv .bar i{display:block;height:100%;background:linear-gradient(90deg,#19e6c1,#7c5cff);border-radius:9px}'
  + '#newv .vc small{color:#f0e9ff;font-size:14px}#newv .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#04121f;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);cursor:pointer}#newv .go:disabled{background:#3a4470;color:#9aa5cc;cursor:default}'

  + '#newv .hbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 0}#newv .hbar button{border-radius:99px;padding:7px 14px;font:700 14px system-ui;cursor:pointer;color:#f2f0ff;background:rgba(255,255,255,.07);border:1px solid rgba(185,176,255,.3)}#newv .hbar button.paybtn{border:0;padding:5px 12px 5px 9px;color:#fff;box-shadow:0 0 0 2px rgba(255,255,255,.85),0 4px 16px rgba(0,0,0,.35)}#newv .hbar button.paybtn.g{background:linear-gradient(150deg,#16c784,#0a7a55)}#newv .hbar button.paybtn.a{background:linear-gradient(150deg,#ffb020,#d06e00)}#newv .hbar button.paybtn.r{background:linear-gradient(150deg,#ff4d73,#b01c3a)}#newv .hbar button.paybtn b{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.35)}#newv .earl{margin:18px 0 4px}#newv .earl small{display:block;color:#b8b4dc;font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:8px}#newv .earl div{display:flex;flex-wrap:wrap;gap:8px}#newv .eu{border-radius:99px;padding:8px 14px;font:700 14px system-ui;cursor:pointer;color:#9dfbe3;background:rgba(70,240,196,.1);border:1px solid rgba(70,240,196,.4)}#newv .hb{position:relative}#newv .hero{display:flex;align-items:center;gap:18px;margin:14px 0 6px}#newv .ring{flex:none;position:relative;width:118px;height:118px}#newv .ring svg{width:118px;height:118px;transform:rotate(-90deg)}#newv .ring .c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1}#newv .ring .c small{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#b9b0ff}#newv .ring .c b{font-size:38px;color:#f2f0ff}'
  + '#newv .chip{display:inline-block;border-radius:99px;padding:5px 12px;font:700 13px system-ui;background:rgba(70,240,196,.12);border:1px solid rgba(70,240,196,.4);color:#9dfbe3;margin:0 6px 6px 0}'
  + '#newv .hb h2{margin:0 0 6px;font-size:27px;color:#f2f0ff}#newv .hb p.sub{margin:0 0 8px;color:#b8b4dc;font-size:15px}'
  + '#newv .path{position:relative;margin:18px 0 8px;padding-left:0}#newv .path:before{content:"";position:absolute;left:25px;top:24px;bottom:30px;width:3px;border-radius:3px;background:linear-gradient(180deg,#46f0c4 0%,#7c5cff 38%,rgba(124,92,255,.0) 80%)}'
  + '#newv .nd{position:relative;display:flex;gap:14px;align-items:flex-start;margin:0 0 14px}#newv .nd .dot{flex:none;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:800 19px system-ui;background:#0a2238;border:2px solid rgba(185,176,255,.3);color:#b9b0ff;position:relative;z-index:1}'
  + '#newv .nd .bx{flex:1;border-radius:18px;padding:14px 16px;background:rgba(255,255,255,.05);border:1px solid rgba(185,176,255,.18);color:#f2f0ff;position:relative;overflow:hidden}#newv .nd .bx b{font-size:18px;display:block}#newv .nd .bx small{display:block;color:#b8b4dc;font-size:14px;margin-top:3px;line-height:1.35}'
  + '#newv .nd.done .dot{background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);color:#04121f;border-color:transparent}#newv .nd.done .bx{opacity:.8}'
  + '#newv .nd.now .dot{background:#04121f;border-color:#46f0c4;color:#46f0c4;box-shadow:0 0 0 0 rgba(70,240,196,.6);}#newv .nd.now .bx{background:linear-gradient(160deg,rgba(70,240,196,.14),rgba(124,92,255,.10));border:1.5px solid rgba(70,240,196,.55);box-shadow:0 10px 40px -12px rgba(70,240,196,.45)}'
  + '#newv .nd.now .go{width:100%;margin-top:12px;padding:14px 18px;font-size:17px}'
  + '#newv .nd .dot.kd svg{width:34px;height:auto;opacity:.55;filter:grayscale(.6)}#newv .hb{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}#newv .nd.mist .dot{background:#0a1a2c;border-color:rgba(185,176,255,.14);color:rgba(185,176,255,.45)}#newv .nd.mist .bx{border-style:dashed;border-color:rgba(185,176,255,.14)}#newv .nd.mist .bx .in{filter:blur(5.5px);opacity:.55;user-select:none}'
  + '#newv .nd.mist .bx:after{content:"";position:absolute;inset:-30%;background:radial-gradient(closest-side,rgba(190,225,255,.22),rgba(190,225,255,0)) 0 0/60% 90% no-repeat,radial-gradient(closest-side,rgba(190,225,255,.18),rgba(190,225,255,0)) 100% 100%/70% 90% no-repeat;pointer-events:none}'
  + '#newv .nd.mist .bx .tag{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;z-index:2;font:700 13px system-ui;letter-spacing:.08em;color:#cfe8ff;text-transform:uppercase}'
  + '#newv .nd.mist.m2 .bx .in{filter:blur(8px);opacity:.4}#newv .nd.mist.m3 .bx .in{filter:blur(11px);opacity:.28}'
  + '#newv .rw{margin:22px 0 6px;border-radius:22px;padding:18px;background:linear-gradient(160deg,rgba(143,107,255,.16),rgba(124,92,255,.10));border:1px solid rgba(185,176,255,.28);color:#f2f0ff;position:relative;overflow:hidden}#newv .rw h3{margin:0 0 4px;font-size:18px;color:#f2f0ff}#newv .rw p{margin:0 0 10px;color:#b8b4dc;font-size:14px}#newv .rw .kk{display:flex;align-items:center;gap:12px}#newv .rw .kk svg{flex:none;width:92px;height:auto;filter:drop-shadow(0 6px 14px rgba(255,196,40,.35))}'
  + '#newv .rw .ch{display:flex;flex-wrap:wrap;gap:8px}#newv .rw .ch span{border-radius:12px;padding:8px 12px;font:700 13px system-ui;background:rgba(255,255,255,.08);border:1px solid rgba(185,176,255,.22)}#newv .rw .ch span.bl{filter:blur(4.5px);opacity:.6;user-select:none}'
  + '#newv .kgot{text-align:center;padding:10px 0 4px}#newv .kgot svg{width:230px;max-width:70%;height:auto;filter:drop-shadow(0 14px 26px rgba(255,196,40,.45))}'
  + '@keyframes nvpulse{70%{box-shadow:0 0 0 14px rgba(70,240,196,0)}100%{box-shadow:0 0 0 0 rgba(70,240,196,0)}}@keyframes nvfog{from{transform:translateX(-6%)}to{transform:translateX(8%)}}@keyframes nvfloat{0%,100%{transform:translateY(0) rotate(-14deg)}50%{transform:translateY(-6px) rotate(-10deg)}}#newv .rw .kk svg{animation:nvfloat 5s ease-in-out infinite}@media (prefers-reduced-motion:reduce){#newv *{animation:none!important}}'
  + '#nvp .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#04121f;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);cursor:pointer}#nvp .go:disabled{background:#3a4470;color:#9aa5cc}#nvp h3,#nvp p{color:#fff}'
  + '#nvp{position:fixed;inset:0;z-index:95;background:#04071a;color:#fff;display:none;flex-direction:column;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;overflow-y:auto}#nvp.on{display:flex}'
  + '#nvp .tb{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0b1236;border-bottom:1px solid rgba(255,255,255,.14)}#nvp .tb b{font-size:16px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
  + '#nvp button.q{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5);border-radius:99px;padding:6px 13px;font:700 14px system-ui;cursor:pointer}#nvp button.q.on{background:#ff7a00;border-color:#ff7a00}'
  + '#nvp .vw{position:relative;width:100%;max-width:calc((100vh - 235px) * 1.7778);min-width:min(100%,320px);margin:0 auto;aspect-ratio:16/9;background:#000}#nvp .vw iframe,#nvp .vw #nv_yt{position:absolute;inset:0;width:100%;height:100%;border:0}'
  + '#nvp .pn{width:100%;max-width:900px;margin:0 auto;padding:12px 16px 30px;box-sizing:border-box}#nvp .row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0}#nvp .info{color:#f0e9ff;font-size:15px}'
  + '#nvp .bar{position:relative;height:14px;border-radius:9px;background:rgba(255,255,255,.18);margin:8px 0;overflow:hidden}#nvp .bar i{display:block;height:100%;background:linear-gradient(90deg,#ffb300,#ff7a00)}'
  + '#nvp .wb{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:5;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);color:#fff;border-radius:18px;padding:12px 26px;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.6);display:none;max-width:92%}#nvp .wb.on{display:block}'
  + '#nvp .wb small{display:block;font-size:13px;font-weight:700;letter-spacing:.08em}#nvp .wb b{display:block;font-size:34px;letter-spacing:.12em}'
  + '#nvp .ov{position:fixed;inset:0;z-index:98;background:rgba(4,7,26,.94);display:none;align-items:center;justify-content:center;text-align:center;padding:24px}#nvp .ov.on{display:flex}#nvp .ov div{max-width:460px}#nvp .ov h3{font-size:28px;margin:8px 0}#nvp .ov p{color:#f6f1ff;font-size:18px;line-height:1.45;margin:6px 0 16px}'
  + '#nvp .ans{margin-top:14px;border-radius:16px;padding:14px;background:rgba(255,179,0,.14);border:2px solid #ffb300;display:none}#nvp .ans.on{display:block}#nvp .ans input{width:100%;box-sizing:border-box;margin:6px 0;padding:11px 12px;border-radius:10px;border:0;font:700 18px system-ui;text-transform:uppercase;letter-spacing:.08em}'
  + '@media(orientation:landscape) and (max-height:560px){#nvp .vw{max-width:calc(100vh * 1.7778)}}#nvp:fullscreen .vw,#nvp:-webkit-full-screen .vw{max-width:calc(100vh * 1.7778)}'
  + '@media(orientation:landscape) and (pointer:coarse){#nvp .vw{max-width:calc(100vh * 1.7778)}}#nvp .vw{overflow:hidden;flex:none}#nvp .yw{position:absolute;inset:0}#nvp .vw iframe,#nvp .vw #nv_yt{transform-origin:0 0;transform:scale(var(--z,1)) translate(var(--tx,0px),var(--ty,0px))}#nvp .zo{position:absolute;inset:0;z-index:3;display:none;touch-action:none;cursor:grab}#nvp .zo.on{display:block}#nvp .zr{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0}'
  + '#nvp .hint{display:none;color:#ffd77a;font-size:14px;margin:6px 0}@media(orientation:portrait) and (max-width:700px){#nvp .hint{display:block}}'

  + '#newv .nd.done .dot,#newv .st .n,#newv .bar i,#newv .chip{background-image:none}#newv .nd.done .dot,#newv .st .n{background:linear-gradient(135deg,#46f0c4,#7c5cff);color:#0a0820}#newv .bar i{background:linear-gradient(90deg,#46f0c4,#7c5cff)}'
  + '#newv .st,#newv .nd .bx,#newv .vc,#newv .rw{border-color:rgba(185,176,255,.2);background:linear-gradient(160deg,rgba(255,255,255,.075),rgba(255,255,255,.03))}'
  + '#newv .nd.now .bx{background:linear-gradient(160deg,rgba(70,240,196,.16),rgba(124,92,255,.14));border:1.5px solid rgba(70,240,196,.6);box-shadow:0 14px 44px -14px rgba(70,240,196,.5),inset 0 0 0 1px rgba(255,255,255,.04)}'
  + '#newv .go{color:#2a0a1e;box-shadow:0 8px 26px -8px rgba(255,111,145,.6);transition:transform .15s,box-shadow .15s,filter .15s}#newv .go:hover{filter:brightness(1.06)}#newv .go:active{transform:translateY(1px) scale(.99)}#newv .go.ghost{background:transparent;color:#f2f0ff;border:1.5px solid rgba(185,176,255,.45);box-shadow:none}'
  + '#newv h2{letter-spacing:-.02em}#newv .hb h2{background:linear-gradient(90deg,#fff,#c9c2ff 60%,#9dfbe3);-webkit-background-clip:text;background-clip:text;color:transparent}'
  + '#newv .nw{padding-bottom:20px}#newv .nvnav{position:sticky;bottom:0;z-index:20;display:flex;gap:10px;margin:22px -16px 0;padding:12px 16px calc(12px + env(safe-area-inset-bottom));background:linear-gradient(180deg,rgba(8,10,34,0),rgba(8,10,34,.88) 30%,rgba(8,10,34,.96));}'
  + '#newv .nvnav button{flex:1;border-radius:16px;padding:12px 10px;cursor:pointer;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;text-align:center;min-height:56px;transition:transform .15s,filter .15s}#newv .nvnav button b{display:block;font-size:17px;font-weight:800}#newv .nvnav button small{display:block;font-size:12px;margin-top:2px;opacity:.85}'
  + '#newv .nvnav .pr{border:0;color:#2a0a1e;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);box-shadow:0 10px 30px -10px rgba(255,111,145,.7)}#newv .nvnav .gb{color:#f2f0ff;background:rgba(255,255,255,.07);border:1.5px solid rgba(185,176,255,.4)}'
  + '#newv .nvnav button:disabled{cursor:default;box-shadow:none;background:rgba(255,255,255,.05);color:#8f8bb8;border:1.5px dashed rgba(185,176,255,.22)}#newv .nvnav button:not(:disabled):active{transform:scale(.98)}'
  + '#newv .nbk{border-color:rgba(185,176,255,.5)}'

  + '#newv .hm{min-height:calc(100vh - 36px);display:flex;flex-direction:column;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}#newv .hmtop{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:4px 0 0}'
  + '#newv .hmbrand{font:800 19px system-ui;letter-spacing:-.01em;color:#f2f0ff}#newv .hmbrand span{font-weight:600;color:#b9b0ff}'
  + '#newv .hmbtns{display:flex;gap:8px;align-items:center;flex-wrap:wrap}#newv .hmbtns button{border-radius:99px;padding:8px 16px;font:700 14px system-ui;cursor:pointer;color:#f2f0ff;background:rgba(255,255,255,.07);border:1px solid rgba(185,176,255,.35);transition:background .15s}#newv .hmbtns button:hover{background:rgba(255,255,255,.14)}#newv .hmbtns button.paybtn{border:0;padding:5px 14px 5px 10px;color:#fff}'
  + '#newv .hmc{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:26px 0 40px}#newv .hmgreet{font:700 16px system-ui;letter-spacing:.14em;text-transform:uppercase;color:#9dfbe3;margin-bottom:18px}'
  + '#newv .hmring .ring{width:min(46vw,200px);height:min(46vw,200px);position:relative;margin:0 auto}#newv .hmring .ring svg{width:100%;height:100%}#newv .hmring .c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}#newv .hmring .c small{font:700 13px system-ui;letter-spacing:.18em;text-transform:uppercase;color:#b9b0ff}#newv .hmring .c b{font:800 64px/1 system-ui;color:#fff;letter-spacing:-.03em}'
  + '#newv .hmlvl{margin:16px 0 4px}#newv .hmq{margin:26px auto 30px;max-width:620px;padding:22px 26px;border-radius:22px;background:linear-gradient(160deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(185,176,255,.22);}#newv .hmq p{margin:0;font:600 clamp(19px,2.6vw,25px)/1.4 Georgia,serif;font-style:italic;color:#f2f0ff}#newv .hmq cite{display:block;margin-top:10px;font:700 14px system-ui;font-style:normal;color:#b9b0ff;letter-spacing:.04em}'
  + '#newv .hmgo{width:min(480px,100%);padding:22px 28px;font-size:23px;border-radius:20px;letter-spacing:.01em;box-shadow:0 18px 50px -12px rgba(255,111,145,.75);}@keyframes nvglow{50%{box-shadow:0 18px 64px -6px rgba(255,111,145,.95)}}@media (prefers-reduced-motion:reduce){#newv .hmgo{animation:none}}'
  + '#newv .nw:has(.hm){max-width:1000px}#newv .nvdbg{text-align:center;font:600 11px system-ui;color:#8f8bb8;padding:0 0 8px;margin-top:-6px;position:sticky;bottom:0;background:rgba(8,10,34,.96)}'

  + '#newv .nd.wait .dot{background:#12102e;border-color:rgba(185,176,255,.35);color:#b9b0ff}#newv .nd.wait .bx{opacity:.88}#newv .nd.open .dot{background:#12102e;border-color:rgba(185,176,255,.5);color:#f2f0ff}'
  + '#newv .nd .bx .vc{margin:10px 0 0}#newv .nd .bx .go{margin-top:12px}#newv .nd .dot .kd svg{width:30px;height:auto;display:block}#newv .hero h2{margin:0 0 4px}'

  + '#newv button{touch-action:manipulation;-webkit-tap-highlight-color:transparent}#newv .nw{animation:nvin .18s ease-out}@keyframes nvin{from{opacity:.4}to{opacity:1}}@media (prefers-reduced-motion:reduce){#newv .nw{animation:none}}'
  + '#newv .sk{height:92px;border-radius:18px;margin:14px 0;background:linear-gradient(90deg,rgba(255,255,255,.05),rgba(255,255,255,.11),rgba(255,255,255,.05));background-size:200% 100%;animation:nvsk 1.1s linear infinite}@keyframes nvsk{to{background-position:-200% 0}}';
  var S = {unit: 1, vids: [], cur: null, pl: null, hb: null, ack: 0, mack: null, fails: 0, back: null, ytReady: false, ytQ: [], word: 0, wordT: 0, hidden: false, ready: false, busy: false};
  function tok(){ return ls("nnt_phone_token"); }
  function fmt(s){ s = Math.max(0, Math.round(s)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (x < 10 ? "0" : "") + x; }
  function el(id){ return document.getElementById(id); }
  function inject(){
    if (el("nvcss")) return;
    var st = document.createElement("style"); st.id = "nvcss"; st.textContent = CSS; document.head.appendChild(st);
    var d = document.createElement("div"); d.id = "nvp";
    d.innerHTML = '<div class="tb"><button class="q" id="nvb" type="button">← Back</button><b id="nvt"></b><button class="q" id="nvfs" type="button">⛶ Full screen</button></div>'
      + '<div class="vw"><div class="yw" id="nvyw"><div id="nv_yt"></div></div></div>'
      + '<div class="wb" id="nvwb"><small id="nvwn"></small><b id="nvww"></b></div>'
      + '<div class="pn"><div class="hint">📱 Turn your phone sideways for a bigger picture.</div>'
      + '<div class="row"><span class="info">Speed:</span><button class="q" data-s="0.75" type="button">0.75×</button><button class="q on" data-s="1" type="button">1×</button><button class="q" data-s="1.25" type="button">1.25×</button><span class="info" style="margin-left:auto">Max speed 1.25×</span></div>'
      + '<div class="bar"><i id="nvbar" style="width:0%"></i></div><div class="info" id="nvinfo"></div>'
      + '<div class="info" id="nvstate" style="margin-top:6px"></div>'
      + '<div class="ans" id="nvans"><b style="font-size:18px">✅ You reached the target!</b><div class="info" style="margin:4px 0 8px">Type the 3 secret words, in the order they appeared.</div><input id="nva1" placeholder="Word 1" autocomplete="off"><input id="nva2" placeholder="Word 2" autocomplete="off"><input id="nva3" placeholder="Word 3" autocomplete="off"><button class="go" id="nvsend" type="button">Check the words</button><div class="info" id="nvam" style="margin-top:8px"></div></div></div>'
      + '<div class="ov" id="nvov"><div><div style="font-size:60px">👀</div><h3 id="nvoh"></h3><p id="nvop"></p><button class="go" id="nvok" type="button">OK, continue</button></div></div>';
    document.body.appendChild(d);
    el("nvb").onclick = leave; zInit();
    el("nvfs").onclick = function(){ var e = el("nvp"); try{ if (document.fullscreenElement || document.webkitFullscreenElement){ (document.exitFullscreen || document.webkitExitFullscreen).call(document); } else { (e.requestFullscreen || e.webkitRequestFullscreen).call(e); } }catch(x){} };
    Array.prototype.forEach.call(d.querySelectorAll("[data-s]"), function(b){ b.onclick = function(){ setSpeed(+b.getAttribute("data-s")); }; });
    el("nvsend").onclick = sendWords;
    el("nvok").onclick = function(){ el("nvov").classList.remove("on"); };
    document.addEventListener("visibilitychange", function(){
      if (!S.cur || !el("nvp").classList.contains("on")) return;
      if (document.hidden){ S.hidden = true; try{ S.pl.pauseVideo(); }catch(e){} }
      else if (S.hidden){ S.hidden = false; showOv("Your teacher is watching", "You left this screen, so the video was paused and the time did not count. Stay on this screen while the video plays."); beat(); }
    });
  }
  function showOv(h, p){ el("nvoh").textContent = h; el("nvop").textContent = p; el("nvov").classList.add("on"); }
  /* zoom: buttons or two fingers; drag to move when zoomed */
  var Z = {z: 1, x: 0, y: 0};
  function zApply(){
    var vw = el("nvp").querySelector(".vw"), W = vw.clientWidth, H = vw.clientHeight;
    Z.z = Math.max(1, Math.min(4, Z.z));
    Z.x = Math.min(0, Math.max(-(W - W / Z.z), Z.x)); Z.y = Math.min(0, Math.max(-(H - H / Z.z), Z.y));
    vw.style.setProperty("--z", Z.z); vw.style.setProperty("--tx", Z.x + "px"); vw.style.setProperty("--ty", Z.y + "px");
    
  }
  function zBy(f, cx, cy){
    var vw = el("nvp").querySelector(".vw"), W = vw.clientWidth, H = vw.clientHeight, o = Z.z;
    cx = cx == null ? W / 2 : cx; cy = cy == null ? H / 2 : cy;
    var px = cx / o - Z.x * 1, py = cy / o - Z.y * 1;   // point under the finger in unscaled coordinates
    Z.z = Math.max(1, Math.min(4, o * f)); Z.x = cx / Z.z - px; Z.y = cy / Z.z - py; zApply();
  }
  function zInit(){ return;
    el("nvzp").onclick = function(){ zBy(1.4); }; el("nvzm").onclick = function(){ zBy(1 / 1.4); }; el("nvz0").onclick = function(){ Z.z = 1; Z.x = 0; Z.y = 0; zApply(); };
    var o = el("nvzo"), ptr = {}, last = null;
    function dist(){ var k = Object.keys(ptr); if (k.length < 2) return 0; var a = ptr[k[0]], b = ptr[k[1]]; return Math.hypot(a.x - b.x, a.y - b.y); }
    o.onpointerdown = function(e){ try{ o.setPointerCapture(e.pointerId); }catch(x){} ptr[e.pointerId] = {x: e.clientX, y: e.clientY}; last = dist(); };
    o.onpointermove = function(e){
      var p = ptr[e.pointerId]; if (!p) return; var n = Object.keys(ptr).length, r = o.getBoundingClientRect();
      if (n >= 2){ ptr[e.pointerId] = {x: e.clientX, y: e.clientY}; var d = dist(); if (last && d){ var k = Object.keys(ptr), a = ptr[k[0]], b = ptr[k[1]]; zBy(d / last, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top); } last = d; return; }
      Z.x += (e.clientX - p.x) / Z.z; Z.y += (e.clientY - p.y) / Z.z; ptr[e.pointerId] = {x: e.clientX, y: e.clientY}; zApply();
    };
    o.onpointerup = o.onpointercancel = function(e){ delete ptr[e.pointerId]; last = dist(); };
    o.ondblclick = function(){ Z.z = 1; Z.x = 0; Z.y = 0; zApply(); };
    window.addEventListener("resize", function(){ setTimeout(zApply, 200); });
  }
  /* sideways / full screen: the video takes the whole screen; the top bar sits above it (scroll up to reach it), the controls sit below it */
  function fitView(){
    var p = el("nvp"); if (!p || !p.classList.contains("on")) return;
    var fs = document.fullscreenElement || document.webkitFullscreenElement, land = window.innerWidth > window.innerHeight && (window.innerHeight <= 560 || (window.matchMedia && matchMedia('(pointer:coarse)').matches));
    if (fs || land){ var tb = p.querySelector(".tb"); p.scrollTop = tb ? tb.offsetHeight : 0; }
  }
  window.addEventListener("resize", function(){ setTimeout(fitView, 200); });
  window.addEventListener("orientationchange", function(){ setTimeout(fitView, 400); });
  document.addEventListener("fullscreenchange", function(){ setTimeout(fitView, 250); });
  document.addEventListener("webkitfullscreenchange", function(){ setTimeout(fitView, 250); });
  function setSpeed(r){ r = Math.min(r, 1.25); try{ S.pl.setPlaybackRate(r); }catch(e){} Array.prototype.forEach.call(el("nvp").querySelectorAll("[data-s]"), function(b){ b.classList.toggle("on", +b.getAttribute("data-s") === r); }); }
  function loadYT(cb){
    if (window.YT && window.YT.Player){ cb(); return; }
    S.ytQ.push(cb);
    if (!document.getElementById("nvyt")){
      var s = document.createElement("script"); s.id = "nvyt"; s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s);
      var old = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function(){ if (old) try{ old(); }catch(e){} var q = S.ytQ; S.ytQ = []; q.forEach(function(f){ f(); }); };
    }
  }

  /* a real-looking key (vector, sharp at any size) */
  var KID = 0;
  function keySvg(){
    var g = "kg" + (++KID);
    return '<svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Key"><defs>'
      + '<linearGradient id="' + g + 'a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6c2"/><stop offset=".35" stop-color="#ffd23f"/><stop offset=".75" stop-color="#e29a00"/><stop offset="1" stop-color="#9a6100"/></linearGradient>'
      + '<linearGradient id="' + g + 'b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe98a"/><stop offset=".5" stop-color="#f2b01e"/><stop offset="1" stop-color="#b87300"/></linearGradient></defs>'
      + '<path fill="url(#' + g + 'a)" stroke="#8a5600" stroke-width="1.6" fill-rule="evenodd" d="M48 8a40 40 0 1 0 .01 0zM48 34a14 14 0 1 1-.01 0z"/>'
      + '<circle cx="48" cy="48" r="29" fill="none" stroke="#fff4b8" stroke-opacity=".75" stroke-width="2"/>'
      + '<rect x="84" y="41" width="140" height="15" rx="7.5" fill="url(#' + g + 'b)" stroke="#8a5600" stroke-width="1.6"/>'
      + '<rect x="92" y="35" width="11" height="27" rx="3" fill="url(#' + g + 'a)" stroke="#8a5600" stroke-width="1.4"/>'
      + '<path fill="url(#' + g + 'b)" stroke="#8a5600" stroke-width="1.5" stroke-linejoin="round" d="M178 56h14v24h-14zM200 56h12v17h-12zM218 56h8v11h-8z"/>'
      + '<path d="M86 45h134" stroke="#fffbe0" stroke-opacity=".85" stroke-width="2.2" stroke-linecap="round"/><path d="M26 30a30 30 0 0 1 30-14" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/></svg>';
  }
  function ringSvg(frac){
    var C = 2 * Math.PI * 50;
    return '<svg viewBox="0 0 120 120"><defs><linearGradient id="nvrg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46f0c4"/><stop offset="1" stop-color="#7c5cff"/></linearGradient></defs>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="rgba(185,176,255,.16)" stroke-width="9"/>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="url(#nvrg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * frac).toFixed(1) + ' ' + C.toFixed(1) + '"/></svg>';
  }

  /* ---------- the home page: where you are, one quote, one big button ---------- */
  var QUOTES = [
    ["The expert in anything was once a beginner.", "Helen Hayes"], ["It always seems impossible until it is done.", "Nelson Mandela"],
    ["A journey of a thousand miles begins with a single step.", "Lao Tzu"], ["Learning never exhausts the mind.", "Leonardo da Vinci"],
    ["You don’t have to be great to start, but you have to start to be great.", "Zig Ziglar"], ["Success is the sum of small efforts, repeated day in and day out.", "Robert Collier"],
    ["The limits of my language mean the limits of my world.", "Ludwig Wittgenstein"], ["Fall seven times, stand up eight.", "Japanese proverb"],
    ["The beautiful thing about learning is that nobody can take it away from you.", "B. B. King"], ["Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"],
    ["Don’t watch the clock; do what it does. Keep going.", "Sam Levenson"], ["Well begun is half done.", "Proverb"],
    ["Learn as if you were to live forever.", "Mahatma Gandhi"], ["The more that you read, the more things you will know.", "Dr. Seuss"],
    ["One language sets you in a corridor for life. Two languages open every door along the way.", "Frank Smith"], ["Mistakes are proof that you are trying.", ""],
    ["Do something today that your future self will thank you for.", ""], ["Little by little, a little becomes a lot.", "Proverb"],
    ["Language is the road map of a culture.", "Rita Mae Brown"], ["Practice makes progress, not perfection.", ""],
    ["The secret of getting ahead is getting started.", "Mark Twain"], ["Every word you learn is a new door.", ""],
    ["Your future is created by what you do today, not tomorrow.", "Robert Kiyosaki"], ["Energy and persistence conquer all things.", "Benjamin Franklin"]
  ];
  function pickQuote(){
    var i = Math.floor(Math.random() * QUOTES.length), last = -1;
    try{ last = +localStorage.getItem("nvq"); }catch(e){}
    if (i === last) i = (i + 1) % QUOTES.length;
    try{ localStorage.setItem("nvq", String(i)); }catch(e){}
    return QUOTES[i];
  }
  function frontUnit(){
    var o = (S.nav && S.nav.open) || [];
    for (var i = 0; i < o.length; i++) if (!nvDone(o[i])) return o[i];
    return o.length ? o[o.length - 1] : 1;
  }
  function homePage(){
    S.sub = false; S.chose = null; S.review = false;
    var fu = frontUnit(), fn = ""; try{ if (typeof ME !== "undefined" && ME && ME.name) fn = String(ME.name).split(" ")[0]; }catch(e){}
    var pb = document.getElementById("paybtn"), hasPay = pb && !pb.classList.contains("hide"), q = pickQuote();
    var h = '<div class="hm"><div class="hmtop"><div class="hmbrand">NNT <span>School Academy</span></div><div class="hmbtns"><button id="nvhsw" type="button">⇄ Switch</button>'
      + (hasPay ? '<button id="nvhpay" type="button" class="' + pb.className.replace(/\bhide\b/, '') + '">' + pb.innerHTML + '</button>' : '') + '<button id="nvhout" type="button">Log out</button></div></div>'
      + '<div class="hmc"><div class="hmgreet">' + (fn ? 'Welcome back, ' + esc(fn) : 'Welcome back') + '</div>'
      + '<div class="hmring"><div class="ring">' + ringSvg(Math.min(1, ((S.nav ? S.nav.keys.length : 0)) / 20)) + '<div class="c"><small>Unit</small><b>' + fu + '</b></div></div></div>'
      + '<div class="hmlvl"><span class="chip">Unit ' + fu + ' of 20</span><span class="chip" id="hmtrk" style="display:none"></span></div>'
      + '<blockquote class="hmq"><p>“' + esc(q[0]) + '”</p>' + (q[1] ? '<cite>— ' + esc(q[1]) + '</cite>' : '') + '</blockquote>'
      + '<button type="button" class="go hmgo" id="nvbegin">Begin Learning →</button></div></div>';
    page(h);
    el("nvbegin").onclick = function(){ this.disabled = true; goUnit(frontUnit()); };
    el("nvhsw").onclick = function(){ var b = document.getElementById("swbtn"); if (b) b.click(); };
    if (el("nvhpay")) el("nvhpay").onclick = function(){ pb.click(); };
    el("nvhout").onclick = function(){ nvAsk("Log out?", "You will need a new code from your teacher to log in again.", "Log out", function(){ if (window.NNT_OUT) window.NNT_OUT(); }); };
    rpc("nv_stage", {tok: tok(), u: fu}).then(function(x){ var t = x && x.ok ? x.track : null, c = el("hmtrk"); if (c && t){ c.textContent = "Track · " + (t === "ie" ? "IELTS" : "Multi-level"); c.style.display = ""; } }).catch(function(){});
  }

  /* ---------- unit page ---------- */
  /* ---------- the unit map: ONE source of truth for Proceed / Go back ---------- */
  function navLoad(){
    function fb(){
      return rpc("nv_units", {tok: tok()}).then(function(r){
        if (r && r.ok === false && r.err) return {err: r.err};
        var cur = r && r.ok && r.units && r.units[0] ? r.units[0].unit : (r && r.all_done ? (r.last || 1) : 1), o = [], k = [];
        for (var i = 1; i <= cur; i++){ o.push(i); if (i < cur || (r && r.all_done)) k.push(i); }
        S.nav = {open: o, keys: k, vip: false, more: !!(r && r.more), src: "old", ckeys: k, cfree: 99}; return S.nav;
      });
    }
    return rpc("nv_nav", {tok: tok()}).then(function(r){
      if (r && r.ok){ S.nav = {open: (r.open || []).map(Number), keys: (r.keys || []).map(Number), vip: !!r.vip, more: !!r.more, src: "map", ckeys: (r.ckeys || r.keys || []).map(Number), cfree: r.cfree == null ? 99 : Number(r.cfree)}; return S.nav; }
      if (r && r.ok === false && r.err) return {err: r.err};
      return fb();
    }, fb);
  }
  function nvNext(){ var o = (S.nav && S.nav.open) || [], i = o.indexOf(S.unit); return i >= 0 && i < o.length - 1 ? o[i + 1] : null; }
  function nvPrev(){ var o = (S.nav && S.nav.open) || [], i = o.indexOf(S.unit); return i > 0 ? o[i - 1] : null; }
  function nvDone(u){ return !!S.nav && S.nav.keys.indexOf(u) >= 0; }
  function nvCDone(u){ return !!S.nav && (u <= (S.nav.cfree == null ? 1 : S.nav.cfree) || (S.nav.ckeys || []).indexOf(u) >= 0); }
  function nvCanNext(){ return nvNext() !== null && !!S.nav && (S.nav.vip || (nvDone(S.unit) && nvCDone(S.unit))); }
  function navBar(){
    if (!S.nav) return "";
    var pv = nvPrev(), nx = nvNext(), can = nvCanNext();
    var ph = nx === null ? (S.nav.more ? "The next unit opens soon" : "You are at the last unit") : can ? "Unit " + nx : nvDone(S.unit) ? "Finish the class test first" : "Finish Unit " + S.unit + " first";
    return '<div class="nvnav"><button type="button" class="gb" id="nvgb"' + (pv === null ? " disabled" : "") + '><b>← Go back</b><small>' + (pv === null ? "This is the first unit" : "Unit " + pv) + '</small></button>'
      + '<button type="button" class="pr" id="nvpr"' + (can ? "" : " disabled") + '><b>Proceed →</b><small>' + ph + '</small></button></div>'
;
  }
  function wireNav(){
    var g = el("nvgb"), p = el("nvpr");
    if (g) g.onclick = function(){ var u = nvPrev(); if (u !== null) goUnit(u); };
    if (p) p.onclick = function(){ p.disabled = true; moveOn(p); };
  }
  function goUnit(u){
    S.unit = u; S.st = null; S.chose = null; S.review = false; S.sub = true;
    try{ sessionStorage.setItem("nvcur", String(u)); }catch(e){}
    unitPage();
  }
  function page(html, nav){
    var top = S.sub ? '<button class="nbk" id="nvback" type="button">⌂ Home</button>' : (S.back && nav === "exit" ? '<button class="nbk" id="nvback" type="button">← Back</button>' : '');
    el("newv").innerHTML = '<div class="nw">' + top + html + (nav === true ? navBar() : '') + '</div>';
    var b = el("nvback"); if (b) b.onclick = function(){ if (S.sub){ S.review = false; S.chose = null; homePage(); } else if (S.back) S.back(); };
    if (nav === true) wireNav();
    try{ el("newv").scrollTop = 0; }catch(e){}
  }
  function open(back){
    inject(); S.back = back || null; S.sub = false; S.nav = null;
    page('<h2>Loading…</h2>');
    navLoad().then(function(n){
      if (!n || n.err){ page('<h2>Novel</h2><p class="sub">' + (n && n.err === "unpaid" ? "" : "Novel is not open for you yet.") + '</p>', "exit"); return; }
      var o = n.open; if (!o.length){ page('<h2>Novel</h2><p class="sub">Your units will appear here soon.</p>', "exit"); return; }
      var f = null; for (var i = 0; i < o.length; i++) if (n.keys.indexOf(o[i]) < 0){ f = o[i]; break; }
      var ret = false, cur = 0; try{ ret = sessionStorage.getItem("nnt_ret") === "1"; cur = +sessionStorage.getItem("nvcur") || 0; }catch(e){}
      S.unit = (ret && o.indexOf(cur) >= 0) ? cur : (f !== null ? f : o[o.length - 1]);
      try{ sessionStorage.setItem("nvcur", String(S.unit)); }catch(e){}
      if (ret){ S.sub = true; unitPage(); } else homePage();
    }).catch(function(){ page('<h2>Novel</h2><p class="sub">No internet connection. Please try again.</p>', "exit"); });
  }
  /* Proceed: refresh the map from the server, then open the next unit */
  function moveOn(btn){
    var cur = S.unit, old = btn ? btn.innerHTML : "";
    if (nvCanNext()){ var fast = nvNext(); goUnit(fast); navLoad().then(function(){ if (S.unit === fast) prefetchNear(); }, function(){}); return; }
    if (btn){ btn.disabled = true; btn.innerHTML = "<b>Opening…</b>"; }
    navLoad().then(function(n){
      if (!n || n.err){ nvNote("Please try again in a moment."); if (btn){ btn.disabled = false; btn.innerHTML = old; } return; }
      S.unit = cur;
      var nx = nvNext();
      if (nx !== null && nvCanNext()){ goUnit(nx); return; }
      if (btn){ btn.innerHTML = old; }
      S.sub = true; unitPage();
      nvNote(nx === null ? "The next unit opens soon." : nvDone(cur) ? "Your class test is waiting for you in the classroom. Finish it there to open Unit " + nx + "." : "Finish all four steps of Unit " + cur + " to earn the key. Then Proceed opens.");
    }).catch(function(){ if (btn){ btn.disabled = false; btn.innerHTML = old; } nvNote("No internet connection. Please try again."); });
  }
  /* our own message boxes (instead of the small grey browser pop-ups) */
  function nvBox(title, body, btns){
    var o = document.getElementById("nvbox"); if (o) o.remove();
    o = document.createElement("div"); o.id = "nvbox";
    o.style.cssText = "position:fixed;inset:0;z-index:100000;background:rgba(8,6,32,.78);display:flex;align-items:center;justify-content:center;padding:20px;font-family:inherit";
    o.innerHTML = '<div style="max-width:440px;width:100%;background:linear-gradient(160deg,#171446,#2a1a6e);color:#fff;border-radius:22px;padding:24px 22px;box-shadow:0 20px 60px rgba(0,0,0,.5);border:1.5px solid rgba(255,255,255,.35)"><h3 style="margin:0 0 10px;font-size:24px;color:#fff">' + title + '</h3><div style="font-size:17px;line-height:1.5;color:#f6f1ff" id="nvboxb">' + body + '</div><div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap" id="nvboxbtn"></div></div>';
    document.body.appendChild(o);
    var bx = o.querySelector("#nvboxbtn");
    btns.forEach(function(b){ var x = document.createElement("button"); x.type = "button"; x.textContent = b.t; x.style.cssText = "flex:1;min-width:120px;border:0;border-radius:12px;padding:13px 16px;font:800 17px system-ui;cursor:pointer;" + (b.ok ? "color:#fff;background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%)" : "color:#fff;background:rgba(255,255,255,.2)"); x.onclick = function(){ o.remove(); if (b.f) b.f(); }; bx.appendChild(x); });
    var ul = o.querySelector("ul"); if (ul) ul.style.cssText = "margin:0;padding-left:20px";
  }
  function nvAsk(title, body, okText, onOk){ nvBox(title, body, [{t: "Cancel"}, {t: okText || "OK", ok: 1, f: onOk}]); }
  function nvNote(text){ nvBox("Notice", text, [{t: "OK", ok: 1}]); }

  function confetti(){
    try{ if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return; }catch(e){}
    var host = el("newv"); if (!host) return;
    var c = document.createElement("canvas"); c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:99999"; document.body.appendChild(c);
    var W = c.width = window.innerWidth, H = c.height = window.innerHeight, x = c.getContext("2d"), cols = ["#46f0c4","#7c5cff","#ffb86b","#ff7a8a","#ff5fa8","#ffe27a"], P = [];
    for (var i = 0; i < 140; i++) P.push({x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 3, r: 4 + Math.random() * 5, c: cols[i % cols.length], a: Math.random() * 6, va: (Math.random() - .5) * .4});
    var t0 = Date.now();
    (function tick(){
      var t = Date.now() - t0; x.clearRect(0, 0, W, H);
      P.forEach(function(q){ q.vy += .32; q.vx *= .995; q.x += q.vx; q.y += q.vy; q.a += q.va; x.save(); x.translate(q.x, q.y); x.rotate(q.a); x.globalAlpha = Math.max(0, 1 - t / 3200); x.fillStyle = q.c; x.fillRect(-q.r, -q.r / 2, q.r * 2, q.r); x.restore(); });
      if (t < 3200) requestAnimationFrame(tick); else c.remove();
    })();
  }

  /* right after a step is finished, the next one starts by itself (a few seconds to get ready, and a way to say "not now") */
  function autoNext(name, btnId, starter){
    var n = 5, tm = null;
    function stop(){ if (tm){ clearInterval(tm); tm = null; } }
    nvBox("Well done! Next: " + name, '<span id="nvcd">' + name + ' starts in ' + n + '…</span><br><small style="opacity:.8">Take a breath. You can also start it later from this page.</small>', [
      {t: "Not now", f: stop}, {t: "Start now", ok: 1, f: function(){ stop(); var b = el(btnId); if (b) starter(b); }}]);
    tm = setInterval(function(){
      n--; var c = el("nvcd");
      if (!c){ stop(); return; }
      if (n <= 0){ stop(); var o = el("nvbox"); if (o) o.remove(); var b = el(btnId); if (b) starter(b); return; }
      c.textContent = name + " starts in " + n + "…";
    }, 1000);
  }
  function keyScreen(){
    var nu = nvNext(); try{ sessionStorage.setItem("nvks" + S.unit, "1"); }catch(e){}
    page('<div style="text-align:center;padding:18px 0 6px"><div class="nvkey" style="width:260px;max-width:78%;margin:0 auto;filter:drop-shadow(0 14px 26px rgba(255,196,40,.5))">'+keySvg()+'</div>'
      + '<h2 style="margin:6px 0 4px">You earned the key!</h2><p class="sub">Unit ' + S.unit + ' is complete. Your class test for this unit is now open.</p>'
      + (nu !== null && !nvCanNext() ? '<div class="st" style="text-align:left;margin:14px auto 0;max-width:420px"><div class="n">★</div><div><b>Your class test is waiting for you in the classroom</b><small>Finish it there to earn the class key. Then Unit ' + nu + ' opens.</small></div></div>' : '')
      + (nu !== null && nvCanNext() ? '<button id="nvnext" type="button" class="go" style="margin-top:14px;width:100%;max-width:420px;padding:16px 18px;font-size:19px">Proceed to Unit ' + nu + ' →</button>' : '<p class="sub">The next unit opens soon.</p>')
      + '<button id="nvrev" type="button" style="margin-top:12px;width:100%;max-width:420px;padding:13px 18px;border:2px solid rgba(255,255,255,.35);border-radius:14px;background:transparent;color:inherit;font:700 17px/1.2 inherit;font-family:inherit;cursor:pointer">← Go back to Unit ' + S.unit + '</button></div>');
    var st = document.createElement("style"); st.textContent = "@keyframes nvk{0%{transform:scale(.3) rotate(-25deg);opacity:0}60%{transform:scale(1.15) rotate(8deg);opacity:1}100%{transform:scale(1) rotate(0)}}.nvkey{animation:nvk .9s ease-out}"; el("newv").appendChild(st);
    if (el("nvnext")) el("nvnext").onclick = function(){ moveOn(this); };
    el("nvrev").onclick = function(){ S.review = true; unitPage(); };
    setTimeout(confetti, 350);
  }
  function choiceScreen(){
    var h = '<h2>Unit ' + S.unit + '</h2><p class="sub">How do you want to start this unit?</p>';
    if (!S.track){
      h += '<div class="st"><div class="n">1</div><div><b>Choose your track</b><small>You choose once. Only your teacher can change it later.</small></div></div>'
        + '<button class="go" id="nvtml" type="button">Multi-level</button> <button class="go" id="nvtie" type="button" style="margin-left:8px">IELTS</button>';
      page(h, true);
      ["ml","ie"].forEach(function(t){ var b = el("nvt" + t); if (b) b.onclick = function(){ nvAsk("Choose " + (t === "ie" ? "IELTS" : "Multi-level") + "?", "You cannot change this later without your teacher.", "Yes, choose it", function(){ rpc("nv_set_track", {tok: tok(), trk: t}).then(function(r){ if (r && (r.ok || r.err === "fixed")) unitPage(); }); }); }; });
      return;
    }
    h += '<div class="st"><div class="n">📚</div><div><b>Study deeply</b><small>Videos, then the home test, writing and speaking. The full way. Best if this unit is new for you.</small></div></div>'
      + '<button class="go" id="nvdeep" type="button" style="background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%);width:100%">Study deeply</button>'
      + '<div class="st" style="margin-top:18px"><div class="n">⚡</div><div><b>Jump to the test</b><small>Skip the videos and take the home test now. You need at least ' + S.jpct + '% to go on. You can jump only <b>once</b> for this unit. If you do not reach ' + S.jpct + '%, you will start from the videos. If you leave the test window 3 times, the test is cancelled.</small></div></div>'
      + '<button class="go" id="nvjump" type="button" style="width:100%">Jump to the test</button>';
    page(h);
    el("nvdeep").onclick = function(){ S.chose = S.unit; unitPage(); };
    el("nvjump").onclick = function(){
      var jb = this;
      nvAsk("⚡ Jump to the test?", "<ul><li>You <b>skip the videos</b>.</li><li>You need at least <b>" + S.jpct + "%</b> to go on.</li><li>You can do this <b>only once</b> for this unit. It starts now and cannot be paused.</li><li>If you <b>leave the test window 3 times</b>, it is cancelled.</li><li>If you do not reach " + S.jpct + "%, you start from the videos.</li></ul>", "Start the test", function(){ startHome(jb, true); });
    };
  }
  /* a small memory of the units already opened, so moving between units is instant; the fresh answer always follows */
  var CACHE = {};
  function fetchUnit(u){ return Promise.all([rpc("nv_stage", {tok: tok(), u: u}), rpc("nv_state", {tok: tok(), u: u})]); }
  function skeleton(u){
    page('<div class="hb"><div class="hero"><div class="ring">' + ringSvg(0) + '<div class="c"><small>Unit</small><b>' + u + '</b></div></div><div><h2>Unit ' + u + ' · Learning Flow</h2><p class="sub">Opening…</p></div></div><div class="sk"></div><div class="sk"></div><div class="sk"></div></div>', true);
  }
  function prefetchNear(){
    var us = [nvPrev(), nvCanNext() ? nvNext() : null];
    us.forEach(function(v){ if (v === null || CACHE[v]) return; fetchUnit(v).then(function(p){ CACHE[v] = {x: p[0], r: p[1], sig: JSON.stringify(p)}; }).catch(function(){}); });
  }
  function unitPage(){
    S.sub = true; var u = S.unit, F = {kseen: false, ret: false, auto: ""};
    try{ F.kseen = sessionStorage.getItem("nvks" + u) === "1"; F.ret = sessionStorage.getItem("nnt_ret") === "1"; sessionStorage.removeItem("nnt_ret"); F.auto = sessionStorage.getItem("nvauto") || ""; sessionStorage.removeItem("nvauto"); }catch(e){}
    var c = CACHE[u];
    if (c && !F.ret) paintUnit(c.x, c.r, F); else skeleton(u);
    fetchUnit(u).then(function(p){
      var sig = JSON.stringify(p); CACHE[u] = {x: p[0], r: p[1], sig: sig};
      if (S.unit !== u || !S.sub || el("nvbegin")) return;
      if (!(c && !F.ret && c.sig === sig)) paintUnit(p[0], p[1], F);
      setTimeout(prefetchNear, 400);
    }).catch(function(){ if (!c) page('<h2>Novel</h2><p class="sub">No internet connection. Please try again.</p>', true); });
  }
  function paintUnit(x, r, F){
    S.st = x && x.ok ? x.st : null; S.track = x && x.ok ? x.track : null; S.teacher = !!(x && x.ok && x.teacher); S.jump = !!(x && x.ok && x.jump); S.testacct = !!(x && x.ok && x.testacct); S.jpct = x && x.ok ? x.jpct : 80;
    {
      if (!r || !r.ok){ page('<h2>Unit ' + S.unit + '</h2><p class="sub">' + (r && r.err === "closed" ? "This unit is not open yet. Your teacher will open it soon." : r && r.err === "locked" ? "Finish the earlier unit first." : "Not available right now.") + ' <small style="opacity:.6">(' + esc((r && r.err) || "error") + ')</small></p>', true); return; }
      S.vids = r.videos;
      var kseen = F.kseen, ret = F.ret, auto = F.auto;
      if (S.st && S.st.key && S.nav && S.nav.keys.indexOf(S.unit) < 0) S.nav.keys.push(S.unit);
      /* coming back from the home test or the writing: stay on the steps; the key screen is only for finishing the last step */
      if (ret && !(S.st && S.st.speak)) kseen = true;
      /* the key screen is the celebration right after finishing the last step, not something to see again when moving between units */
      if (S.st && S.st.key && ret && S.st.speak && !kseen){ keyScreen(); return; }
      if (S.jump && S.chose !== S.unit){ choiceScreen(); return; }
      var done = S.vids.filter(function(v){ return v.done; }).length, jumped = !!(S.st && S.st.jumped), all = jumped || done === S.vids.length;
      var st = S.st || {}, tn = S.track === "ie" ? "IELTS" : S.track === "ml" ? "Multi-level" : "", cta = "background:linear-gradient(135deg,#ffb86b 0%,#ff7a8a 55%,#ff5fa8 100%)";
      var tOK = !!st.test, wOK = !!st.essay, sOK = !!st.speak, key = !!st.key, oks = [all, tOK, wOK, sOK], nd = oks.filter(function(q){ return q; }).length;
      var cur = -1; for (var ci = 0; ci < 4; ci++) if (!oks[ci]){ cur = ci; break; }
      function node(kind, dot, body){ return '<div class="nd ' + kind + '"><div class="dot">' + dot + '</div><div class="bx">' + body + '</div></div>'; }
      var h = '<div class="hb"><div class="hero"><div class="ring">' + ringSvg(key ? 1 : nd / 4) + '<div class="c"><small>Unit</small><b>' + S.unit + '</b></div></div>'
        + '<div><h2>Unit ' + S.unit + ' · Learning Flow</h2><p class="sub">' + (key ? "Unit " + S.unit + " complete. The key is yours." : nd === 0 ? "Your adventure begins here." : nd + " of 4 steps done. Keep going.") + '</p>'
        + (tn ? '<span class="chip">Track · ' + tn + '</span>' : '<span class="chip">Track · you choose after the videos</span>') + '<span class="chip">Unit ' + S.unit + ' of 20</span></div></div><div class="path">';
      /* 1 videos */
      var b1 = '<b>Watch the videos</b><small>' + (jumped ? "⏭ Skipped: you passed the jump test" : done + ' of ' + S.vids.length + ' finished') + '</small>';
      if (!all){
        if (S.vids.length) b1 += '<small style="margin-top:8px">🔑 While you watch, 3 secret words pop up at random moments. Remember them: you type them at the end of each video.</small>';
        S.vids.forEach(function(v){
          var pc = Math.min(100, Math.round(v.covered / v.target * 100)), lab = v.done ? "✅ Finished" : v.locked ? "🔒 Locked" : v.covered >= v.target ? "Type the secret words" : v.covered ? "Continue" : "Start";
          b1 += '<div class="vc"><div class="t">🎬 ' + esc(v.title) + '<span>' + fmt(v.len) + '</span></div><div class="bar"><i style="width:' + (v.done ? 100 : pc) + '%"></i></div><small>Watch at least ' + fmt(v.target) + ' (90%). ' + (v.done ? "Done." : fmt(Math.min(v.covered, v.target)) + " watched.") + (v.redo ? ' Restarts: ' + v.redo + '.' : '') + '</small><br>'
            + '<button class="go" data-i="' + v.idx + '"' + (v.locked || v.done ? " disabled" : "") + ' type="button">' + lab + '</button></div>';
        });
      }
      h += node(all ? "done" : "now", all ? "✓" : "1", b1);
      /* 2 home test */
      var k2 = tOK ? "done" : cur === 1 ? "now" : (!all && !S.teacher) ? "wait" : "open", b2;
      if (tOK) b2 = '<b>Home test</b><small>Done · ' + Math.round(st.pct || 0) + '%</small>';
      else if (!all && !S.teacher) b2 = '<b>Home test</b><small>Opens after the videos · 91 questions, about 1 hour</small>';
      else if (!S.track) b2 = '<b>Choose your track</b><small>You choose once. Only your teacher can change it later.</small><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="go" id="nvtml" type="button">Multi-level</button><button class="go" id="nvtie" type="button">IELTS</button></div>';
      else b2 = '<b>Home test</b><small>91 questions · about 1 hour · ' + tn + '. Listening needs headphones. Do it in one go.</small>' + (st.cancels ? '<small style="color:#ffe27a;font-weight:700;margin-top:6px">⚠ Your last try was cancelled (you left the test window 3 times). You must take the test again.</small>' : '') + '<button class="go" id="nvstarttest" type="button" style="' + cta + '">Start the home test</button>';
      h += node(k2, tOK ? (st.cancelled ? "✕" : "✓") : "2", b2);
      /* 3 writing */
      var k3 = wOK ? "done" : tOK ? "now" : "wait", b3;
      if (wOK) b3 = '<b>Writing</b><small>Done</small>';
      else if (tOK) b3 = '<b>Writing</b><small>' + (S.track === "ie" ? "40 minutes · at least 250 words" : "30 minutes · at least 180 words") + '. Do it in one go.</small><button class="go" id="nvstartwrite" type="button" style="' + cta + '">Start the writing</button>';
      else b3 = '<b>Writing</b><small>Opens after the home test · put the unit on paper</small>';
      h += node(k3, wOK ? "✓" : "3", b3);
      /* 4 speaking */
      var k4 = sOK ? "done" : wOK ? "now" : "wait", b4;
      if (sOK) b4 = '<b>Speaking</b><small>Done</small>';
      else if (wOK) b4 = '<b>Speaking</b><small>About 20 minutes. You record your voice on this device. Nobody marks it. Allow the microphone.</small><button class="go" id="nvstartspeak" type="button" style="' + cta + '">Start the speaking</button>';
      else b4 = '<b>Speaking</b><small>Opens after the writing · use your own voice</small>';
      h += node(k4, sOK ? "✓" : "4", b4);
      /* the key */
      h += key ? node("done", "★", '<b>Key earned</b><small>Your class test for Unit ' + S.unit + ' is open.</small>') : node("wait", '<span class="kd">' + keySvg() + '</span>', '<b>The key</b><small>Finish all four steps and it opens your class test for Unit ' + S.unit + '.</small>');
      h += '</div></div>';
      if (S.teacher){ h += '<div class="st"><div class="n">👑</div><div><b>Teacher: open any step</b><small>Your time and results are still recorded. Nothing is blocked for you.</small></div></div>'
          + '<button class="go" id="nvtt" type="button">Home test</button> <button class="go" id="nvtw" type="button" style="margin-left:6px">Writing</button> <button class="go" id="nvts" type="button" style="margin-left:6px">Speaking</button>'; }
      page(h, true);
      ["ml","ie"].forEach(function(t){ var b = el("nvt" + t); if (b) b.onclick = function(){ nvAsk("Choose " + (t === "ie" ? "IELTS" : "Multi-level") + "?", "You cannot change this later without your teacher.", "Yes, choose it", function(){ rpc("nv_set_track", {tok: tok(), trk: t}).then(function(r){ if (r && (r.ok || r.err === "fixed")) unitPage(); }); }); }; });
      if (el("nvstarttest")) el("nvstarttest").onclick = function(){ startHome(this); };
      if (el("nvstartwrite")) el("nvstartwrite").onclick = function(){ startWrite(this); };
      if (el("nvtt")) el("nvtt").onclick = function(){ if (!S.track){ nvNote("Choose a track first (the Multi-level / IELTS buttons)."); return; } startHome(this); };
      if (el("nvtw")) el("nvtw").onclick = function(){ startWrite(this); };
      if (el("nvts")) el("nvts").onclick = function(){ startSpeak(this); };
      if (el("nvstartspeak")) el("nvstartspeak").onclick = function(){ startSpeak(this); };
      Array.prototype.forEach.call(el("newv").querySelectorAll(".go[data-i]"), function(b){ b.onclick = function(){ play(+b.getAttribute("data-i")); }; });
      if (ret && auto === "write" && st.test && !st.essay && el("nvstartwrite")) autoNext("Writing", "nvstartwrite", startWrite);
      else if (ret && auto === "speak" && st.essay && !st.speak && el("nvstartspeak")) autoNext("Speaking", "nvstartspeak", startSpeak);
    }
  }
  /* ---------- writing ---------- */
  function startWrite(btn){
    CACHE = {};
    try{ sessionStorage.setItem("nvauto", "speak"); }catch(e){}
    btn.disabled = true; btn.textContent = "Opening… this can take a few seconds.";
    rpc("nv_write", {tok: tok(), u: S.unit}).then(function(r){
      if (!r || !r.ok){ btn.disabled = false; btn.textContent = "Start the writing"; if (r && r.err === "done") unitPage(); else nvNote("The writing is not ready. Tell your teacher."); return; }
      return fetchDecrypt(r.path, r.key).then(function(buf){
        var html = new TextDecoder("utf-8").decode(buf);
        return fetch("shim.js", {cache: "no-store"}).then(function(x){ return x.text(); }).then(function(shim){
          var cfg = "window.__PORTAL__=" + JSON.stringify({url: PORTAL.URL, key: PORTAL.KEY, tok: tok(), unit: "U" + S.unit, nvunit: S.unit, teacher: !!S.teacher, name: r.name, mode: "write", track: r.track}) + ";";
          var tag = "<script>" + cfg + "\n" + shim.replace(/<\/script/gi, "<\\/script") + "<\/script>";
          var m = html.match(/<head[^>]*>/i); html = m ? html.replace(m[0], m[0] + tag) : tag + html;
          document.open(); document.write(html); document.close();
        });
      });
    }).catch(function(e){ btn.disabled = false; btn.textContent = "Start the writing"; nvNote("Could not open the writing. Check the internet and try again."); });
  }
  /* ---------- speaking ---------- */
  function startSpeak(btn){
    CACHE = {};
    btn.disabled = true; btn.textContent = "Opening… this can take a few seconds.";
    rpc("nv_speak", {tok: tok(), u: S.unit}).then(function(r){
      if (!r || !r.ok){ btn.disabled = false; btn.textContent = "Start the speaking"; if (r && r.err === "done" || r.err === "essay") unitPage(); else nvNote("The speaking is not ready. Tell your teacher."); return; }
      return fetchDecrypt(r.path, r.key).then(function(buf){
        var html = new TextDecoder("utf-8").decode(buf);
        return fetch("shim.js", {cache: "no-store"}).then(function(x){ return x.text(); }).then(function(shim){
          var cfg = "window.__PORTAL__=" + JSON.stringify({url: PORTAL.URL, key: PORTAL.KEY, tok: tok(), unit: "U" + S.unit, nvunit: S.unit, teacher: !!S.teacher || !!S.testacct, name: r.name, mode: "speak", track: r.track}) + ";";
          var tag = "<script>" + cfg + "\n" + shim.replace(/<\/script/gi, "<\\/script") + "<\/script>";
          var m = html.match(/<head[^>]*>/i); html = m ? html.replace(m[0], m[0] + tag) : tag + html;
          document.open(); document.write(html); document.close();
        });
      });
    }).catch(function(e){ btn.disabled = false; btn.textContent = "Start the speaking"; nvNote("Could not open the speaking. Check the internet and try again."); });
  }
  /* ---------- home test ---------- */
  function startHome(btn, jump){
    CACHE = {};
    try{ sessionStorage.setItem("nvauto", "write"); }catch(e){}
    var lab0 = btn.textContent;
    btn.disabled = true; btn.textContent = "Opening… this can take a few seconds.";
    rpc(jump ? "nv_jump_start" : "nv_test", {tok: tok(), u: S.unit}).then(function(r){
      if (!r || !r.ok){ btn.disabled = false; btn.textContent = jump ? lab0 : "Start the home test"; if (jump && r && r.err === "nojump"){ S.chose = S.unit; unitPage(); } else if (r && r.err === "done") unitPage(); else nvNote(r && r.err === "videos" ? "Finish all the videos first." : "The home test is not ready. Tell your teacher."); return; }
      return fetchDecrypt(r.path, r.key).then(function(buf){
        var html = new TextDecoder("utf-8").decode(buf);
        return fetch("shim.js", {cache: "no-store"}).then(function(x){ return x.text(); }).then(function(shim){
          var cfg = "window.__PORTAL__=" + JSON.stringify({url: PORTAL.URL, key: PORTAL.KEY, tok: tok(), unit: "U" + S.unit, nvunit: S.unit, teacher: !!S.teacher, name: r.name, mode: "home", track: r.track, pass: r.pass, jump: !!jump, jpct: r.jpct}) + ";";
          var tag = "<script>" + cfg + "\n" + shim.replace(/<\/script/gi, "<\\/script") + "<\/script>";
          var m = html.match(/<head[^>]*>/i); html = m ? html.replace(m[0], m[0] + tag) : tag + html;
          document.open(); document.write(html); document.close();
        });
      });
    }).catch(function(e){ btn.disabled = false; btn.textContent = lab0; nvNote("Could not open the test. Check the internet and try again."); });
  }
  /* ---------- player ---------- */
  function play(idx){
    CACHE = {};
    Z.z = 1; Z.x = 0; Z.y = 0; try{ zApply(); }catch(e){}
    setTimeout(fitView, 600);
    var v = S.vids.filter(function(x){ return x.idx === idx; })[0]; if (!v || !v.yt) return;
    S.cur = v; S.ack = v.wack || 0; S.mack = null; S.fails = 0; S.hidden = false; S.ready = false; S.lastPos = v.pos || 0;
    el("nvt").textContent = v.title; el("nvans").classList.remove("on"); el("nvwb").classList.remove("on"); el("nvov").classList.remove("on"); el("nvam").textContent = "";
    el("nvp").classList.add("on"); document.body.style.overflow = "hidden";
    paint(v.covered, v.target, v.wack || 0);
    if (!v.covered && !v.wack) showOv("🔑 Before you start", "3 secret words will pop up on the screen while you watch, for about 9 seconds each. They come at different moments for every student. Remember or write them down. At the end you must type all 3 in order, or you watch the video again. Only real watching counts: do not pause for long, skip ahead or leave the screen.");
    loadYT(function(){
      el("nvyw").innerHTML = '<div id="nv_yt"></div>';
      S.pl = new YT.Player("nv_yt", {videoId: v.yt, host: "https://www.youtube-nocookie.com",
        playerVars: {rel: 0, modestbranding: 1, playsinline: 1, fs: 0, iv_load_policy: 3, start: Math.floor(v.pos || 0)},
        events: {onReady: function(){ setSpeed(1); }, onPlaybackRateChange: function(e){ if (e.data > 1.25) setSpeed(1.25); }}});
      clearInterval(S.hb); S.hb = setInterval(beat, 5000);
    });
  }
  function paint(cov, tgt, wack){
    el("nvbar").style.width = Math.min(100, cov / tgt * 100) + "%";
    el("nvinfo").textContent = "Watched " + fmt(Math.min(cov, tgt)) + " of " + fmt(tgt) + " needed (90% of the video)";
    el("nvstate").textContent = "🔑 Secret words seen: " + wack + " of 3. Remember them. You will type them at the end.";
  }
  function state(){
    var pl = S.pl; if (!pl || !pl.getPlayerState) return "pause";
    if (document.hidden) return "hidden";
    if (pl.getPlayerState() !== 1) return "pause";
    var r = pl.getPlaybackRate(); if (r > 1.25){ setSpeed(1.25); return "pause"; }
    if (pl.isMuted() || pl.getVolume() === 0) return "muted";
    return "play";
  }
  function beat(){
    if (!S.cur || !S.pl || !S.pl.getCurrentTime || S.busy) return;
    var st = state(), pos = S.pl.getCurrentTime(), spd = S.pl.getPlaybackRate ? S.pl.getPlaybackRate() : 1;
    S.busy = true;
    rpc("nv_beat", {tok: tok(), u: S.unit, i: S.cur.idx, pos: pos, st: st, spd: Math.min(spd, 1.25), ack: S.ack, mack: S.mack}, 12000).then(function(r){
      S.busy = false; S.fails = 0; el("nvov").classList.contains("off");
      if (!r || !r.ok){ if (r && r.err){ try{ S.pl.pauseVideo(); }catch(e){} if (r.err !== "unpaid") showOv("Cannot continue", "This video is not available right now. Go back and try again."); } return; }
      if (r.done){ finish(); return; }
      S.mack = null; paint(r.covered, r.target, r.wack);
      if (r.word && r.word.n > S.ack){ S.ack = r.word.n; showWord(r.word); }
      if (r.msg){ S.mack = r.msg.id; showOv("Message from your teacher", r.msg.body); }
      if (r.ready){ var an = el("nvans"); if (!an.classList.contains("on")){ an.classList.add("on"); try{ an.scrollIntoView({behavior:"smooth",block:"end"}); }catch(e){} } }
    }).catch(function(){
      S.busy = false; S.fails++;
      if (S.fails >= 2){ try{ S.pl.pauseVideo(); }catch(e){} showOv("Connection lost", "The video was paused because the internet is not working. Time without internet does not count."); }
    });
  }
  function showWord(w){
    el("nvwn").textContent = "SECRET WORD " + w.n + " OF 3 · REMEMBER IT"; el("nvww").textContent = w.text; el("nvwb").classList.add("on");
    clearTimeout(S.wordT); S.wordT = setTimeout(function(){ el("nvwb").classList.remove("on"); }, 9000);
  }
  function sendWords(){
    var a = [el("nva1").value, el("nva2").value, el("nva3").value]; if (!a[0].trim() || !a[1].trim() || !a[2].trim()){ el("nvam").textContent = "Type all 3 words."; return; }
    el("nvsend").disabled = true;
    rpc("nv_answer", {tok: tok(), u: S.unit, i: S.cur.idx, a: a}).then(function(r){
      el("nvsend").disabled = false;
      if (r && r.ok){ finish(); return; }
      if (r && r.err === "redo"){ try{ S.pl.pauseVideo(); }catch(e){} stopPlayer(); showOv("Not correct", "At least one word was wrong, so you need to watch this video again from the start. New secret words will appear."); el("nvok").onclick = function(){ el("nvov").classList.remove("on"); el("nvok").onclick = function(){ el("nvov").classList.remove("on"); }; leave(); }; return; }
      el("nvam").textContent = "Not ready yet. Keep watching.";
    }).catch(function(){ el("nvsend").disabled = false; el("nvam").textContent = "No internet. Try again."; });
  }
  function stopPlayer(){ clearInterval(S.hb); S.hb = null; try{ if (S.pl && S.pl.destroy) S.pl.destroy(); }catch(e){} S.pl = null; }
  function finish(){
    stopPlayer(); showOv("Video finished ✅", "Well done! The next step is now open."); el("nvok").onclick = function(){ el("nvov").classList.remove("on"); el("nvok").onclick = function(){ el("nvov").classList.remove("on"); }; leave(); };
  }
  function leave(){
    if (S.pl && S.cur) beat();
    setTimeout(function(){
      stopPlayer(); S.cur = null;
      try{ if (document.fullscreenElement || document.webkitFullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document); }catch(e){}
      el("nvp").classList.remove("on"); el("nvov").classList.remove("on"); el("nvyw").innerHTML = '<div id="nv_yt"></div>';
      unitPage();
    }, 400);
  }
  function close(){ stopPlayer(); S.cur = null; var p = el("nvp"); if (p) p.classList.remove("on"); }
  window.NV = {open: open, close: close};
})();
