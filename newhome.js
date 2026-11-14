/* NNT School portal: the Novel home-practice area (videos first). */
(function(){
  var CSS = ''
  + '#newv{display:block;overflow-y:auto;text-align:left;padding:0;background:radial-gradient(ellipse 70% 40% at 15% 0%,rgba(0,229,195,.30),rgba(0,229,195,0) 70%),radial-gradient(ellipse 60% 45% at 100% 30%,rgba(61,123,255,.26),rgba(61,123,255,0) 70%),radial-gradient(ellipse 70% 40% at 0% 100%,rgba(143,107,255,.18),rgba(143,107,255,0) 70%),linear-gradient(180deg,#050c18 0%,#071a2e 100%);background-attachment:fixed}#newv .nw{max-width:760px;margin:0 auto;padding:18px 16px 60px}'
  + '#newv .nbk{background:transparent;border:1.5px solid rgba(255,255,255,.45);color:#fff;border-radius:99px;padding:7px 16px;font:700 15px system-ui;cursor:pointer}'
  + '#newv h2{font-size:30px;margin:16px 0 2px;color:#fff}#newv .sub{color:#f0e9ff;font-size:16px;margin:0 0 18px;max-width:none}'
  + '#newv .st{display:flex;align-items:center;gap:14px;border-radius:18px;padding:16px;margin:12px 0;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);color:#fff}'
  + '#newv .st .n{color:#04121f;flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#19e6c1,#2f9bff);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px}'
  + '#newv .st.off{opacity:.5}#newv .st.off .n{background:rgba(255,255,255,.28)}#newv .st b{font-size:19px}#newv .st small{display:block;color:#f0e9ff;font-size:14px;margin-top:2px}'
  + '#newv .vc{border-radius:16px;padding:14px 16px;margin:10px 0;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.22);color:#fff}'
  + '#newv .vc .t{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:700}#newv .vc .t span{margin-left:auto;font-size:14px;color:#f0e9ff;font-weight:600;white-space:nowrap}'
  + '#newv .bar{height:10px;border-radius:9px;background:rgba(255,255,255,.18);margin:10px 0 6px;overflow:hidden}#newv .bar i{display:block;height:100%;background:linear-gradient(90deg,#19e6c1,#2f9bff);border-radius:9px}'
  + '#newv .vc small{color:#f0e9ff;font-size:14px}#newv .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#04121f;background:linear-gradient(135deg,#19e6c1,#2f9bff);cursor:pointer}#newv .go:disabled{background:#3a4470;color:#9aa5cc;cursor:default}'

  + '#newv .hbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 0}#newv .hbar button{border-radius:99px;padding:7px 14px;font:700 14px system-ui;cursor:pointer;color:#eaf6ff;background:rgba(255,255,255,.07);border:1px solid rgba(143,216,255,.3)}#newv .hbar button.paybtn{border:0;padding:5px 12px 5px 9px;color:#fff;box-shadow:0 0 0 2px rgba(255,255,255,.85),0 4px 16px rgba(0,0,0,.35)}#newv .hbar button.paybtn.g{background:linear-gradient(150deg,#16c784,#0a7a55)}#newv .hbar button.paybtn.a{background:linear-gradient(150deg,#ffb020,#d06e00)}#newv .hbar button.paybtn.r{background:linear-gradient(150deg,#ff4d73,#b01c3a)}#newv .hbar button.paybtn b{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.35)}#newv .hb{position:relative}#newv .hero{display:flex;align-items:center;gap:18px;margin:14px 0 6px}#newv .ring{flex:none;position:relative;width:118px;height:118px}#newv .ring svg{width:118px;height:118px;transform:rotate(-90deg)}#newv .ring .c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1}#newv .ring .c small{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8fd8ff}#newv .ring .c b{font-size:38px;color:#eaf6ff}'
  + '#newv .chip{display:inline-block;border-radius:99px;padding:5px 12px;font:700 13px system-ui;background:rgba(77,255,216,.12);border:1px solid rgba(77,255,216,.4);color:#8cffe6;margin:0 6px 6px 0}'
  + '#newv .hb h2{margin:0 0 6px;font-size:27px;color:#eaf6ff}#newv .hb p.sub{margin:0 0 8px;color:#a9c6dc;font-size:15px}'
  + '#newv .path{position:relative;margin:18px 0 8px;padding-left:0}#newv .path:before{content:"";position:absolute;left:25px;top:24px;bottom:30px;width:3px;border-radius:3px;background:linear-gradient(180deg,#4dffd8 0%,#2f9bff 38%,rgba(47,155,255,.0) 80%)}'
  + '#newv .nd{position:relative;display:flex;gap:14px;align-items:flex-start;margin:0 0 14px}#newv .nd .dot{flex:none;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:800 19px system-ui;background:#0a2238;border:2px solid rgba(143,216,255,.3);color:#8fd8ff;position:relative;z-index:1}'
  + '#newv .nd .bx{flex:1;border-radius:18px;padding:14px 16px;background:rgba(255,255,255,.05);border:1px solid rgba(143,216,255,.18);color:#eaf6ff;position:relative;overflow:hidden}#newv .nd .bx b{font-size:18px;display:block}#newv .nd .bx small{display:block;color:#a9c6dc;font-size:14px;margin-top:3px;line-height:1.35}'
  + '#newv .nd.done .dot{background:linear-gradient(135deg,#19e6c1,#2f9bff);color:#04121f;border-color:transparent}#newv .nd.done .bx{opacity:.8}'
  + '#newv .nd.now .dot{background:#04121f;border-color:#4dffd8;color:#4dffd8;box-shadow:0 0 0 0 rgba(77,255,216,.6);animation:nvpulse 2s infinite}#newv .nd.now .bx{background:linear-gradient(160deg,rgba(77,255,216,.14),rgba(47,155,255,.10));border:1.5px solid rgba(77,255,216,.55);box-shadow:0 10px 40px -12px rgba(77,255,216,.45)}'
  + '#newv .nd.now .go{width:100%;margin-top:12px;padding:14px 18px;font-size:17px}'
  + '#newv .nd .dot.kd svg{width:34px;height:auto;opacity:.55;filter:grayscale(.6)}#newv .hb{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}#newv .nd.mist .dot{background:#0a1a2c;border-color:rgba(143,216,255,.14);color:rgba(143,216,255,.45)}#newv .nd.mist .bx{border-style:dashed;border-color:rgba(143,216,255,.14)}#newv .nd.mist .bx .in{filter:blur(5.5px);opacity:.55;user-select:none}'
  + '#newv .nd.mist .bx:after{content:"";position:absolute;inset:-30%;background:radial-gradient(closest-side,rgba(190,225,255,.22),rgba(190,225,255,0)) 0 0/60% 90% no-repeat,radial-gradient(closest-side,rgba(190,225,255,.18),rgba(190,225,255,0)) 100% 100%/70% 90% no-repeat;animation:nvfog 14s ease-in-out infinite alternate;pointer-events:none}'
  + '#newv .nd.mist .bx .tag{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;z-index:2;font:700 13px system-ui;letter-spacing:.08em;color:#cfe8ff;text-transform:uppercase}'
  + '#newv .nd.mist.m2 .bx .in{filter:blur(8px);opacity:.4}#newv .nd.mist.m3 .bx .in{filter:blur(11px);opacity:.28}'
  + '#newv .rw{margin:22px 0 6px;border-radius:22px;padding:18px;background:linear-gradient(160deg,rgba(143,107,255,.16),rgba(47,155,255,.10));border:1px solid rgba(143,216,255,.28);color:#eaf6ff;position:relative;overflow:hidden}#newv .rw h3{margin:0 0 4px;font-size:18px;color:#eaf6ff}#newv .rw p{margin:0 0 10px;color:#a9c6dc;font-size:14px}#newv .rw .kk{display:flex;align-items:center;gap:12px}#newv .rw .kk svg{flex:none;width:92px;height:auto;filter:drop-shadow(0 6px 14px rgba(255,196,40,.35))}'
  + '#newv .rw .ch{display:flex;flex-wrap:wrap;gap:8px}#newv .rw .ch span{border-radius:12px;padding:8px 12px;font:700 13px system-ui;background:rgba(255,255,255,.08);border:1px solid rgba(143,216,255,.22)}#newv .rw .ch span.bl{filter:blur(4.5px);opacity:.6;user-select:none}'
  + '#newv .kgot{text-align:center;padding:10px 0 4px}#newv .kgot svg{width:230px;max-width:70%;height:auto;filter:drop-shadow(0 14px 26px rgba(255,196,40,.45))}'
  + '@keyframes nvpulse{70%{box-shadow:0 0 0 14px rgba(77,255,216,0)}100%{box-shadow:0 0 0 0 rgba(77,255,216,0)}}@keyframes nvfog{from{transform:translateX(-6%)}to{transform:translateX(8%)}}@keyframes nvfloat{0%,100%{transform:translateY(0) rotate(-14deg)}50%{transform:translateY(-6px) rotate(-10deg)}}#newv .rw .kk svg{animation:nvfloat 5s ease-in-out infinite}@media (prefers-reduced-motion:reduce){#newv *{animation:none!important}}'
  + '#nvp .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#04121f;background:linear-gradient(135deg,#19e6c1,#2f9bff);cursor:pointer}#nvp .go:disabled{background:#3a4470;color:#9aa5cc}#nvp h3,#nvp p{color:#fff}'
  + '#nvp{position:fixed;inset:0;z-index:95;background:#04071a;color:#fff;display:none;flex-direction:column;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;overflow-y:auto}#nvp.on{display:flex}'
  + '#nvp .tb{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0b1236;border-bottom:1px solid rgba(255,255,255,.14)}#nvp .tb b{font-size:16px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
  + '#nvp button.q{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5);border-radius:99px;padding:6px 13px;font:700 14px system-ui;cursor:pointer}#nvp button.q.on{background:#ff7a00;border-color:#ff7a00}'
  + '#nvp .vw{position:relative;width:100%;max-width:calc((100vh - 235px) * 1.7778);min-width:min(100%,320px);margin:0 auto;aspect-ratio:16/9;background:#000}#nvp .vw iframe,#nvp .vw #nv_yt{position:absolute;inset:0;width:100%;height:100%;border:0}'
  + '#nvp .pn{width:100%;max-width:900px;margin:0 auto;padding:12px 16px 30px;box-sizing:border-box}#nvp .row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0}#nvp .info{color:#f0e9ff;font-size:15px}'
  + '#nvp .bar{position:relative;height:14px;border-radius:9px;background:rgba(255,255,255,.18);margin:8px 0;overflow:hidden}#nvp .bar i{display:block;height:100%;background:linear-gradient(90deg,#ffb300,#ff7a00)}'
  + '#nvp .wb{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:5;background:linear-gradient(135deg,#19e6c1,#2f9bff);color:#fff;border-radius:18px;padding:12px 26px;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.6);display:none;max-width:92%}#nvp .wb.on{display:block}'
  + '#nvp .wb small{display:block;font-size:13px;font-weight:700;letter-spacing:.08em}#nvp .wb b{display:block;font-size:34px;letter-spacing:.12em}'
  + '#nvp .ov{position:fixed;inset:0;z-index:98;background:rgba(4,7,26,.94);display:none;align-items:center;justify-content:center;text-align:center;padding:24px}#nvp .ov.on{display:flex}#nvp .ov div{max-width:460px}#nvp .ov h3{font-size:28px;margin:8px 0}#nvp .ov p{color:#f6f1ff;font-size:18px;line-height:1.45;margin:6px 0 16px}'
  + '#nvp .ans{margin-top:14px;border-radius:16px;padding:14px;background:rgba(255,179,0,.14);border:2px solid #ffb300;display:none}#nvp .ans.on{display:block}#nvp .ans input{width:100%;box-sizing:border-box;margin:6px 0;padding:11px 12px;border-radius:10px;border:0;font:700 18px system-ui;text-transform:uppercase;letter-spacing:.08em}'
  + '@media(orientation:landscape) and (max-height:560px){#nvp .vw{max-width:calc(100vh * 1.7778)}}#nvp:fullscreen .vw,#nvp:-webkit-full-screen .vw{max-width:calc(100vh * 1.7778)}'
  + '@media(orientation:landscape) and (pointer:coarse){#nvp .vw{max-width:calc(100vh * 1.7778)}}#nvp .vw{overflow:hidden;flex:none}#nvp .yw{position:absolute;inset:0}#nvp .vw iframe,#nvp .vw #nv_yt{transform-origin:0 0;transform:scale(var(--z,1)) translate(var(--tx,0px),var(--ty,0px))}#nvp .zo{position:absolute;inset:0;z-index:3;display:none;touch-action:none;cursor:grab}#nvp .zo.on{display:block}#nvp .zr{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0}'
  + '#nvp .hint{display:none;color:#ffd77a;font-size:14px;margin:6px 0}@media(orientation:portrait) and (max-width:700px){#nvp .hint{display:block}}';
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
    return '<svg viewBox="0 0 120 120"><defs><linearGradient id="nvrg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4dffd8"/><stop offset="1" stop-color="#2f9bff"/></linearGradient></defs>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="rgba(143,216,255,.16)" stroke-width="9"/>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="url(#nvrg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * frac).toFixed(1) + ' ' + C.toFixed(1) + '"/></svg>';
  }
  /* the Novel home: where you are, what is next, and a hint of what waits in class */
  function hubPage(){
    S.sub = false;
    rpc("nv_stage", {tok: tok(), u: S.unit}).then(function(x){
      if (!x || !x.ok){ S.sub = true; unitPage(); return; }
      var st = x.st || {}, track = x.track, tn = track === "ie" ? "IELTS" : track === "ml" ? "Multi-level" : "";
      var vOK = !!st.jumped || (st.vtotal > 0 && st.vdone >= st.vtotal), tOK = !!st.test, wOK = !!st.essay, sOK = !!st.speak;
      var steps = [
        {k: "Watch the videos", ok: vOK, d: st.jumped ? "Skipped with the jump test" : (st.vdone || 0) + " of " + (st.vtotal || 0) + " finished", w: "Short videos with secret words to catch."},
        {k: "Home test", ok: tOK, d: tOK ? Math.round(st.pct || 0) + "%" : "Listening, grammar, vocabulary", w: "91 questions, about 1 hour."},
        {k: "Writing", ok: wOK, d: wOK ? "Done" : "Put the unit on paper", w: "Do it in one go."},
        {k: "Speaking", ok: sOK, d: sOK ? "Done" : "Use your own voice", w: "About 20 minutes."}];
      var cur = -1; for (var i = 0; i < steps.length; i++) if (!steps[i].ok){ cur = i; break; }
      var nd = steps.filter(function(q){ return q.ok; }).length, key = !!st.key;
      var pb = document.getElementById("paybtn"), hasPay = pb && !pb.classList.contains("hide");
      var h = '<div class="hb"><div class="hbar"><button id="nvhsw" type="button">⇄ Switch</button>' + (hasPay ? '<button id="nvhpay" type="button" class="' + pb.className.replace(/\bhide\b/, '') + '">' + pb.innerHTML + '</button>' : '') + '<button id="nvhout" type="button">Log out</button></div><div class="hero"><div class="ring">' + ringSvg(key ? 1 : nd / 4) + '<div class="c"><small>Unit</small><b>' + S.unit + '</b></div></div>'
        + '<div><h2>Your Novel journey</h2><p class="sub">' + (key ? "Unit " + S.unit + " complete. The key is yours." : nd === 0 ? "Your adventure begins here." : nd + " of 4 steps done. Keep going.") + '</p>'
        + (tn ? '<span class="chip">Track · ' + tn + '</span>' : '<span class="chip">Track · you choose after the videos</span>') + '<span class="chip">Unit ' + S.unit + ' of 20</span></div></div>';
      h += '<div class="path">';
      var mi = 0;
      steps.forEach(function(q, i){
        if (q.ok) h += '<div class="nd done"><div class="dot">✓</div><div class="bx"><b>' + q.k + '</b><small>' + q.d + '</small></div></div>';
        else if (i === cur) h += '<div class="nd now"><div class="dot">' + (i + 1) + '</div><div class="bx"><b>' + q.k + '</b><small>Your next step · ' + q.w + '</small><button class="go" id="nvhgo" type="button">' + (i === 0 && !(st.vdone > 0) ? "Begin" : "Continue") + ' →</button></div></div>';
        else { mi++; h += '<div class="nd mist m' + Math.min(mi, 3) + '"><div class="dot">' + (i + 1) + '</div><div class="bx"><div class="in"><b>' + q.k + '</b><small>' + q.w + '</small></div><span class="tag">Hidden in the mist</span></div></div>'; }
      });
      if (key) h += '<div class="nd done"><div class="dot">★</div><div class="bx"><b>Key earned</b><small>Your class test is open.</small></div></div>';
      else { mi++; h += '<div class="nd mist m3"><div class="dot kd">'+keySvg()+'</div><div class="bx"><div class="in"><b>The key</b><small>Something opens for you</small></div><span class="tag">Waiting at the end</span></div></div>'; }
      h += '</div>';
      if (key) h += '<div class="kgot">' + keySvg() + '</div><button class="go" id="nvhmove" type="button" style="width:100%;margin-top:6px;padding:15px 18px;font-size:17px">Move on to Unit ' + (S.unit + 1) + ' →</button><button class="go" id="nvhrev" type="button" style="width:100%;margin-top:10px;background:transparent;color:#eaf6ff;border:1.5px solid rgba(143,216,255,.4)">Look at Unit ' + S.unit + ' again</button>';
      else h += '<div class="rw"><div class="kk">' + keySvg() + '<div><h3>Waiting for you in class</h3><p>Finish this unit and the key is yours. It opens your class test for Unit ' + S.unit + '.</p></div></div>'
        + '<div class="ch"><span>Unit ' + S.unit + ' class test</span><span class="bl">Something extra</span><span class="bl">More to discover</span></div></div>';
      h += '</div>';
      page(h);
      var bk = el("nvback"); if (bk) bk.style.display = "none";
      S.hubOk = true;
      el("nvhsw").onclick = function(){ var b = document.getElementById("swbtn"); if (b) b.click(); };
      if (el("nvhpay")) el("nvhpay").onclick = function(){ pb.click(); };
      el("nvhout").onclick = function(){ nvAsk("Log out?", "You will need a new code from your teacher to log in again.", "Log out", function(){ if (window.NNT_OUT) window.NNT_OUT(); }); };
      if (el("nvhgo")) el("nvhgo").onclick = function(){ S.sub = true; unitPage(); };
      if (el("nvhmove")) el("nvhmove").onclick = function(){ moveOn(this); };
      if (el("nvhrev")) el("nvhrev").onclick = function(){ S.review = true; S.sub = true; unitPage(); };
    }).catch(function(){ page('<h2>Novel</h2><p class="sub">No internet connection. Please try again.</p>'); });
  }
  /* ---------- unit page ---------- */
  function page(html){ el("newv").innerHTML = '<div class="nw"><button class="nbk" id="nvback" type="button">← Back</button>' + html + '</div>'; el("nvback").onclick = function(){ if (S.sub && S.hubOk){ S.review = false; hubPage(); } else if (S.back) S.back(); }; }
  function open(back){
    inject(); S.back = back || null;
    page('<h2>Loading…</h2>');
    rpc("nv_units", {tok: tok()}).then(function(r){
      if (!r || !r.ok){ page('<h2>Novel</h2><p class="sub">' + (r && r.err === "unpaid" ? "" : "Novel is not open for you yet.") + '</p>'); return; }
      if (r.all_done){ page('<h2>All done for now ✅</h2><p class="sub">You have finished every unit that is open.' + (r.more ? ' The next unit opens soon.' : '') + '</p>'); return; }
      var u = r.units && r.units[0]; if (!u){ page('<h2>Novel</h2><p class="sub">Your units will appear here soon.</p>'); return; }
      S.unit = u.unit; S.hubOk = false; var ret = false; try{ ret = sessionStorage.getItem("nnt_ret") === "1"; }catch(e){} if (ret){ S.sub = true; unitPage(); } else hubPage();
    }).catch(function(){ page('<h2>Novel</h2><p class="sub">No internet connection. Please try again.</p>'); });
  }
  /* go to the next unit: ask the server which unit is next; if it still says this one, go to the next number anyway (the server then says if it is closed or locked) */
  function moveOn(btn){
    var cur = S.unit; if (btn){ btn.disabled = true; btn.textContent = "Opening Unit " + (cur + 1) + "…"; }
    rpc("nv_units", {tok: tok()}).then(function(r){
      if (r && r.ok && r.all_done){ S.st = null; S.review = false; page('<h2>All done for now ✅</h2><p class="sub">You have finished every unit that is open.' + (r.more ? ' The next unit opens soon.' : '') + '</p>'); return; }
      var nu = r && r.ok && r.units && r.units[0] ? r.units[0].unit : cur + 1;
      S.unit = nu > cur ? nu : cur + 1; S.st = null; S.review = false; S.chose = null; hubPage();
    }).catch(function(){ if (btn){ btn.disabled = false; btn.textContent = "Move on to Unit " + (cur + 1) + " →"; } nvNote("No internet connection. Please try again."); });
  }
  /* our own message boxes (instead of the small grey browser pop-ups) */
  function nvBox(title, body, btns){
    var o = document.getElementById("nvbox"); if (o) o.remove();
    o = document.createElement("div"); o.id = "nvbox";
    o.style.cssText = "position:fixed;inset:0;z-index:100000;background:rgba(20,5,70,.72);display:flex;align-items:center;justify-content:center;padding:20px;font-family:inherit";
    o.innerHTML = '<div style="max-width:440px;width:100%;background:linear-gradient(160deg,#0b2a4a,#0a6074);color:#fff;border-radius:22px;padding:24px 22px;box-shadow:0 20px 60px rgba(0,0,0,.5);border:1.5px solid rgba(255,255,255,.35)"><h3 style="margin:0 0 10px;font-size:24px;color:#fff">' + title + '</h3><div style="font-size:17px;line-height:1.5;color:#f6f1ff" id="nvboxb">' + body + '</div><div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap" id="nvboxbtn"></div></div>';
    document.body.appendChild(o);
    var bx = o.querySelector("#nvboxbtn");
    btns.forEach(function(b){ var x = document.createElement("button"); x.type = "button"; x.textContent = b.t; x.style.cssText = "flex:1;min-width:120px;border:0;border-radius:12px;padding:13px 16px;font:800 17px system-ui;cursor:pointer;" + (b.ok ? "color:#fff;background:linear-gradient(135deg,#19e6c1,#2f9bff)" : "color:#fff;background:rgba(255,255,255,.2)"); x.onclick = function(){ o.remove(); if (b.f) b.f(); }; bx.appendChild(x); });
    var ul = o.querySelector("ul"); if (ul) ul.style.cssText = "margin:0;padding-left:20px";
  }
  function nvAsk(title, body, okText, onOk){ nvBox(title, body, [{t: "Cancel"}, {t: okText || "OK", ok: 1, f: onOk}]); }
  function nvNote(text){ nvBox("Notice", text, [{t: "OK", ok: 1}]); }
  function keyScreen(){
    var nu = S.unit + 1; try{ sessionStorage.setItem("nvks" + S.unit, "1"); }catch(e){}
    page('<div style="text-align:center;padding:18px 0 6px"><div class="nvkey" style="width:260px;max-width:78%;margin:0 auto;filter:drop-shadow(0 14px 26px rgba(255,196,40,.5))">'+keySvg()+'</div>'
      + '<h2 style="margin:6px 0 4px">You earned the key!</h2><p class="sub">Unit ' + S.unit + ' is complete. Your class test for this unit is now open.</p>'
      + '<button id="nvnext" type="button" style="margin-top:14px;width:100%;max-width:420px;padding:16px 18px;border:0;border-radius:14px;background:linear-gradient(135deg,#19e6c1,#2f9bff);color:#fff;font:800 19px/1.2 inherit;font-family:inherit;box-shadow:0 5px 0 #0a7f9c;cursor:pointer">Move on to Unit ' + nu + ' →</button>'
      + '<button id="nvrev" type="button" style="margin-top:12px;width:100%;max-width:420px;padding:13px 18px;border:2px solid rgba(255,255,255,.35);border-radius:14px;background:transparent;color:inherit;font:700 17px/1.2 inherit;font-family:inherit;cursor:pointer">← Go back to Unit ' + S.unit + '</button></div>');
    var st = document.createElement("style"); st.textContent = "@keyframes nvk{0%{transform:scale(.3) rotate(-25deg);opacity:0}60%{transform:scale(1.15) rotate(8deg);opacity:1}100%{transform:scale(1) rotate(0)}}.nvkey{animation:nvk .9s ease-out}"; el("newv").appendChild(st);
    el("nvnext").onclick = function(){ moveOn(this); };
    el("nvrev").onclick = function(){ S.review = true; unitPage(); };
  }
  function choiceScreen(){
    var h = '<h2>Unit ' + S.unit + '</h2><p class="sub">How do you want to start this unit?</p>';
    if (!S.track){
      h += '<div class="st"><div class="n">1</div><div><b>Choose your track</b><small>You choose once. Only your teacher can change it later.</small></div></div>'
        + '<button class="go" id="nvtml" type="button">Multi-level</button> <button class="go" id="nvtie" type="button" style="margin-left:8px">IELTS</button>';
      page(h);
      ["ml","ie"].forEach(function(t){ var b = el("nvt" + t); if (b) b.onclick = function(){ nvAsk("Choose " + (t === "ie" ? "IELTS" : "Multi-level") + "?", "You cannot change this later without your teacher.", "Yes, choose it", function(){ rpc("nv_set_track", {tok: tok(), trk: t}).then(function(r){ if (r && (r.ok || r.err === "fixed")) unitPage(); }); }); }; });
      return;
    }
    h += '<div class="st"><div class="n">📚</div><div><b>Study deeply</b><small>Videos, then the home test, writing and speaking. The full way. Best if this unit is new for you.</small></div></div>'
      + '<button class="go" id="nvdeep" type="button" style="background:linear-gradient(135deg,#19e6c1,#2f9bff);width:100%">Study deeply</button>'
      + '<div class="st" style="margin-top:18px"><div class="n">⚡</div><div><b>Jump to the test</b><small>Skip the videos and take the home test now. You need at least ' + S.jpct + '% to go on. You can jump only <b>once</b> for this unit. If you do not reach ' + S.jpct + '%, you will start from the videos. If you leave the test window 3 times, the test is cancelled.</small></div></div>'
      + '<button class="go" id="nvjump" type="button" style="width:100%">Jump to the test</button>';
    page(h);
    el("nvdeep").onclick = function(){ S.chose = S.unit; unitPage(); };
    el("nvjump").onclick = function(){
      var jb = this;
      nvAsk("⚡ Jump to the test?", "<ul><li>You <b>skip the videos</b>.</li><li>You need at least <b>" + S.jpct + "%</b> to go on.</li><li>You can do this <b>only once</b> for this unit. It starts now and cannot be paused.</li><li>If you <b>leave the test window 3 times</b>, it is cancelled.</li><li>If you do not reach " + S.jpct + "%, you start from the videos.</li></ul>", "Start the test", function(){ startHome(jb, true); });
    };
  }
  function unitPage(){
    S.sub = true;
    rpc("nv_stage", {tok: tok(), u: S.unit}).then(function(x){ S.st = x && x.ok ? x.st : null; S.track = x && x.ok ? x.track : null; S.teacher = !!(x && x.ok && x.teacher); S.jump = !!(x && x.ok && x.jump); S.testacct = !!(x && x.ok && x.testacct); S.jpct = x && x.ok ? x.jpct : 80; return rpc("nv_state", {tok: tok(), u: S.unit}); }).then(function(r){
      if (!r || !r.ok){ page('<h2>Unit ' + S.unit + '</h2><p class="sub">' + (r && r.err === "closed" ? "This unit is not open yet. Your teacher will open it soon." : r && r.err === "locked" ? "Finish the earlier unit first." : "Not available right now.") + ' <small style="opacity:.6">(' + esc((r && r.err) || "error") + ')</small></p>'); return; }
      S.vids = r.videos;
      var kseen = false, ret = false; try{ kseen = sessionStorage.getItem("nvks" + S.unit) === "1"; ret = sessionStorage.getItem("nnt_ret") === "1"; sessionStorage.removeItem("nnt_ret"); }catch(e){}
      /* coming back from the home test or the writing: stay on the steps; the key screen is only for finishing the last step */
      if (ret && !(S.st && S.st.speak)) kseen = true;
      if (S.st && S.st.key && !S.review && !kseen){ keyScreen(); return; }
      if (S.jump && S.chose !== S.unit){ choiceScreen(); return; }
      var done = S.vids.filter(function(v){ return v.done; }).length, jumped = !!(S.st && S.st.jumped), all = jumped || done === S.vids.length;
      var h = '<h2>Unit ' + S.unit + ' · Home practice</h2><p class="sub">Do the steps in order. Each step opens after the one before it.</p>' + (S.vids.length && !(S.st && S.st.jumped) ? '<p class="sub" style="font-size:14px">🔑 While you watch, 3 secret words pop up at random moments. Remember them: you type them at the end of each video.</p>' : '');
      h += '<div class="st"><div class="n">' + (all ? "✓" : "1") + '</div><div><b>Watch the videos</b><small>' + (jumped ? "⏭ Skipped: you passed the jump test" : done + ' of ' + S.vids.length + ' finished') + '</small></div></div>';
      if (!all) S.vids.forEach(function(v){
        var pc = Math.min(100, Math.round(v.covered / v.target * 100)), lab = v.done ? "✅ Finished" : v.locked ? "🔒 Locked" : v.covered >= v.target ? "Type the secret words" : v.covered ? "Continue" : "Start";
        h += '<div class="vc"><div class="t">🎬 ' + esc(v.title) + '<span>' + fmt(v.len) + '</span></div><div class="bar"><i style="width:' + (v.done ? 100 : pc) + '%"></i></div><small>Watch at least ' + fmt(v.target) + ' (90%). ' + (v.done ? "Done." : fmt(Math.min(v.covered, v.target)) + " watched.") + (v.redo ? ' Restarts: ' + v.redo + '.' : '') + '</small><br>'
          + '<button class="go" data-i="' + v.idx + '"' + (v.locked || v.done ? " disabled" : "") + ' type="button">' + lab + '</button></div>';
      });
      var st = S.st || {}, tn = S.track === "ie" ? "IELTS" : "Multi-level";
      if (!all && !S.teacher){ h += '<div class="st off"><div class="n">2</div><div><b>Home test</b><small>Opens after the videos</small></div></div>'; }
      else if (st.test){ h += '<div class="st"><div class="n">' + (st.cancelled ? "✕" : "✓") + '</div><div><b>Home test</b><small>' + 'Done · ' + Math.round(st.pct) + '%' + '</small></div></div>'; }
      else if (!S.track){
        h += '<div class="st"><div class="n">2</div><div><b>Choose your track</b><small>You choose once. Only your teacher can change it later.</small></div></div>'
          + '<button class="go" id="nvtml" type="button">Multi-level</button> <button class="go" id="nvtie" type="button" style="margin-left:8px">IELTS</button>';
      } else {
        h += '<div class="st"><div class="n">2</div><div><b>Home test</b><small>91 questions · about 1 hour · ' + tn + '. Listening needs headphones. Do it in one go.</small>' + (st.cancels ? '<small style="color:#ffe27a;font-weight:700;margin-top:6px">⚠ Your last try was cancelled (you left the test window 3 times). You must take the test again.</small>' : '') + '</div></div>'
          + '<button class="go" id="nvstarttest" type="button" style="background:linear-gradient(135deg,#19e6c1,#2f9bff)">Start the home test</button>';
      }
      if (st.essay){ h += '<div class="st"><div class="n">✓</div><div><b>Writing</b><small>Done</small></div></div>'; }
      else if (st.test){ h += '<div class="st"><div class="n">3</div><div><b>Writing</b><small>' + (S.track === "ie" ? "40 minutes · at least 250 words" : "30 minutes · at least 180 words") + '. Do it in one go.</small></div></div>'
          + '<button class="go" id="nvstartwrite" type="button" style="background:linear-gradient(135deg,#19e6c1,#2f9bff)">Start the writing</button>'; }
      else { h += '<div class="st off"><div class="n">3</div><div><b>Writing</b><small>Opens after the home test</small></div></div>'; }
      if (st.speak){ h += '<div class="st"><div class="n">✓</div><div><b>Speaking</b><small>Done</small></div></div>'; }
      else if (st.essay){ h += '<div class="st"><div class="n">4</div><div><b>Speaking</b><small>About 20 minutes. You record your voice on this device. Nobody marks it. Allow the microphone.</small></div></div>'
          + '<button class="go" id="nvstartspeak" type="button" style="background:linear-gradient(135deg,#19e6c1,#2f9bff)">Start the speaking</button>'; }
      else { h += '<div class="st off"><div class="n">4</div><div><b>Speaking</b><small>Opens after the writing</small></div></div>'; }
      if (S.teacher){ h += '<div class="st"><div class="n">👑</div><div><b>Teacher: open any step</b><small>Your time and results are still recorded. Nothing is blocked for you.</small></div></div>'
          + '<button class="go" id="nvtt" type="button">Home test</button> <button class="go" id="nvtw" type="button" style="margin-left:6px">Writing</button> <button class="go" id="nvts" type="button" style="margin-left:6px">Speaking</button>'; }
      if (S.st && S.st.key && S.review) h += '<button class="go" id="nvmove" type="button" style="background:linear-gradient(135deg,#19e6c1,#2f9bff);margin-top:12px;width:100%">Move on to Unit ' + (S.unit + 1) + ' →</button>';
      page(h);
      ["ml","ie"].forEach(function(t){ var b = el("nvt" + t); if (b) b.onclick = function(){ nvAsk("Choose " + (t === "ie" ? "IELTS" : "Multi-level") + "?", "You cannot change this later without your teacher.", "Yes, choose it", function(){ rpc("nv_set_track", {tok: tok(), trk: t}).then(function(r){ if (r && (r.ok || r.err === "fixed")) unitPage(); }); }); }; });
      if (el("nvstarttest")) el("nvstarttest").onclick = function(){ startHome(this); };
      if (el("nvstartwrite")) el("nvstartwrite").onclick = function(){ startWrite(this); };
      if (el("nvmove")) el("nvmove").onclick = function(){ moveOn(this); };
      if (el("nvtt")) el("nvtt").onclick = function(){ if (!S.track){ nvNote("Choose a track first (the Multi-level / IELTS buttons)."); return; } startHome(this); };
      if (el("nvtw")) el("nvtw").onclick = function(){ startWrite(this); };
      if (el("nvts")) el("nvts").onclick = function(){ startSpeak(this); };
      if (el("nvstartspeak")) el("nvstartspeak").onclick = function(){ startSpeak(this); };
      Array.prototype.forEach.call(el("newv").querySelectorAll(".go[data-i]"), function(b){ b.onclick = function(){ play(+b.getAttribute("data-i")); }; });
    }).catch(function(){ page('<h2>Novel</h2><p class="sub">No internet connection. Please try again.</p>'); });
  }
  /* ---------- writing ---------- */
  function startWrite(btn){
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
