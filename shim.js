/* Runs inside a test opened from the classroom library: connects it to the teacher's system */
(function(){
  var P = window.__PORTAL__; if (!P) return;
  var of = window.fetch.bind(window), started = false, pinged = null;
  function call(name, args){
    return of(P.url + "/rest/v1/rpc/" + name, {method:"POST", headers:{"Content-Type":"application/json","apikey":P.key,"Authorization":"Bearer " + P.key}, body: JSON.stringify(args)})
      .then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error((j && j.message) || r.status); return j; }); });
  }
  function ping(){ call("ping", {tok: P.tok}).catch(function(){}); }
  pinged = setInterval(ping, 40000);
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
  /* "started" goes to the teacher the moment the student presses the start button */
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("#trkml,#trkie,#startbtn"); if (!b || started) return;
    setName();
    e.preventDefault(); e.stopImmediatePropagation();
    var trk = b.id === "trkml" ? "ml" : b.id === "trkie" ? "ie" : null;
    call("start_attempt", {tok: P.tok, u: P.unit, trk: trk}).then(function(r){
      if (r && r.ok){ started = true; b.click(); }
      else banner("You cannot start this test." + (r && r.err === "auth" ? " Please log in again." : ""));
    }).catch(function(){ banner("No internet connection. Please tell your teacher."); });
  }, true);
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
      return call("finish_attempt", {tok: P.tok, u: P.unit, rep: rep, pessay: essay, fb: grabFeedback()});
    }).then(function(r){
      if (!r || !r.ok) throw new Error((r && r.err) || "not saved");
      clearInterval(pinged);
      return new Response("ok", {status:200});
    });
  }
  window.fetch = function(u, o){
    if (/script\.google\.com/.test(String(u)) && o && typeof o.body === "string" && o.body.indexOf("WNT1.") === 0) return finish(o.body);
    return of.apply(window, arguments);
  };
})();
