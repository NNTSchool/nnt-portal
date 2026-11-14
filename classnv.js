/* NNT classroom Novel: home page, key check, listening part runner, breaks, class key. Window.CNV = {open(opts)} */
(function(){
  var O = null, R = null, S = {}, A = null;
  function el(i){ return document.getElementById(i); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  var CSS = '#cnv{position:fixed;inset:0;z-index:80;overflow:auto;-webkit-overflow-scrolling:touch;color:#eaf1ff;font-family:Lexend,system-ui,sans-serif;background:#070b1d}'
  + '#cnv .bg{position:fixed;inset:0;z-index:0;background:radial-gradient(900px 520px at 85% -10%,#2a1b6e 0,transparent 60%),radial-gradient(800px 500px at -10% 105%,#06506b 0,transparent 60%),#070b1d}'
  + '#cnv .w{position:relative;z-index:1;max-width:1240px;margin:0 auto;padding:18px 16px 60px}'
  + '#cnv h1,#cnv h2,#cnv b{color:#fff}#cnv h1,#cnv h2{margin:0 0 8px;letter-spacing:-.02em}#cnv p{line-height:1.5}'
  + '#cnv .row{display:flex;align-items:center;gap:10px}#cnv .sp{flex:1}'
  + '#cnv .tb{display:flex;align-items:center;gap:10px;margin-bottom:14px}'
  + '#cnv .pill{border:1.5px solid rgba(255,255,255,.28);background:rgba(255,255,255,.07);color:#fff;border-radius:99px;padding:9px 16px;font-weight:600;font-size:15px;line-height:1;font-family:inherit;cursor:pointer;touch-action:manipulation}'
  + '#cnv .card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-radius:20px;padding:18px;margin:12px 0}'
  + '#cnv .big{display:block;width:100%;border:0;border-radius:20px;padding:22px 18px;font-weight:800;font-size:24px;line-height:1.1;font-family:inherit;color:#06122e;cursor:pointer;background:linear-gradient(120deg,#5df2d6,#7aa2ff 55%,#c58bff);box-shadow:0 12px 40px rgba(110,140,255,.45);touch-action:manipulation}'
  + '#cnv .big small{display:block;font-weight:600;font-size:14px;opacity:.8;margin-top:6px}'
  + '#cnv .go{border:0;border-radius:14px;padding:14px 20px;font-weight:700;font-size:17px;line-height:1;font-family:inherit;color:#06122e;background:linear-gradient(120deg,#5df2d6,#7aa2ff);cursor:pointer;touch-action:manipulation}'
  + '#cnv .go[disabled]{opacity:.4}'
  + '#cnv .hero{text-align:center;padding:34px 8px 10px}#cnv .hero h1{font-size:34px}'
  + '#cnv .sub{opacity:.8}#cnv .warn{background:#3a2330;border:1px solid #ff7a9a;border-radius:16px;padding:14px}#cnv .ok{background:#0d3a35;border:1px solid #5df2d6;border-radius:16px;padding:14px}'
  + '#cnv .dots{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0 12px}#cnv .dots i{width:26px;height:6px;border-radius:4px;background:rgba(255,255,255,.18)}#cnv .dots i.on{background:#5df2d6}#cnv .dots i.cur{background:#c58bff}'
  + '#cnv .pl{display:flex;align-items:center;gap:12px}#cnv .bar{flex:1;height:8px;border-radius:6px;background:rgba(255,255,255,.15);overflow:hidden}#cnv .bar b{display:block;height:100%;width:0;background:linear-gradient(90deg,#5df2d6,#c58bff)}'
  + '#cnv .it{display:flex;gap:8px;align-items:center;margin:8px 0}#cnv .it span{width:28px;opacity:.7;text-align:right}'
  + '#cnv input.a,#cnv textarea.a{flex:1;width:100%;box-sizing:border-box;border:1.5px solid rgba(255,255,255,.28);background:rgba(0,0,0,.28);color:#fff;border-radius:12px;padding:11px 12px;font-weight:500;font-size:17px;font-family:inherit}'
  + '#cnv textarea.a{min-height:130px}#cnv .r{margin:8px 0;padding:10px 12px;border-radius:12px;background:rgba(0,0,0,.25)}#cnv .r.g{border-left:4px solid #5df2d6}#cnv .r.b{border-left:4px solid #ff7a9a}'
  + '#cnv .r small{display:block;opacity:.85;margin-top:3px}#cnv .nk{filter:drop-shadow(0 14px 30px rgba(120,100,255,.6));animation:cnk 1s ease-out}@keyframes cnk{0%{transform:scale(.3) rotate(-30deg);opacity:0}60%{transform:scale(1.12) rotate(6deg);opacity:1}100%{transform:scale(1)}}';
  CSS += '#cnv .big.dim{background:linear-gradient(120deg,#39425f,#2a3152);color:#c9d3f5;box-shadow:none}#cnv .shk{animation:esh .4s}@keyframes esh{20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}'
  + '#cnv .hi{font-size:56px}#cnv .pth{position:relative;margin:6px auto 0;max-width:560px}#cnv .pl2{position:absolute;inset:0;width:100%;height:100%}#cnv .pl2 path{fill:none;stroke:rgba(255,255,255,.22);stroke-width:2;stroke-dasharray:5 6;vector-effect:non-scaling-stroke}'
  + '#cnv .nd{position:absolute;transform:translate(-50%,-50%);width:150px;height:128px;border-radius:50%;border:0;color:#fff;cursor:pointer;touch-action:manipulation;display:flex;align-items:center;justify-content:center;font-family:inherit;--d:#3b2a8f;box-shadow:0 12px 0 var(--d),0 18px 24px rgba(0,0,0,.4)}'
  + '#cnv .nd:active{transform:translate(-50%,-47%);box-shadow:0 5px 0 var(--d)}#cnv .nd u{position:absolute;right:10px;top:6px;width:34px;height:34px;border-radius:50%;background:#fff;color:#c47a00;font-weight:800;font-size:19px;text-decoration:none;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 0 rgba(0,0,0,.25)}#cnv .nn{font-size:68px;font-weight:800;line-height:1;color:#fff;text-shadow:0 5px 0 rgba(0,0,0,.28),0 0 22px rgba(255,255,255,.35);letter-spacing:-.03em}'
  + '#cnv .nd.done{background:radial-gradient(ellipse at 35% 25%,#ffe58a,#ffb12b);--d:#c47a00}#cnv .nd.idle{background:radial-gradient(ellipse at 35% 25%,#a99bff,#6b4df0);--d:#3b2a8f}#cnv .nd.cur{background:radial-gradient(ellipse at 35% 25%,#7dfbe2,#16b8d6);--d:#0a7f96;animation:ndp 1.8s ease-in-out infinite}@keyframes ndp{50%{transform:translate(-50%,-53%)}}'
  + '#cnv .nd em{position:absolute;top:-38px;left:50%;transform:translateX(-50%);background:#fff;color:#06122e;border-radius:12px;padding:6px 12px;font-weight:800;font-size:13px;font-style:normal;letter-spacing:.08em;box-shadow:0 4px 0 rgba(0,0,0,.25)}'
  + '#cnv .bn{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(120deg,#6b4df0,#16b8d6);border-radius:20px;padding:14px 16px;box-shadow:0 6px 0 #3b2a8f;margin:4px 0 6px}#cnv .bn small{display:block;opacity:.85;font-weight:700;letter-spacing:.08em;font-size:12px}#cnv .bn b{font-size:19px}#cnv .bn i{font-style:normal;font-size:24px;border-left:2px solid rgba(255,255,255,.35);padding-left:14px}'
  + '#cnv .cld{position:absolute;left:0;right:0;top:0;pointer-events:none;background:linear-gradient(#070b1d 0,#070b1d 38%,rgba(7,11,29,0) 100%)}#cnv .cl{position:absolute;border-radius:50%;background:radial-gradient(ellipse at 50% 40%,#fff 0,#dfe9ff 55%,#aebfff 100%);filter:blur(2px)}';
  CSS += '#cnv .hm{position:relative;min-height:calc(100vh - 36px);display:flex;align-items:center;justify-content:space-between;gap:30px;overflow:hidden}#cnv .hmb{position:absolute;left:0;top:0;z-index:3}'
  + '#cnv .hmL{position:relative;z-index:2;max-width:620px}#cnv .hmt{display:inline-block;font-weight:800;font-size:13px;letter-spacing:.22em;color:#5df2d6;border:1.5px solid rgba(93,242,214,.5);border-radius:99px;padding:7px 16px;background:rgba(93,242,214,.08)}'
  + '#cnv .hmh{font-size:64px;line-height:1.04;letter-spacing:-.035em;margin:20px 0 14px;font-weight:800;color:#fff}#cnv .hmh em{font-style:normal;background:linear-gradient(100deg,#5df2d6,#7aa2ff 45%,#ff7ad9);-webkit-background-clip:text;background-clip:text;color:transparent}'
  + '#cnv .hmp{font-size:21px;opacity:.85;margin:0 0 24px;max-width:520px}#cnv .hmc{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:30px}#cnv .hmc span{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);border-radius:16px;padding:12px 18px;font-size:22px}#cnv .hmc b{font-size:16px;color:#fff}'
  + '#cnv .hmg{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:18px;border:0;border-radius:22px;padding:24px 40px;font-family:inherit;font-weight:800;font-size:26px;letter-spacing:.06em;color:#06122e;cursor:pointer;background:linear-gradient(110deg,#5df2d6,#7aa2ff 55%,#ff7ad9);box-shadow:0 0 0 0 rgba(122,162,255,.7),0 16px 50px rgba(110,140,255,.55);animation:hmp 2s ease-in-out infinite}'
  + '#cnv .hmg b{font-size:30px;transition:transform .2s}#cnv .hmg:hover b{transform:translateX(8px)}#cnv .hmg:before{content:"";position:absolute;top:0;bottom:0;width:60px;left:-90px;background:rgba(255,255,255,.55);transform:skewX(-22deg);animation:hms 3s ease-in-out infinite}'
  + '@keyframes hmp{50%{box-shadow:0 0 0 18px rgba(122,162,255,0),0 16px 60px rgba(110,140,255,.75)}}@keyframes hms{0%,55%{left:-90px}100%{left:120%}}'
  + '#cnv .hmR{position:relative;z-index:1;flex:none;width:440px;height:440px;display:flex;align-items:center;justify-content:center}#cnv .orb{position:relative;width:400px;height:400px;display:flex;align-items:center;justify-content:center;animation:hmf 6s ease-in-out infinite}@keyframes hmf{50%{transform:translateY(-14px)}}'
  + '#cnv .rg{position:absolute;inset:0;border-radius:50%;border:6px solid transparent;background:conic-gradient(from 0deg,#5df2d6,#7aa2ff,#ff7ad9,#5df2d6) border-box;-webkit-mask:linear-gradient(#000 0 0) padding-box exclude,linear-gradient(#000 0 0);mask:linear-gradient(#000 0 0) padding-box exclude,linear-gradient(#000 0 0);-webkit-mask-composite:xor;animation:hmr 9s linear infinite;filter:drop-shadow(0 0 18px rgba(122,162,255,.7))}'
  + '#cnv .rg.r2{inset:30px;animation-duration:14s;animation-direction:reverse;opacity:.55}@keyframes hmr{to{transform:rotate(360deg)}}'
  + '#cnv .core{position:relative;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle at 35% 28%,#3b2f9a,#120c44 70%);box-shadow:inset 0 0 40px rgba(122,162,255,.35),0 0 70px rgba(122,162,255,.4);display:flex;flex-direction:column;align-items:center;justify-content:center}'
  + '#cnv .core small{font-weight:800;letter-spacing:.24em;font-size:13px;color:#9fb4ff}#cnv .core b{font-size:128px;line-height:1;font-weight:800;background:linear-gradient(160deg,#fff,#9fd0ff 60%,#c58bff);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 6px 0 rgba(0,0,0,.25))}'
  + '#cnv .orb i{position:absolute;border-radius:50%;background:#fff;box-shadow:0 0 18px 6px rgba(255,255,255,.6)}#cnv .o1{width:16px;height:16px;left:50%;top:-8px;animation:hmo 7s linear infinite;transform-origin:0 208px}#cnv .o2{width:11px;height:11px;left:50%;top:-5px;background:#5df2d6;transform-origin:0 205px;animation:hmo 11s linear infinite reverse}#cnv .o3{width:9px;height:9px;left:50%;top:-4px;background:#ff7ad9;transform-origin:0 204px;animation:hmo 15s linear infinite}@keyframes hmo{to{transform:rotate(360deg)}}'
  + '#cnv .sk{position:absolute;border-radius:50%;background:#fff;opacity:0;animation:hmk 4s ease-in-out infinite}@keyframes hmk{50%{opacity:.9;transform:scale(1.8)}}';
  CSS += '#cnv .cld{background:none!important;overflow:hidden;left:-200px!important;right:-200px!important}#cnv .cli{-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 58%,transparent 100%);mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 58%,transparent 100%);position:absolute;height:auto;max-width:none;animation:cdr 9s ease-in-out infinite alternate;filter:drop-shadow(0 12px 26px rgba(120,140,255,.35))}@keyframes cdr{from{transform:translateX(-14px)}to{transform:translateX(14px)}}'
  + '#cnv .hnt{position:absolute;transform:translateX(-50%);white-space:nowrap;font-weight:700;font-size:18px;color:#bfe9ff;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);border-radius:99px;padding:8px 18px}';
  CSS += '#cnv .fin{text-align:center;padding:36px 0 60px;position:relative;overflow:hidden;min-height:90vh}#cnv .kdrop{width:210px;margin:30px auto 0;animation:kdrop 1.5s cubic-bezier(.3,1.4,.5,1) both,kglow 2.6s 1.5s ease-in-out infinite;filter:drop-shadow(0 0 30px rgba(122,162,255,.75))}'
  + '@keyframes kdrop{0%{transform:translateY(-110vh) rotate(-40deg) scale(.6)}70%{transform:translateY(18px) rotate(10deg) scale(1.05)}100%{transform:none}}@keyframes kglow{50%{transform:translateY(-8px) rotate(3deg);filter:drop-shadow(0 0 56px rgba(140,190,255,.95))}}'
  + '#cnv .flash{position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,#fff,rgba(255,226,122,.6) 30%,transparent 60%);opacity:0;animation:flsh 1.1s 1.1s ease-out both;pointer-events:none}@keyframes flsh{0%{opacity:.95}100%{opacity:0}}'
  + '#cnv .spk i{position:absolute;top:-30px;border-radius:2px;opacity:0;animation:fall linear infinite;animation-fill-mode:both}@keyframes fall{0%{transform:translateY(0) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(105vh) rotate(540deg);opacity:.9}}'
  + '#cnv .fh{font-size:58px;line-height:1.05;letter-spacing:-.03em;margin:26px 0 6px;font-weight:800;color:#fff;opacity:0;animation:fup .8s 1.5s both}#cnv .fn{font-size:20px;color:#bfe9ff;margin:0 0 26px;opacity:0;animation:fup .8s 1.8s both}@keyframes fup{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}'
  + '#cnv .fst{display:flex;gap:14px;justify-content:center;margin:0 auto 28px;opacity:0;animation:fup .8s 2.1s both}#cnv .fst div{min-width:150px;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);border-radius:18px;padding:16px 12px}#cnv .fst b{display:block;font-size:40px;font-weight:800;color:#ffd23f}#cnv .fst span{font-size:13px;color:#bcd0ff}#cnv .fin .go{opacity:0;animation:fup .8s 2.5s both}'
  + '#cnv .nd.pop,#cnv .nd.cur.pop{animation:ppop 1.1s cubic-bezier(.2,1.5,.4,1) both}@keyframes ppop{0%{transform:translate(-50%,-50%) scale(0);filter:brightness(3) drop-shadow(0 0 40px #fff)}100%{transform:translate(-50%,-50%) scale(1);filter:none}}';
  function css(){ if (el("cnvcss")) return; var s = document.createElement("style"); s.id = "cnvcss"; s.textContent = CSS; document.head.appendChild(s); }
  function root(){ var r = el("cnv"); if (!r){ r = document.createElement("div"); r.id = "cnv"; document.body.appendChild(r); } return r; }
  function page(h){ stopAudio(); root().innerHTML = '<div class="bg"></div><div class="w">' + h + '</div>'; root().scrollTop = 0; }
  function top(back){ return '<div class="tb"><button class="pill" id="cb">' + (back || "← Back") + '</button><div class="sp"></div><b>NNT · Classroom</b></div>'; }
  function stopAudio(){ if (A){ try{ A.pause(); }catch(e){} A = null; } }
  function close(){ stopAudio(); var r = el("cnv"); if (r) r.remove(); if (O && O.onExit) O.onExit(); }

  /* the exotic class key: a hexagonal crystal key (different shape from the yellow home key) */
  function keySvg(){ return '<svg viewBox="0 0 220 300" width="100%" aria-hidden="true"><defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5df2d6"/><stop offset=".5" stop-color="#7aa2ff"/><stop offset="1" stop-color="#c58bff"/></linearGradient><linearGradient id="kg2" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#c58bff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>'
    + '<polygon points="110,6 200,52 200,148 110,194 20,148 20,52" fill="url(#kg)" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>'
    + '<polygon points="110,30 178,64 178,136 110,170 42,136 42,64" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.5"/>'
    + '<polygon points="110,66 140,82 140,118 110,134 80,118 80,82" fill="#070b1d" stroke="#fff" stroke-opacity=".8" stroke-width="2.5"/>'
    + '<path d="M110 70 L136 84 L110 98 L84 84Z" fill="#fff" fill-opacity=".35"/>'
    + '<rect x="100" y="194" width="20" height="92" rx="4" fill="url(#kg2)"/>'
    + '<polygon points="120,222 156,232 120,246" fill="url(#kg2)"/><polygon points="120,256 146,264 120,274" fill="url(#kg2)"/><polygon points="100,238 76,246 100,256" fill="url(#kg2)"/></svg>'; }

  /* ---------- home, path, hub ---------- */
  var PKID = 0;
  function portalKey(){
    var g = "pk" + (++PKID);
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

  function cloud(w, h, l, t, o){ return '<i class="cl" style="width:' + w + 'px;height:' + h + 'px;left:' + l + ';top:' + t + 'px;opacity:' + o + '"></i>'; }
  var LINES = ["Every stage you finish makes you sharper.", "Your ears, your eyes, your pen: let's train them all.", "Small drills today, big scores tomorrow.", "Champions are built one stage at a time.", "Focus up. This is where it gets good."];
  function home(){
    var nm = (O.name ? String(O.name).split(" ")[0] : "") || "Champion", ln = LINES[Math.floor(Date.now() / 6e4) % LINES.length];
    var sp = ""; for (var i = 0; i < 18; i++) sp += '<i class="sk" style="left:' + ((i * 53 + 7) % 100) + '%;top:' + ((i * 37 + 11) % 100) + '%;animation-delay:' + ((i * 0.37) % 4).toFixed(2) + 's;width:' + (3 + i % 4) + 'px;height:' + (3 + i % 4) + 'px"></i>';
    page('<div class="hm">' + sp + '<button class="pill hmb" id="cb">← Back</button>'
      + '<div class="hmL"><span class="hmt">NNT SCHOOL · CLASSROOM</span><h1 class="hmh">Ready to <em>level up</em>, ' + esc(nm) + '?</h1><p class="hmp">' + esc(ln) + '</p>'
      + '<div class="hmc"><span>🎧<b>Listening</b></span><span>📖<b>Reading</b></span><span>✍️<b>Writing</b></span></div>'
      + '<button class="hmg" id="cstart"><span>START DRILLING</span><b>→</b></button></div>'
      + '<div class="hmR"><div class="orb"><div class="rg"></div><div class="rg r2"></div><div class="core"><small>YOUR UNIT</small><b id="hmu">…</b></div><i class="o1"></i><i class="o2"></i><i class="o3"></i></div></div></div>');
    el("cb").onclick = close; el("cstart").onclick = path;
    R("nv_nav", {tok: O.tok}).then(function(n){ if (!n || !n.ok) return; var open = (n.open || []).map(Number).filter(function(u){ return u <= 6; }), ck = (n.ckeys || []).map(Number), c = null;
      for (var i = 0; i < open.length; i++) if (ck.indexOf(open[i]) < 0){ c = open[i]; break; } if (c === null && open.length) c = open[open.length - 1]; if (el("hmu") && c !== null) el("hmu").textContent = c; }).catch(function(){});
  }
  var FLAG = '<svg viewBox="0 0 64 64" width="52" height="52"><path d="M16 8v50" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M20 12c10-6 16 6 28 0v24c-12 6-18-6-28 0z" fill="#fff"/></svg>', STAR = '<svg viewBox="0 0 64 64" width="52" height="52"><path d="M32 6l7.6 16.4 17.9 2.1-13.2 12.3 3.5 17.7L32 45.2 16.2 54.5l3.5-17.7L6.5 24.5l17.9-2.1z" fill="#fff"/></svg>';
  var ZZ = [50, 66, 74, 66, 50, 34, 26, 34];
  function path(){
    page(top() + '<div id="cnbody"><p class="sub" id="cnsub" style="text-align:center">Opening…</p></div>'); el("cb").onclick = home;
    R("nv_nav", {tok: O.tok}).then(function(n){
      if (!n || !n.ok){ el("cnsub").textContent = "Please try again in a moment."; return; }
      S.nav = n; var ck = (n.ckeys || []).map(Number), lim = 6 + ck.filter(function(u){ return u <= 6 + ck.length; }).length, open = (n.open || []).map(Number).filter(function(u){ return u <= lim; }), cur = null;
      for (var i = 0; i < open.length; i++) if (ck.indexOf(open[i]) < 0){ cur = open[i]; break; }
      var hint = cur === null ? "Everything open is complete. Well done!" : "Tap your stage to begin";
      var H = 170, tot = open.length * H + 330, h = '<div class="pth" style="height:' + tot + 'px">';
      var pts = open.map(function(u, k){ return [ZZ[k % 8], tot - 110 - k * H]; });
      open.forEach(function(u, k){ var st = ck.indexOf(u) >= 0 ? "done" : u === cur ? "cur" : "idle"; if (S.pop === u) st += " pop";
        h += '<button class="nd ' + st + '" data-u="' + u + '" style="left:' + pts[k][0] + '%;top:' + pts[k][1] + 'px">' + '<b class="nn">' + u + '</b>' + (st === "done" ? '<u>✔</u>' : '') + (st === "cur" ? '<em>START</em>' : '') + '</button>'; });
      h += '<div class="hnt" style="left:' + pts[0][0] + '%;top:' + (pts[0][1] + 92) + 'px">' + hint + '</div>';
      /* only clouds above the last open stage: nothing else is drawn there */
      var top6 = pts[pts.length - 1][1] - 90, cw = 760, ch = cw * 0.376, step = 95, n = Math.ceil((top6 - ch * 0.5) / step) + 1, cs = "";
      for (var q = 0; q < n; q++){ var ty = Math.min(q * step, Math.max(0, top6 - ch + 30)); cs += '<img class="cli" src="' + (O.cloud || "cloud.png") + '" alt="" style="left:' + (q % 2 ? 18 : 6) + '%;top:' + ty + 'px;width:' + (cw - (q % 3) * 70) + 'px;animation-delay:-' + (q * 2.1) + 's">'; }
      h += '<div class="cld" style="height:' + top6 + 'px">' + cs + '</div></div>';
      el("cnbody").innerHTML = h; S.pop = null;
      [].forEach.call(document.querySelectorAll(".nd"), function(b){ b.onclick = function(){ S.unit = +b.getAttribute("data-u"); keyCheck(); }; });
      var c = document.querySelector(".nd.cur") || document.querySelector(".nd"); if (c && c.scrollIntoView) c.scrollIntoView({block: "center"});
    }).catch(function(){ el("cnsub").textContent = "No internet connection. Please try again."; });
  }
  function keyCheck(){
    page(top() + '<div class="hero"><h2>Checking your key…</h2></div>'); el("cb").onclick = path;
    R("nv_class_check", {tok: O.tok, u: S.unit}).then(function(r){
      if (r && r.err === "classlocked"){ page(top() + '<div class="card warn"><h2>Novel is not open for you yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = path; return; }
      if (!r || !r.ok){ page(top() + '<div class="card warn"><h2>Please try again</h2><p>We could not check your key.</p></div>'); el("cb").onclick = path; return; }
      if (!r.earned){
        page(top() + '<div class="card warn"><h2>Your key has not been earned yet</h2><p>You need the key of Unit ' + S.unit + ' on the student portal first. Go earn it, then come back.</p></div>'); el("cb").onclick = path; return; }
      page(top() + '<div style="text-align:center;padding:10px 0 4px"><div class="kdrop" style="width:380px;max-width:80%;margin:0 auto;filter:drop-shadow(0 14px 30px rgba(255,196,40,.55))">' + portalKey() + '</div><h2 style="margin:10px 0 4px;font-size:34px">Your key is earned. Welcome!</h2><p class="sub">You can now begin the mock test of Unit ' + S.unit + '.</p><button class="go" id="cgo" style="margin-top:12px">Continue →</button></div>');
      el("cb").onclick = path; el("cgo").onclick = hub;
    }).catch(function(){ page(top() + '<div class="card warn"><h2>No internet connection</h2></div>'); el("cb").onclick = path; });
  }
  function hub(){
    page(top() + '<div class="hero" style="padding:6px 8px 0"><h2>Unit ' + S.unit + '</h2><p class="sub">Choose your drilling</p></div>'
      + '<button class="big" id="hl" style="margin-top:12px">🎧 Listening drilling<small>Start here</small></button>'
      + '<button class="big dim" id="hr" style="margin-top:12px">📖 Reading drilling<small>Opens soon</small></button>'
      + '<button class="big dim" id="hw" style="margin-top:12px">✍️ Writing drilling<small>Opens soon</small></button>');
    el("cb").onclick = path; el("hl").onclick = startPart;
    el("hr").onclick = el("hw").onclick = function(){ this.classList.add("shk"); var t = this; setTimeout(function(){ t.classList.remove("shk"); }, 400); };
  }

  /* ---------- Part runner (listening) ---------- */
  function norm(s){ return String(s).toLowerCase().replace(/[‐-―]/g, "-").replace(/\s*-\s*/g, "-").replace(/[.,;:!?"'‘’]/g, "").replace(/\s+/g, " ").trim(); }
  function words(s){ return norm(s).replace(/-/g, " ").split(" ").filter(Boolean); }
  function lcs(a, b){ var m = a.length, n = b.length, d = [], i, j; for (i = 0; i <= m; i++){ d[i] = []; for (j = 0; j <= n; j++) d[i][j] = 0; }
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = a[i-1] === b[j-1] ? d[i-1][j-1] + 1 : Math.max(d[i-1][j], d[i][j-1]); return d[m][n]; }
  function judge(ex, k, said){ if (ex.long){ var c = words(ex.items[k]), g = words(said); var l = lcs(c, g); return {ok: c.length > 0 && l / Math.max(c.length, g.length) >= 0.9, pct: Math.round(100 * l / c.length)}; }
    return {ok: norm(said) === norm(ex.items[k]) || norm(said).replace(/[ -]/g, "") === norm(ex.items[k]).replace(/[ -]/g, "")}; }

  /* encrypted files: the server releases the key only to an allowed student who holds the unit's home key */
  function hex2b(h){ var a = new Uint8Array(h.length / 2); for (var i = 0; i < a.length; i++) a[i] = parseInt(h.substr(i * 2, 2), 16); return a; }
  function getFile(fid, plain){
    if (!O.enc) return fetch(O.base + plain, {cache: "no-store"}).then(function(r){ if (!r.ok) throw 0; return r.arrayBuffer(); });
    return R("class_file", {tok: O.tok, fid: fid}).then(function(r){
      if (!r || !r.ok) throw 0;
      return fetch(r.path, {cache: "no-store"}).then(function(x){ if (!x.ok) throw 0; return x.arrayBuffer(); }).then(function(buf){
        var u = new Uint8Array(buf);
        return crypto.subtle.importKey("raw", hex2b(r.key), "AES-GCM", false, ["decrypt"]).then(function(k){ return crypto.subtle.decrypt({name: "AES-GCM", iv: u.slice(0, 12)}, k, u.slice(12)); });
      });
    });
  }
  function audioUrl(ex){
    S.au = S.au || {}; if (S.au[ex.audio]) return Promise.resolve(S.au[ex.audio]);
    var m = /(\d+)-(\d+)$/.exec(ex.audio) || [0, S.unit, "01"];
    return getFile("c" + m[1] + "_" + m[2], ex.audio + ".mp3").then(function(b){ return (S.au[ex.audio] = URL.createObjectURL(new Blob([b], {type: "audio/mpeg"}))); });
  }
  function startPart(){
    page(top() + '<div class="hero"><h2>Loading Part ' + S.unit + '…</h2></div>');
    getFile("c" + S.unit + "_part", "part" + S.unit + ".json").then(function(b){ return JSON.parse(new TextDecoder().decode(b)); }).then(function(P){
      S.P = P; S.ei = 0; S.res = {}; if (!S.t0) S.t0 = Date.now(); runEx();
    }).catch(function(){ page(top() + '<div class="card warn"><h2>This part is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  function dots(){ return '<div class="dots">' + S.P.exercises.map(function(e, i){ return '<i class="' + (i < S.ei ? "on" : i === S.ei ? "cur" : "") + '"></i>'; }).join("") + '</div>'; }
  function player(ex){
    return '<div class="card"><div class="pl"><button class="go" id="cplay">▶ Play</button><div class="bar"><b id="cbar"></b></div><span id="ctm" class="sub">0:00</span></div>'
      + '<p class="sub" style="margin:8px 0 0">You cannot skip or rewind. Once it starts, listen to the end. You can play it again afterwards.</p></div>';
  }
  function wirePlayer(ex){
    var b = el("cplay"), bar = el("cbar"), tm = el("ctm");
    b.onclick = function(){
      stopAudio(); b.disabled = true; b.textContent = "Loading…";
      audioUrl(ex).then(function(url){ A = new Audio(url); b.textContent = "Playing…";
      A.ontimeupdate = function(){ if (A && A.duration){ bar.style.width = (100 * A.currentTime / A.duration) + "%"; var t = Math.floor(A.currentTime); tm.textContent = Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2); } };
      A.onended = function(){ b.disabled = false; b.textContent = "▶ Play again"; bar.style.width = "0"; };
      A.onerror = function(){ b.disabled = false; b.textContent = "▶ Try again"; };
      var p = A.play(); if (p && p.catch) p.catch(function(){ b.disabled = false; b.textContent = "▶ Play"; });
      }).catch(function(){ b.disabled = false; b.textContent = "▶ Try again"; });
    };
  }
  function runEx(){
    var ex = S.P.exercises[S.ei]; S.checked = false;
    var inputs = ex.items.map(function(_, k){ return ex.long ? '<div class="it"><span>' + (k + 1) + '</span><textarea class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div>'
      : '<div class="it"><span>' + (k + 1) + '</span><input class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></div>'; }).join("");
    page(top("Exit") + '<p class="sub" style="margin:0">Exercise ' + ex.id + ' · ' + (S.ei + 1) + ' of ' + S.P.exercises.length + '</p><h2>' + esc(ex.name) + '</h2>' + dots()
      + '<p>' + esc(ex.say) + '</p>' + player(ex) + '<div id="cin">' + inputs + '</div><button class="go" id="cchk" style="margin-top:6px">Check my answers</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; wirePlayer(ex);
    el("cchk").onclick = function(){ checkEx(ex); };
  }
  function checkEx(ex){
    var ins = [].slice.call(document.querySelectorAll("#cin .a")), good = 0, h = "";
    stopAudio();
    ins.forEach(function(x, k){ var j = judge(ex, k, x.value), said = x.value.trim(); if (j.ok) good++;
      h += '<div class="r ' + (j.ok ? "g" : "b") + '"><b>' + (k + 1) + '.</b> ' + (j.ok ? "✔ " : "✖ ") + esc(said || "(empty)") + (j.ok ? "" : '<small>Correct: ' + esc(ex.items[k]) + (ex.long ? " (" + j.pct + "% of the words)" : "") + '</small>') + '</div>';
    });
    S.res[ex.id] = {good: good, n: ex.items.length, miss: ins.map(function(x, k){ return judge(ex, k, x.value).ok ? -1 : k; }).filter(function(k){ return k >= 0; })};
    el("cchk").remove(); el("cin").style.display = "none";
    el("cout").innerHTML = '<div class="card"><b>' + good + ' of ' + ex.items.length + ' correct</b></div>' + h + '<button class="go" id="cnext" style="margin-top:8px">' + (S.ei + 1 < S.P.exercises.length ? "Next exercise →" : "See my results →") + '</button>';
    el("cnext").onclick = function(){ S.ei++; if (S.ei < S.P.exercises.length) runEx(); else summary(); };
    el("cout").scrollIntoView && el("cout").scrollIntoView({behavior: "smooth"});
  }
  function summary(){
    var g = 0, n = 0, h = ""; S.P.exercises.forEach(function(e){ var r = S.res[e.id]; g += r.good; n += r.n; h += '<div class="r ' + (r.miss.length ? "b" : "g") + '"><b>' + e.id + ' ' + esc(e.name) + '</b> · ' + r.good + '/' + r.n + '</div>'; });
    S.fix = S.P.exercises.filter(function(e){ return S.res[e.id].miss.length; });
    page(top() + '<div class="hero"><h2>Warm-up finished</h2><p class="sub">' + g + ' of ' + n + ' correct (' + Math.round(100 * g / n) + '%)</p></div>' + h
      + (S.fix.length ? '<button class="go" id="cfix" style="margin-top:10px">Fix it round: listen again and rewrite only what you missed →</button>' : '<button class="go" id="cdone" style="margin-top:10px">Continue →</button>'));
    el("cb").onclick = hub;
    if (el("cfix")) el("cfix").onclick = function(){ S.fi = 0; fixEx(); };
    if (el("cdone")) el("cdone").onclick = listeningDone;
  }
  function fixEx(){
    if (S.fi >= S.fix.length) return listeningDone();
    var ex = S.fix[S.fi], miss = S.res[ex.id].miss;
    var inputs = miss.map(function(k){ return ex.long ? '<div class="it"><span>' + (k + 1) + '</span><textarea class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div>'
      : '<div class="it"><span>' + (k + 1) + '</span><input class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></div>'; }).join("");
    page(top("Exit") + '<p class="sub" style="margin:0">Fix it · ' + (S.fi + 1) + ' of ' + S.fix.length + '</p><h2>' + esc(ex.id + " " + ex.name) + '</h2><p>Listen again. Write only the items you missed. The answers are hidden until you check.</p>' + player(ex)
      + '<div id="cin">' + inputs + '</div><button class="go" id="cchk">Check</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; wirePlayer(ex);
    el("cchk").onclick = function(){
      stopAudio(); var h = "", fixed = 0; [].forEach.call(document.querySelectorAll("#cin .a"), function(x){ var k = +x.getAttribute("data-k"), j = judge(ex, k, x.value); if (j.ok) fixed++;
        h += '<div class="r ' + (j.ok ? "g" : "b") + '"><b>' + (k + 1) + '.</b> ' + (j.ok ? "✔ " : "✖ ") + esc(x.value.trim() || "(empty)") + (j.ok ? "" : '<small>Correct: ' + esc(ex.items[k]) + '</small>') + '</div>'; });
      el("cchk").remove(); el("cin").style.display = "none"; el("cout").innerHTML = '<div class="card"><b>' + fixed + ' of ' + miss.length + ' fixed</b></div>' + h + '<button class="go" id="cnx" style="margin-top:8px">Continue →</button>';
      el("cnx").onclick = function(){ S.fi++; fixEx(); };
    };
  }
  function listeningDone(){
    page('<div class="hero"><h1>Listening done ✔</h1><p class="sub">Great focus. Now take a break.</p></div><div class="card ok"><h2>Take a 10-minute break</h2><p>Stand up, step outside, drink some water. You will focus better. If you feel full of energy, you can skip it.</p></div>'
      + '<button class="go" id="cbk">I am back →</button> <button class="pill" id="cign" style="margin-left:6px">Ignore the break, keep going</button>');
    function nextStage(){ unitDone(); }
    el("cbk").onclick = nextStage; el("cign").onclick = nextStage;
  }
  /* shown after listening, reading and writing are all complete */
  function goldKey(){ return keySvg().replace(/#5df2d6/g, "#fff3b0").replace(/#7aa2ff/g, "#ffc21a").replace(/#c58bff/g, "#d97a00"); }
  function unitDone(){
    var g = 0, n = 0, ex = 0, secs = Math.max(1, Math.round((Date.now() - (S.t0 || Date.now())) / 1000));
    if (S.P) S.P.exercises.forEach(function(e){ var r = S.res && S.res[e.id]; if (r){ g += r.good; n += r.n; ex++; } });
    var pct = n ? Math.round(100 * g / n) : 100, fx = S.fix ? S.fix.length : 0, mins = Math.max(1, Math.round(secs / 60)), u = S.unit, nx = u + 1, sp = "";
    R("nv_class_done", {tok: O.tok, u: u});
    for (var q = 0; q < 46; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 3.5).toFixed(2) + 's;animation-duration:' + (2.6 + Math.random() * 2.4).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#fff"][q % 5] + ';width:' + (5 + Math.random() * 7).toFixed(1) + 'px;height:' + (8 + Math.random() * 12).toFixed(1) + 'px"></i>';
    page('<div class="fin"><div class="spk">' + sp + '</div><div class="flash"></div><div class="kdrop">' + keySvg() + '</div>'
      + '<h1 class="fh">Unit ' + u + ' conquered</h1><p class="fn">' + esc(O.name || "") + ', your class key is yours.</p>'
      + '<div class="fst"><div><b data-n="' + pct + '" data-s="%">0</b><span>accuracy</span></div><div><b data-n="' + ex + '">0</b><span>exercises</span></div><div><b data-n="' + mins + '" data-s=" min">0</b><span>on task</span></div><div><b data-n="' + fx + '">0</b><span>fixed in the fix round</span></div></div>'
      + '<button class="go" id="cfin">Show me my next stage →</button></div>');
    setTimeout(function(){ [].forEach.call(document.querySelectorAll(".fst b"), function(b){ var t = +b.getAttribute("data-n"), c = 0, sf = b.getAttribute("data-s") || "", iv = setInterval(function(){ c += Math.max(1, Math.ceil(t / 24)); if (c >= t){ c = t; clearInterval(iv); } b.textContent = c + sf; }, 40); }); }, 1700);
    el("cfin").onclick = function(){ S.pop = nx; path(); };
  }

  window.CNV = {
    open: function(o){ O = o; R = o.rpc; css(); home(); },
    _unitDone: function(){ unitDone(); }
  };
})();
