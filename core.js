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
    return r.json().then(function(j){ if (!r.ok) throw new Error((j && (j.message || j.hint)) || ("HTTP " + r.status)); if (j && j.err === "unpaid") payWall(); return j; });
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

/* monthly payment wall: shown whenever the server says this student has not paid for the current period */
function payWall(){
  if (document.getElementById("paywall")) return;
  var d = document.createElement("div"); d.id = "paywall";
  d.setAttribute("style", "position:fixed;left:0;top:0;right:0;bottom:0;z-index:99999;background:rgba(7,23,51,.94);display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif");
  d.innerHTML = '<div style="background:#fff;border-radius:20px;max-width:440px;width:100%;padding:28px 22px;text-align:center;border-top:8px solid #c0213f">'
    + '<div style="font-size:56px;line-height:1">\u26A0\uFE0F</div>'
    + '<h1 style="font-size:26px;line-height:1.25;margin:12px 0 10px;color:#9c1a35">Oylik to\u2018lov qilinmagan</h1>'
    + '<p style="font-size:19px;line-height:1.5;color:#0f1a33;margin:0 0 18px">Portaldan foydalanish uchun, iltimos, administrator <b>Maftuna Samadova</b> bilan bog\u2018laning.</p>'
    + '<a href="tel:+998938900808" style="display:block;background:#0e6b4d;color:#fff;text-decoration:none;font-size:23px;font-weight:700;padding:15px 10px;border-radius:14px;white-space:nowrap">\uD83D\uDCDE +998 93 890 08 08</a>'
    + '<a href="https://t.me/Malefisenta_Mafruza" target="_blank" rel="noopener" style="display:block;margin-top:12px;background:#229ed9;color:#fff;text-decoration:none;font-size:19px;font-weight:700;padding:15px 10px;border-radius:14px;overflow-wrap:anywhere">\u2708\uFE0F Telegram<br>@Malefisenta_Mafruza</a>'
    + '<button id="paywall_x" style="margin-top:16px;background:none;border:0;color:#5a6785;font-size:16px;text-decoration:underline;padding:10px">Yopish</button></div>';
  document.body.appendChild(d);
  document.getElementById("paywall_x").onclick = function(){ d.parentNode.removeChild(d); };
}
