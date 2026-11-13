/* NNT School portal: the New home-practice area (videos first). */
(function(){
  var CSS = ''
  + '#newv{display:block;overflow-y:auto;text-align:left;padding:0;background:radial-gradient(ellipse at top,#16245c 0%,#0a0f2c 60%)}#newv .nw{max-width:760px;margin:0 auto;padding:18px 16px 60px}'
  + '#newv .nbk{background:transparent;border:1.5px solid rgba(255,255,255,.45);color:#fff;border-radius:99px;padding:7px 16px;font:700 15px system-ui;cursor:pointer}'
  + '#newv h2{font-size:30px;margin:16px 0 2px;color:#fff}#newv .sub{color:#c9d3ea;font-size:16px;margin:0 0 18px;max-width:none}'
  + '#newv .st{display:flex;align-items:center;gap:14px;border-radius:18px;padding:16px;margin:12px 0;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);color:#fff}'
  + '#newv .st .n{flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#ff2d6f,#ff7a00);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px}'
  + '#newv .st.off{opacity:.5}#newv .st.off .n{background:#3a4470}#newv .st b{font-size:19px}#newv .st small{display:block;color:#c9d3ea;font-size:14px;margin-top:2px}'
  + '#newv .vc{border-radius:16px;padding:14px 16px;margin:10px 0;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.22);color:#fff}'
  + '#newv .vc .t{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:700}#newv .vc .t span{margin-left:auto;font-size:14px;color:#c9d3ea;font-weight:600;white-space:nowrap}'
  + '#newv .bar{height:10px;border-radius:9px;background:rgba(255,255,255,.18);margin:10px 0 6px;overflow:hidden}#newv .bar i{display:block;height:100%;background:linear-gradient(90deg,#ffb300,#ff7a00);border-radius:9px}'
  + '#newv .vc small{color:#c9d3ea;font-size:14px}#newv .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#fff;background:linear-gradient(135deg,#ff2d6f,#ff7a00);cursor:pointer}#newv .go:disabled{background:#3a4470;color:#9aa5cc;cursor:default}'
  + '#nvp .go{margin-top:10px;border:0;border-radius:12px;padding:11px 20px;font:800 16px system-ui;color:#fff;background:linear-gradient(135deg,#ff2d6f,#ff7a00);cursor:pointer}#nvp .go:disabled{background:#3a4470;color:#9aa5cc}#nvp h3,#nvp p{color:#fff}'
  + '#nvp{position:fixed;inset:0;z-index:95;background:#04071a;color:#fff;display:none;flex-direction:column;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;overflow-y:auto}#nvp.on{display:flex}'
  + '#nvp .tb{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0b1236;border-bottom:1px solid rgba(255,255,255,.14)}#nvp .tb b{font-size:16px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
  + '#nvp button.q{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5);border-radius:99px;padding:6px 13px;font:700 14px system-ui;cursor:pointer}#nvp button.q.on{background:#ff7a00;border-color:#ff7a00}'
  + '#nvp .vw{position:relative;width:100%;max-width:calc((100vh - 235px) * 1.7778);min-width:min(100%,320px);margin:0 auto;aspect-ratio:16/9;background:#000}#nvp .vw iframe,#nvp .vw #nv_yt{position:absolute;inset:0;width:100%;height:100%;border:0}'
  + '#nvp .pn{width:100%;max-width:900px;margin:0 auto;padding:12px 16px 30px;box-sizing:border-box}#nvp .row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0}#nvp .info{color:#c9d3ea;font-size:15px}'
  + '#nvp .bar{position:relative;height:14px;border-radius:9px;background:rgba(255,255,255,.18);margin:8px 0;overflow:hidden}#nvp .bar i{display:block;height:100%;background:linear-gradient(90deg,#ffb300,#ff7a00)}'
  + '#nvp .wb{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:5;background:linear-gradient(135deg,#ff2d6f,#ff7a00);color:#fff;border-radius:18px;padding:12px 26px;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.6);display:none;max-width:92%}#nvp .wb.on{display:block}'
  + '#nvp .wb small{display:block;font-size:13px;font-weight:700;letter-spacing:.08em}#nvp .wb b{display:block;font-size:34px;letter-spacing:.12em}'
  + '#nvp .ov{position:fixed;inset:0;z-index:98;background:rgba(4,7,26,.94);display:none;align-items:center;justify-content:center;text-align:center;padding:24px}#nvp .ov.on{display:flex}#nvp .ov div{max-width:460px}#nvp .ov h3{font-size:28px;margin:8px 0}#nvp .ov p{color:#dfe6ff;font-size:18px;line-height:1.45;margin:6px 0 16px}'
  + '#nvp .ans{margin-top:14px;border-radius:16px;padding:14px;background:rgba(255,179,0,.14);border:2px solid #ffb300;display:none}#nvp .ans.on{display:block}#nvp .ans input{width:100%;box-sizing:border-box;margin:6px 0;padding:11px 12px;border-radius:10px;border:0;font:700 18px system-ui;text-transform:uppercase;letter-spacing:.08em}'
  + '@media(orientation:landscape) and (max-height:560px){#nvp .tb{padding:4px 10px}#nvp .tb b{font-size:14px}#nvp button.q{padding:4px 11px}#nvp .vw{max-width:calc((100vh - 46px) * 1.7778)}}#nvp:fullscreen .vw,#nvp:-webkit-full-screen .vw{max-width:calc((100vh - 46px) * 1.7778)}#nvp:fullscreen .tb,#nvp:-webkit-full-screen .tb{padding:4px 10px}'
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
      + '<div class="vw"><div id="nv_yt"></div></div>'
      + '<div class="wb" id="nvwb"><small id="nvwn"></small><b id="nvww"></b></div>'
      + '<div class="pn"><div class="hint">📱 Turn your phone sideways for a bigger picture.</div>'
      + '<div class="row"><span class="info">Speed:</span><button class="q" data-s="0.75" type="button">0.75×</button><button class="q on" data-s="1" type="button">1×</button><button class="q" data-s="1.25" type="button">1.25×</button><span class="info" style="margin-left:auto">Max speed 1.25×</span></div>'
      + '<div class="bar"><i id="nvbar" style="width:0%"></i></div><div class="info" id="nvinfo"></div>'
      + '<div class="info" id="nvstate" style="margin-top:6px"></div>'
      + '<div class="ans" id="nvans"><b style="font-size:18px">✅ You reached the target!</b><div class="info" style="margin:4px 0 8px">Type the 3 secret words, in the order they appeared.</div><input id="nva1" placeholder="Word 1" autocomplete="off"><input id="nva2" placeholder="Word 2" autocomplete="off"><input id="nva3" placeholder="Word 3" autocomplete="off"><button class="go" id="nvsend" type="button">Check the words</button><div class="info" id="nvam" style="margin-top:8px"></div></div></div>'
      + '<div class="ov" id="nvov"><div><div style="font-size:60px">👀</div><h3 id="nvoh"></h3><p id="nvop"></p><button class="go" id="nvok" type="button">OK, continue</button></div></div>';
    document.body.appendChild(d);
    el("nvb").onclick = leave;
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
  /* ---------- unit page ---------- */
  function page(html){ el("newv").innerHTML = '<div class="nw"><button class="nbk" id="nvback" type="button">← Back</button>' + html + '</div>'; el("nvback").onclick = function(){ if (S.back) S.back(); }; }
  function open(back){
    inject(); S.back = back || null;
    page('<h2>Loading…</h2>');
    rpc("nv_units", {tok: tok()}).then(function(r){
      if (!r || !r.ok){ page('<h2>New</h2><p class="sub">' + (r && r.err === "unpaid" ? "" : "New is not open for you yet.") + '</p>'); return; }
      if (r.all_done){ page('<h2>All done for now ✅</h2><p class="sub">You have finished every unit that is open.' + (r.more ? ' The next unit opens soon.' : '') + '</p>'); return; }
      var u = r.units && r.units[0]; if (!u){ page('<h2>New</h2><p class="sub">Your units will appear here soon.</p>'); return; }
      S.unit = u.unit; unitPage();
    }).catch(function(){ page('<h2>New</h2><p class="sub">No internet connection. Please try again.</p>'); });
  }
  function keyScreen(){
    var nu = S.unit + 1;
    page('<div style="text-align:center;padding:18px 0 6px"><div class="nvkey" style="font-size:150px;line-height:1.05;filter:drop-shadow(0 8px 18px rgba(255,200,40,.55))">🔑</div>'
      + '<h2 style="margin:6px 0 4px">You earned the key!</h2><p class="sub">Unit ' + S.unit + ' is complete. Your class test for this unit is now open.</p>'
      + '<button id="nvnext" type="button" style="margin-top:14px;width:100%;max-width:420px;padding:16px 18px;border:0;border-radius:14px;background:#16a34a;color:#fff;font:800 19px/1.2 inherit;font-family:inherit;box-shadow:0 5px 0 #0f7a37;cursor:pointer">Move on to Unit ' + nu + ' →</button></div>');
    var st = document.createElement("style"); st.textContent = "@keyframes nvk{0%{transform:scale(.3) rotate(-25deg);opacity:0}60%{transform:scale(1.15) rotate(8deg);opacity:1}100%{transform:scale(1) rotate(0)}}.nvkey{animation:nvk .9s ease-out}"; el("newv").appendChild(st);
    el("nvnext").onclick = function(){ S.st = null; open(S.back); };
  }
  function unitPage(){
    rpc("nv_stage", {tok: tok(), u: S.unit}).then(function(x){ S.st = x && x.ok ? x.st : null; S.track = x && x.ok ? x.track : null; return rpc("nv_state", {tok: tok(), u: S.unit}); }).then(function(r){
      if (!r || !r.ok){ page('<h2>New</h2><p class="sub">Not available right now.</p>'); return; }
      S.vids = r.videos;
      if (S.st && S.st.key){ keyScreen(); return; }
      var done = S.vids.filter(function(v){ return v.done; }).length, all = done === S.vids.length;
      var h = '<h2>Unit ' + S.unit + ' · Home practice</h2><p class="sub">Do the steps in order. Each step opens after the one before it.</p>';
      h += '<div class="st"><div class="n">' + (all ? "✓" : "1") + '</div><div><b>Watch the videos</b><small>' + done + ' of ' + S.vids.length + ' finished</small></div></div>';
      if (!all) S.vids.forEach(function(v){
        var pc = Math.min(100, Math.round(v.covered / v.target * 100)), lab = v.done ? "✅ Finished" : v.locked ? "🔒 Locked" : v.covered >= v.target ? "Type the secret words" : v.covered ? "Continue" : "Start";
        h += '<div class="vc"><div class="t">🎬 ' + esc(v.title) + '<span>' + fmt(v.len) + '</span></div><div class="bar"><i style="width:' + (v.done ? 100 : pc) + '%"></i></div><small>Watch at least ' + fmt(v.target) + ' (90%). ' + (v.done ? "Done." : fmt(Math.min(v.covered, v.target)) + " watched.") + (v.redo ? ' Restarts: ' + v.redo + '.' : '') + '</small><br>'
          + '<button class="go" data-i="' + v.idx + '"' + (v.locked || v.done ? " disabled" : "") + ' type="button">' + lab + '</button></div>';
      });
      var st = S.st || {}, tn = S.track === "ie" ? "IELTS" : "Multi-level";
      if (!all){ h += '<div class="st off"><div class="n">2</div><div><b>Home test</b><small>Opens after the videos</small></div></div>'; }
      else if (st.test){ h += '<div class="st"><div class="n">✓</div><div><b>Home test</b><small>Done · ' + Math.round(st.pct) + '%</small></div></div>'; }
      else if (!S.track){
        h += '<div class="st"><div class="n">2</div><div><b>Choose your track</b><small>You choose once. Only your teacher can change it later.</small></div></div>'
          + '<button class="go" id="nvtml" type="button">Multi-level</button> <button class="go" id="nvtie" type="button" style="margin-left:8px">IELTS</button>';
      } else {
        h += '<div class="st"><div class="n">2</div><div><b>Home test</b><small>91 questions · about 1 hour · ' + tn + '. Listening needs headphones. Do it in one go.</small></div></div>'
          + '<button class="go" id="nvstarttest" type="button" style="background:#16a34a">Start the home test</button>';
      }
      h += '<div class="st off"><div class="n">3</div><div><b>Writing</b><small>' + (st.essay ? "Done" : "Opens after the home test · coming soon") + '</small></div></div>'
        + '<div class="st off"><div class="n">4</div><div><b>Speaking</b><small>' + (st.speak ? "Done" : "Opens after the writing · coming soon") + '</small></div></div>';
      page(h);
      ["ml","ie"].forEach(function(t){ var b = el("nvt" + t); if (b) b.onclick = function(){ if (!confirm("Choose " + (t === "ie" ? "IELTS" : "Multi-level") + "? You cannot change this later without your teacher.")) return; rpc("nv_set_track", {tok: tok(), trk: t}).then(function(r){ if (r && (r.ok || r.err === "fixed")) unitPage(); }); }; });
      if (el("nvstarttest")) el("nvstarttest").onclick = function(){ startHome(this); };
      Array.prototype.forEach.call(el("newv").querySelectorAll(".go[data-i]"), function(b){ b.onclick = function(){ play(+b.getAttribute("data-i")); }; });
    }).catch(function(){ page('<h2>New</h2><p class="sub">No internet connection. Please try again.</p>'); });
  }
  /* ---------- home test ---------- */
  function startHome(btn){
    btn.disabled = true; btn.textContent = "Opening… this can take a few seconds.";
    rpc("nv_test", {tok: tok(), u: S.unit}).then(function(r){
      if (!r || !r.ok){ btn.disabled = false; btn.textContent = "Start the home test"; if (r && r.err === "done") unitPage(); else alert(r && r.err === "videos" ? "Finish all the videos first." : "The home test is not ready. Tell your teacher."); return; }
      return fetchDecrypt(r.path, r.key).then(function(buf){
        var html = new TextDecoder("utf-8").decode(buf);
        return fetch("shim.js", {cache: "no-store"}).then(function(x){ return x.text(); }).then(function(shim){
          var cfg = "window.__PORTAL__=" + JSON.stringify({url: PORTAL.URL, key: PORTAL.KEY, tok: tok(), unit: "U" + S.unit, nvunit: S.unit, name: r.name, mode: "home", track: r.track, pass: r.pass}) + ";";
          var tag = "<script>" + cfg + "\n" + shim.replace(/<\/script/gi, "<\\/script") + "<\/script>";
          var m = html.match(/<head[^>]*>/i); html = m ? html.replace(m[0], m[0] + tag) : tag + html;
          document.open(); document.write(html); document.close();
        });
      });
    }).catch(function(e){ btn.disabled = false; btn.textContent = "Start the home test"; alert("Could not open the test. Check the internet and try again."); });
  }
  /* ---------- player ---------- */
  function play(idx){
    var v = S.vids.filter(function(x){ return x.idx === idx; })[0]; if (!v || !v.yt) return;
    S.cur = v; S.ack = v.wack || 0; S.mack = null; S.fails = 0; S.hidden = false; S.ready = false; S.lastPos = v.pos || 0;
    el("nvt").textContent = v.title; el("nvans").classList.remove("on"); el("nvwb").classList.remove("on"); el("nvov").classList.remove("on"); el("nvam").textContent = "";
    el("nvp").classList.add("on"); document.body.style.overflow = "hidden";
    paint(v.covered, v.target, v.wack || 0);
    loadYT(function(){
      el("nvp").querySelector(".vw").innerHTML = '<div id="nv_yt"></div>';
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
      el("nvp").classList.remove("on"); el("nvov").classList.remove("on"); el("nvp").querySelector(".vw").innerHTML = '<div id="nv_yt"></div>';
      unitPage();
    }, 400);
  }
  function close(){ stopPlayer(); S.cur = null; var p = el("nvp"); if (p) p.classList.remove("on"); }
  window.NV = {open: open, close: close};
})();
