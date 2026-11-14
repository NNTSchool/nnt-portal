/* NNT classroom Novel: home page, key check, listening part runner, breaks, class key. Window.CNV = {open(opts)} */
(function(){
  var O = null, R = null, S = {}, A = null;
  function el(i){ return document.getElementById(i); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  var CSS = '#cnv{position:fixed;inset:0;z-index:80;overflow:auto;-webkit-overflow-scrolling:touch;color:#eaf1ff;font-family:Lexend,system-ui,sans-serif;background:#070b1d}'
  + '#cnv .bg{position:fixed;inset:0;z-index:0;background:radial-gradient(900px 520px at 85% -10%,#2a1b6e 0,transparent 60%),radial-gradient(800px 500px at -10% 105%,#06506b 0,transparent 60%),#070b1d}'
  + '#cnv .w{position:relative;z-index:1;max-width:820px;margin:0 auto;padding:18px 16px 60px}'
  + '#cnv h1,#cnv h2,#cnv b{color:#fff}#cnv h1,#cnv h2{margin:0 0 8px;letter-spacing:-.02em}#cnv p{line-height:1.5}'
  + '#cnv .row{display:flex;align-items:center;gap:10px}#cnv .sp{flex:1}'
  + '#cnv .tb{display:flex;align-items:center;gap:10px;margin-bottom:14px}'
  + '#cnv .pill{border:1.5px solid rgba(255,255,255,.28);background:rgba(255,255,255,.07);color:#fff;border-radius:99px;padding:9px 16px;font:600 15px/1 inherit;font-family:inherit;cursor:pointer;touch-action:manipulation}'
  + '#cnv .card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-radius:20px;padding:18px;margin:12px 0}'
  + '#cnv .big{display:block;width:100%;border:0;border-radius:20px;padding:22px 18px;font:800 24px/1.1 inherit;font-family:inherit;color:#06122e;cursor:pointer;background:linear-gradient(120deg,#5df2d6,#7aa2ff 55%,#c58bff);box-shadow:0 12px 40px rgba(110,140,255,.45);touch-action:manipulation}'
  + '#cnv .big small{display:block;font:600 14px inherit;opacity:.8;margin-top:6px}'
  + '#cnv .go{border:0;border-radius:14px;padding:14px 20px;font:700 17px/1 inherit;font-family:inherit;color:#06122e;background:linear-gradient(120deg,#5df2d6,#7aa2ff);cursor:pointer;touch-action:manipulation}'
  + '#cnv .go[disabled]{opacity:.4}'
  + '#cnv .hero{text-align:center;padding:34px 8px 10px}#cnv .hero h1{font-size:34px}'
  + '#cnv .sub{opacity:.8}#cnv .warn{background:#3a2330;border:1px solid #ff7a9a;border-radius:16px;padding:14px}#cnv .ok{background:#0d3a35;border:1px solid #5df2d6;border-radius:16px;padding:14px}'
  + '#cnv .dots{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0 12px}#cnv .dots i{width:26px;height:6px;border-radius:4px;background:rgba(255,255,255,.18)}#cnv .dots i.on{background:#5df2d6}#cnv .dots i.cur{background:#c58bff}'
  + '#cnv .pl{display:flex;align-items:center;gap:12px}#cnv .bar{flex:1;height:8px;border-radius:6px;background:rgba(255,255,255,.15);overflow:hidden}#cnv .bar b{display:block;height:100%;width:0;background:linear-gradient(90deg,#5df2d6,#c58bff)}'
  + '#cnv .it{display:flex;gap:8px;align-items:center;margin:8px 0}#cnv .it span{width:28px;opacity:.7;text-align:right}'
  + '#cnv input.a,#cnv textarea.a{flex:1;width:100%;box-sizing:border-box;border:1.5px solid rgba(255,255,255,.28);background:rgba(0,0,0,.28);color:#fff;border-radius:12px;padding:11px 12px;font:500 17px inherit;font-family:inherit}'
  + '#cnv textarea.a{min-height:130px}#cnv .r{margin:8px 0;padding:10px 12px;border-radius:12px;background:rgba(0,0,0,.25)}#cnv .r.g{border-left:4px solid #5df2d6}#cnv .r.b{border-left:4px solid #ff7a9a}'
  + '#cnv .r small{display:block;opacity:.85;margin-top:3px}#cnv .nk{filter:drop-shadow(0 14px 30px rgba(120,100,255,.6));animation:cnk 1s ease-out}@keyframes cnk{0%{transform:scale(.3) rotate(-30deg);opacity:0}60%{transform:scale(1.12) rotate(6deg);opacity:1}100%{transform:scale(1)}}';
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

  /* ---------- home ---------- */
  function home(){
    page(top("← Back") + '<div class="hero"><h1>Classroom practice</h1><p class="sub" id="cnsub">Opening…</p></div><div id="cnbody"></div>');
    el("cb").onclick = close;
    R("nv_nav", {tok: O.tok}).then(function(n){
      if (!n || !n.ok){ el("cnsub").textContent = "Please try again in a moment."; return; }
      S.nav = n; var open = (n.open || []).map(Number), ck = (n.ckeys || []).map(Number), hk = (n.keys || []).map(Number);
      var u = null; for (var i = 0; i < open.length; i++) if (ck.indexOf(open[i]) < 0){ u = open[i]; break; }
      if (u === null){ el("cnsub").textContent = "Everything open is complete. Well done!"; return; }
      S.unit = u; el("cnsub").textContent = "Unit " + u + " · Part " + u + " of the listening plan";
      el("cnbody").innerHTML = '<button class="big" id="cstart">Start classroom practice<small>Unit ' + u + ' · about 2 hours with breaks</small></button>'
        + '<div class="card"><b>What happens today</b><p class="sub">1. Listening · 2. Break · 3. Reading · 4. Break · 5. Writing. Then your class key.</p></div>';
      el("cstart").onclick = keyCheck;
    }).catch(function(){ el("cnsub").textContent = "No internet connection. Please try again."; });
  }
  function keyCheck(){
    page(top() + '<div class="hero"><h2>Checking your key…</h2></div>'); el("cb").onclick = home;
    R("nv_class_check", {tok: O.tok, u: S.unit}).then(function(r){
      if (!r || !r.ok){ page(top() + '<div class="card warn"><h2>Please try again</h2><p>We could not check your key.</p></div>'); el("cb").onclick = home; return; }
      if (!r.earned){
        page(top() + '<div class="card warn"><h2>Your key has not been earned yet</h2><p>You need the key of Unit ' + S.unit + ' on the student portal first. Go earn it, then come back.</p></div>'); el("cb").onclick = home; return; }
      page(top() + '<div class="card ok"><h2>Your key is earned. Welcome!</h2><p>You can now begin the mock test of Unit ' + S.unit + '.</p></div><button class="go" id="cgo" style="margin-top:8px">Begin listening →</button>');
      el("cb").onclick = home; el("cgo").onclick = function(){ startPart(); };
    }).catch(function(){ page(top() + '<div class="card warn"><h2>No internet connection</h2></div>'); el("cb").onclick = home; });
  }

  /* ---------- Part runner (listening) ---------- */
  function norm(s){ return String(s).toLowerCase().replace(/[‐-―]/g, "-").replace(/\s*-\s*/g, "-").replace(/[.,;:!?"'‘’]/g, "").replace(/\s+/g, " ").trim(); }
  function words(s){ return norm(s).replace(/-/g, " ").split(" ").filter(Boolean); }
  function lcs(a, b){ var m = a.length, n = b.length, d = [], i, j; for (i = 0; i <= m; i++){ d[i] = []; for (j = 0; j <= n; j++) d[i][j] = 0; }
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = a[i-1] === b[j-1] ? d[i-1][j-1] + 1 : Math.max(d[i-1][j], d[i][j-1]); return d[m][n]; }
  function judge(ex, k, said){ if (ex.long){ var c = words(ex.items[k]), g = words(said); var l = lcs(c, g); return {ok: c.length > 0 && l / Math.max(c.length, g.length) >= 0.9, pct: Math.round(100 * l / c.length)}; }
    return {ok: norm(said) === norm(ex.items[k]) || norm(said).replace(/[ -]/g, "") === norm(ex.items[k]).replace(/[ -]/g, "")}; }

  function startPart(){
    page(top() + '<div class="hero"><h2>Loading Part ' + S.unit + '…</h2></div>');
    fetch(O.base + "part" + S.unit + ".json", {cache: "no-store"}).then(function(r){ if (!r.ok) throw 0; return r.json(); }).then(function(P){
      S.P = P; S.ei = 0; S.res = {}; runEx();
    }).catch(function(){ page(top() + '<div class="card warn"><h2>This part is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = home; });
  }
  function dots(){ return '<div class="dots">' + S.P.exercises.map(function(e, i){ return '<i class="' + (i < S.ei ? "on" : i === S.ei ? "cur" : "") + '"></i>'; }).join("") + '</div>'; }
  function player(ex){
    return '<div class="card"><div class="pl"><button class="go" id="cplay">▶ Play</button><div class="bar"><b id="cbar"></b></div><span id="ctm" class="sub">0:00</span></div>'
      + '<p class="sub" style="margin:8px 0 0">You cannot skip or rewind. Once it starts, listen to the end. You can play it again afterwards.</p></div>';
  }
  function wirePlayer(ex){
    var b = el("cplay"), bar = el("cbar"), tm = el("ctm");
    b.onclick = function(){
      stopAudio(); A = new Audio(O.base + ex.audio + ".mp3"); b.disabled = true; b.textContent = "Playing…";
      A.ontimeupdate = function(){ if (A && A.duration){ bar.style.width = (100 * A.currentTime / A.duration) + "%"; var t = Math.floor(A.currentTime); tm.textContent = Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2); } };
      A.onended = function(){ b.disabled = false; b.textContent = "▶ Play again"; bar.style.width = "0"; };
      A.onerror = function(){ b.disabled = false; b.textContent = "▶ Try again"; };
      var p = A.play(); if (p && p.catch) p.catch(function(){ b.disabled = false; b.textContent = "▶ Play"; });
    };
  }
  function runEx(){
    var ex = S.P.exercises[S.ei]; S.checked = false;
    var inputs = ex.items.map(function(_, k){ return ex.long ? '<div class="it"><span>' + (k + 1) + '</span><textarea class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div>'
      : '<div class="it"><span>' + (k + 1) + '</span><input class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></div>'; }).join("");
    page(top("Exit") + '<p class="sub" style="margin:0">Exercise ' + ex.id + ' · ' + (S.ei + 1) + ' of ' + S.P.exercises.length + '</p><h2>' + esc(ex.name) + '</h2>' + dots()
      + '<p>' + esc(ex.say) + '</p>' + player(ex) + '<div id="cin">' + inputs + '</div><button class="go" id="cchk" style="margin-top:6px">Check my answers</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); home(); }; wirePlayer(ex);
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
    el("cb").onclick = home;
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
    el("cb").onclick = function(){ stopAudio(); home(); }; wirePlayer(ex);
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
    function nextStage(){ page(top() + '<div class="card"><h2>Reading is next</h2><p>The reading part of this unit is being prepared. Please ask your teacher.</p></div>'); el("cb").onclick = home; }
    el("cbk").onclick = nextStage; el("cign").onclick = nextStage;
  }
  /* shown after listening, reading and writing are all complete */
  function unitDone(){
    R("nv_class_done", {tok: O.tok, u: S.unit}).then(function(r){
      page('<div class="hero"><div class="nk" style="width:200px;max-width:60%;margin:0 auto">' + keySvg() + '</div><h1>Well done!</h1><p class="sub">Unit ' + S.unit + ' is now fully completed.' + (r && r.ok ? ' Your class key is earned.' : '') + '</p></div>'
        + '<div class="card ok"><p>Your class key is in your pocket. Your next unit is waiting in the Learning Flow. Keep this energy up!</p></div><button class="go" id="cfin">Finish</button>');
      el("cfin").onclick = close;
    });
  }

  window.CNV = {
    open: function(o){ O = o; R = o.rpc; css(); home(); },
    _unitDone: function(){ unitDone(); }
  };
})();
