/* Runs inside a test opened from the classroom library: connects it to the teacher's system */
(function(){
  var P = window.__PORTAL__; if (!P) return;
  var of = window.fetch.bind(window), started = false, pinged = null, PRAC = P.mode === "practice";
  function call(name, args){
    return of(P.url + "/rest/v1/rpc/" + name, {method:"POST", headers:{"Content-Type":"application/json","apikey":P.key,"Authorization":"Bearer " + P.key}, body: JSON.stringify(args)})
      .then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error((j && j.message) || r.status); return j; }); });
  }
  function ping(){
    var a = {tok: P.tok}, e = document.getElementById("progtxt");
    if (started && e && e.textContent) a.prog = e.textContent.replace(/\s+/g, " ").trim();
    call("ping", a).catch(function(){ if (a.prog) call("ping", {tok: P.tok}).catch(function(){}); });
  }
  if (!PRAC) pinged = setInterval(ping, 15000);
  function banner(msg){
    var d = document.createElement("div"); d.style.cssText = "position:fixed;inset:0;z-index:99999;background:rgba(14,42,71,.92);color:#fff;display:flex;align-items:center;justify-content:center;font:600 22px system-ui,sans-serif;text-align:center;padding:30px";
    d.innerHTML = "<div>" + msg + "<br><br><button style='font:700 18px system-ui;padding:12px 22px;border-radius:12px;border:0;cursor:pointer'>OK</button></div>";
    d.querySelector("button").onclick = function(){ d.remove(); }; document.body.appendChild(d);
  }
  /* the name comes from the login, not from typing */
  function setName(){
    var n = document.getElementById("name"); if (!n) return;
    n.value = P.name; n.readOnly = true; n.style.background = "#eef4fb";
    try{ n.dispatchEvent(new Event("input", {bubbles:true})); n.dispatchEvent(new Event("change", {bubbles:true})); }catch(e){}
  }
  document.addEventListener("DOMContentLoaded", setName);
  setTimeout(setName, 300);
  /* ---- continue after a power cut or a closed browser: answers, time left and window count are kept ---- */
  var AID = null, RES = null, restoring = false, RKEY = "nnt_resume_" + P.unit, saveH = null, srvN = 0;
  function lsGet(){ try{ return JSON.parse(localStorage.getItem(RKEY) || "null"); }catch(e){ return null; } }
  function lsSet(v){ try{ if (v) localStorage.setItem(RKEY, JSON.stringify(v)); else localStorage.removeItem(RKEY); }catch(e){} }
  function snap(){
    var w = window;
    if (PRAC || !started || !AID || restoring || w.state !== "test" || w.finished) return null;
    var now = Date.now(), s = {v:1, aid:AID, tr:w.TRACK || "", ts:now, ans:w.ans || {}, pg:w.pageIdx || 0, lv:w.leaves || 0, el:now - (w.startedAt || now), md:!!w.mainDone, ph:w.phase || "main", ord:{}, bx:{}, pst:{}};
    if (!w.mainDone) s.left = Math.max(0, (w.deadline || now) - now);
    else if (w.MAIN){ s.used = w.MAIN.used; s.auto = !!w.MAIN.auto; }
    try{ (w.DATA || []).forEach(function(st, pi){ (st.items || []).forEach(function(it, ii){ if (it.ord) s.ord[pi + "_" + ii] = it.ord; if (it._bx) s.bx[pi + "_" + ii] = it._bx; }); }); }catch(e){}
    try{ Object.keys(w.pst || {}).forEach(function(k){ var x = w.pst[k]; s.pst[k] = Math.max(0, (x.n || 0) - (x.run ? 1 : 0)); }); }catch(e){}
    try{ if (w.HL) s.hl = w.HL; }catch(e){}
    if (w.WS){ var wt = document.getElementById("wtext"); s.w = (wt && wt.value) || w.WS.w || ""; s.ideas = w.WS.ideas; if (w.phase === "writing") s.wleft = Math.max(0, (w.wsDeadline || now) - now); }
    return s;
  }
  function saveNow(srv){
    var s = snap(); if (!s) return;
    lsSet(s);
    if (srv) call("save_state", {tok: P.tok, u: P.unit, st: s}).catch(function(){});
  }
  function startSaving(){
    if (PRAC || saveH) return;
    saveH = setInterval(function(){ srvN++; saveNow(srvN % 5 === 0); }, 3000);
    var deb = null, soon = function(){ clearTimeout(deb); deb = setTimeout(function(){ saveNow(false); }, 400); };
    document.addEventListener("input", soon, true); document.addEventListener("change", soon, true); document.addEventListener("click", soon, true);
    window.addEventListener("pagehide", function(){ saveNow(false); });
  }
  function note(msg){
    var d = document.createElement("div"); d.style.cssText = "position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:99998;background:#0b6b4a;color:#fff;font:700 16px system-ui,sans-serif;padding:11px 20px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.35)";
    d.textContent = msg; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 6000);
  }
  function restore(){
    var w = window, R = RES, now = Date.now(); restoring = true;
    try{
      w.ans = R.ans || {};
      (w.DATA || []).forEach(function(st, pi){ (st.items || []).forEach(function(it, ii){ var k = pi + "_" + ii; if (R.ord && R.ord[k]) it.ord = R.ord[k]; if (R.bx && R.bx[k]) it._bx = R.bx[k]; }); });
      w.pst = {}; Object.keys(R.pst || {}).forEach(function(k){ w.pst[k] = {n: R.pst[k], run: false}; });
      if (R.hl && w.HL) w.HL = R.hl;
      w.leaves = R.lv || 0; w.startedAt = now - (R.el || 0);
      w.pageIdx = Math.max(0, Math.min((w.DATA || []).length - 1, R.pg || 0));
      if (!R.md){
        w.deadline = now + (R.left != null ? R.left : 0);
        w.renderPage(); if (w.tick) w.tick();
      } else {
        w.finishTest(!!R.auto);
        if (w.MAIN && R.used != null) w.MAIN.used = R.used;
        if (w.WS){
          w.WS.ideas = R.ideas || [-1,-1]; w.WS.w = R.w || "";
          if (R.ph === "writing" && w.startWriting){
            w.startWriting();
            var wt = document.getElementById("wtext"); if (wt) wt.value = R.w || "";
            w.wsDeadline = now + (R.wleft != null ? R.wleft : 0);
            (R.ideas || []).forEach(function(i){ if (i >= 0){ var bt = document.querySelector('#ideas .idea[data-i="' + i + '"]'); if (bt) bt.classList.add("on"); } });
            if (wt && wt.oninput) wt.oninput();
          }
        }
      }
      note("Your test continues from where you stopped. Your answers and your time are saved.");
    }catch(e){}
    restoring = false; RES = null; saveNow(true);
  }
  function waitRestore(){
    var n = 0, h = setInterval(function(){
      n++;
      if (window.state === "test"){ clearInterval(h); restore(); }
      else if (n > 80){ clearInterval(h); RES = null; }
    }, 100);
  }
  /* "started" goes to the teacher the moment the student presses the start button */
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("#trkml,#trkie,#startbtn"); if (!b || started) return;
    setName(); if (PRAC) return;
    e.preventDefault(); e.stopImmediatePropagation();
    var trk = b.id === "trkml" ? "ml" : b.id === "trkie" ? "ie" : null;
    call("start_attempt", {tok: P.tok, u: P.unit, trk: trk}).then(function(r){
      if (r && r.ok){
        AID = r.id; started = true;
        var loc = lsGet(), srv = r.again ? r.state : null, c = null;
        if (loc && loc.aid === AID) c = loc;
        if (srv && srv.aid === AID && (!c || (srv.ts || 0) > (c.ts || 0))) c = srv;
        if (!r.again) c = null;
        if (c && c.v === 1){ RES = c; window.graceUntil = Date.now() + 3000; var tb = c.tr ? document.getElementById(c.tr === "ie" ? "trkie" : "trkml") : null; (tb || b).click(); waitRestore(); }
        else { lsSet(null); b.click(); }
        startSaving(); setTimeout(ping, 4000);
      }
      else banner("You cannot start this test." + (r && r.err === "auth" ? " Please log in again." : ""));
    }).catch(function(){ banner("No internet connection. Please tell your teacher."); });
  }, true);
  function practiceDone(){
    var d = document.createElement("div"); d.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#071733;color:#fff;border-top:2px solid #c8963a;padding:12px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;font:600 16px system-ui,sans-serif";
    d.innerHTML = "<span>Practice saved to your page. It does not count for the class.</span><a href='index.html' style='background:#e2b457;color:#2a1c00;text-decoration:none;font-weight:800;padding:10px 18px;border-radius:10px'>Back to my page</a>";
    document.body.appendChild(d);
  }
  function decode(body){
    var seg = body.slice(5).split(".")[0];
    return JSON.parse(decodeURIComponent(escape(atob(seg))));
  }
  function grabFeedback(){
    var fb = document.getElementById("fbbody"); if (!fb || !fb.innerHTML) return "";
    var css = [].map.call(document.querySelectorAll("style"), function(s){ return s.textContent; }).join("\n");
    return "<style>" + css + "</style><body class=\"" + (document.body.className || "").replace(/\bhide\b/g,"") + "\"><section class=\"panel fbp\"><div id=\"fbbody\">" + fb.innerHTML + "</div></section></body>";
  }
  function finish(body){
    var rep; try{ rep = decode(body); }catch(e){ return Promise.reject(new Error("bad result")); }
    rep.n = P.name;
    return new Promise(function(res){ setTimeout(res, 700); }).then(function(){
      var essay = (window.WS && window.WS.w) || "";
      if (PRAC) return call("practice_finish", {tok: P.tok, u: P.unit, rep: rep});
      return call("finish_attempt", {tok: P.tok, u: P.unit, rep: rep, pessay: essay, fb: grabFeedback()});
    }).then(function(r){
      if (!r || !r.ok) throw new Error((r && r.err) || "not saved");
      if (pinged) clearInterval(pinged); if (saveH) clearInterval(saveH); lsSet(null);
      if (PRAC) practiceDone();
      return new Response("ok", {status:200});
    });
  }
  window.fetch = function(u, o){
    if (/script\.google\.com/.test(String(u)) && o && typeof o.body === "string" && o.body.indexOf("WNT1.") === 0) return finish(o.body);
    return of.apply(window, arguments);
  };
})();
