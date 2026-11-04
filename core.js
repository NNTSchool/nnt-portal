/* NNT School portal: shared code */
var PORTAL = {
  URL: "https://rbroiqwuogkvkyajpdie.supabase.co",
  KEY: "sb_publishable_4DU70ywUzUEZkLy3uVc7Zg_VPCzJspw"
};
function rpc(name, args, timeout){
  var ctl = ("AbortController" in window) ? new AbortController() : null, t = ctl ? setTimeout(function(){ ctl.abort(); }, timeout || 30000) : null;
  return fetch(PORTAL.URL + "/rest/v1/rpc/" + name, {
    method: "POST",
    headers: {"Content-Type": "application/json", "apikey": PORTAL.KEY, "Authorization": "Bearer " + PORTAL.KEY},
    body: JSON.stringify(args || {}), signal: ctl ? ctl.signal : undefined
  }).then(function(r){
    if (t) clearTimeout(t);
    return r.json().then(function(j){ if (!r.ok) throw new Error((j && (j.message || j.hint)) || ("HTTP " + r.status)); return j; });
  });
}
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function ls(k, v){ try{ if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); }catch(e){} return null; }
function ss(k, v){ try{ if (v === undefined) return sessionStorage.getItem(k); if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); }catch(e){} return null; }
function hex2buf(h){ var a = new Uint8Array(h.length/2); for (var i=0;i<a.length;i++) a[i] = parseInt(h.substr(i*2,2),16); return a; }
/* encrypted files: 12 bytes IV + AES-GCM ciphertext. Key comes from the server only after the checks. */
function fetchDecrypt(path, keyHex, onProgress){
  return fetch(path, {cache: "no-store"}).then(function(r){
    if (!r.ok) throw new Error("file " + r.status);
    var len = +r.headers.get("Content-Length") || 0;
    if (!r.body || !r.body.getReader || !onProgress){ return r.arrayBuffer(); }
    var rd = r.body.getReader(), parts = [], got = 0;
    return (function pump(){ return rd.read().then(function(x){
      if (x.done){ var out = new Uint8Array(got), p = 0; parts.forEach(function(c){ out.set(c, p); p += c.length; }); return out.buffer; }
      parts.push(x.value); got += x.value.length; if (len) onProgress(got / len); return pump();
    }); })();
  }).then(function(buf){
    var u = new Uint8Array(buf);
    return crypto.subtle.importKey("raw", hex2buf(keyHex), "AES-GCM", false, ["decrypt"]).then(function(k){
      return crypto.subtle.decrypt({name: "AES-GCM", iv: u.slice(0,12)}, k, u.slice(12));
    });
  });
}
var LVN = ["FAILED","GOOD JOB","EXCELLENT","NAILED IT","LEGENDARY"];
var LVC = ["#e5365f","#e0409a","#0a9f6e","#ff6a00","#7b2ff7"];
function deviceLabel(){ var u = navigator.userAgent || ""; var m = /\(([^)]*)\)/.exec(u); return (m ? m[1] : u).slice(0, 100); }

function welcomeInit(){
  var Q = ["Every test you finish is a step closer to your goal.","Small steps every day make a big difference.","Mistakes are proof that you are trying. Keep going!","Your English is growing. Be proud of it.","Practise today, shine tomorrow.","Learn a little. Learn every day. Learn for life.","Believe in yourself. You are ready for this."];
  var q = document.getElementById("wq"); if (q) q.textContent = Q[Math.floor(Date.now() / 864e5) % Q.length];
  [].forEach.call(document.querySelectorAll(".pol .ph[data-src]"), function(p){ var im = new Image(); im.onload = function(){ p.style.backgroundImage = "url(" + im.src + ")"; p.className += " real"; }; im.src = p.getAttribute("data-src"); });
}
