/* NNT School classroom: home page and Learning Flow page (same design as Novel). No content yet. */
(function(){
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
  function ringSvg(frac){
    var C = 2 * Math.PI * 50;
    return '<svg viewBox="0 0 120 120"><defs><linearGradient id="nvrg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46f0c4"/><stop offset="1" stop-color="#7c5cff"/></linearGradient></defs>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="rgba(185,176,255,.16)" stroke-width="9"/>'
      + '<circle cx="60" cy="60" r="50" fill="none" stroke="url(#nvrg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * frac).toFixed(1) + ' ' + C.toFixed(1) + '"/></svg>';
  }

  
  var S = {nums: [], unit: 0, name: "", sub: false};
  function el(id){ return document.getElementById(id); }
  function root(){ var r = el("cflow"); if (!r){ r = document.createElement("div"); r.id = "cflow"; r.className = "hide"; document.body.appendChild(r); } return r; }
  function put(html){ var r = root(); r.innerHTML = '<div class="nw">' + html + '</div>'; r.classList.remove("hide"); try{ r.scrollTop = 0; }catch(e){} }
  function pickQuote(){
    var i = Math.floor(Math.random() * QUOTES.length), last = -1;
    try{ last = +localStorage.getItem("nvq"); }catch(e){}
    if (i === last) i = (i + 1) % QUOTES.length;
    try{ localStorage.setItem("nvq", String(i)); }catch(e){}
    return QUOTES[i];
  }
  function front(){
    var n = S.nums, rec = (typeof REC === "number" ? REC : (typeof todayUnit === "function" ? todayUnit() : 0));
    if (n.indexOf(rec) >= 0) return rec;
    for (var i = 0; i < S.tests.length; i++) if (S.tests[i].can && !S.tests[i].done) return S.tests[i].no;
    return n.length ? n[n.length - 1] : 1;
  }
  function idx(){ return S.nums.indexOf(S.unit); }
  function nextU(){ var i = idx(); return i >= 0 && i < S.nums.length - 1 ? S.nums[i + 1] : null; }
  function prevU(){ var i = idx(); return i > 0 ? S.nums[i - 1] : null; }
  function bar(){
    var pv = prevU(), nx = nextU();
    return '<div class="nvnav"><button type="button" class="gb" id="cfgb"' + (pv === null ? " disabled" : "") + '><b>← Go back</b><small>' + (pv === null ? "This is the first unit" : "Unit " + pv) + '</small></button>'
      + '<button type="button" class="pr" id="cfpr"' + (nx === null ? " disabled" : "") + '><b>Proceed →</b><small>' + (nx === null ? "You are at the last unit" : "Unit " + nx) + '</small></button></div>';
  }
  function home(){
    S.sub = false;
    var fu = front(), fn = String(S.name || "").split(" ")[0], q = pickQuote();
    put('<div class="hm"><div class="hmtop"><div class="hmbrand">NNT <span>School Academy</span></div><div class="hmbtns"><button id="cftests" type="button">📝 Class tests</button><button id="cfout" type="button">Log out</button></div></div>'
      + '<div class="hmc"><div class="hmgreet">' + (fn ? 'Welcome back, ' + esc(fn) : 'Welcome back') + '</div>'
      + '<div class="hmring"><div class="ring">' + ringSvg(Math.min(1, S.tests.filter(function(t){ return t.done; }).length / 20)) + '<div class="c"><small>Unit</small><b>' + fu + '</b></div></div></div>'
      + '<div class="hmlvl"><span class="chip">Unit ' + fu + ' of 20</span><span class="chip">Classroom</span></div>'
      + '<blockquote class="hmq"><p>“' + esc(q[0]) + '”</p>' + (q[1] ? '<cite>— ' + esc(q[1]) + '</cite>' : '') + '</blockquote>'
      + '<button type="button" class="go hmgo" id="cfbegin">Begin Learning →</button></div></div>');
    el("cfbegin").onclick = function(){ this.disabled = true; go(front()); };
    el("cftests").onclick = function(){ openTests(); };
    el("cfout").onclick = function(){ logout(); };
  }
  function go(u){
    S.unit = u; S.sub = true;
    put('<div class="hb"><div class="hbar"><button id="cfhome" type="button">⌂ Home</button><button id="cftests2" type="button">📝 Class tests</button></div><div class="hero"><div class="ring">' + ringSvg(0) + '<div class="c"><small>Unit</small><b>' + u + '</b></div></div>'
      + '<div><h2>Learning Flow</h2><p class="sub">In the classroom · Unit ' + u + '</p><span class="chip">Classroom</span><span class="chip">Unit ' + u + ' of 20</span></div></div>'
      + '<div class="nvph"><b>Coming soon</b><p>Your teacher will add the classroom steps for this unit here.</p></div></div>' + bar());
    el("cfhome").onclick = function(){ home(); };
    el("cftests2").onclick = function(){ openTests(); };
    el("cfgb").onclick = function(){ var p = prevU(); if (p !== null) go(p); };
    el("cfpr").onclick = function(){ var n = nextU(); if (n !== null) go(n); };
  }
  function openTests(){ root().classList.add("hide"); }
  function logout(){ root().classList.add("hide"); var b = document.getElementById("out"); if (b) b.click(); }
  window.CF = {
    open: function(name, tests){ S.name = name; S.tests = tests || []; S.nums = S.tests.map(function(t){ return +t.no; }).filter(function(x, i, a){ return a.indexOf(x) === i; }).sort(function(a, b){ return a - b; }); home(); },
    home: function(){ if (S.tests) home(); }, close: function(){ root().classList.add("hide"); }
  };
})();
