/* NNT no-paste guard: no pasting, dropping, bulk-inserting or copying text out of the tests */
(function(){
  if (window.__nng) return; window.__nng = 1;
  function ok(t){ try { if (!t || !t.tagName) return false; var n = t.tagName; if (n === "INPUT") return /^(password|search|number|tel|email)$/i.test(t.type || ""); return !!(t.closest && t.closest("[data-pasteok]")); } catch (e) { return false; } }
  function stop(e){ if (ok(e.target)) return; e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation(); }
  ["paste", "drop", "cut", "copy", "dragstart", "dragover"].forEach(function(ev){ document.addEventListener(ev, stop, true); });
  document.addEventListener("beforeinput", function(e){ if (/insertFromPaste|insertFromDrop|insertFromYank|insertFromPasteAsQuotation|insertReplacementText|deleteByCut/.test(e.inputType || "")) stop(e); }, true);
  document.addEventListener("keydown", function(e){ var k = (e.key || "").toLowerCase(); if (((e.ctrlKey || e.metaKey) && (k === "v" || k === "x" || k === "insert")) || (e.shiftKey && k === "insert")) stop(e); }, true);
  document.addEventListener("contextmenu", function(e){ var t = e.target; if (t && (t.tagName === "TEXTAREA" || (t.tagName === "INPUT" && !ok(t)))) e.preventDefault(); }, true);
  /* a keyboard that pastes by "typing": a big jump in one step is undone */
  var last = new WeakMap();
  document.addEventListener("beforeinput", function(e){ var t = e.target; if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT")) last.set(t, t.value); }, true);
  document.addEventListener("input", function(e){ var t = e.target; if (!e.isTrusted || !t || (t.tagName !== "TEXTAREA" && t.tagName !== "INPUT") || ok(t) || !last.has(t)) return;
    var p = last.get(t), v = t.value; last.delete(t);
    if (v.length - p.length > 25 && !e.isComposing){ t.value = p; e.stopImmediatePropagation(); } }, true);
})();

/* Runs inside a test opened from the classroom library: connects it to the teacher's system */
(function(){
  var P = window.__PORTAL__; if (!P) return;
  var of = window.fetch.bind(window), started = false, pinged = null, HOME = P.mode === "home" || P.mode === "write" || P.mode === "speak", PRAC = P.mode === "practice" || HOME;
  /* a result must reach the server: a network hiccup is retried (1 s, 3 s, 6 s) before the student sees an error; the reason is kept for the error card */
  function rawcall(name, args, once, long){
    function go(n){
      return of(P.url + "/rest/v1/rpc/" + name, {method:"POST", headers:{"Content-Type":"application/json","apikey":P.key,"Authorization":"Bearer " + P.key}, body: JSON.stringify(args)})
        .then(function(r){ return r.json().then(function(j){ if (!r.ok){ var er = new Error((j && j.message) || r.status); er.http = r.status; throw er; } return j; }, function(){ var er = new Error("bad reply " + r.status); er.http = r.status; throw er; }); })
        .catch(function(er){ var retry = !once && n < (long ? 8 : 5) && (!er.http || er.http >= 500 || er.http === 429);
          if (!retry){ if (!/^nv_tick/.test(name)) window.__nvErr = (er && er.message) || String(er); throw er; }
          return new Promise(function(ok){ setTimeout(ok, [1000, 3000, 6000, 10000, 15000, 20000, 30000, 40000][n]); }).then(function(){ return go(n + 1); }); });
    }
    return go(0);
  }

  /* safety net: a finished result is first kept on this device, then sent. If the send fails (bad internet, server hiccup),
     it is sent again by itself every 45 s, when the internet returns, and the next time any test page is opened. It is removed only after the server has answered. */
  var SAVES = {nv_save_test: 1, nv_grade_test: 1, nv_save_essay: 1, nv_save_speaking: 1}, PKEY = "nnt_pending_v1", busy = {};
  function pRead(){ try { var a = JSON.parse(localStorage.getItem(PKEY) || "[]"); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function pWrite(a){ try { localStorage.setItem(PKEY, JSON.stringify(a)); } catch (e) {} }
  function pPut(it){ var a = pRead().filter(function(x){ return x.id !== it.id; }); a.push(it); pWrite(a); }
  function pDrop(id){ pWrite(pRead().filter(function(x){ return x.id !== id; })); }
  function pBump(id){ var a = pRead(); a.forEach(function(x){ if (x.id === id) x.n = (x.n || 0) + 1; }); pWrite(a.filter(function(x){ return (x.n || 0) < 40 && Date.now() - x.t < 48 * 3600 * 1000; })); }
  window.__nvPending = function(){ return pRead().length; };
  function call(name, args, once, long){
    if (!SAVES[name]) return rawcall(name, args, once, long);
    var id = name + "|" + (args && args.u);
    pPut({id: id, name: name, args: args, t: Date.now(), n: 0}); busy[id] = 1;
    return rawcall(name, args, once, long).then(function(r){ delete busy[id]; pDrop(id); return r; }, function(er){ delete busy[id]; throw er; });
  }
  function flush(){
    pRead().forEach(function(x){
      if (busy[x.id] || !x.args) return; busy[x.id] = 1;
      rawcall(x.name, x.args, true, false).then(function(){ delete busy[x.id]; pDrop(x.id); }, function(){ delete busy[x.id]; pBump(x.id); });
    });
  }
  setTimeout(flush, 8000); setInterval(flush, 45000); window.addEventListener("online", function(){ setTimeout(flush, 1500); });
  /* the error card of the home test says why the result could not be sent */
  try { new MutationObserver(function(){
    var d = document.getElementById("endcard"); if (d && /Could not send/.test(d.textContent) && !d.querySelector(".nverr") && window.__nvErr){ var p = d.querySelector("p"); if (p) p.insertAdjacentHTML("afterend", '<p class="nverr" style="font-size:14px;opacity:.8;margin-top:6px">Reason: ' + String(window.__nvErr).replace(/[<>&]/g, "") + '. ' + (window.__nvPending && window.__nvPending() ? 'Your result is kept on this device and is sent again automatically. ' : '') + 'Tell your teacher if it keeps happening.</p>'); }
    ["homemsg", "smsg"].forEach(function(id){ var m = document.getElementById(id); if (m && /Could not save/.test(m.textContent) && !/Reason:/.test(m.textContent) && !m.__nvR){ m.__nvR = 1; m.textContent = m.textContent + " Reason: " + String(window.__nvErr || "no answer from the server").replace(/[<>&]/g, "") + (window.__nvPending && window.__nvPending() ? ". Your result is kept on this device and is sent again automatically." : ""); setTimeout(function(){ m.__nvR = 0; }, 500); } });
  }).observe(document.documentElement, {childList: true, subtree: true, characterData: true}); } catch (e) {}
  function ping(){
    var a = {tok: P.tok}, e = document.getElementById("progtxt");
    if (started && e && e.textContent) a.prog = e.textContent.replace(/\s+/g, " ").trim();
    call("ping", a, true).catch(function(){ if (a.prog) call("ping", {tok: P.tok}, true).catch(function(){}); });
  }
  if (!PRAC) pinged = setInterval(ping, 15000);
  /* New home test: the page saves its result through this */
  window.nvSave = function(trk, sc, tot, miss, ans, lv){ return call("nv_save_test", {tok: P.tok, u: P.nvunit, trk: trk, sc: sc, tot: tot, miss: miss, ans: ans, lv: lv || 0}, false, true).then(function(r){ if (!r || !r.ok){ window.__nvErr = "server said: " + ((r && r.err) || "not saved"); throw new Error(window.__nvErr); } return r; }); };
  window.nvGrade = function(trk, ans, lv, used){ return call("nv_grade_test", {tok: P.tok, u: P.nvunit, trk: trk, ans: ans || {}, lv: lv || 0, used: used || 0}, false, true).then(function(r){ if (!r || !r.ok){ window.__nvErr = "server said: " + ((r && r.err) || "not graded"); throw new Error(window.__nvErr); } return r; }); };
  window.nvSaveEssay = function(body, words, band, lv){ return call("nv_save_essay", {tok: P.tok, u: P.nvunit, body: body, words: words, band: band, lv: lv || 0}, false, true).then(function(r){ if (!r || !r.ok){ window.__nvErr = "server said: " + ((r && r.err) || "not saved"); throw new Error(window.__nvErr); } return r; }); };
  window.nvEssayTry = function(){ return call("nv_essay_try", {tok: P.tok, u: P.nvunit}).catch(function(){}); };
  /* time on the unit: counted only while the page is open and the student is active (typing, tapping, moving) */
  if (HOME && P.nvunit){
    var lastAct = Date.now(), media = [], op = window.HTMLMediaElement && HTMLMediaElement.prototype.play;
    if (op) HTMLMediaElement.prototype.play = function(){ if (media.indexOf(this) < 0) media.push(this); return op.apply(this, arguments); };
    function playing(){ return media.some(function(m){ return !m.paused && !m.ended && m.readyState > 2; }); }
    ["keydown", "pointerdown", "pointermove", "touchstart", "scroll"].forEach(function(ev){ document.addEventListener(ev, function(){ lastAct = Date.now(); }, {passive: true, capture: true}); });
    setInterval(function(){ if (document.hidden || (Date.now() - lastAct > 120000 && !playing())) return; call("nv_tick_s", {tok: P.tok, u: P.nvunit, s: 15, st: P.mode === "write" ? "write" : P.mode === "speak" ? "speak" : "home"}).catch(function(){ call("nv_tick", {tok: P.tok, u: P.nvunit, s: 15}).catch(function(){}); }); }, 15000);
  }
  window.nvSaveSpeaking = function(tasks, secs){ return call("nv_save_speaking", {tok: P.tok, u: P.nvunit, tasks: tasks, secs: secs}).then(function(r){ if (!r || !r.ok){ window.__nvErr = "server said: " + ((r && r.err) || "not saved"); throw new Error(window.__nvErr); } return r; }); };
  function banner(msg){
    var d = document.createElement("div"); d.style.cssText = "position:fixed;inset:0;z-index:99999;background:rgba(14,42,71,.92);color:#fff;display:flex;align-items:center;justify-content:center;font:600 22px system-ui,sans-serif;text-align:center;padding:30px";
    d.innerHTML = "<div>" + msg + "<br><br><button style='font:700 18px system-ui;padding:12px 22px;border-radius:12px;border:0;cursor:pointer'>OK</button></div>";
    d.querySelector("button").onclick = function(){ d.remove(); }; document.body.appendChild(d);
  }
  /* class tests: the score and the PASSED / FAILED screen are not shown; the student sees the result on the phone page */
  if (!PRAC){
    var hs = document.createElement("style");
    hs.textContent = "#verdict,#rockline,#rpct,#rsections,#confetti,#results .score,#results .card .sub1{display:none!important}.codebox .codeh,#rcode,#copycode,#tgbtn,#pdfbtn,.tgwrap:has(#tgbtn),.tgwrap:has(#pdfbtn){display:none!important}.codebox{border:0!important;background:none!important;padding:0!important;box-shadow:none!important}#nntdone{text-align:center;margin:2px 0 10px;font-family:system-ui,sans-serif}#nntdone .ck{width:74px;height:74px;margin:0 auto 10px;border-radius:50%;background:linear-gradient(145deg,#64748b,#334155);color:#fff;font-size:36px;line-height:74px;box-shadow:0 10px 24px rgba(51,65,85,.3)}#nntdone b{display:block;font-size:26px;line-height:1.25;color:#14213d}#nntdone span{display:block;font-size:16px;line-height:1.5;margin-top:6px;color:#475569;font-weight:600}";
    document.head.appendChild(hs);
    var putMsg = function(){
      var c = document.querySelector("#results .card"); if (!c || document.getElementById("nntdone")) return;
      var d = document.createElement("div"); d.id = "nntdone";
      d.innerHTML = "<div class=\"ck\">\u2709</div><b>Test finished</b><span>Your answers have been sent to your teacher. You can check your result on your phone page after your teacher shares the results.</span>";
      c.insertBefore(d, c.firstChild);
    };
    document.addEventListener("DOMContentLoaded", putMsg); setTimeout(putMsg, 500);
  }
  /* word boxes: a word leaves the box once it is used in an answer (comes back when cleared); only a word the exercise names ("'x' can be used more than once") stays */
  (function(){
    function norm(x){ return String(x||"").replace(/\s+/g," ").trim().toLowerCase(); }
    function sync(){
      var pg = document.getElementById("page") || document.body;
      var vals = [];
      Array.prototype.forEach.call(pg.querySelectorAll("input[type=text]"), function(i){ var v = norm(i.value); if (v) vals.push(v); });
      Array.prototype.forEach.call(pg.querySelectorAll(".box"), function(bx){
        var cs = bx.querySelectorAll(".chip"); if (!cs.length) return;
        var txt = ""; var e = bx.previousElementSibling, n = 0;
        while (e && n < 3){ txt += " " + e.textContent; e = e.previousElementSibling; n++; }
        var again = /(more than once|more than one time|can be used again|can use .* again)/i.test(txt), named = "", m = /[\u2018'\u201c"]([^\u2019'\u201d"]+)[\u2019'\u201d"]\s+can be used/i.exec(txt);
        if (m) named = norm(m[1]);
        Array.prototype.forEach.call(cs, function(c){
          var w = norm(c.getAttribute("data-w") || c.textContent), used = false;
          if (!(again && (!named || w === named))) vals.forEach(function(v){ if (v === w || v.indexOf(w + " ") === 0) used = true; });
          c.style.display = used ? "none" : "";
        });
      });
    }
    window.chipSync = sync;
    setInterval(sync, 350);
  })();
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
        var forced = (r.track === "ie" || r.track === "ml") ? document.getElementById(r.track === "ie" ? "trkie" : "trkml") : null; if (forced) b = forced;
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
      if (!r || !r.ok){ window.__nvErr = "server said: " + ((r && r.err) || "not saved"); throw new Error(window.__nvErr); }
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
