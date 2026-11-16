/* NNT classroom Novel: home page, key check, listening part runner, breaks, class key. Window.CNV = {open(opts)} */
(function(){
  var O = null, R = null, S = {}, A = null;
  function el(i){ return document.getElementById(i); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  var ESC0 = esc;
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
  CSS += '#cnv .hm{position:relative;min-height:calc(100vh - 36px);display:flex;align-items:center;justify-content:space-between;gap:30px;overflow:hidden}#cnv .hmb{position:absolute;left:0;top:0;z-index:3}#cnv .hmo{position:absolute;right:0;top:0;z-index:3}'
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
  CSS += '#cnv .cld{background:none!important;overflow:hidden;left:-200px!important;right:-200px!important}#cnv .cli{-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 58%,transparent 100%);mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 58%,transparent 100%);position:absolute;height:auto;max-width:none;animation:cdr 9s ease-in-out infinite alternate;filter:drop-shadow(0 10px 22px rgba(60,80,190,.5)) saturate(1.2) contrast(1.05)}@keyframes cdr{from{transform:translateX(-14px)}to{transform:translateX(14px)}}'
  + '#cnv .hnt{position:absolute;transform:translateX(-50%);white-space:nowrap;font-weight:700;font-size:18px;color:#bfe9ff;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);border-radius:99px;padding:8px 18px}';
  CSS += '#cnv .fin{text-align:center;padding:36px 0 60px;position:relative;overflow:hidden;min-height:90vh}#cnv .kdrop{width:210px;margin:30px auto 0;animation:kdrop 1.5s cubic-bezier(.3,1.4,.5,1) both,kglow 2.6s 1.5s ease-in-out infinite;filter:drop-shadow(0 0 30px rgba(122,162,255,.75))}'
  + '@keyframes kdrop{0%{transform:translateY(-110vh) rotate(-40deg) scale(.6)}70%{transform:translateY(18px) rotate(10deg) scale(1.05)}100%{transform:none}}@keyframes kglow{50%{transform:translateY(-8px) rotate(3deg);filter:drop-shadow(0 0 56px rgba(140,190,255,.95))}}'
  + '#cnv .flash{position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,#fff,rgba(255,226,122,.6) 30%,transparent 60%);opacity:0;animation:flsh 1.1s 1.1s ease-out both;pointer-events:none}@keyframes flsh{0%{opacity:.95}100%{opacity:0}}'
  + '#cnv .spk i{position:absolute;top:-30px;border-radius:2px;opacity:0;animation:fall linear infinite;animation-fill-mode:both}@keyframes fall{0%{transform:translateY(0) rotate(0);opacity:0}8%{opacity:1}100%{transform:translateY(105vh) rotate(540deg);opacity:.9}}'
  + '#cnv .fh{font-size:58px;line-height:1.05;letter-spacing:-.03em;margin:26px 0 6px;font-weight:800;color:#fff;opacity:0;animation:fup .8s 1.5s both}#cnv .fn{font-size:20px;color:#bfe9ff;margin:0 0 26px;opacity:0;animation:fup .8s 1.8s both}@keyframes fup{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}'
  + '#cnv .fst{display:flex;gap:14px;justify-content:center;margin:0 auto 28px;opacity:0;animation:fup .8s 2.1s both}#cnv .fst div{min-width:150px;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);border-radius:18px;padding:16px 12px}#cnv .fst b{display:block;font-size:40px;font-weight:800;color:#ffd23f}#cnv .fst span{font-size:13px;color:#bcd0ff}#cnv .fin .go{opacity:0;animation:fup .8s 2.5s both}'
  + '#cnv .nd.pop,#cnv .nd.cur.pop{animation:ppop 1.1s cubic-bezier(.2,1.5,.4,1) both}@keyframes ppop{0%{transform:translate(-50%,-50%) scale(0);filter:brightness(3) drop-shadow(0 0 40px #fff)}100%{transform:translate(-50%,-50%) scale(1);filter:none}}';
  CSS += '#cnv .fch{display:flex;align-items:center;justify-content:center;gap:0;margin:80px auto 0;max-width:1400px}#cnv .fc{position:relative;flex:1 1 0;min-width:0;height:440px;border:0;border-radius:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;font-family:inherit;color:#c3cdf5;background:linear-gradient(160deg,#2c3454,#232a47);box-shadow:0 14px 0 #161b33,0 22px 40px rgba(0,0,0,.35);cursor:pointer;touch-action:manipulation}'
  + '#cnv .fc .fi{font-size:84px;line-height:1}#cnv .fc b{font-size:30px;font-weight:800;line-height:1.1}#cnv .fc small{font-size:18px;font-weight:700;opacity:.8}#cnv .fc em{font-style:normal;font-size:14px;font-weight:700;padding:5px 14px;border-radius:99px;background:rgba(255,255,255,.1)}#cnv .fc .fb{position:absolute;top:16px;left:18px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.14);font-style:normal;font-weight:800;font-size:20px;display:flex;align-items:center;justify-content:center}'
  + '#cnv .fc.on{color:#0b1130;background:linear-gradient(135deg,#5df2d6,#7aa2ff 55%,#c58bff);box-shadow:0 14px 0 #3b4fa8,0 26px 50px rgba(122,162,255,.45);animation:fpl 2.4s ease-in-out infinite}#cnv .fc.on b{color:#0b1130}#cnv .fc.on em{background:rgba(255,255,255,.55)}#cnv .fc.on .fb{background:rgba(255,255,255,.6)}@keyframes fpl{50%{transform:translateY(-6px)}}'
  + '#cnv .fl{flex:0 0 170px;display:flex;flex-direction:column;align-items:center;gap:8px;color:#7d8fd6}#cnv .fl svg{width:130px;height:26px}#cnv .fl span{font-size:14px;font-weight:700;color:#9fb4ff;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.16);border-radius:99px;padding:5px 12px;white-space:nowrap}';
  CSS += '#cnv .gr{display:grid;gap:12px 22px;margin:14px 0}#cnv .gr.g4{grid-template-columns:repeat(4,1fr)}#cnv .gr.g3{grid-template-columns:repeat(3,1fr)}#cnv .gr.g2{grid-template-columns:repeat(2,1fr)}#cnv .gr .it{display:flex;align-items:center;gap:10px;margin:0}#cnv .gr .it span{flex:0 0 30px;height:30px;border-radius:50%;background:rgba(122,162,255,.2);color:#bcd0ff;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}#cnv .gr input.a{padding:9px 12px;font-size:18px}'
  + '#cnv .num input.a{font-size:24px;letter-spacing:.08em;font-weight:700;color:#ffd23f;padding:11px 14px}#cnv .seek{flex:1;accent-color:#7aa2ff;height:6px;cursor:pointer}#cnv .spd{display:flex;align-items:center;gap:8px;margin-top:10px}#cnv .sp5{padding:7px 13px;font-size:14px}#cnv .sp5.on{background:#7aa2ff;color:#0b1130;border-color:#7aa2ff}';
  CSS += '#cnv .ins{display:flex;align-items:center;gap:18px;margin:16px 0 8px;padding:18px 22px;border-radius:20px;background:linear-gradient(120deg,rgba(93,242,214,.2),rgba(122,162,255,.22) 55%,rgba(197,139,255,.22));border:2px solid rgba(160,190,255,.55);box-shadow:0 0 34px rgba(122,162,255,.22)}#cnv .ins .ii{flex:0 0 58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#5df2d6,#7aa2ff);display:flex;align-items:center;justify-content:center;font-size:30px}#cnv .ins small{display:block;font-size:12px;font-weight:800;letter-spacing:.2em;color:#ffd23f;margin-bottom:4px}#cnv .ins strong{font-size:24px;line-height:1.3;font-weight:700;color:#fff}';
  CSS += '#cnv .stp{display:flex;align-items:flex-start;justify-content:space-between;margin:6px 0 10px}#cnv .stp u{flex:1;height:5px;border-radius:3px;background:rgba(255,255,255,.14);margin-top:23px;min-width:10px}#cnv .stp u.f{background:linear-gradient(90deg,#5df2d6,#7aa2ff)}'
  + '#cnv .sn{width:92px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:3px;opacity:.55}#cnv .sn .sb{width:50px;height:50px;border-radius:50%;background:#262e4d;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 5px 0 #151a31}#cnv .sn small{font-size:12px;font-weight:700;color:#cfd8ff}#cnv .sn em{font-style:normal;font-size:11px;font-weight:700;color:#8fa0e0;min-height:13px}'
  + '#cnv .sn.dn{opacity:1}#cnv .sn.dn .sb{background:linear-gradient(135deg,#5df2d6,#2fb3a0);color:#06203a;font-weight:800;box-shadow:0 5px 0 #17766a}#cnv .sn.dn em{color:#5df2d6}#cnv .sn.cu{opacity:1}#cnv .sn.cu .sb{background:linear-gradient(135deg,#7aa2ff,#c58bff);box-shadow:0 5px 0 #4b3fa8,0 0 26px rgba(160,140,255,.8);animation:snp 1.8s ease-in-out infinite}#cnv .sn.cu small{color:#fff}#cnv .sn.cu em{color:#ffd23f}@keyframes snp{50%{transform:scale(1.12)}}'
  + '#cnv .fbk{position:relative;text-align:center;margin:18px 0 8px;padding:6px 0}#cnv .ring{width:190px;height:190px;border-radius:50%;margin:0 auto;background:conic-gradient(var(--c) var(--a),rgba(255,255,255,.12) 0);display:flex;align-items:center;justify-content:center;animation:rpop .8s cubic-bezier(.2,1.5,.4,1) both;box-shadow:0 0 40px rgba(255,255,255,.08)}#cnv .ring>div{width:156px;height:156px;border-radius:50%;background:#0b1130;display:flex;flex-direction:column;align-items:center;justify-content:center}#cnv .ring b{font-size:46px;line-height:1;color:var(--c)}#cnv .ring small{font-size:13px;color:#bcd0ff;margin-top:4px}@keyframes rpop{from{transform:scale(.4) rotate(-90deg);opacity:0}to{transform:none;opacity:1}}'
  + '#cnv .verd{font-size:30px;font-weight:800;letter-spacing:.06em;margin-top:12px;animation:fup .7s .5s both}#cout{position:relative}#cnv .fbk .spk{position:absolute;inset:0;overflow:hidden;pointer-events:none}'
  + '#cnv .fr{margin:16px 0}#cnv .fr.rl{display:flex;flex-direction:column;gap:10px}#cnv .rc{display:flex;align-items:center;gap:10px;border-radius:14px;padding:10px 12px;animation:rcp .5s cubic-bezier(.2,1.4,.4,1) both}#cnv .rc>div{flex:1;min-width:0}#cnv .rc.g{background:linear-gradient(120deg,rgba(93,242,214,.22),rgba(93,242,214,.06));border:1.5px solid rgba(93,242,214,.55)}#cnv .rc.b{background:linear-gradient(120deg,rgba(255,122,154,.22),rgba(255,122,154,.06));border:1.5px solid rgba(255,122,154,.55)}'
  + '#cnv .rc .rn{flex:0 0 28px;height:28px;border-radius:50%;background:rgba(255,255,255,.14);font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center}#cnv .rc b{font-size:19px;color:#e9fff9}#cnv .rc s{display:block;font-size:15px;color:#ff9db3;opacity:.9}#cnv .rc strong{display:block;font-size:19px;color:#ffd23f}#cnv .rc small{display:block;font-size:13px;color:#ffc0cf;margin-top:2px}#cnv .rc i{font-style:normal;font-weight:800;font-size:20px}#cnv .rc.g i{color:#5df2d6}#cnv .rc.b i{color:#ff7a9a}@keyframes rcp{from{transform:scale(.6);opacity:0}to{transform:none;opacity:1}}';
  CSS += '#cnv .stp.fx .sn.cu .sb{background:linear-gradient(135deg,#ff9f43,#ff7a9a);box-shadow:0 5px 0 #a8452f,0 0 26px rgba(255,140,90,.8)}#cnv .stp.fx .sn.dn .sb{background:linear-gradient(135deg,#ffd23f,#ff9f43);box-shadow:0 5px 0 #a8661f}#cnv .stp.fx .sn.dn em{color:#ffd23f}#cnv .stp.fx u.f{background:linear-gradient(90deg,#ffd23f,#ff7a9a)}'
  + '#cnv .fxtag{display:inline-block;font-weight:800;letter-spacing:.14em;font-size:13px;color:#2b1200;background:linear-gradient(90deg,#ffd23f,#ff9f43);border-radius:99px;padding:6px 14px;margin:2px 0 6px}#cnv .ins.fixc{background:linear-gradient(120deg,rgba(255,210,63,.2),rgba(255,122,154,.2));border-color:rgba(255,170,100,.7);box-shadow:0 0 34px rgba(255,150,90,.22)}#cnv .ins.fixc .ii{background:linear-gradient(135deg,#ffd23f,#ff7a9a)}#cnv .ins.fixc small{color:#ffd23f}'
  + '#cnv .wu{display:block;font-weight:800;letter-spacing:.22em;font-size:13px;color:#ffd23f;margin-bottom:12px}#cnv .fixgo{margin-top:10px;background:linear-gradient(90deg,#ffd23f,#ff9f43,#ff7a9a);color:#2b1200;animation:fpl 2.2s ease-in-out infinite}'
  + '#cnv .brk{text-align:center;padding:26px 0 40px}#cnv .bh{font-size:56px;line-height:1.05;letter-spacing:-.03em;margin:0 0 8px;font-weight:800;color:#fff}#cnv .bring{position:relative;width:300px;height:300px;margin:22px auto 10px;filter:drop-shadow(0 0 30px rgba(122,162,255,.35))}#cnv .bring svg{width:100%;height:100%}#cnv .bc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}#cnv .bc small{font-size:13px;font-weight:800;letter-spacing:.2em;color:#9fb4ff}#cnv .bc b{font-size:78px;line-height:1.05;font-weight:800;background:linear-gradient(160deg,#fff,#9fd0ff 60%,#c58bff);-webkit-background-clip:text;background-clip:text;color:transparent}#cnv .bc em{font-style:normal;font-size:15px;font-weight:700;color:#bfe9ff}'
  + '#cnv .bring.late{animation:lshk 1s ease-in-out infinite;filter:drop-shadow(0 0 40px rgba(255,90,90,.6))}#cnv .bring.late #barc{stroke:#ff5a6e}#cnv .bring.late .bc b{background:linear-gradient(160deg,#fff,#ff9db3 60%,#ff5a6e);-webkit-background-clip:text;background-clip:text}#cnv .bring.late .bc b{font-size:64px}#cnv .bring.late .bc small,#cnv .bring.late .bc em{color:#ff9db3}@keyframes lshk{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}'
  + '#cnv .chips{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px}#cnv .chips span{padding:9px 16px;border-radius:99px;font-weight:700;font-size:15px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18)}#cnv .chips span:nth-child(1){border-color:#5df2d6}#cnv .chips span:nth-child(2){border-color:#7aa2ff}#cnv .chips span:nth-child(3){border-color:#c58bff}#cnv .chips span:nth-child(4){border-color:#ffd23f}'
  + '#cnv .bk .be{font-size:92px;line-height:1;animation:rpop .8s cubic-bezier(.2,1.5,.4,1) both}#cnv .bk.lt .bh{color:#ffb3c1}#cnv .bk.good .bh{color:#baffef}#cnv .bk .fst{display:flex;gap:14px;justify-content:center;margin:20px auto 0}';
  /* soft, readable light theme (own palette: sky, lilac, mint, coral) */
  CSS += '#cnv{color:#10204a;background:#dbe7f5}#cnv .bg{background:radial-gradient(900px 520px at 85% -10%,#f6dcc9 0,transparent 60%),radial-gradient(800px 500px at -10% 105%,#b9e8e1 0,transparent 60%),linear-gradient(#d3e3f6,#e3e7f8)}'
  + '#cnv h1,#cnv h2,#cnv b{color:#10204a}#cnv .sub,#cnv .hmp{color:#3d4f80}#cnv .pill{border-color:#8fa6d6;background:rgba(255,255,255,.75);color:#10204a}'
  + '#cnv .card{background:#f6f9ff;border-color:#b9c9e6;box-shadow:0 6px 18px rgba(40,60,120,.08)}#cnv .card.ok{background:#d9f5ee;border-color:#2bb59b;color:#0b4a3e}#cnv .card.warn{background:#ffe9cf;border-color:#e0953c;color:#5a3300}#cnv .card.ok h2,#cnv .card.warn h2{color:inherit}'
  + '#cnv input.a,#cnv textarea.a{background:#fff;color:#10204a;border:2px solid #8fa6d6;font-weight:600}#cnv input.a:focus,#cnv textarea.a:focus{outline:none;border-color:#3e63d8;box-shadow:0 0 0 4px rgba(62,99,216,.2)}'
  + '#cnv .gr .it span,#cnv .rc .rn{background:rgba(16,32,74,.1);color:#10204a}#cnv .bar{background:rgba(16,32,74,.15)}'
  + '#cnv .rc.g{background:#d9f5ee;border-color:#2bb59b}#cnv .rc.g b{color:#0b4a3e}#cnv .rc.g i{color:#0c9c84}#cnv .rc.b{background:#fde3e9;border-color:#e0607f}#cnv .rc.b s{color:#b2334f}#cnv .rc.b strong{color:#7a4a00}#cnv .rc.b small{color:#a03355}#cnv .rc.b i{color:#d6395f}#cnv .rc small{color:#3d4f80}'
  + '#cnv .ins{background:linear-gradient(120deg,#d7f5ef,#d9e6ff 55%,#eadcff);border-color:#7f9de0;box-shadow:0 6px 20px rgba(60,90,180,.14)}#cnv .ins strong{color:#10204a}#cnv .ins small{color:#a35b00}#cnv .ins.fixc{background:linear-gradient(120deg,#fff0cf,#ffdce4);border-color:#f0a060;box-shadow:0 6px 20px rgba(220,120,60,.16)}#cnv .ins.fixc small{color:#b25400}'
  + '#cnv .stp u{background:#b3c3e3}#cnv .sn{opacity:.85}#cnv .sn .sb{background:#c4d3ec;box-shadow:0 5px 0 #a3b6dc}#cnv .sn small{color:#10204a}#cnv .sn em{color:#4d5f93}#cnv .sn.dn em{color:#0c8a73}#cnv .stp.fx .sn.dn em{color:#b25400}#cnv .sn.cu small{color:#10204a}#cnv .sn.cu em{color:#b25400}'
  + '#cnv .ring{background:conic-gradient(var(--c) var(--a),rgba(16,32,74,.12) 0)}#cnv .ring>div{background:#f6f9ff}#cnv .ring small{color:#3d4f80}#cnv .wu{color:#b25400}#cnv .fxtag{color:#2b1200}'
  + '#cnv .fc{color:#3d4f80;background:linear-gradient(160deg,#cdd9ee,#bccbe6);box-shadow:0 14px 0 #9fb3d9,0 22px 36px rgba(40,60,120,.18)}#cnv .fc b{color:#10204a}#cnv .fc .fb{background:rgba(16,32,74,.12)}#cnv .fc em{background:rgba(255,255,255,.6)}#cnv .fc.on{box-shadow:0 14px 0 #3b4fa8,0 26px 50px rgba(62,99,216,.35)}#cnv .fl{color:#5a70b5}#cnv .fl span{background:#fff;border-color:#b9c9e6;color:#3d4f80}'
  + '#cnv .hnt{color:#10204a;background:rgba(255,255,255,.8);border-color:#b9c9e6}'
  + '#cnv .bh,#cnv .fh{color:#10204a}#cnv .fn{color:#3d4f80}#cnv .bring svg circle:nth-of-type(1){stroke:rgba(16,32,74,.12)}#cnv .bc small{color:#4d5f93}#cnv .bc em{color:#3d4f80}#cnv .bc b{background:linear-gradient(160deg,#10204a,#3e63d8 70%,#8a5cf0);-webkit-background-clip:text;background-clip:text}#cnv .bring.late .bc b{background:linear-gradient(160deg,#7a1230,#d6395f);-webkit-background-clip:text;background-clip:text}#cnv .bring.late .bc small,#cnv .bring.late .bc em{color:#b2334f}#cnv .bring.late #barc{stroke:#e0405f}'
  + '#cnv .chips span{background:#fff;color:#10204a}#cnv .fst div{background:#f6f9ff;border-color:#b9c9e6}#cnv .fst span{color:#3d4f80}#cnv .fst b{color:#d98b00}#cnv .bk.lt .bh{color:#b2334f}#cnv .bk.good .bh{color:#0b7a66}'
  + '#cnv .hmh{color:#10204a}#cnv .hmt{color:#b25400}#cnv .hmc span{background:#fff;border-color:#b9c9e6;color:#10204a}#cnv .hmc span b{color:#10204a}#cnv .sp5.on{background:#3e63d8;border-color:#3e63d8;color:#fff}#cnv .spk i{opacity:1}';
  CSS += '@media(max-width:760px){#cnv .hm{padding-top:62px;box-sizing:border-box}#cnv .hmh{font-size:46px}}';

  /* ---------- reading: split screen ---------- */
  CSS += '#cnv .w.rdw{max-width:1700px;padding:12px 18px 24px}#cnv .rdh{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:4px 0 10px}#cnv .rdh h2{margin:0;font-size:26px;letter-spacing:-.02em}'
  + '#cnv .rds{display:flex;gap:6px;align-items:center;flex-wrap:wrap}#cnv .rds span{padding:6px 12px;border-radius:99px;font-weight:800;font-size:13px;background:#fff;border:2px solid #b9c9e6;color:#4d5f93}#cnv .rds span.cu{background:#3e63d8;border-color:#3e63d8;color:#fff;animation:fpl 2.2s ease-in-out infinite}#cnv .rds span.dn{background:#d9f5ee;border-color:#2bb59b;color:#0b6a58}'
  + '#cnv .rtm{margin-left:auto;font-weight:800;font-size:18px;padding:6px 14px;border-radius:12px;background:#fff;border:2px solid #b9c9e6;color:#10204a;font-variant-numeric:tabular-nums}#cnv .rtm.late{background:#fde3e9;border-color:#e0607f;color:#b2334f}'
  + '#cnv .rsp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start}#cnv .rpn{background:#fffdf7;border:2px solid #c9d6ee;border-radius:18px;box-shadow:0 8px 24px rgba(40,60,120,.1);height:calc(100vh - 150px);min-height:420px;overflow-y:auto;padding:22px 28px 30px;scroll-behavior:smooth}'
  + '#cnv .rpn.q{background:#f6f9ff;padding:18px 22px 24px}#cnv mark.vk{background:none;color:inherit}#cnv .rpn.hl mark.vk{background:linear-gradient(transparent 55%,#ffe08a 55%);border-radius:3px;font-weight:600}#cnv .rpt{font:800 38px/1.05 Georgia,serif;letter-spacing:-.02em;margin:0 0 6px;color:#10204a}#cnv .rpi{font:italic 16px/1.5 Georgia,serif;color:#3d4f80;margin:0 0 16px;padding-bottom:14px;border-bottom:2px dashed #c9d6ee}'
  + '#cnv .rpn p.rp{font:19px/1.75 Georgia,serif;color:#1b2a52;margin:0 0 16px;text-align:left;position:relative}#cnv .rpn p.rp .pl{position:absolute;left:-24px;top:3px;font:800 11px system-ui;color:#9fb0d8}'
  + '#cnv .qg{margin:0 0 18px}#cnv .qgh{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;border-radius:14px;background:linear-gradient(120deg,#d7f5ef,#d9e6ff 55%,#eadcff);border:2px solid #7f9de0;margin-bottom:12px}#cnv .qgh b{font-size:17px;display:block}#cnv .qgh small{display:block;font-size:14.5px;line-height:1.45;color:#2d3f73;margin-top:3px}#cnv .qgh .qi{font-size:26px;line-height:1}'
  + '#cnv .qd{display:flex;flex-wrap:wrap;gap:6px 14px;margin:0 0 10px;font-size:13.5px;color:#3d4f80}#cnv .qd b{color:#10204a}'
  + '#cnv .qr{display:flex;gap:12px;padding:12px 14px;border-radius:14px;background:#fff;border:2px solid #d3dcf0;margin-bottom:10px;transition:border-color .15s,background .15s}#cnv .qr.fld{background:#f1fbf8;border-color:#7fd6c3}#cnv .qr.gd{background:#e3f8f1;border-color:#2bb59b}#cnv .qr.bd{background:#fde8ed;border-color:#e0607f}#cnv .qr.lk{opacity:.55}'
  + '#cnv .qn{flex:0 0 34px;height:34px;border-radius:10px;background:#3e63d8;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}#cnv .qr.gd .qn{background:#0c9c84}#cnv .qr.bd .qn{background:#d6395f}#cnv .qb{flex:1;min-width:0}#cnv .qt{font-size:16.5px;line-height:1.45;color:#10204a;font-weight:600;margin:3px 0 9px}'
  + '#cnv .tf{display:flex;gap:8px;flex-wrap:wrap}#cnv .tf button{flex:1;min-width:96px;padding:10px 8px;border-radius:12px;border:2px solid #9fb2dc;background:#fff;color:#2d3f73;font-weight:800;font-size:14px;cursor:pointer;letter-spacing:.02em;transition:transform .1s}#cnv .tf button:hover{transform:translateY(-2px)}#cnv .tf button.sel{background:#3e63d8;border-color:#3e63d8;color:#fff;box-shadow:0 4px 0 #27409b}#cnv .tf button:disabled{cursor:default;transform:none}'
  + '#cnv input.rin{width:100%;box-sizing:border-box;padding:10px 12px;border-radius:12px;border:2px solid #8fa6d6;background:#fff;color:#10204a;font:700 17px system-ui;outline:none}#cnv input.rin:focus{border-color:#3e63d8;box-shadow:0 0 0 4px rgba(62,99,216,.2)}#cnv input.rin.rt{width:150px;padding:6px 8px;font-size:15px;display:inline-block;margin:2px 4px}'
  + '#cnv table.rtb{width:100%;border-collapse:separate;border-spacing:0;font-size:14.5px;line-height:1.5;color:#1b2a52;border:2px solid #b9c9e6;border-radius:14px;overflow:hidden;background:#fff}#cnv .rtb th{background:#dfe8fb;text-align:left;padding:9px 10px;font-weight:800;color:#10204a}#cnv .rtb td{padding:10px;border-top:1px solid #d3dcf0;vertical-align:top}#cnv .rtb td:first-child{font-weight:800;font-style:italic}#cnv .rtb td+td{border-left:1px solid #e1e8f7}'
  + '#cnv .tqn{display:inline-block;min-width:22px;text-align:center;padding:1px 6px;margin-right:2px;border-radius:7px;background:#3e63d8;color:#fff;font-weight:800;font-size:13px}#cnv .tqn.gd{background:#0c9c84}#cnv .tqn.bd{background:#d6395f}#cnv .tw{display:inline-block;white-space:nowrap}'
  + '#cnv .rbar{position:sticky;bottom:0;display:flex;align-items:center;gap:14px;padding:12px 4px 2px;background:linear-gradient(transparent,#f6f9ff 30%)}#cnv .rbar .go{margin:0}#cnv .rbar small{font-weight:700;color:#3d4f80}#cnv .go:disabled{opacity:.45;cursor:not-allowed;animation:none;filter:grayscale(.4)}'
  + '#cnv .rsc{display:flex;gap:22px;align-items:center;flex-wrap:wrap;justify-content:center;margin:14px 0}#cnv .rsc .ring{width:190px;height:190px}#cnv .qchips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:620px;margin:8px auto 0}#cnv .qchips i{font-style:normal;width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;color:#fff;animation:rpop .5s cubic-bezier(.2,1.5,.4,1) both}#cnv .qchips i.g{background:#0c9c84}#cnv .qchips i.b{background:#d6395f}'
  + '#cnv .vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;margin:12px 0}#cnv .vc{padding:12px 14px;border-radius:14px;background:#fff;border:2px solid #c9d6ee;border-left:8px solid #3e63d8}#cnv .vc.c{border-left-color:#8a5cf0}#cnv .vc b{font-size:19px;display:block}#cnv .vc span{display:block;color:#3d4f80;font-size:15px;margin-top:2px}#cnv .vc em{display:block;font-style:normal;color:#b25400;font-weight:700;font-size:15px;margin-top:3px}'
  + '#cnv .vh{font-weight:800;letter-spacing:.14em;font-size:13px;color:#b25400;margin:18px 0 0;text-transform:uppercase}'
  + '#cnv .acard{padding:14px 16px;border-radius:16px;background:#fff;border:2px solid #c9d6ee;margin-bottom:12px;display:flex;gap:14px}#cnv .acard.gd{border-color:#2bb59b;background:#eefaf6}#cnv .acard.bd{border-color:#e0607f;background:#fff1f4}#cnv .acard .qn{flex:0 0 40px;height:40px}#cnv .acard.gd .qn{background:#0c9c84}#cnv .acard.bd .qn{background:#d6395f}#cnv .acard p{margin:0 0 4px;color:#1b2a52;font-size:15.5px;line-height:1.5}#cnv .acard .ky{display:inline-block;padding:3px 12px;border-radius:99px;background:#0c9c84;color:#fff;font-weight:800;margin:2px 6px 4px 0}#cnv .acard .yr{display:inline-block;padding:3px 12px;border-radius:99px;background:#fde3e9;color:#b2334f;font-weight:800;margin:2px 6px 4px 0;text-decoration:line-through}'
  + '@media(max-width:980px){#cnv .rsp{grid-template-columns:1fr}#cnv .rpn{height:auto;max-height:60vh}}';

  /* green highlighter: select text inside any .hlz area to highlight it, click a highlight to remove it */
  CSS += '#cnv .hlr{background:#e5484d;color:#fff;border-radius:3px;box-shadow:0 0 0 1px #c23338;cursor:pointer;padding:0 1px}#cnv .hlr:hover{background:#f06a6e}#cnv #rdq ::selection{background:#f4a3a6}#cnv .hlg{background:#3fcf60;color:#04210d;border-radius:3px;box-shadow:0 0 0 1px #2fb350;cursor:pointer;padding:0 1px}#cnv .hlg:hover{background:#68dd83}#cnv .hlz ::selection,#cnv .hlz::selection{background:#9be9ae}#cnv .hltip{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:99px;background:#e5f9ea;border:2px solid #3fcf60;color:#0b5a22;font-weight:700;font-size:13px}#cnv .hltip i{font-style:normal;background:#3fcf60;color:#04210d;border-radius:5px;padding:0 6px;font-weight:800}';

  CSS += '#cnv .rtabs{display:flex;gap:8px;margin:0 0 10px;flex-wrap:wrap}#cnv .rtab{padding:9px 18px;border-radius:12px;border:2px solid #9fb2dc;background:#fff;color:#2d3f73;font-weight:800;font-size:15px;cursor:pointer}#cnv .rtab.sel{background:#3e63d8;border-color:#3e63d8;color:#fff;box-shadow:0 4px 0 #27409b}#cnv .rtab small{opacity:.8}'
  + '#cnv select.rsel{width:100%;box-sizing:border-box;padding:10px 12px;border-radius:12px;border:2px solid #8fa6d6;background:#fff;color:#10204a;font:700 16px system-ui;outline:none}#cnv select.rsel:focus{border-color:#3e63d8;box-shadow:0 0 0 4px rgba(62,99,216,.2)}'
  + '#cnv .annc{display:flex;gap:12px;padding:10px 12px;border-radius:14px;background:#fff;border:2px solid #d3dcf0;margin-bottom:9px}#cnv .annc>b{flex:0 0 34px;height:34px;border-radius:10px;background:#8a5cf0;color:#fff;display:flex;align-items:center;justify-content:center;font-size:17px}#cnv .annc strong{display:block;font-size:15.5px;color:#10204a}#cnv .annc p{margin:2px 0 0;font:16px/1.5 Georgia,serif;color:#1b2a52}'
  + '#cnv .hdl{display:grid;gap:6px}#cnv .hdl div{display:flex;gap:10px;align-items:center;padding:7px 10px;border-radius:10px;background:#fff;border:2px solid #d3dcf0}#cnv .hdl b{flex:0 0 28px;height:28px;border-radius:8px;background:#8a5cf0;color:#fff;display:flex;align-items:center;justify-content:center}#cnv .hdl span{font-weight:600;color:#10204a;font-size:15px}'
  + '#cnv .pn{display:inline-block;min-width:30px;text-align:center;padding:1px 8px;margin-right:6px;border-radius:8px;background:#8a5cf0;color:#fff;font:800 14px system-ui}#cnv .used{opacity:.45}#cnv .used strong,#cnv .used span,#cnv .used p{text-decoration:line-through;text-decoration-thickness:2px}#cnv .used>b{opacity:.6}#cnv .gapw{display:inline-block;white-space:nowrap}#cnv .gdn{color:#0b7a66}';

  CSS += '#cnv .rsp.rfull{grid-template-columns:minmax(0,1100px);justify-content:center}#cnv .rsp.rfull #rdq{display:none}#cnv .rsp.rfull .rpn{height:calc(100vh - 275px)}#cnv .rsp.rfull .rpn p.rp,#cnv .rsp.rfull .rpn>p:not(.rpi){font:20px/2.1 Georgia,serif;color:#1b2a52;margin:0 0 16px}#cnv .rbfix{position:sticky;bottom:0;max-width:1100px;margin:10px auto 0;padding:10px 14px;border-radius:14px;background:rgba(246,249,255,.96);border:2px solid #c9d6ee}'
  + '#cnv .rsp:not(.rfull)+.rbfix{max-width:none}';

  CSS += '#cnv .nd.done{background:radial-gradient(ellipse at 35% 25%,#fff0a8,#ffc21a 60%,#f09a00);--d:#b36b00;box-shadow:0 14px 0 var(--d),0 22px 40px rgba(255,170,0,.55),inset 0 4px 10px rgba(255,255,255,.7)}#cnv .nd .gtk{width:118px;height:118px;filter:drop-shadow(0 6px 8px rgba(120,70,0,.45));animation:gtp 2.6s ease-in-out infinite}@keyframes gtp{50%{transform:scale(1.06) rotate(-3deg)}}'
  + '#cnv .nd .gsp{transform-origin:100px 29px;animation:gsp 1.8s ease-in-out infinite}@keyframes gsp{0%,100%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.1)}}#cnv .nd .ndn{position:absolute;right:6px;bottom:2px;min-width:30px;height:30px;border-radius:50%;background:#fff;color:#a05d00;font:800 16px/30px system-ui;text-align:center;box-shadow:0 3px 0 rgba(0,0,0,.25)}';

  /* writing */
  CSS += '#cnv .wrh{font-weight:800;letter-spacing:.1em;font-size:13px;color:#b25400;text-transform:uppercase;margin:0 0 8px}#cnv textarea.wrta{width:100%;box-sizing:border-box;height:calc(100% - 150px);min-height:260px;resize:none;padding:14px 16px;border-radius:14px;border:2px solid #8fa6d6;background:#fff;color:#10204a;font:19px/1.75 Georgia,serif;outline:none}#cnv textarea.wrta:focus{border-color:#3e63d8;box-shadow:0 0 0 4px rgba(62,99,216,.2)}'
  + '#cnv .wrm{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-top:8px;font-weight:700;color:#3d4f80}#cnv .wrm b{color:#10204a;font-size:17px}'
  + '#cnv .wrsd{font-weight:800;letter-spacing:.1em;font-size:12.5px;color:#46566e;text-transform:uppercase;margin:10px 0 4px}#cnv .widea{display:block;width:100%;text-align:left;background:#fff;border:2px solid #c9d6ee;border-radius:12px;padding:9px 12px;margin:0 0 6px;font:600 15.5px/1.4 system-ui;color:#10204a;cursor:pointer}#cnv .widea b{display:block;font:800 11.5px system-ui;letter-spacing:.08em;text-transform:uppercase;color:#46566e;margin-bottom:2px}#cnv .widea.own{border-style:dashed}#cnv .widea.s1.on{border-color:#0c9c84;background:#e3f8f1;box-shadow:0 0 0 3px rgba(12,156,132,.18)}#cnv .widea.s2.on{border-color:#d9480f;background:#fff1e6;box-shadow:0 0 0 3px rgba(217,72,15,.16)}#cnv .wown{margin:0 0 8px}'
  + '#cnv .wpb{display:grid;grid-template-columns:1fr 1fr;gap:8px 14px;background:#f3f7fd;border:1.5px dashed #9db4d6;border-radius:12px;padding:10px 14px;font:15px/1.5 system-ui}#cnv .wpb h4{margin:0 0 2px;font:800 12px system-ui;letter-spacing:.09em;text-transform:uppercase;color:#2b4f86}#cnv .wpb ul{margin:0;padding-left:16px}#cnv .wch{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}#cnv .wch span{font:600 14px system-ui;padding:4px 12px;border-radius:99px;background:#f1ece0;color:#7b7260;transition:all .15s}#cnv .wch span.on{background:#3fcf60;color:#04210d;transform:scale(1.06)}'
  + '#cnv .wsc{text-align:center;max-width:900px;margin:0 auto 14px;padding:14px 18px;border-radius:20px;background:linear-gradient(120deg,#d7f5ef,#d9e6ff 55%,#eadcff);border:2px solid #7f9de0}#cnv .wbg{font:800 66px/1.05 system-ui;color:#10204a}#cnv .wbg small{font-size:26px;color:#3d4f80}#cnv .wcr{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:8px 0}#cnv .wcr span{background:#fff;border-radius:10px;padding:6px 12px;font-weight:700;color:#3d4f80}#cnv .wcr span b{color:#10204a}'
  + '#cnv .wah{display:flex;gap:8px;justify-content:center;align-items:center;flex-wrap:wrap;margin-top:8px}#cnv .wat{display:inline-flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:12px;background:#fff;border:2px solid #2bb59b}#cnv .wat.dw{border-color:#e0607f}#cnv .wat i{font:700 12px system-ui;font-style:normal;color:#3d4f80}#cnv .wat b{font-size:24px}#cnv .wat em{font:800 13px system-ui;font-style:normal;color:#0c9c84}#cnv .wat.dw em{color:#d6395f}#cnv .war{font-weight:800;color:#3d4f80}'
  + '#cnv .wgg{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:6px 0 14px}#cnv .rpn .wgg{grid-template-columns:1fr}#cnv .wgv,#cnv .wsec{background:#fff;border:2px solid #c9d6ee;border-radius:14px;padding:12px 16px;margin-bottom:12px}#cnv .wgv h3,#cnv .wsec h3{margin:0 0 4px;font:800 19px system-ui}#cnv .wgv ul,#cnv .wsec ul{margin:0;padding-left:20px;font:15px/1.5 system-ui}#cnv .wgv li{margin-bottom:5px}#cnv .wgh{font:800 12.5px system-ui;letter-spacing:.06em;margin:8px 0 3px;color:#3d4f80}#cnv .wbd{color:#d62828;text-decoration:line-through}#cnv .wfx{color:#0a8f3c;font-weight:800}#cnv .wgv small{color:#5f6f86;display:block}#cnv .wgv p{margin:0;font:15px/1.5 system-ui}'
  + '#cnv .wlg{font:13px/1.4 system-ui;color:#46566e;margin:2px 0 6px}#cnv .wlg u{text-decoration:underline solid #d62828;text-decoration-thickness:2px}#cnv .wlg span{color:#0a8f3c;font-weight:700}'
  + '#cnv .wess{white-space:pre-wrap;background:#fffdf8;border:1px solid #c9d6ee;border-radius:12px;padding:10px 14px;font:17px/1.85 Georgia,serif}#cnv .wess u.err{text-decoration:underline solid #d62828;text-decoration-thickness:2px;text-underline-offset:3px;color:#b00020}#cnv .wess u.chk{text-decoration:underline dotted #d98a00;text-decoration-thickness:2px;text-underline-offset:3px}#cnv .wess u.sty{text-decoration:underline dotted #2b6cb0;text-decoration-thickness:2px;text-underline-offset:3px}#cnv .wess .okfx{color:#0a8f3c;font:700 15.5px system-ui;white-space:normal}#cnv .wess .okfx.q{color:#a06a00}#cnv .wess .okfx.s{color:#2b6cb0}#cnv .wess mark.okw{background:#d6f3e3;border-radius:5px;padding:0 3px}'
  + '@media(max-width:980px){#cnv .wgg{grid-template-columns:1fr}}';
  CSS += '#cnv .drw{max-width:820px;margin:10px auto 100px}#cnv .drb{height:10px;border-radius:99px;background:rgba(120,140,200,.3);margin-bottom:14px;overflow:hidden}#cnv .drp{height:100%;background:linear-gradient(90deg,#2bd5b3,#ffc21a);transition:width .4s}#cnv .drc{background:#fffdf8;border:2px solid #c9d6ee;border-radius:18px;padding:18px 22px;color:#10204a}#cnv .dri{font:800 12.5px system-ui;letter-spacing:.09em;text-transform:uppercase;color:#46566e;margin:6px 0}#cnv .drs{font:21px/1.6 Georgia,serif;background:#fff1f1;border-left:5px solid #d62828;border-radius:8px;padding:10px 14px;margin-bottom:12px}#cnv textarea.drta{height:110px;min-height:90px}#cnv .drx{background:#fff6dd;border:1.5px solid #f0c24a;border-radius:12px;padding:10px 14px;margin:10px 0;font:15.5px/1.5 system-ui}#cnv .drg{font:21px/1.6 Georgia,serif;color:#0a6d33;margin:8px 0}#cnv .drg.bad{color:#b00020}#cnv #drk{margin-top:12px}';
  CSS += '#cnv .stp.l4{max-width:760px;margin:6px auto 10px}#cnv .l4ph{font-weight:800;letter-spacing:.14em;font-size:12px;color:#ffd23f;text-transform:uppercase;margin-top:6px}'
  + '#cnv .l4bar{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:14px;flex-wrap:wrap}#cnv .wrm.ok{color:#5df2d6}#cnv .wrm.gd{color:#5df2d6;font-size:18px}#cnv .wrm.bd{color:#ff9db3;font-size:16px}'
  + '#cnv textarea.l4na{min-height:300px;font-size:19px;line-height:1.55;margin-top:12px;background:#fffdf7;color:#10204a;border:2px solid #9db4ff;border-radius:16px;padding:16px 18px}'
  + '#cnv .l4two{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:18px;align-items:start;margin-top:12px}#cnv .l4two.rv{grid-template-columns:minmax(0,6fr) minmax(0,6fr)}'
  + '#cnv .l4notes,#cnv .l4tp{background:#fffdf7;color:#10204a;border:2px solid #c9d6ee;border-radius:18px;padding:16px 20px;max-height:calc(100vh - 260px);overflow:auto}#cnv .l4notes h3,#cnv .l4tp h3{margin:0 0 8px;font-size:15px;letter-spacing:.1em;text-transform:uppercase;color:#3e63d8}#cnv .l4tp h3 small{display:block;text-transform:none;letter-spacing:0;font-size:13px;color:#6a7aa6;font-weight:600;margin-top:2px}'
  + '#cnv .l4nt,#cnv .l4tx{font:17px/1.6 Georgia,serif;color:#1b2a52}#cnv .l4tx{font-size:16px}#cnv .l4ev{background:#ffd23f;color:#3a2a00;border-radius:4px;padding:1px 2px;box-shadow:0 0 0 2px #ffd23f}#cnv .l4au{display:flex;align-items:center;gap:12px;margin-top:12px;position:sticky;bottom:0;background:linear-gradient(transparent,#fffdf7 30%);padding-top:8px}'
  + '#cnv .l4ans{background:#fffdf7;color:#10204a;border:2px solid #c9d6ee;border-radius:18px;padding:16px 18px;margin-top:12px}#cnv .l4ans.lk{opacity:.78}#cnv .l4two .l4ans{margin-top:0}#cnv .l4qh{font-weight:700;font-size:16px;color:#2d3f73;margin-bottom:10px;padding:10px 12px;border-radius:12px;background:linear-gradient(120deg,#d7f5ef,#d9e6ff 55%,#eadcff)}'
  + '#cnv .l4r{display:flex;align-items:center;gap:12px;padding:10px 6px;border-bottom:1px solid #e3eaf8}#cnv .l4r:last-child{border:0}#cnv .l4r .qn{flex:0 0 34px;height:34px;border-radius:10px;background:#3e63d8;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}#cnv .l4r .qt{flex:1;font-size:17px;line-height:1.4;font-weight:600;color:#10204a}#cnv .l4r .qt strong{color:#b25400;margin-left:6px}'
  + '#cnv .l4t{display:flex;gap:8px;align-items:center}#cnv .l4tf{border:2px solid #b9c9e6;background:#fff;color:#2d3f73;border-radius:12px;padding:9px 18px;font:800 15px Lexend,system-ui;cursor:pointer;min-width:84px}#cnv .l4tf.on{background:#3e63d8;border-color:#3e63d8;color:#fff;box-shadow:0 4px 0 #27409a}#cnv .l4tf:disabled{cursor:default}'
  + '#cnv .l4ok{border:2px solid #b9c9e6;background:#fff;color:#2d3f73;border-radius:12px;padding:9px 14px;font:800 14px Lexend,system-ui;cursor:pointer;white-space:nowrap}#cnv .l4ok.on{background:#0c9c84;border-color:#0c9c84;color:#fff;box-shadow:0 4px 0 #086b5a}#cnv .l4in{width:230px;max-width:46vw;padding:9px 12px;font-size:16px;border:2px solid #b9c9e6;border-radius:12px;color:#10204a;background:#fff}'
  + '#cnv .l4map{margin:8px 0 12px;border-radius:12px;overflow:hidden;border:1px solid #c9d2ea}#cnv .l4map img{display:block;width:100%;height:auto}'
  + '#cnv .l4ex{display:flex;gap:10px;align-items:center;padding:8px 12px;margin-bottom:6px;border-radius:12px;background:#eef2ff;color:#3d4f80;font-size:15px}#cnv .l4ex b{background:#8a5cf0;color:#fff;border-radius:8px;padding:2px 9px;font-size:12px;letter-spacing:.08em;text-transform:uppercase}#cnv .l4ex span{flex:1}#cnv .l4ex em{font-style:normal;font-weight:800;color:#0c7a66}#cnv .l4ex .l4tf{min-width:0;padding:5px 14px}'
  + '#cnv .l4g{margin:6px 0 16px}#cnv .l4gh{font-weight:800;font-size:17px;color:#10204a;margin-bottom:8px}#cnv .l4gh small{display:block;font-weight:600;font-size:13px;color:#6a7aa6}#cnv .l4gr{display:grid;grid-template-columns:minmax(0,1fr) 150px 150px;align-items:center;gap:8px;padding:8px 10px;border-radius:10px}#cnv .l4gr:nth-child(even){background:#f3f6ff}#cnv .l4gr.hd{background:linear-gradient(120deg,#3e63d8,#6b4df0);color:#fff;border-radius:12px 12px 0 0}#cnv .l4gr.hd b{text-align:center;font-size:16px}#cnv .l4gr.hd i{font-style:normal;font-size:11px;opacity:.8}#cnv .l4gr span{font-size:17px;font-weight:600;color:#10204a}#cnv .l4gr.one{grid-template-columns:minmax(0,1fr) 150px}'
  + '#cnv .l4tk{justify-self:center;width:38px;height:38px;border-radius:10px;border:2.5px solid #9db4ff;background:#fff;cursor:pointer;position:relative}#cnv .l4tk.on{background:#0c9c84;border-color:#0c9c84;box-shadow:0 4px 0 #086b5a}#cnv .l4tk.on:after{content:"✔";color:#fff;font-size:22px;font-weight:800;position:absolute;inset:0;display:flex;align-items:center;justify-content:center}'
  + '#cnv .l4sc{margin-top:14px;padding:14px 18px;border-radius:16px;background:rgba(255,255,255,.08);border:2px solid var(--c);display:flex;flex-wrap:wrap;gap:6px 16px;align-items:baseline}#cnv .l4sc b{font-size:34px;color:var(--c)}#cnv .l4sc span{font-size:17px;font-weight:700}#cnv .l4sc small{flex-basis:100%;opacity:.8}'
  + '#cnv .l4rv{border-radius:14px;padding:10px 12px;margin-bottom:10px;background:#fff;border:2px solid #d3dcf0;color:#10204a}#cnv .l4rv.g{border-color:#2bb59b;background:#effaf6}#cnv .l4rv.b{border-color:#e0607f;background:#fff4f6}#cnv .l4rh{display:flex;gap:10px;align-items:center}#cnv .l4rh .qn{flex:0 0 30px;height:30px;border-radius:9px;background:#3e63d8;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}#cnv .l4rv.g .qn{background:#0c9c84}#cnv .l4rv.b .qn{background:#d6395f}#cnv .l4rh span{flex:1;font-weight:700;font-size:15.5px}#cnv .l4rh i{font-style:normal;font-weight:800;font-size:20px}'
  + '#cnv .l4ro{margin:6px 0 0 40px;display:flex;gap:8px;flex-wrap:wrap;align-items:baseline;font-size:16px}#cnv .l4ro small{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6a7aa6}#cnv .l4ro s{color:#d6395f}#cnv .l4ro strong{color:#0c7a66}#cnv .l4evb{margin:6px 0 0 40px;padding:8px 10px;border-radius:10px;background:#fff7d6;border:1.5px solid #f2d66b;font-size:14.5px;line-height:1.45;color:#5a4300}'
  + '#cnv .l4how .rc,#cnv .l4sm .rc{animation:none}#cnv .l4how .rc small,#cnv .l4sm .rc small{color:#3d5a78!important;font-size:14.5px!important}#cnv .l4how .rc b,#cnv .l4sm .rc b{color:#10204a!important;font-size:19px}#cnv .l4gr.hd b{color:#fff}#cnv .l4sm .rc.g i{color:#0c9c84}#cnv .l4sm .rc.b i{color:#d6395f}#cnv .l4how .rc .rn,#cnv .l4sm .rc .rn{background:#3e63d8;color:#fff}@media(max-width:1100px){#cnv .l4two,#cnv .l4two.rv{grid-template-columns:1fr}}';
  function css(){ if (el("cnvcss")) return; var s = document.createElement("style"); s.id = "cnvcss"; s.textContent = CSS; document.head.appendChild(s); }
  function root(){ var r = el("cnv"); if (!r){ r = document.createElement("div"); r.id = "cnv"; document.body.appendChild(r); } return r; }
  function page(h){ try{ document.body.classList.toggle("nvfocus", h.indexOf('id="cnbody"') < 0 && h.indexOf('class="hm"') < 0); }catch(e){} stopAudio(); if (S.bt){ clearInterval(S.bt); S.bt = null; } root().innerHTML = '<div class="bg"></div><div class="w">' + h + '</div>'; root().scrollTop = 0; try { restoreDraft(); } catch (e) {} }
  function top(back){ return '<div class="tb"><button class="pill" id="cb">' + (back || "← Back") + '</button><div class="sp"></div><b>NNT · Classroom</b></div>'; }
  function stopAudio(){ if (A){ try{ A.pause(); }catch(e){} A = null; } }
  function close(){ try{ document.body.classList.remove("nvfocus"); }catch(e){} stopAudio(); var r = el("cnv"); if (r) r.remove(); if (O && O.onExit) O.onExit(); }

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
    page('<div class="hm">' + sp + '<button class="pill hmb" id="cb">⇄ Switch</button><button class="pill hmo" id="clo">Log out</button>'
      + '<div class="hmL"><span class="hmt">NNT SCHOOL · CLASSROOM</span><h1 class="hmh">Ready to <em>level up</em>, ' + esc(nm) + '?</h1><p class="hmp">' + esc(ln) + '</p>'
      + '<div class="hmc"><span>🎧<b>Listening</b></span><span>📖<b>Reading</b></span><span>✍️<b>Writing</b></span></div>'
      + '<button class="hmg" id="cstart"><span>START DRILLING</span><b>→</b></button></div>'
      + '<div class="hmR"><div class="orb"><div class="rg"></div><div class="rg r2"></div><div class="core"><small>YOUR UNIT</small><b id="hmu">…</b></div><i class="o1"></i><i class="o2"></i><i class="o3"></i></div></div></div>');
    el("cb").onclick = close; el("clo").onclick = function(){ close(); var o = document.getElementById("out"); if (o) o.click(); }; el("cstart").onclick = path;
    R("nv_nav", {tok: O.tok}).then(function(n){ if (!n || !n.ok) return; var open = (n.open || []).map(Number).filter(function(u){ return u <= 7; }), ck = (n.ckeys || []).map(Number), c = null;
      for (var i = 0; i < open.length; i++) if (ck.indexOf(open[i]) < 0){ c = open[i]; break; } if (c === null && open.length) c = open[open.length - 1]; if (el("hmu") && c !== null) el("hmu").textContent = c; }).catch(function(){});
  }
  var FLAG = '<svg viewBox="0 0 64 64" width="52" height="52"><path d="M16 8v50" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M20 12c10-6 16 6 28 0v24c-12 6-18-6-28 0z" fill="#fff"/></svg>', STAR = '<svg viewBox="0 0 64 64" width="52" height="52"><path d="M32 6l7.6 16.4 17.9 2.1-13.2 12.3 3.5 17.7L32 45.2 16.2 54.5l3.5-17.7L6.5 24.5l17.9-2.1z" fill="#fff"/></svg>';
  var ZZ = [50, 66, 74, 66, 50, 34, 26, 34];

  var GT = 0;
  function goldTick(){ var g = "gt" + (++GT);
    return '<svg class="gtk" viewBox="0 0 120 120" aria-label="Done"><defs><linearGradient id="' + g + 'a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffbe0"/><stop offset=".45" stop-color="#ffe066"/><stop offset="1" stop-color="#f2a900"/></linearGradient>'
      + '<linearGradient id="' + g + 'b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#ffd23f"/></linearGradient></defs>'
      + '<circle cx="60" cy="64" r="50" fill="#a86400"/><circle cx="60" cy="60" r="50" fill="url(#' + g + 'a)" stroke="#fff" stroke-opacity=".9" stroke-width="3"/><circle cx="60" cy="60" r="40" fill="none" stroke="#c47a00" stroke-opacity=".45" stroke-width="2.5"/>'
      + '<path d="M31 62l20 20 39-43" fill="none" stroke="#7a4600" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 4)"/>'
      + '<path d="M31 62l20 20 39-43" fill="none" stroke="#fff" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>'
      + '<path d="M22 38a44 44 0 0 1 30-24" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="5" stroke-linecap="round"/><path class="gsp" d="M96 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff"/></svg>'; }
  function path(){
    page(top() + '<div id="cnbody"><p class="sub" id="cnsub" style="text-align:center">Opening…</p></div>'); el("cb").onclick = home;
    R("nv_nav", {tok: O.tok}).then(function(n){
      if (!n || !n.ok){ el("cnsub").textContent = "Please try again in a moment."; return; }
      S.nav = n; var ck = (n.ckeys || []).map(Number), lim = 7 + ck.filter(function(u){ return u <= 7 + ck.length; }).length, open = (n.open || []).map(Number).filter(function(u){ return u <= lim; }), cur = null;
      for (var i = 0; i < open.length; i++) if (ck.indexOf(open[i]) < 0){ cur = open[i]; break; }
      var hint = cur === null ? "Everything open is complete. Well done!" : "Tap your stage to begin";
      var H = 170, tot = open.length * H + 330, h = '<div class="pth" style="height:' + tot + 'px">';
      var pts = open.map(function(u, k){ return [ZZ[k % 8], tot - 110 - k * H]; });
      open.forEach(function(u, k){ var st = ck.indexOf(u) >= 0 ? "done" : u === cur ? "cur" : "idle"; if (S.pop === u) st += " pop";
        h += '<button class="nd ' + st + '" data-u="' + u + '" style="left:' + pts[k][0] + '%;top:' + pts[k][1] + 'px">' + (st === "done" ? goldTick() + '<small class="ndn">' + u + '</small>' : '<b class="nn">' + u + '</b>') + (st === "cur" ? '<em>START</em>' : '') + '</button>'; });
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
      if (r.teacher) O.nofloor = true; /* teacher: every stage open, no minimum times */
      S.testacct = !!r.testacct && !r.teacher; /* the Test Account may only SKIP steps (buttons); it has no other edge */
      if (!r.earned){
        var stp = function(n, ic, t){ return '<div style="flex:1;min-width:150px;background:#fff;border:2px solid #c9d6ee;border-radius:16px;padding:14px 12px;text-align:center"><div style="font-size:30px">' + ic + '</div><b style="display:block;color:#10204a;font-size:16px;margin-top:4px">' + t + '</b><small style="color:#5a6a86">Step ' + n + '</small></div>'; };
        page(top() + '<div style="text-align:center;padding:6px 0 0"><div style="position:relative;width:230px;max-width:60%;margin:0 auto;filter:grayscale(1) opacity(.55) drop-shadow(0 10px 22px rgba(40,60,120,.25))">' + portalKey() + '</div>'
          + '<div style="font-size:44px;margin:-26px 0 0;position:relative">🔒</div>'
          + '<h2 style="margin:6px 0 6px;font-size:32px;color:#10204a">Almost there! Unit ' + S.unit + ' is waiting for you</h2>'
          + '<p style="margin:0 auto 16px;max-width:560px;color:#3b4b69;font-size:18px;line-height:1.5">Earn the key of Unit ' + S.unit + ' at home first. It takes four short steps, and then this classroom opens for you.</p>'
          + '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;max-width:760px;margin:0 auto 18px">' + stp(1, "🎬", "Watch the videos") + stp(2, "📝", "Take the home test") + stp(3, "✍️", S.unit <= 2 ? "Read and summarise" : "Do the writing") + stp(4, "🎤", "Record your speaking") + '</div>'
          + '<button class="go" id="cgo" style="padding:15px 26px;font-size:18px">← Back to the stages</button></div>'); el("cb").onclick = path; el("cgo").onclick = path;
          if (S.testacct){ var sb = document.createElement("button"); sb.className = "go"; sb.id = "csk"; sb.type = "button"; sb.style.cssText = "margin:12px 0 0 8px;padding:15px 22px;font-size:17px;background:linear-gradient(135deg,#7a8bff,#5b6cff)"; sb.textContent = "⏭ Skip the home steps (test account)"; el("cgo").parentNode.appendChild(sb); sb.onclick = function(){ sb.disabled = true; skipRun("home", keyCheck); }; }
          return; }
      page(top() + '<div style="text-align:center;padding:10px 0 4px"><div class="kdrop" style="width:380px;max-width:80%;margin:0 auto;filter:drop-shadow(0 14px 30px rgba(255,196,40,.55))">' + portalKey() + '</div><h2 style="margin:10px 0 4px;font-size:34px">Your key is earned. Welcome!</h2><p class="sub">You can now begin the mock test of Unit ' + S.unit + '.</p><button class="go" id="cgo" style="margin-top:12px">Continue →</button></div>');
      el("cb").onclick = path; el("cgo").onclick = hub;
    }).catch(function(){ page(top() + '<div class="card warn"><h2>No internet connection</h2></div>'); el("cb").onclick = path; });
  }
  function skipRun(step, then){
    Promise.resolve(R("nv_skip", {tok: O.tok, u: S.unit, step: step})).then(function(r){ if (r && r.ok){ S.stU = null; if (then) then(); } else { var m = el("hlk"); if (m) m.textContent = "Could not skip this step."; } }, function(){ var m = el("hlk"); if (m) m.textContent = "No internet connection."; });
  }
  function opn(st){ if (O.nofloor) return true; return st === "read" ? !!(S.lisDone && S.lisDone[S.unit]) : !!(S.rdDone && S.rdDone[S.unit]); }
  function lockMsg(el_, txt){ el_.classList.add("shk"); setTimeout(function(){ el_.classList.remove("shk"); }, 400); var m = el("hlk"); if (m) m.textContent = txt; }
  function statusSync(){
    if (S.stU === S.unit) return; S.stU = S.unit;
    try { Promise.resolve(R("nv_class_status", {tok: O.tok, u: S.unit})).then(function(r){
      if (!r || !r.ok || !r.lis) return; var ch = false, u = S.unit; S.lisDone = S.lisDone || {}; S.rdDone = S.rdDone || {}; S.wrDone = S.wrDone || {};
      if (r.lis && r.lis.prog){ S.prog0 = S.prog0 || {}; S.prog0[u] = r.lis.prog; }
      if (r.lis && r.lis.prog4){ S.prog4 = S.prog4 || {}; S.prog4[u] = r.lis.prog4; }
      ["lis", "read", "write"].forEach(function(st){ if (r[st] && r[st].draft){ S.draft0 = S.draft0 || {}; S.draft0[u + ":" + st] = r[st].draft; } });
      [["lis", S.lisDone], ["read", S.rdDone], ["write", S.wrDone]].forEach(function(p){ var x = r[p[0]]; if (!x) return; S.srv[u + ":" + p[0]] = Math.max(S.srv[u + ":" + p[0]] || 0, x.secs || 0); if (x.done && !p[1][u]){ p[1][u] = true; ch = true; } });
      if (ch && !S.cur && el("hl")) hub();
    }, function(){}); } catch (x) {}
  }
  var RW = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1};
  /* the drilling takes the whole screen, like the classic tests; the hub gives it back */
  function goFS(){ var d = document.documentElement, f = d.requestFullscreen || d.webkitRequestFullscreen || d.msRequestFullscreen; try { var p = f && f.call(d); if (p && p.then) p.then(function(){ try { if (navigator.keyboard && navigator.keyboard.lock) navigator.keyboard.lock(["Escape"]).catch(function(){}); } catch (e) {} }, function(){}); } catch (e) {} }
  /* Esc cannot be fully blocked by a web page (Chrome lets a long press out), so if the student gets out, the drilling is covered until they return to full screen */
  function fsWatch(){
    var inFS = function(){ return !!(document.fullscreenElement || document.webkitFullscreenElement); };
    var on = function(){
      var o = document.getElementById("fsback");
      if (inFS()){ if (o) o.remove(); return; }
      if (!S.cur || O && O.nofloor || !document.documentElement.requestFullscreen && !document.documentElement.webkitRequestFullscreen) return;
      if (o) return; o = document.createElement("div"); o.id = "fsback";
      o.style.cssText = "position:fixed;inset:0;z-index:99998;background:rgba(10,20,40,.94);display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui,sans-serif";
      o.innerHTML = '<div style="background:#fff;border-radius:20px;max-width:420px;padding:26px;text-align:center"><div style="font-size:46px">🖥️</div><h2 style="margin:8px 0">Back to full screen</h2><p style="color:#445;line-height:1.5">The drilling is done in full screen. Press the button to continue.</p><button id="fsgo" style="background:#1558b0;color:#fff;border:0;border-radius:12px;padding:13px 26px;font-size:17px;font-weight:700">Continue in full screen</button></div>';
      document.body.appendChild(o); document.getElementById("fsgo").onclick = function(){ goFS(); };
    };
    document.addEventListener("fullscreenchange", on); document.addEventListener("webkitfullscreenchange", on);
  }
  fsWatch(); draftWatch();
  function leaveFS(){ if (document.fullscreenElement || document.webkitFullscreenElement){ try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) {} } }
  function hub(){ S.cur = null; leaveFS(); statusSync();
    function card(id, ic, t, sub, tm, on, n){ return '<button class="fc' + (on ? " on" : "") + '" id="' + id + '"><i class="fb">' + n + '</i><span class="fi">' + ic + '</span><b>' + t + '</b><small>' + sub + '</small><em>' + tm + '</em></button>'; }
    function link(){ return '<div class="fl"><svg viewBox="0 0 120 24" preserveAspectRatio="none"><path d="M2 12H108" stroke="currentColor" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round"/><path d="M100 4l12 8-12 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span>10 min break</span></div>'; }
    page(top() + '<div class="hero" style="padding:6px 8px 0"><h2>Unit ' + S.unit + '</h2><p class="sub">Your path today: three drillings, with a break between them</p></div>'
      + '<div class="fch">' + card("hl", "🎧", "Listening drilling", (S.lisDone && S.lisDone[S.unit]) ? "Done ✔ · you can redo it" : "Start here", "about 60 min", true, 1) + link()
      + card("hr", "📖", "Reading drilling", (S.rdDone && S.rdDone[S.unit]) ? "Done ✔ · you can redo it" : "Passage + questions", "about 30 min", RW[S.unit] && opn("read"), 2) + link()
      + card("hw", "✍️", "Writing drilling", (S.wrDone && S.wrDone[S.unit]) ? "Done ✔ · you can redo it" : "Write · feedback · rewrite", "about 40 min", RW[S.unit] && opn("write"), 3) + '</div><p class="sub" id="hlk" style="text-align:center;margin-top:14px;min-height:22px"></p>');
    el("cb").onclick = path; el("hl").onclick = function(){ goFS(); (S.unit > 1 ? startPart4 : startPart)(); };
    el("hr").onclick = RW[S.unit] && opn("read") ? function(){ goFS(); startReading(); } : function(){ lockMsg(this, RW[S.unit] ? "🔒 Finish the listening drilling first." : ""); };
    el("hw").onclick = RW[S.unit] && opn("write") ? function(){ goFS(); startWriting(); } : function(){ lockMsg(this, RW[S.unit] ? "🔒 Finish the reading drilling first." : ""); };
    if (S.testacct){
      var tb = document.createElement("div"); tb.style.cssText = "text-align:center;margin:18px auto 0;max-width:640px;padding:12px;border:2px dashed #9aa8d6;border-radius:14px;color:#10204a";
      tb.innerHTML = '<b>🧪 Test account: skip</b><div style="font-size:13px;margin:2px 0 8px;opacity:.75">Only this account can skip. Everything else works like for a student.</div>'
        + [["lis", "Skip listening"], ["read", "Skip reading"], ["write", "Skip writing"], ["class", "Skip all + get the class key"]].map(function(x){ return '<button type="button" class="go csk" data-s="' + x[0] + '" style="margin:4px;padding:9px 13px;font-size:15px;background:linear-gradient(135deg,#7a8bff,#5b6cff)">⏭ ' + x[1] + '</button>'; }).join("");
      el("hlk").parentNode.appendChild(tb);
      [].forEach.call(tb.querySelectorAll(".csk"), function(b){ b.onclick = function(){ b.disabled = true; skipRun(b.getAttribute("data-s"), function(){ var u = S.unit; S.lisDone = S.lisDone || {}; S.rdDone = S.rdDone || {}; S.wrDone = S.wrDone || {}; var st = b.getAttribute("data-s"); if (st === "lis" || st === "class") S.lisDone[u] = true; if (st === "read" || st === "class") S.rdDone[u] = true; if (st === "write" || st === "class") S.wrDone[u] = true; hub(); }); }; });
    }
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
    return getFile(ex.file || ("c" + m[1] + "_" + m[2]), ex.audio + ".mp3").then(function(b){ return (S.au[ex.audio] = URL.createObjectURL(new Blob([b], {type: "audio/mpeg"}))); });
  }
  function startPart(){
    page(top() + '<div class="hero"><h2>Loading Part ' + S.unit + '…</h2></div>');
    getFile("c" + S.unit + "_part", "part" + S.unit + ".json").then(function(b){ return JSON.parse(new TextDecoder().decode(b)); }).then(function(P){
      S.cur = "lis"; S.P = P; S.dict = true; S.ei = 0; S.res = {}; S.pl = {}; if (!S.t0) S.t0 = Date.now();
      var sv = (S.lisDone && S.lisDone[S.unit]) ? null : loadProg();
      if (sv && sv.res && typeof sv.ei === "number"){ S.ei = Math.min(sv.ei, P.exercises.length); S.res = sv.res; S.pl = sv.pl || {}; }
      if (S.ei >= P.exercises.length && P.exercises.every(function(e){ return S.res[e.id]; })) summary(); else runEx();
    }).catch(function(){ page(top() + '<div class="card warn"><h2>This part is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  var ICO = {"01": "🔤", "02": "📝", "03": "🕒", "04": "🏠", "05": "🔢", "06": "👤", "07": "🌍", "08": "⭐"};
  function stepperOf(list, cur, scoreOf, fix){
    var h = '<div class="stp' + (fix ? " fx" : "") + '">';
    list.forEach(function(e, i){ var sc = scoreOf(e), st = i < cur ? "dn" : i === cur ? "cu" : "";
      h += (i ? '<u class="' + (i <= cur ? "f" : "") + '"></u>' : '') + '<div class="sn ' + st + '"><span class="sb">' + (i < cur ? "✔" : (ICO[e.id.slice(-2)] || (i + 1))) + '</span><small>' + esc(e.name) + '</small><em>' + (sc || (i === cur ? "you are here" : "")) + '</em></div>'; });
    return h + '</div>';
  }
  function dots(){ return stepperOf(S.P.exercises, S.ei, function(e){ var r = S.res && S.res[e.id]; return r ? r.good + "/" + r.n : ""; }); }

  function player(ex){
    if (ex.long) return '<div class="card" id="cpc"><div class="pl"><button class="go" id="cplay">▶ Play</button><input type="range" id="cseek" min="0" max="1000" value="0" class="seek"><span id="ctm" class="sub">0:00</span></div>'
      + '<div class="spd"><span class="sub">Speed</span><button class="pill sp5" data-s="0.6">0.6×</button><button class="pill sp5" data-s="0.8">0.8×</button><button class="pill sp5 on" data-s="1">1×</button><button class="pill sp5" data-s="1.25">1.25×</button></div>'
      + '<p class="sub" style="margin:8px 0 0">Dictation: you can pause, move around the recording and change the speed. Take your time.</p></div>';
    return '<div class="card" id="cpc"><div class="pl"><button class="go" id="cplay">▶ Play</button><div class="bar"><b id="cbar"></b></div><span id="ctm" class="sub">0:00</span></div>'
      + '<p class="sub" style="margin:8px 0 0">You cannot skip or rewind. Once it starts, listen to the end. ' + (S.inFix ? "You get one more play to check what you missed." : "You can play it twice.") + '</p></div>';
  }
  function wireFull(ex){
    var b = el("cplay"), sk = el("cseek"), tm = el("ctm"), spd = 1, drag = false;
    function fmt(t){ t = Math.floor(t); return Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2); }
    function ensure(){ if (A) return Promise.resolve(); b.disabled = true; b.textContent = "Loading…";
      return audioUrl(ex).then(function(url){ A = new Audio(url); A.playbackRate = spd; b.disabled = false;
        A.ontimeupdate = function(){ if (A && A.duration && !drag){ sk.value = 1000 * A.currentTime / A.duration; } tm.textContent = fmt(A.currentTime) + " / " + fmt(A.duration || 0); };
        A.onended = function(){ b.textContent = "▶ Play again"; };
      }); }
    b.onclick = function(){ ensure().then(function(){ if (A.paused){ A.playbackRate = spd; var p = A.play(); if (p && p.catch) p.catch(function(){}); b.textContent = "❚❚ Pause"; } else { A.pause(); b.textContent = "▶ Play"; } }).catch(function(){ b.disabled = false; b.textContent = "▶ Try again"; }); };
    sk.oninput = function(){ drag = true; };
    sk.onchange = function(){ drag = false; ensure().then(function(){ if (A.duration) A.currentTime = A.duration * sk.value / 1000; }); };
    [].forEach.call(document.querySelectorAll(".sp5"), function(x){ x.onclick = function(){ spd = +x.getAttribute("data-s"); if (A) A.playbackRate = spd; [].forEach.call(document.querySelectorAll(".sp5"), function(y){ y.classList.toggle("on", y === x); }); }; });
  }
  function wirePlayer(ex){
    if (ex.long) return wireFull(ex);
    var b = el("cplay"), bar = el("cbar"), tm = el("ctm"), key = ex.audio + (S.inFix ? "f" : ""), lim = S.inFix ? 1 : 2; S.pl = S.pl || {};
    function left(){ return lim - (S.pl[key] || 0); }
    function label(){ var l = left(); b.disabled = l <= 0; b.textContent = l <= 0 ? "✔ Played" : S.pl[key] ? "▶ Play again (" + l + " left)" : "▶ Play (" + lim + (lim > 1 ? " plays" : " play") + ")"; }
    label();
    b.onclick = function(){
      if (left() <= 0) return;
      stopAudio(); S.pl[key] = (S.pl[key] || 0) + 1; b.disabled = true; b.textContent = "Loading…";
      audioUrl(ex).then(function(url){ A = new Audio(url); b.textContent = "Playing…";
        A.ontimeupdate = function(){ if (A && A.duration){ bar.style.width = (100 * A.currentTime / A.duration) + "%"; var t = Math.floor(A.currentTime); tm.textContent = Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2); } };
        A.onended = function(){ bar.style.width = "0"; label(); };
        A.onerror = function(){ S.pl[key]--; label(); };
        var p = A.play(); if (p && p.catch) p.catch(function(){ S.pl[key]--; label(); });
      }).catch(function(){ S.pl[key]--; label(); });
    };
  }
  function runEx(){
    var ex = S.P.exercises[S.ei]; S.checked = false; S.inFix = false;
    var ml = Math.max.apply(null, ex.items.map(function(t){ return t.length; })), gc = ex.long ? "" : ml <= 13 ? "g4" : ml <= 22 ? "g3" : "g2", w = Math.min(34, Math.max(9, ml + 3));
    var inputs = ex.items.map(function(_, k){ return ex.long ? '<div class="it"><span>' + (k + 1) + '</span><textarea class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div>'
      : '<div class="it"><span>' + (k + 1) + '</span><input class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off" style="max-width:' + Math.min(36, Math.max(8, ex.items[k].length + 4)) + 'ch"></div>'; }).join("");
    page(top("Exit") + dots() + '<h2 style="margin:8px 0 0">' + esc(ex.id + " · " + ex.name) + '</h2>'
      + '<div class="ins hlz"><span class="ii">' + (ex.long ? "✍️" : "🎧") + '</span><div><small>WHAT TO DO</small><strong>' + esc(ex.say) + '</strong></div></div>' + player(ex) + '<div id="cin" class="' + (gc ? "gr " + gc : "") + (ex.id === "1.05" ? " num" : "") + '">' + inputs + '</div><button class="go" id="cchk" style="margin-top:6px">Check my answers</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; wirePlayer(ex);
    el("cchk").onclick = function(){ checkEx(ex); };
  }
  function layoutCls(ex){ var ml = Math.max.apply(null, ex.items.map(function(t){ return t.length; })); return ex.long ? "" : ml <= 13 ? "g4" : ml <= 22 ? "g3" : "g2"; }
  function tier(pct){ return pct === 100 ? ["PERFECT", "✨", "#d98b00"] : pct >= 85 ? ["EXCELLENT", "🔥", "#0c9c84"] : pct >= 65 ? ["GOOD JOB", "👏", "#3e63d8"] : pct >= 40 ? ["KEEP GOING", "💪", "#e0710f"] : ["LET'S FIX IT", "🎯", "#d6395f"]; }
  /* word-level mistakes only: what was written wrongly, left out, or added, with two words of context */
  function diffErrs(ref, said){
    var A = words(ref), B = words(said), m = A.length, n = B.length, d = [], i, j;
    if (!B.length) return '<div class="dfe">You wrote nothing for this part. Listen again and write what you hear.</div>';
    for (i = 0; i <= m; i++){ d[i] = []; for (j = 0; j <= n; j++) d[i][j] = 0; }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) d[i][j] = A[i] === B[j] ? d[i+1][j+1] + 1 : Math.max(d[i+1][j], d[i][j+1]);
    var ops = [], x = 0, y = 0;
    while (x < m && y < n){ if (A[x] === B[y]){ ops.push(["=", A[x]]); x++; y++; } else if (d[x+1][y] >= d[x][y+1]){ ops.push(["-", A[x]]); x++; } else { ops.push(["+", B[y]]); y++; } }
    while (x < m){ ops.push(["-", A[x++]]); } while (y < n){ ops.push(["+", B[y++]]); }
    var out = [], k = 0, ctx = [];
    while (k < ops.length){
      if (ops[k][0] === "="){ ctx.push(ops[k][1]); k++; continue; }
      var del = [], ins = []; while (k < ops.length && ops[k][0] !== "="){ (ops[k][0] === "-" ? del : ins).push(ops[k][1]); k++; }
      var before = ctx.slice(-2).join(" "); ctx = [];
      out.push({b: before, w: ins.join(" "), r: del.join(" ")});
    }
    if (!out.length) return '<div class="dfe">No mistakes. Well done.</div>';
    if (out.length > 14) { var extra = out.length - 14; out = out.slice(0, 14); out.push({more: extra}); }
    return out.map(function(o){ if (o.more) return '<div class="dfe" style="opacity:.8">…and ' + o.more + ' more mistake' + (o.more > 1 ? "s" : "") + '. Listen again and check the whole passage.</div>';
      return '<div class="dfe" style="margin:4px 0">' + (o.b ? '<span style="opacity:.65">…' + esc(o.b) + '</span> ' : '') + (o.w ? '<s>' + esc(o.w) + '</s>' : '<em style="opacity:.8">(left out)</em>') + ' → ' + (o.r ? '<strong>' + esc(o.r) + '</strong>' : '<em style="opacity:.8">(not in the audio)</em>') + '</div>'; }).join("");
  }
  /* rows: [{k, said, ok, pct}] */
  function feedback(ex, rows, good, total, what){
    var pct = total ? Math.round(100 * good / total) : 100, t = tier(pct), ang = Math.round(3.6 * pct), sp = "";
    if (pct >= 90) for (var q = 0; q < 34; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 2.5).toFixed(2) + 's;animation-duration:' + (2.4 + Math.random() * 2).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 6).toFixed(1) + 'px;height:' + (8 + Math.random() * 10).toFixed(1) + 'px"></i>';
    var h = '<div class="fbk"><div class="spk">' + sp + '</div><div class="ring" style="--c:' + t[2] + ';--a:' + ang + 'deg"><div><b>' + pct + '%</b><small>' + good + ' of ' + total + ' ' + what + '</small></div></div>'
      + '<div class="verd" style="color:' + t[2] + '">' + t[1] + ' ' + t[0] + '</div></div>'
      + (ex.long ? "" : (function(){ var okn = rows.filter(function(r){ return r.ok; }).map(function(r){ return r.k + 1; }); return okn.length ? '<div class="okln" style="margin:10px 0 0;padding:9px 14px;border-radius:12px;background:#d9f5ee;color:#0b4a3e;font-weight:700">✔ ' + okn.length + ' correct: ' + okn.join(", ") + '</div>' : ""; })())
      + '<div class="' + (ex.long ? "rl" : "gr " + layoutCls(ex)) + ' fr">';
    /* only the mistakes are shown, on their own: the parts the student got right are not repeated */
    rows.forEach(function(r, n){
      if (!ex.long){ if (r.ok) return;
        h += '<div class="rc b" style="animation-delay:' + (0.35 + n * 0.06).toFixed(2) + 's"><span class="rn">' + (r.k + 1) + '</span><div><s>' + esc(r.said || "(empty)") + '</s><strong>' + esc(ex.items[r.k]) + '</strong></div><i>✖</i></div>'; return; }
      var d = (r.pct != null && r.pct < 30) ? '<div class="dfe">Only a small part of this passage was written. Listen again and write everything you hear.</div>' : diffErrs(ex.items[r.k], r.said);
      h += '<div class="rc ' + (r.ok ? "g" : "b") + '" style="animation-delay:' + (0.35 + n * 0.06).toFixed(2) + 's;align-items:flex-start"><span class="rn">' + (r.k + 1) + '</span><div style="flex:1">'
        + '<small style="display:block;margin:0 0 6px;font-weight:800">' + (r.ok ? "Nearly all correct" : "Not correct yet") + ' · ' + (r.pct == null ? 0 : r.pct) + '% of the words</small>' + d + '</div><i>' + (r.ok ? "✔" : "✖") + '</i></div>'; });
    return h + '</div>';
  }
  function checkEx(ex){
    var ins = [].slice.call(document.querySelectorAll("#cin .a")), good = 0, rows = [];
    /* bare minimum effort: at least half of the boxes must be filled before the answers are shown */
    var wc0 = function(t){ return (String(t).trim().match(/\S+/g) || []).length; }, filled = ins.filter(function(x, k){ return ex.long ? wc0(x.value) >= Math.max(3, Math.ceil(0.25 * wc0(ex.items[k]))) : x.value.trim().length > 0; }).length, minF = Math.ceil(ins.length / 2);
    if (!O.nofloor && filled < minF){
      var w = el("cwarn"); if (!w){ w = document.createElement("div"); w.id = "cwarn"; w.style.cssText = "margin:10px 0 0;padding:10px 14px;border-radius:12px;background:#fff3d6;color:#7a4b00;font-weight:700"; el("cchk").insertAdjacentElement("afterend", w); }
      w.textContent = "Not so fast! You filled " + filled + " of " + ins.length + " boxes properly" + (ex.long ? " (write at least a quarter of each passage)" : "") + ". Try at least " + minF + " before you check. Play the audio again and write what you hear, even if you are not sure.";
      return;
    }
    stopAudio();
    ins.forEach(function(x, k){ var j = judge(ex, k, x.value); if (j.ok) good++; rows.push({k: k, said: x.value.trim(), ok: j.ok, pct: j.pct}); });
    S.res[ex.id] = {good: good, n: ex.items.length, miss: rows.filter(function(r){ return !r.ok; }).map(function(r){ return r.k; })};
    saveProg();
    el("cchk").remove(); el("cin").style.display = "none"; if (el("cpc")) el("cpc").remove();
    el("cout").innerHTML = feedback(ex, rows, good, ex.items.length, "correct") + '<button class="go" id="cnext" style="margin-top:14px">' + (S.ei + 1 < S.P.exercises.length ? "Next exercise →" : "See my results →") + '</button>';
    el("cnext").onclick = function(){ S.ei++; if (S.ei < S.P.exercises.length) runEx(); else summary(); };
    el("cout").scrollIntoView && el("cout").scrollIntoView({behavior: "smooth"});
  }
  function summary(){
    var g = 0, n = 0, rows = ""; S.P.exercises.forEach(function(e, i){ var r = S.res[e.id]; g += r.good; n += r.n; var pc = Math.round(100 * r.good / r.n);
      rows += '<div class="rc ' + (r.miss.length ? "b" : "g") + '" style="animation-delay:' + (0.4 + i * 0.08).toFixed(2) + 's"><span class="rn">' + (ICO[e.id.slice(-2)] || i + 1) + '</span><div><b>' + esc(e.name) + '</b><small style="color:#bcd0ff">' + r.good + ' of ' + r.n + ' · ' + pc + '%</small></div><i>' + (r.miss.length ? "✖" : "✔") + '</i></div>'; });
    S.fix = [];   /* the dictation has no forced redo: the student has already seen every mistake */
    var pct = Math.round(100 * g / n), t = tier(pct), sp = "";
    if (pct >= 90) for (var q = 0; q < 34; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 2.5).toFixed(2) + 's;animation-duration:' + (2.4 + Math.random() * 2).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 6).toFixed(1) + 'px;height:' + (8 + Math.random() * 10).toFixed(1) + 'px"></i>';
    var miss = S.fix.reduce(function(a, e){ return a + S.res[e.id].miss.length; }, 0);
    page(top() + '<div class="fbk"><div class="spk">' + sp + '</div><small class="wu">WARM-UP FINISHED</small><div class="ring" style="--c:' + t[2] + ';--a:' + Math.round(3.6 * pct) + 'deg"><div><b>' + pct + '%</b><small>' + g + ' of ' + n + ' correct</small></div></div><div class="verd" style="color:' + t[2] + '">' + t[1] + ' ' + t[0] + '</div></div>'
      + '<div class="gr g2 fr">' + rows + '</div>'
      + (S.fix.length ? '<button class="go fixgo" id="cfix">🛠 Start the fix round: ' + miss + ' item' + (miss > 1 ? "s" : "") + ' to win back →</button>' : '<button class="go" id="cdone" style="margin-top:6px">Continue →</button>'));
    el("cb").onclick = hub;
    if (el("cfix")) el("cfix").onclick = function(){ S.fi = 0; S.fres = {}; fixEx(); };
    if (el("cdone")) el("cdone").onclick = listeningDone;
  }
  function fixEx(){
    if (S.fi >= S.fix.length) return listeningDone();
    S.inFix = true; var ex = S.fix[S.fi], miss = S.res[ex.id].miss, ml = Math.max.apply(null, miss.map(function(k){ return ex.items[k].length; })), gc = ex.long ? "" : ml <= 13 ? "g4" : ml <= 22 ? "g3" : "g2";
    var inputs = miss.map(function(k){ return ex.long ? '<div class="it"><span>' + (k + 1) + '</span><textarea class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div>'
      : '<div class="it"><span>' + (k + 1) + '</span><input class="a" data-k="' + k + '" spellcheck="false" autocomplete="off" autocapitalize="off" style="max-width:' + Math.min(36, Math.max(8, ml + 4)) + 'ch"></div>'; }).join("");
    page(top("Exit") + '<div class="fxtag">🛠 FIX ROUND · ' + (S.fi + 1) + ' of ' + S.fix.length + '</div>' + stepperOf(S.fix, S.fi, function(e){ var r = S.fres && S.fres[e.id]; return r ? r.good + "/" + r.n : ""; }, true)
      + '<h2 style="margin:8px 0 0">' + esc(ex.id + " · " + ex.name) + '</h2>'
      + '<div class="ins fixc"><span class="ii">🎯</span><div><small>WIN THEM BACK</small><strong>Listen once more and rewrite only the ' + miss.length + ' item' + (miss.length > 1 ? "s" : "") + ' you missed. The answers stay hidden until you check.</strong></div></div>' + player(ex)
      + '<div id="cin" class="' + (gc ? "gr " + gc : "") + '">' + inputs + '</div><button class="go" id="cchk" style="margin-top:6px">Check my fixes</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; wirePlayer(ex);
    el("cchk").onclick = function(){
      stopAudio(); var rows = [], fixed = 0; [].forEach.call(document.querySelectorAll("#cin .a"), function(x){ var k = +x.getAttribute("data-k"), j = judge(ex, k, x.value); if (j.ok) fixed++; rows.push({k: k, said: x.value.trim(), ok: j.ok, pct: j.pct}); });
      S.fres = S.fres || {}; S.fres[ex.id] = {good: fixed, n: miss.length};
      el("cchk").remove(); el("cin").style.display = "none"; if (el("cpc")) el("cpc").remove(); el("cout").innerHTML = feedback(ex, rows, fixed, miss.length, "fixed") + '<button class="go" id="cnx" style="margin-top:14px">' + (S.fi + 1 < S.fix.length ? "Next fix →" : "Finish the fix round →") + '</button>';
      el("cnx").onclick = function(){ S.fi++; fixEx(); };
      el("cout").scrollIntoView && el("cout").scrollIntoView({behavior: "smooth"});
    };
  }
  /* ---------- four-stage listening (Units 2+): notes, answer from notes, exam, analysis ---------- */
  var STG = [["📝", "Take notes"], ["🧠", "Answer from notes"], ["⏱", "Exam"], ["🔎", "Analysis"]];
  function stgBar(n){ var h = '<div class="stp l4">'; STG.forEach(function(s, i){ h += (i ? '<u class="' + (i < n ? "f" : "") + '"></u>' : '') + '<div class="sn ' + (i + 1 < n ? "dn" : i + 1 === n ? "cu" : "") + '"><span class="sb">' + (i + 1 < n ? "✔" : s[0]) + '</span><small>' + s[1] + '</small><em>' + (i + 1 === n ? "you are here" : "") + '</em></div>'; }); return h + '</div>'; }
  function qn(ex){ return ex.kind === "grid" ? ex.groups.length * ex.cols.length : ex.qs.length; }
  function fnorm(s){ var t0 = String(s).toLowerCase().trim(); if (/^[a-z]$/.test(t0)) return t0; return String(s).toLowerCase().replace(/(\d)(st|nd|rd|th)\b/g, "$1").replace(/[^a-z0-9. ]/g, " ").replace(/\b(dollars?|per|a|day|the|of|from|until|to|and|all|whole|is|it)\b/g, " ").replace(/\s+/g, " ").trim(); }
  /* widgets: draw the answer controls of an exercise; read() gives the answers, mark() gives [{ok, said, right}] */
  function qWidget(ex, pre){
    var h = "", i;
    if (ex.kind === "tf"){
      h += '<div class="l4q">' + '<div class="l4ex"><b>Example</b><span>' + esc(ex.example.t) + '</span><i class="l4tf on">' + ex.example.a + '</i></div>';
      ex.qs.forEach(function(q, k){ h += '<div class="l4r" data-k="' + k + '"><b class="qn">' + (k + 1) + '</b><span class="qt">' + esc(q.t) + '</span><div class="l4t"><button type="button" class="l4tf" data-v="T">True</button><button type="button" class="l4tf" data-v="F">False</button></div></div>'; });
      return h + '</div>';
    }
    if (ex.kind === "grid"){
      var n = 0;
      ex.groups.forEach(function(g, gi){
        h += '<div class="l4g"><div class="l4gh">' + esc(g.title) + '<small>Tick one item for each person.</small></div><div class="l4gt"><div class="l4gr hd"><span></span>' + ex.cols.map(function(c, ci){ return '<b>' + esc(c) + ' <i>Q' + (gi * ex.cols.length + ci + 1) + '</i></b>'; }).join("") + '</div>';
        g.rows.forEach(function(r, ri){ h += '<div class="l4gr"><span>' + esc(r) + '</span>' + ex.cols.map(function(c, ci){ return '<button type="button" class="l4tk" data-g="' + gi + '" data-c="' + ci + '" data-r="' + ri + '" aria-label="' + esc(c + ": " + r) + '"></button>'; }).join("") + '</div>'; });
        h += '</div></div>';
      });
      return h;
    }
    h += '<div class="l4q">' + (ex.img ? '<div class="l4map"><img src="' + ex.img + '" alt="Map"></div>' : '') + '<div class="l4ex"><b>Example</b><span>' + esc(ex.example.l) + ': ' + (ex.example.s ? '<s>' + esc(ex.example.s) + '</s> → ' : '') + '<em>' + esc(ex.example.a) + '</em></span></div>' + (ex.example2 ? '<div class="l4ex"><b>Example</b><span>' + esc(ex.example2.l) + ': ' + esc(ex.example2.s) + ' → <em>✔ correct</em></span></div>' : '');
    ex.qs.forEach(function(q, k){ h += '<div class="l4r fx" data-k="' + k + '"><b class="qn">' + (k + 1) + '</b><span class="qt">' + esc(q.l) + (q.s ? ' <strong>' + esc(q.s) + '</strong>' : "") + '</span><div class="l4t">' + (q.nt ? '' : '<button type="button" class="l4ok">✔ correct</button>') + '<input class="a l4in" type="text" placeholder="' + (q.nt ? 'write your answer' : 'or write the correction') + '" spellcheck="false" autocomplete="off" autocapitalize="off"></div></div>'; });
    return h + '</div>';
  }
  function qWire(root, ex){
    [].forEach.call(root.querySelectorAll(".l4tf[data-v]"), function(b){ b.onclick = function(){ var p = b.parentNode, was = b.getAttribute("data-sel") === "1"; [].forEach.call(p.querySelectorAll(".l4tf"), function(x){ x.removeAttribute("data-sel"); x.classList.remove("on"); }); if (!was){ b.setAttribute("data-sel", "1"); b.classList.add("on"); } }; });
    [].forEach.call(root.querySelectorAll(".l4tk"), function(b){ b.onclick = function(){ var g = b.getAttribute("data-g"), c = b.getAttribute("data-c"), was = b.classList.contains("on");
      [].forEach.call(root.querySelectorAll('.l4tk[data-g="' + g + '"][data-c="' + c + '"]'), function(x){ x.classList.remove("on"); }); if (!was) b.classList.add("on"); }; });
    [].forEach.call(root.querySelectorAll(".l4r.fx"), function(r){ var ok = r.querySelector(".l4ok"), inp = r.querySelector(".l4in"); if (!ok) return;
      ok.onclick = function(){ var on = !ok.classList.contains("on"); ok.classList.toggle("on", on); if (on) inp.value = ""; };
      inp.oninput = function(){ if (inp.value.trim()) ok.classList.remove("on"); }; });
  }
  function qRead(root, ex){
    var out = [];
    if (ex.kind === "tf"){ ex.qs.forEach(function(q, k){ var s = root.querySelector('.l4r[data-k="' + k + '"] .l4tf[data-sel="1"]'); out.push(s ? s.getAttribute("data-v") : ""); }); }
    else if (ex.kind === "grid"){ ex.groups.forEach(function(g, gi){ ex.cols.forEach(function(c, ci){ var s = root.querySelector('.l4tk[data-g="' + gi + '"][data-c="' + ci + '"].on'); out.push(s ? +s.getAttribute("data-r") : -1); }); }); }
    else { ex.qs.forEach(function(q, k){ var r = root.querySelector('.l4r[data-k="' + k + '"]'); out.push(r.querySelector(".l4ok") && r.querySelector(".l4ok").classList.contains("on") ? "tick" : r.querySelector(".l4in").value.trim()); }); }
    return out;
  }
  function qMark(ex, ans){
    var rows = [];
    if (ex.kind === "tf") ex.qs.forEach(function(q, k){ rows.push({n: k + 1, ok: ans[k] === q.a, said: ans[k] ? (ans[k] === "T" ? "True" : "False") : "", right: q.a === "T" ? "True" : "False", text: q.t, ev: q.ev}); });
    else if (ex.kind === "grid") ex.groups.forEach(function(g, gi){ ex.cols.forEach(function(c, ci){ var k = gi * ex.cols.length + ci, a = ans[k]; rows.push({n: k + 1, ok: a === g.ans[ci], said: a >= 0 ? g.rows[a] : "", right: g.rows[g.ans[ci]], text: c + ": " + g.title.replace(/^Which\s+/i, "").replace(/\?$/, ""), ev: g.ev[ci]}); }); });
    else ex.qs.forEach(function(q, k){ var a = ans[k], ok = false, right = q.a || "✔ correct (no change)";
      if (!q.a) ok = a === "tick"; else if (a && a !== "tick"){ var f = " " + fnorm(a) + " "; ok = (q.acc || []).some(function(x){ return f.indexOf(" " + fnorm(x) + " ") > -1 || (/\d/.test(x) && f.replace(/ /g, "").indexOf(fnorm(x).replace(/ /g, "")) > -1); }); }
      rows.push({n: k + 1, ok: ok, said: a === "tick" ? "✔ correct" : a, right: right, text: q.l + (q.s ? " (" + q.s + ")" : ""), ev: q.ev}); });
    return rows;
  }
  function l4Player(ex, lim, key){
    return '<div class="card" id="cpc"><div class="pl"><button class="go" id="cplay">▶ Play</button><div class="bar"><b id="cbar"></b></div><span id="ctm" class="sub">0:00</span></div><p class="sub" id="cplm" style="margin:8px 0 0"></p></div>';
  }
  function l4Wire(ex, lim, key, note){
    var b = el("cplay"), bar = el("cbar"), tm = el("ctm"), m = el("cplm"); S.pl = S.pl || {}; var busy = false;
    function left(){ return lim === 0 ? 99 : lim - (S.pl[key] || 0); }
    function label(){ var l = left(); b.disabled = l <= 0 || busy; b.textContent = l <= 0 ? "✔ Played" : lim === 0 ? (S.pl[key] ? "▶ Play again" : "▶ Play") : S.pl[key] ? "▶ Play again (" + l + " left)" : "▶ Play (" + lim + (lim > 1 ? " plays" : " play") + ")"; m.textContent = note + (lim === 0 ? "" : ""); }
    label();
    b.onclick = function(){
      if (left() <= 0 || busy) return; busy = true; stopAudio(); S.pl[key] = (S.pl[key] || 0) + 1; b.disabled = true; b.textContent = "Loading…";
      audioUrl(ex).then(function(url){ A = new Audio(url); b.textContent = "Playing… listen to the end";
        A.ontimeupdate = function(){ if (A && A.duration){ bar.style.width = (100 * A.currentTime / A.duration) + "%"; var t = Math.floor(A.currentTime); tm.textContent = Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2); } };
        A.onended = function(){ busy = false; bar.style.width = "0"; label(); };
        A.onerror = function(){ busy = false; S.pl[key]--; label(); };
        var p = A.play(); if (p && p.catch) p.catch(function(){ busy = false; S.pl[key]--; label(); });
      }).catch(function(){ busy = false; S.pl[key]--; label(); });
    };
  }
  function startPart4(){
    page(top() + '<div class="hero"><h2>Loading Part ' + S.unit + '…</h2></div>'); el("cb").onclick = hub;
    Promise.all([getFile("c" + S.unit + "_part", "part" + S.unit + ".json").then(function(b){ return JSON.parse(new TextDecoder().decode(b)); }), wrTrack()]).then(function(r){
      S.P = r[0]; S.dict = false; S.cur = "lis"; S.L = {stage: 1, ei: 0, notes: {}, a2: {}, a3: {}, track: r[1]}; S.res = {}; S.pl = {}; S.fix = []; if (!S.t0) S.t0 = Date.now();
      var sv = stDone("lis") ? null : loadProg4();
      if (sv && sv.L && sv.L.stage >= 1 && S.P.exercises[sv.L.ei || 0]){
        S.L = sv.L; S.L.track = r[1] || S.L.track; S.res = sv.res || {}; S.pl = sv.pl || {};
        Object.keys(S.pl).forEach(function(k){ if (k.charAt(0) === "x") delete S.pl[k]; });   /* an exam that was cut short gets its play back */
        S.fix = (sv.fix || []).map(function(id){ return S.P.exercises.filter(function(e){ return e.id === id; })[0]; }).filter(Boolean);
        var g = S.L.stage; if (S.L.drill) return l4Drill(); if (g === 1) return l4Notes(); if (g === 2) return l4Answer(); if (g === 3) return l4Exam(); return l4Analysis();
      }
      l4Intro();
    }).catch(function(){ page(top() + '<div class="card warn"><h2>This part is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  function l4Intro(){
    var P = S.P, ie = S.L.track === "ie";
    page(top() + '<div class="hero"><h2>Listening · Part ' + S.unit + '</h2><p class="sub">' + esc(P.title) + ' · ' + P.exercises.length + ' recordings · about 50 minutes</p></div>' + stgBar(0)
      + '<div class="gr g2 fr l4how">'
      + '<div class="rc g"><span class="rn">1</span><div><b>Take notes</b><small style="color:#bcd0ff">Sound only. Play each recording as often as you like and write down names, numbers, dates, choices and reasons. You cannot see the questions yet.</small></div></div>'
      + '<div class="rc g"><span class="rn">2</span><div><b>Answer from your notes</b><small style="color:#bcd0ff">No audio. The questions appear and you answer using only your own notes.</small></div></div>'
      + '<div class="rc g"><span class="rn">3</span><div><b>Exam</b><small style="color:#bcd0ff">Real exam conditions: each recording plays ' + (ie ? "ONCE only" : "up to TWICE") + '. Answer while you listen.</small></div></div>'
      + '<div class="rc g"><span class="rn">4</span><div><b>Analysis</b><small style="color:#bcd0ff">See every mistake with the exact sentence you missed, read the script, and win your mistakes back.</small></div></div></div>'
      + '<button class="go" id="l4go" style="margin-top:8px">Start stage 1 →</button>');
    el("cb").onclick = hub; el("l4go").onclick = function(){ S.L.stage = 1; S.L.ei = 0; l4Notes(); };
  }
  function l4Head(){ var ex = S.P.exercises[S.L.ei]; setTimeout(saveProg4, 0); return top("Exit") + stgBar(S.L.stage) + '<div class="l4ph">Stage ' + S.L.stage + ' of 4 · recording ' + (S.L.ei + 1) + ' of ' + S.P.exercises.length + '</div><h2 style="margin:4px 0 0">' + esc(ex.id + " · " + ex.name) + '</h2>'; }
  function wc(s){ return (s.trim().match(/\S+/g) || []).length; }
  function l4Notes(){
    var ex = S.P.exercises[S.L.ei], L = S.L;
    page(l4Head() + '<div class="ins hlz"><span class="ii">📝</span><div><small>STAGE 1 · TAKE NOTES</small><strong>' + esc(ex.intro) + ' Listen and write down everything useful. The questions come later.</strong></div></div>'
      + l4Player(ex) + (ex.img ? '<div class="l4map"><img src="' + ex.img + '" alt="Map"></div>' : '') + '<textarea id="l4n" class="wrta l4na" spellcheck="false" autocomplete="off" autocapitalize="off" placeholder="Type your notes here. Names, numbers, dates, prices, who said what, what changed…">' + esc(L.notes[ex.id] || "") + '</textarea>'
      + '<div class="l4bar"><span id="l4wc" class="wrm"></span><button class="go" id="l4nx" disabled>' + (L.ei + 1 < S.P.exercises.length ? "Next recording →" : "Go to stage 2 →") + '</button></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); };
    l4Wire(ex, 0, "n" + ex.id, "Play it as many times as you need. You cannot skip ahead or rewind: that is the exam skill.");
    var ta = el("l4n"), nx = el("l4nx"), c = el("l4wc");
    function up(){ L.notes[ex.id] = ta.value; var w = wc(ta.value); c.innerHTML = '<b>' + w + '</b> / ' + ex.min + ' words at least'; nx.disabled = w < ex.min && !O.nofloor; c.classList.toggle("ok", w >= ex.min); }
    ta.oninput = up; up(); ta.focus();
    nx.onclick = function(){ stopAudio(); L.ei++; if (L.ei < S.P.exercises.length) l4Notes(); else { L.stage = 2; L.ei = 0; l4Answer(); } };
  }
  function l4Answer(){
    var ex = S.P.exercises[S.L.ei], L = S.L;
    page(l4Head() + '<div class="ins hlz"><span class="ii">🧠</span><div><small>STAGE 2 · ANSWER FROM YOUR NOTES</small><strong>No audio now. Use only your own notes to answer. You will not see the correct answers yet.</strong></div></div>'
      + '<div class="l4two"><div class="l4notes"><h3>Your notes</h3><div class="l4nt">' + esc(L.notes[ex.id] || "").replace(/\n/g, "<br>") + '</div></div><div class="l4ans" id="l4a"><div class="l4qh">' + esc(ex.say) + '</div>' + qWidget(ex) + '</div></div>'
      + '<div class="l4bar"><span class="wrm" id="l4m"></span><button class="go" id="l4ck">Check my answers</button></div><div id="cout"></div>');
    el("cb").onclick = hub; qWire(el("l4a"), ex);
    el("l4ck").onclick = function(){
      var ans = qRead(el("l4a"), ex), rows = qMark(ex, ans), g = rows.filter(function(r){ return r.ok; }).length; L.a2[ex.id] = {good: g, n: rows.length};
      var pct = Math.round(100 * g / rows.length), t = tier(pct);
      el("l4ck").remove(); el("l4a").classList.add("lk"); [].forEach.call(el("l4a").querySelectorAll("button,input"), function(x){ x.disabled = true; });
      el("cout").innerHTML = '<div class="l4sc" style="--c:' + t[2] + '"><b>' + g + ' / ' + rows.length + '</b><span>' + t[1] + ' ' + (pct >= 85 ? "Your notes are strong." : pct >= 55 ? "Decent notes. Next time catch more of the small details." : "Your notes missed a lot. Write more key words, numbers and names while you listen.") + '</span><small>The answers stay hidden. You will meet these recordings again in the exam.</small></div>'
        + '<button class="go" id="l4nx" style="margin-top:12px">' + (L.ei + 1 < S.P.exercises.length ? "Next recording →" : "Go to the exam →") + '</button>';
      el("l4nx").onclick = function(){ L.ei++; if (L.ei < S.P.exercises.length) l4Answer(); else { L.stage = 3; L.ei = 0; l4Exam(); } };
      el("cout").scrollIntoView && el("cout").scrollIntoView({behavior: "smooth"});
    };
  }
  function l4Exam(){
    var ex = S.P.exercises[S.L.ei], L = S.L, ie = L.track === "ie", lim = ie ? 1 : 2;
    page(l4Head() + '<div class="ins hlz"><span class="ii">⏱</span><div><small>STAGE 3 · EXAM CONDITIONS</small><strong>' + esc(ex.say) + ' The recording is played ' + (ie ? "once only" : "up to twice") + '. Your notes are hidden: answer while you listen.</strong></div></div>'
      + l4Player(ex) + '<div class="l4ans" id="l4a">' + qWidget(ex) + '</div><div class="l4bar"><span class="wrm"></span><button class="go" id="l4ck">Submit my answers</button></div><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; qWire(el("l4a"), ex);
    l4Wire(ex, lim, "x" + ex.id, "You cannot skip or rewind. " + (ie ? "One play only, exactly like the real test." : "You can play it twice."));
    el("l4ck").onclick = function(){
      stopAudio(); var ans = qRead(el("l4a"), ex), rows = qMark(ex, ans), g = rows.filter(function(r){ return r.ok; }).length;
      L.a3[ex.id] = {ans: ans, rows: rows, good: g, n: rows.length}; S.res[ex.id] = {good: g, n: rows.length, miss: rows.filter(function(r){ return !r.ok; }).map(function(r){ return r.n - 1; })};
      L.ei++; if (L.ei < S.P.exercises.length){ l4ExamGap(); } else { L.stage = 4; l4Analysis(); }
    };
  }
  function l4ExamGap(){
    page(top("Exit") + stgBar(3) + '<div class="brk" style="padding:34px 0"><div class="bk good"><div class="be">✅</div><h1 class="bh">Answers locked</h1><p class="sub">Recording ' + S.L.ei + ' of ' + S.P.exercises.length + ' is submitted. You will see the results in the analysis at the end. Get ready for the next recording.</p></div><button class="go" id="l4nx" style="margin-top:20px">Next recording →</button></div>');
    el("cb").onclick = hub; el("l4nx").onclick = l4Exam;
  }
  function l4Analysis(){
    var L = S.L, g = 0, n = 0, rows = "", g2 = 0;
    S.P.exercises.forEach(function(e, i){ var r = L.a3[e.id], a2 = L.a2[e.id]; g += r.good; n += r.n; g2 += a2 ? a2.good : 0; var pc = Math.round(100 * r.good / r.n);
      rows += '<div class="rc ' + (r.good < r.n ? "b" : "g") + '"><span class="rn">' + (i + 1) + '</span><div><b>' + esc(e.name) + '</b><small style="color:#bcd0ff">Exam ' + r.good + ' of ' + r.n + ' · ' + pc + '% · from notes ' + (a2 ? a2.good + ' of ' + a2.n : "–") + '</small></div><i>' + (r.good < r.n ? "✖" : "✔") + '</i></div>'; });
    S.fix = S.P.exercises.filter(function(e){ return L.a3[e.id].good < L.a3[e.id].n; });
    var pct = Math.round(100 * g / n), t = tier(pct), sp = "";
    if (pct >= 90) for (var q = 0; q < 34; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 2.5).toFixed(2) + 's;animation-duration:' + (2.4 + Math.random() * 2).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 6).toFixed(1) + 'px;height:' + (8 + Math.random() * 10).toFixed(1) + 'px"></i>';
    var miss = n - g;
    page(top("Exit") + stgBar(4) + '<div class="fbk"><div class="spk">' + sp + '</div><small class="wu">EXAM RESULT</small><div class="ring" style="--c:' + t[2] + ';--a:' + Math.round(3.6 * pct) + 'deg"><div><b>' + pct + '%</b><small>' + g + ' of ' + n + ' correct</small></div></div><div class="verd" style="color:' + t[2] + '">' + t[1] + ' ' + t[0] + '</div></div>'
      + '<div class="gr g2 fr l4sm">' + rows + '</div><button class="go" id="l4rv" style="margin-top:6px">' + (miss ? '🔎 See every mistake and the sentence behind it →' : 'Read the scripts →') + '</button>');
    el("cb").onclick = hub; el("l4rv").onclick = function(){ L.ri = 0; l4Review(); };
  }
  function hiEv(tape, ev){
    var h = esc(tape).replace(/\n/g, "<br>"); if (!ev) return h;
    ev.split(" ... ").forEach(function(part){ var e = esc(part.trim()); if (e && h.indexOf(e) > -1) h = h.replace(e, '<mark class="l4ev">' + e + '</mark>'); });
    return h;
  }
  function l4Review(){
    var L = S.L, ex = S.P.exercises[L.ri], r = L.a3[ex.id], last = L.ri + 1 >= S.P.exercises.length, h = "";
    r.rows.forEach(function(w){
      h += '<div class="l4rv ' + (w.ok ? "g" : "b") + '"><div class="l4rh"><b class="qn">' + w.n + '</b><span>' + esc(w.text) + '</span><i>' + (w.ok ? "✔" : "✖") + '</i></div>'
        + (w.ok ? '<div class="l4ro"><small>Your answer</small><strong>' + esc(w.said) + '</strong></div>' : '<div class="l4ro"><small>You wrote</small><s>' + esc(w.said || "(empty)") + '</s><small>Correct</small><strong>' + esc(w.right) + '</strong></div>')
        + (w.ev && !w.ok ? '<div class="l4evb">🎧 <em>“' + esc(w.ev.replace(/ \.\.\. /g, " … ")) + '”</em></div>' : "") + '</div>'; });
    page(top("Exit") + stgBar(4) + '<div class="l4ph">Analysis · recording ' + (L.ri + 1) + ' of ' + S.P.exercises.length + '</div><h2 style="margin:4px 0 8px">' + esc(ex.id + " · " + ex.name) + ' · ' + r.good + ' of ' + r.n + '</h2>'
      + '<div class="l4two rv"><div class="l4rvl">' + h + '</div><div class="l4tp"><h3>Script <small>the sentences you needed are highlighted</small></h3><div class="l4tx" id="l4tx">' + hiEv(ex.tape, r.rows.filter(function(w){ return !w.ok && w.ev; }).map(function(w){ return w.ev; }).join(" ... ")) + '</div><div class="l4au"><button class="pill" id="l4pl">▶ Listen again</button><span class="sub" id="l4ps">Pause, rewind and replay freely here.</span></div></div></div>'
      + '<button class="go" id="l4nx" style="margin-top:14px">' + (last ? (S.fix.length ? "🛠 Win your mistakes back →" : "Finish the listening →") : "Next recording →") + '</button>');
    el("cb").onclick = function(){ stopAudio(); hub(); };
    var pl = el("l4pl"), B = null;
    pl.onclick = function(){ if (B){ if (B.paused){ B.play(); pl.textContent = "❚❚ Pause"; } else { B.pause(); pl.textContent = "▶ Continue"; } return; } pl.textContent = "Loading…"; audioUrl(ex).then(function(u){ B = new Audio(u); B.controls = false; B.onended = function(){ B = null; pl.textContent = "▶ Listen again"; }; A = B; B.play(); pl.textContent = "❚❚ Pause"; }); };
    el("l4nx").onclick = function(){ stopAudio(); if (!last){ L.ri++; l4Review(); } else if (S.fix.length){ l4Drill(); } else listeningDone(); };
  }
  /* win the mistakes back: re-answer each missed question after seeing the sentence, until all are right */
  function l4Drill(){
    var L = S.L, items = [];
    S.P.exercises.forEach(function(e){ L.a3[e.id].rows.forEach(function(w){ if (!w.ok) items.push({ex: e, w: w}); }); });
    L.drill = true; L.dq = items; L.di = 0; L.dn = items.length; L.dfix = 0; L.try = {}; saveProg4(); l4DrillQ();
  }
  function l4DrillQ(){
    var L = S.L;
    if (!L.dq.length){ return l4DrillEnd(); }
    if (L.di >= L.dq.length) L.di = 0;
    var it = L.dq[L.di], ex = it.ex, w = it.w, key = ex.id + ":" + w.n, tr = L.try[key] || 0;
    var pct = Math.round(100 * (L.dn - L.dq.length) / L.dn);
    var gi = ex.kind === "grid" ? Math.floor((w.n - 1) / ex.cols.length) : 0, ci = ex.kind === "grid" ? (w.n - 1) % ex.cols.length : 0;
    var wid = "";
    if (ex.kind === "tf") wid = '<div class="l4q"><div class="l4r" data-k="0"><b class="qn">' + w.n + '</b><span class="qt">' + esc(ex.qs[w.n - 1].t) + '</span><div class="l4t"><button type="button" class="l4tf" data-v="T">True</button><button type="button" class="l4tf" data-v="F">False</button></div></div></div>';
    else if (ex.kind === "grid"){ var g = ex.groups[gi]; wid = '<div class="l4g"><div class="l4gh">' + esc(ex.cols[ci]) + ': ' + esc(g.title) + '<small>Tick one item.</small></div><div class="l4gt">' + g.rows.map(function(r, ri){ return '<div class="l4gr one"><span>' + esc(r) + '</span><button type="button" class="l4tk" data-g="0" data-c="0" data-r="' + ri + '"></button></div>'; }).join("") + '</div></div>'; }
    else { var q = ex.qs[w.n - 1]; wid = '<div class="l4q"><div class="l4r fx" data-k="0"><b class="qn">' + w.n + '</b><span class="qt">' + esc(q.l) + (q.s ? ' <strong>' + esc(q.s) + '</strong>' : "") + '</span><div class="l4t">' + (q.nt ? '' : '<button type="button" class="l4ok">✔ correct</button>') + '<input class="a l4in" type="text" placeholder="' + (q.nt ? 'write your answer' : 'or write the correction') + '" spellcheck="false" autocomplete="off" autocapitalize="off"></div></div></div>'; }
    page(top("Exit") + stgBar(4) + '<div class="fxtag">🛠 WIN IT BACK · ' + (L.dn - L.dq.length) + ' of ' + L.dn + ' won</div><div class="drb"><i style="width:' + pct + '%"></i></div>'
      + '<div class="ins fixc"><span class="ii">🎯</span><div><small>THE SENTENCE YOU NEEDED</small><strong>“' + esc((w.ev || "").replace(/ \.\.\. /g, " … ")) + '”</strong></div></div>'
      + '<div class="l4ans" id="l4a"><div class="l4qh">' + esc(ex.id + " · " + ex.name) + '</div>' + wid + '</div><div class="l4bar"><span class="wrm" id="l4m"></span><button class="go" id="l4ck">Check</button></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; qWire(el("l4a"), {kind: ex.kind});
    el("l4ck").onclick = function(){
      var root = el("l4a"), ok = false, ans;
      if (ex.kind === "tf"){ var s = root.querySelector(".l4tf[data-sel='1']"); ok = !!s && s.getAttribute("data-v") === ex.qs[w.n - 1].a; }
      else if (ex.kind === "grid"){ var s2 = root.querySelector(".l4tk.on"); ok = !!s2 && +s2.getAttribute("data-r") === ex.groups[gi].ans[ci]; }
      else { ans = qRead(root, {kind: "fix", qs: [ex.qs[w.n - 1]]}); ok = qMark({kind: "fix", qs: [ex.qs[w.n - 1]]}, ans)[0].ok; }
      L.try[key] = (L.try[key] || 0) + 1; var m = el("l4m");
      if (ok){ m.className = "wrm gd"; m.textContent = "✔ Yes! That is the one."; L.dq.splice(L.di, 1); L.dfix++; el("l4ck").textContent = "Next →"; el("l4ck").onclick = l4DrillQ; [].forEach.call(root.querySelectorAll("button,input"), function(x){ x.disabled = true; }); }
      else if (L.try[key] >= 2){ m.className = "wrm bd"; m.innerHTML = "Not yet. The answer is <b>" + esc(w.right) + "</b>. Read the sentence again, then it will come back to you."; el("l4ck").textContent = "Next →"; L.di++; [].forEach.call(root.querySelectorAll("button,input"), function(x){ x.disabled = true; }); el("l4ck").onclick = l4DrillQ; }
      else { m.className = "wrm bd"; m.textContent = "✖ Not quite. Read the sentence above once more and try again."; }
    };
  }
  function l4DrillEnd(){
    page(top("Exit") + '<div class="brk"><div class="bk good"><div class="be">🏆</div><h1 class="bh">All won back!</h1><p class="sub">You fixed every mistake from the exam. That is exactly how listening scores go up.</p></div><button class="go" id="l4nx" style="margin-top:20px">Finish the listening →</button></div>');
    el("cb").onclick = hub; el("l4nx").onclick = listeningDone;
  }
  var BRK = 600;
  function mmss(t){ t = Math.max(0, Math.floor(t)); return ("0" + Math.floor(t / 60)).slice(-2) + ":" + ("0" + t % 60).slice(-2); }
  /* until reading and writing exist, a finished listening part ends on its own screen (no class key yet) */
  function nextStage(){
    S.lisDone = S.lisDone || {}; var k = S.nextKind, rd = k === "read", wr = k === "write"; if (!rd && !wr) S.lisDone[S.unit] = true;
    var ld = !!(S.lisDone && S.lisDone[S.unit]), rr = !!(S.rdDone && S.rdDone[S.unit]), ww = !!(S.wrDone && S.wrDone[S.unit]);
    if (O.finale && !rd && !wr) return unitDone();
    if (ld && rr && ww) return unitDone();
    page('<div class="brk"><div class="bk good"><div class="be">' + (wr ? "✍️" : rd ? "📖" : "🎧") + '</div><h1 class="bh">' + (wr ? "Writing complete!" : rd ? "Reading complete!" : "Listening complete!") + '</h1><p class="sub">Your ' + (wr ? "writing" : rd ? "reading" : "listening") + ' drilling for Unit ' + S.unit + ' is saved. ' + ((ld && rr && ww) ? "" : "Finish the other drillings of this unit to earn your class key.") + '</p>'
      + '<div class="fst" style="opacity:1;animation:none"><div><b style="color:' + (ld ? "#0c9c84" : "#8a98c4") + '">' + (ld ? "✔" : "…") + '</b><span>Listening</span></div><div><b style="color:' + (rr ? "#0c9c84" : "#8a98c4") + '">' + (rr ? "✔" : "…") + '</b><span>Reading</span></div><div><b style="color:' + (ww ? "#0c9c84" : "#8a98c4") + '">' + (ww ? "✔" : "…") + '</b><span>Writing</span></div></div></div><button class="go" id="cbk3" style="margin-top:20px">Back to my unit →</button></div>');
    el("cbk3").onclick = hub;
  }


  /* highlighter */
  function hlWire(){
    if (window._nvhl) return; window._nvhl = 1;
    document.addEventListener("mouseup", function(e){
      var r0 = el("cnv"); if (!r0) return;
      var sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
      var rg = sel.getRangeAt(0), a = rg.commonAncestorContainer, host = a.nodeType === 1 ? a : a.parentNode;
      var z = host && host.closest ? host.closest(".hlz") : null; if (!z || !r0.contains(z)) return;
      if (host.closest("input,textarea,button")) return;
      var tn = [], w = document.createTreeWalker(rg.commonAncestorContainer.nodeType === 3 ? rg.commonAncestorContainer.parentNode : rg.commonAncestorContainer, NodeFilter.SHOW_TEXT, null);
      while (w.nextNode()){ var n = w.currentNode; if (rg.intersectsNode(n) && n.nodeValue.trim() && !(n.parentNode.closest && n.parentNode.closest("input,textarea,button,.hlg,.hlr"))) tn.push(n); }
      if (a.nodeType === 3 && !tn.length && !(a.parentNode.closest && a.parentNode.closest(".hlg,.hlr"))) tn.push(a);
      tn.forEach(function(n){ var s0 = n === rg.startContainer ? rg.startOffset : 0, e0 = n === rg.endContainer ? rg.endOffset : n.nodeValue.length; if (e0 <= s0) return;
        var rr = document.createRange(); rr.setStart(n, s0); rr.setEnd(n, e0); if (!rr.toString().trim()) return; var sp = document.createElement("span"); sp.className = (z.id === "rdq" || z.closest("#rdq")) ? "hlr" : "hlg"; try { rr.surroundContents(sp); } catch (x) {} });
      sel.removeAllRanges();
    });
    document.addEventListener("click", function(e){ var t = e.target; if (t && t.classList && (t.classList.contains("hlg") || t.classList.contains("hlr")) && el("cnv") && el("cnv").contains(t)){ var p = t.parentNode; while (t.firstChild) p.insertBefore(t.firstChild, t); p.removeChild(t); p.normalize(); } });
  }
  function hlTip(){ return '<span class="hltip"><i>🖍</i> Select text to highlight it (green on the text, red on the questions) · click a highlight to remove it</span>'; }
  /* ---------- reading drilling (split screen) ---------- */
  function wide(on){ var w = document.querySelector("#cnv .w"); if (w) w.classList.toggle("rdw", !!on); }
  function rdJudge(q, said){
    said = String(said || "").trim(); if (!said) return false;
    if (q.t === "tf" || q.t === "sel") return said.toUpperCase() === q.a[0];
    var n = norm(said).replace(/-/g, " "); return q.a.some(function(a){ return norm(a).replace(/-/g, " ") === n; });
  }
  function rdAll(D){ if (D.parts){ var o = []; D.parts.forEach(function(p){ o = o.concat(p.qs); }); return o; } return D.q.concat(D.t); }
  function startReading(){ if (!opn("read")) return hub(); S.cur = "read";
    page(top() + '<div class="hero"><h2>Loading the reading…</h2></div>'); el("cb").onclick = hub;
    Promise.resolve(R("nv_stage", {tok: O.tok, u: S.unit})).then(function(r){ return r && r.track === "ml" ? "ml" : "ie"; }, function(){ return "ie"; }).then(function(tr){
      return getFile("c" + S.unit + (tr === "ml" ? "_readm" : "_read"), (tr === "ml" ? "readm" : "read") + S.unit + ".json");
    }).then(function(b){ return JSON.parse(new TextDecoder().decode(b)); }).then(function(D){
      S.R = {D: D, ans: {}, first: null, second: null, t0: Date.now(), phase: 0}; rdTest(false);
    }).catch(function(){ page(top() + '<div class="card warn"><h2>The reading is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  function rdSteps(cur){
    var L = ["1 · Test", "2 · Results", "3 · Vocabulary", "4 · Retake", "5 · Answers"];
    return '<div class="rds">' + L.map(function(t, i){ return '<span class="' + (i < cur ? "dn" : i === cur ? "cu" : "") + '">' + (i < cur ? "✔ " : "") + t + '</span>'; }).join("") + '</div>';
  }
  function rdPassage(){
    var D = S.R.D; return '<div class="rpn hlz' + (S.R.hl ? " hl" : "") + '" id="rdp"><h1 class="rpt">' + esc(D.title).toUpperCase() + '</h1><p class="rpi">' + esc(D.sub) + '</p>'
      + D.p.map(function(p, i){ return '<p class="rp"><span class="pl">' + String.fromCharCode(65 + i) + '</span>' + p + '</p>'; }).join("") + '</div>';
  }
  function rdTimer(){
    if (S.bt) clearInterval(S.bt);
    var t0 = S.R.t0, lim = S.R.D.mins * 60;
    function tk(){ var e = el("rtm"); if (!e){ clearInterval(S.bt); return; } var s = (Date.now() - t0) / 1000, left = lim - s;
      if (left >= 0){ e.textContent = "⏱ " + mmss(left); e.classList.remove("late"); } else { e.textContent = "⏱ +" + mmss(-left); e.classList.add("late"); } }
    tk(); S.bt = setInterval(tk, 500);
  }
  function rdTest(retake){
    if (S.R.D.parts) return rdTestML(retake);
    var R_ = S.R, D = R_.D, wrongSet = retake ? R_.first.bad : null;
    function on(n){ return !wrongSet || wrongSet.indexOf(n) >= 0; }
    if (retake) wrongSet.forEach(function(n){ delete R_.ans[n]; });
    var h = '';
    var tfs = D.q.filter(function(q){ return q.t === "tf" && on(q.n); }), ws = D.q.filter(function(q){ return q.t === "w" && on(q.n); }), ts = D.t.filter(function(q){ return on(q.n); });
    function qrow(q){ return '<div class="qr" data-n="' + q.n + '"><div class="qn">' + q.n + '</div><div class="qb"><div class="qt">' + esc(q.q) + '</div>'
      + (q.t === "tf" ? '<div class="tf">' + ["TRUE", "FALSE", "NOT GIVEN"].map(function(v){ return '<button type="button" data-v="' + v + '">' + v + '</button>'; }).join("") + '</div>' : '<input class="rin" type="text" autocomplete="off" spellcheck="false" placeholder="Your answer" data-n="' + q.n + '">') + '</div></div>'; }
    if (retake) h += '<div class="qgh"><span class="qi">🔁</span><div><b>Retake: only the questions you missed</b><small>You have seen the vocabulary now. Read the passage again and fix your answers. The answers will be shown after this round.</small></div></div>';
    function rg(list){ var ns = list.map(function(q){ return q.n; }); return ns.length > 1 ? Math.min.apply(null, ns) + "–" + Math.max.apply(null, ns) : String(ns[0]); }
    var gtf = tfs.length ? '<div class="qg"><div class="qgh"><span class="qi">🧭</span><div><b>Questions ' + rg(D.q.filter(function(q){ return q.t === "tf"; })) + ' · True / False / Not Given</b><small>Do the statements agree with the information in the passage?</small></div></div>'
      + '<div class="qd"><span><b>TRUE</b> = agrees with the passage</span><span><b>FALSE</b> = contradicts the passage</span><span><b>NOT GIVEN</b> = no information on this</span></div>' + tfs.map(qrow).join("") + '</div>' : "";
    var gws = ws.length ? '<div class="qg"><div class="qgh"><span class="qi">✏️</span><div><b>Questions ' + rg(D.q.filter(function(q){ return q.t === "w"; })) + ' · Short answers</b><small>Choose <b>' + (D.wl || "ONE WORD ONLY") + '</b> from the passage for each answer.</small></div></div>' + ws.map(qrow).join("") + '</div>' : "";
    var gts = "";
    if (ts.length){
      var tb = '<table class="rtb"><tr>' + D.th.map(function(x){ return '<th>' + x + '</th>'; }).join('') + '</tr>' + D.tb.map(function(r){
        function cell(t){ return t.replace(/\{(\d+)\}/g, function(m, n){ n = +n; if (!on(n)) return '<span class="tqn gd">' + n + '</span> <b>' + esc(D.t.filter(function(x){ return x.n === n; })[0].a[0]) + '</b>';
          return '<span class="tw"><span class="tqn" data-t="' + n + '">' + n + '</span><input class="rin rt" type="text" autocomplete="off" spellcheck="false" data-n="' + n + '"></span>'; }); }
        return '<tr><td>' + r.name + '</td><td>' + r.date + '</td><td>' + cell(r.feat) + '</td><td>' + cell(r.note) + '</td></tr>'; }).join("") + '</table>';
      gts = '<div class="qg"><div class="qgh"><span class="qi">🧩</span><div><b>Questions ' + rg(D.t) + ' · Table completion</b><small>Complete the table. Choose <b>' + (D.tl || "ONE WORD AND/OR A NUMBER") + '</b> from the passage for each answer.</small></div></div>' + tb + '</div>'; }
    var GR = {tf: gtf, w: gws, tb: gts}; (D.order || ["tf", "w", "tb"]).forEach(function(k){ h += GR[k]; });
    var need = [].concat(tfs, ws, ts).map(function(q){ return q.n; });
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · ' + esc(D.title) + '</h2>' + rdSteps(retake ? 3 : 0) + hlTip() + '<div class="rtm" id="rtm">⏱</div></div>'
      + '<div class="rsp">' + rdPassage() + '<div class="rpn q hlz" id="rdq">' + h + '<div class="rbar"><button class="go" id="rck" disabled>Check my answers</button><small id="rhint"></small></div></div></div>');
    wide(true); rdTimer();
    el("cb").onclick = function(){ if (S.bt) clearInterval(S.bt); wide(false); hub(); };
    var need_n = need.length, minFill = Math.max(1, Math.ceil(need_n * 0.7));
    function filled(){ return need.filter(function(n){ return (R_.ans[n] || "").trim(); }).length; }
    function upd(){ var f = filled(), ok = f >= minFill, b = el("rck"); if (!b) return; b.disabled = !ok; el("rhint").textContent = ok ? "Ready. You can still change answers." : "Answer " + (minFill - f) + " more to unlock the check (" + f + "/" + need_n + ")."; }
    [].forEach.call(document.querySelectorAll("#rdq .tf"), function(g){ var n = +g.parentNode.parentNode.getAttribute("data-n");
      [].forEach.call(g.children, function(b){ b.onclick = function(){ R_.ans[n] = b.getAttribute("data-v"); [].forEach.call(g.children, function(x){ x.classList.toggle("sel", x === b); }); g.parentNode.parentNode.classList.add("fld"); upd(); }; }); });
    [].forEach.call(document.querySelectorAll("#rdq input.rin"), function(i){ var n = +i.getAttribute("data-n");
      i.oninput = function(){ R_.ans[n] = i.value; var r = i.closest(".qr"); if (r) r.classList.toggle("fld", !!i.value.trim()); upd(); };
      i.onpaste = function(e){ e.preventDefault(); }; i.oncontextmenu = function(e){ e.preventDefault(); }; });
    upd();
    el("rck").onclick = function(){
      var all = rdAll(D), bad = [], good = [];
      need.forEach(function(n){ var q = all.filter(function(x){ return x.n === n; })[0]; (rdJudge(q, R_.ans[n]) ? good : bad).push(n); });
      if (!retake){ R_.first = {bad: bad, good: good, ans: JSON.parse(JSON.stringify(R_.ans))}; rdResults(); }
      else { R_.second = {bad: bad, good: good, ans: JSON.parse(JSON.stringify(R_.ans))}; rdAnswers(); }
    };
  }

  /* multi-level reading: tabs for the three parts, each with its own left panel and question list */
  function rdTestML(retake){
    var R_ = S.R, D = R_.D, wrongSet = retake ? R_.first.bad : null;
    function on(n){ return !wrongSet || wrongSet.indexOf(n) >= 0; }
    if (retake) wrongSet.forEach(function(n){ delete R_.ans[n]; });
    var need = [], tabs = "", lefts = "", rights = "", firstP = -1, fullP = {};
    D.parts.forEach(function(p, pi){
      var qs = p.qs.filter(function(q){ return on(q.n); }); if (!qs.length) return; if (firstP < 0) firstP = pi;
      qs.forEach(function(q){ need.push(q.n); });
      if (p.qs[0].t === "gap") fullP[pi] = 1;
      tabs += '<button type="button" class="rtab" data-p="' + pi + '">' + p.ic + ' ' + p.tab + ' <small>(' + qs.length + ')</small></button>';
      var lf = p.left.replace(/<span class="gapw">.*?data-n="(\d+)"><\/span>/g, function(m, n){ n = +n; if (on(n)) return m; var q = p.qs.filter(function(x){ return x.n === n; })[0]; return '<span class="tqn gd">' + n + '</span> <b class="gdn">' + esc(q.a[0]) + '</b>'; });
      lefts += '<div class="rpn hlz' + (R_.hl ? " hl" : "") + ' rpart" data-p="' + pi + '">' + (retake ? "" : "") + '<h1 class="rpt" style="font-size:30px">' + esc(p.head) + '</h1><p class="rpi">' + esc(p.instr) + '</p>' + lf + '</div>';
      var rr = '<div class="rpart" data-p="' + pi + '"><div class="qgh"><span class="qi">' + p.ic + '</span><div><b>' + esc(p.head) + '</b><small>Questions ' + p.qs[0].n + '–' + p.qs[p.qs.length - 1].n + '</small></div></div>' + (p.legend ? '<div class="qd" style="display:block">' + p.legend + '</div>' : "");
      if (p.qs[0].t === "gap") rr += '<p class="sub" style="text-align:left">Type the missing words into the gaps in the text on the left.</p>';
      else rr += qs.map(function(q){ return '<div class="qr" data-n="' + q.n + '"><div class="qn">' + q.n + '</div><div class="qb"><div class="qt">' + esc(q.q) + '</div><select class="rsel" data-n="' + q.n + '"><option value="">Choose…</option>' + q.opts.map(function(o){ return '<option>' + o + '</option>'; }).join("") + '</select></div></div>'; }).join("");
      rights += rr + '</div>';
    });
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · ' + esc(D.title) + '</h2>' + rdSteps(retake ? 3 : 0) + hlTip() + '<div class="rtm" id="rtm">⏱</div></div>'
      + '<div class="rtabs">' + tabs + '</div><div class="rsp"><div id="rdp">' + lefts + '</div><div class="rpn q hlz" id="rdq">' + rights + '</div></div><div class="rbar rbfix"><button class="go" id="rck" disabled>Check my answers</button><small id="rhint"></small></div>');
    wide(true); rdTimer();
    el("cb").onclick = function(){ if (S.bt) clearInterval(S.bt); wide(false); hub(); };
    function show(pi){ var sp = document.querySelector(".rsp"); if (sp) sp.classList.toggle("rfull", !!fullP[pi]); [].forEach.call(document.querySelectorAll(".rpart"), function(e){ e.style.display = +e.getAttribute("data-p") === pi ? "" : "none"; }); [].forEach.call(document.querySelectorAll(".rtab"), function(b){ b.classList.toggle("sel", +b.getAttribute("data-p") === pi); }); var rp = el("rdp"); }
    [].forEach.call(document.querySelectorAll(".rtab"), function(b){ b.onclick = function(){ show(+b.getAttribute("data-p")); }; }); show(firstP);
    var need_n = need.length, minFill = Math.max(1, Math.ceil(need_n * 0.7));
    function filled(){ return need.filter(function(n){ return (R_.ans[n] || "").trim(); }).length; }
    function upd(){ var f = filled(), ok = f >= minFill, b = el("rck"); if (!b) return; b.disabled = !ok; el("rhint").textContent = ok ? "Ready. You can still change answers." : "Answer " + (minFill - f) + " more to unlock the check (" + f + "/" + need_n + ")."; }
    [].forEach.call(document.querySelectorAll("#rdp input.rin"), function(i){ var n = +i.getAttribute("data-n"); i.oninput = function(){ R_.ans[n] = i.value; upd(); }; i.onpaste = function(e){ e.preventDefault(); }; i.oncontextmenu = function(e){ e.preventDefault(); }; });
    function crossOut(){
      D.parts.forEach(function(p, pi){ if (p.qs[0].t !== "sel") return; var used = {}; p.qs.forEach(function(q){ var v = R_.ans[q.n]; if (v) used[v] = 1; });
        var pe = document.querySelectorAll('.rpart[data-p="' + pi + '"] [data-l]'); [].forEach.call(pe, function(x){ x.classList.toggle("used", !!used[x.getAttribute("data-l")]); });
        p.qs.forEach(function(q){ var c = document.querySelector('select[data-n="' + q.n + '"]'); if (!c) return; [].forEach.call(c.options, function(o){ if (!o.value) return; o.disabled = !!used[o.value] && R_.ans[q.n] !== o.value; o.textContent = o.value + (used[o.value] && R_.ans[q.n] !== o.value ? "  ✗ used" : ""); }); }); });
    }
    [].forEach.call(document.querySelectorAll("#rdq select.rsel"), function(c){ var n = +c.getAttribute("data-n"); c.onchange = function(){ R_.ans[n] = c.value; c.closest(".qr").classList.toggle("fld", !!c.value); crossOut(); upd(); }; });
    crossOut();
    upd();
    el("rck").onclick = function(){
      var all = rdAll(D), bad = [], good = [];
      need.forEach(function(n){ var q = all.filter(function(x){ return x.n === n; })[0]; (rdJudge(q, R_.ans[n]) ? good : bad).push(n); });
      if (!retake){ R_.first = {bad: bad, good: good, ans: JSON.parse(JSON.stringify(R_.ans))}; rdResults(); }
      else { R_.second = {bad: bad, good: good, ans: JSON.parse(JSON.stringify(R_.ans))}; rdAnswers(); }
    };
  }
  function rdResults(){
    var R_ = S.R, D = R_.D, r = R_.first, g = r.good.length, tot = rdAll(D).length, pct = Math.round(100 * g / tot), col = pct >= 85 ? "#0c9c84" : pct >= 60 ? "#e0953c" : "#d6395f";
    var msg = pct >= 85 ? "Superb reading! Look at that accuracy." : pct >= 60 ? "Solid start. A few traps got you, and we will fix them." : "Good effort. This passage hides tricks, and you are about to learn them.";
    var chips = ""; for (var i = 1; i <= tot; i++) chips += '<i class="' + (r.good.indexOf(i) >= 0 ? "g" : "b") + '" style="animation-delay:' + (i * 0.05).toFixed(2) + 's">' + i + '</i>';
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · results</h2>' + rdSteps(1) + '</div><div class="brk" style="padding-top:6px">'
      + '<div class="rsc"><div class="ring" style="--c:' + col + ';--a:' + pct + '%"><div><b style="font-size:46px;color:' + col + '">' + g + '/' + tot + '</b><small>' + pct + '% correct</small></div></div></div>'
      + '<h1 class="bh" style="font-size:40px">' + msg + '</h1><p class="sub">Green = correct, red = needs another look. The answers stay hidden until you have studied the vocabulary and tried again.</p>'
      + '<div class="qchips">' + chips + '</div>'
      + '<div style="margin-top:22px"><button class="go" id="rvo">' + (r.bad.length ? "Study the vocabulary →" : "Perfect! See the explanations →") + '</button></div></div>');
    wide(false); el("cb").onclick = hub;
    el("rvo").onclick = function(){ if (r.bad.length) rdVocab(); else { R_.second = {bad: [], good: r.good, ans: r.ans}; rdAnswers(); } };
  }
  function rdVocab(){
    var D = S.R.D, r = S.R.first;
    function card(x, c){ return '<div class="vc ' + c + '"><b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span><em>' + esc(x[2]) + '</em></div>'; }
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · vocabulary</h2>' + rdSteps(2) + '</div>'
      + '<p class="sub" style="text-align:left;margin:4px 0">Every word and chunk below is used in the passage. Study them, then read the passage again: they will be highlighted for you.</p>'
      + '<div class="vh">Vocabulary from your Unit ' + S.unit + ' book</div><div class="vgrid">' + D.v.map(function(x){ return card(x, ""); }).join("") + '</div>'
      + '<div class="vh">Unit ' + S.unit + ' power chunks' + (D.topic || S.unit === 1 ? ' · ' + esc(D.topic || 'Growing Up') : '') + '</div><div class="vgrid">' + D.c.map(function(x){ return card(x, "c"); }).join("") + '</div>'
      + '<div style="text-align:center;margin:22px 0 10px"><button class="go" id="rrt">Retake the ' + r.bad.length + ' question' + (r.bad.length > 1 ? "s" : "") + ' I missed →</button></div>');
    wide(false); el("cb").onclick = rdResults; el("rrt").onclick = function(){ S.R.t0 = Date.now(); S.R.hl = true; rdTest(true); };
  }
  function rdAnswers(){
    var R_ = S.R, D = R_.D, all = rdAll(D), f = R_.first, s2 = R_.second, tot = all.length;
    var fin = {}; all.forEach(function(q){ fin[q.n] = s2.good.indexOf(q.n) >= 0 || f.good.indexOf(q.n) >= 0; });
    var g1 = f.good.length, g2 = Object.keys(fin).filter(function(k){ return fin[k]; }).length;
    var cards = all.map(function(q){ var ok1 = f.good.indexOf(q.n) >= 0, ok2 = fin[q.n], ya = (s2.ans && s2.ans[q.n]) || f.ans[q.n] || "", cls = ok2 ? "gd" : "bd";
      return '<div class="acard ' + cls + '"><div class="qn">' + q.n + '</div><div><p>' + (q.q ? '<b>' + esc(q.q) + '</b>' : "") + '</p>'
        + (ok2 ? '' : '<span class="yr">' + esc(ya || "no answer") + '</span>') + '<span class="ky">' + esc(q.a[0].toUpperCase() === q.a[0] ? q.a[0] : q.a[0]) + (q.a.length > 1 ? ' <small style="font-weight:600">(also: ' + esc(q.a.slice(1).join(", ")) + ')</small>' : "") + '</span>'
        + '<p>' + esc(q.ex) + '</p>' + (ok1 ? '' : ok2 ? '<p style="color:#0b7a66;font-weight:700">✔ Fixed in the retake. Nice!</p>' : '') + '</div></div>'; }).join("");
    (D.t || []).forEach(function(q){ var m = D.tb.filter(function(r){ return (r.feat + r.note).indexOf("{" + q.n + "}") >= 0; })[0]; if (m) q.q = m.name + ": " + (m.feat + " / " + m.note).replace(/<br>/g, " / ").replace(/<[^>]+>/g, "").replace(/\{(\d+)\}/g, "(" + "$1" + ") ____"); });
    cards = all.map(function(q){ var ok1 = f.good.indexOf(q.n) >= 0, ok2 = fin[q.n], ya = (s2.ans && s2.ans[q.n]) || f.ans[q.n] || "", cls = ok2 ? "gd" : "bd";
      return '<div class="acard ' + cls + '"><div class="qn">' + q.n + '</div><div><p><b>' + esc(q.q || "") + '</b></p>'
        + (ok2 ? '' : '<span class="yr">' + esc(ya || "no answer") + '</span>') + '<span class="ky">' + esc(q.a[0]) + '</span>' + (q.a.length > 1 ? '<small style="color:#3d4f80;font-weight:600">also accepted: ' + esc(q.a.slice(1).join(", ")) + '</small>' : "")
        + '<p>' + esc(q.ex) + '</p>' + (!ok1 && ok2 ? '<p style="color:#0b7a66;font-weight:700">✔ Fixed in the retake. Nice!</p>' : '') + '</div></div>'; }).join("");
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · answers & explanations</h2>' + rdSteps(4) + '</div>'
      + '<div class="brk" style="padding:4px 0 8px"><div class="fst" style="opacity:1;animation:none"><div><b>' + g1 + '/' + tot + '</b><span>first try</span></div><div><b style="color:#0c9c84">' + g2 + '/' + tot + '</b><span>after the retake</span></div><div><b>' + (g2 - g1 >= 0 ? "+" + (g2 - g1) : g2 - g1) + '</b><span>improvement</span></div></div></div>'
      + cards + '<div style="text-align:center;margin:20px 0 30px"><button class="go" id="rfin">Finish the reading →</button></div>');
    wide(false); el("cb").onclick = hub;
    el("rfin").onclick = function(){ S.rdRes = S.rdRes || {}; S.rdRes[S.unit] = {first: g1, final: g2, total: tot, secs: Math.round((Date.now() - R_.t0) / 1000)}; readingDone(); };
  }

  /* ---------- writing drilling: write, get feedback from the essay checker, rewrite, repeat ---------- */
  function wrLoad(){
    if (S.FB && S.FBu === S.unit) return Promise.resolve(S.FB);
    return getFile("c" + S.unit + "_essay", "essay" + S.unit + ".js").then(function(b){ var FB = (new Function(new TextDecoder().decode(b) + "\nreturn FB;"))(); S.FB = FB; S.FBu = S.unit; return FB; });
  }
  function wrTrack(){ if (S.trk && S.trku === S.unit) return Promise.resolve(S.trk); return Promise.resolve(R("nv_stage", {tok: O.tok, u: S.unit})).then(function(r){ S.trku = S.unit; return (S.trk = r && r.track === "ml" ? "ml" : "ie"); }, function(){ S.trku = S.unit; return (S.trk = "ie"); }); }
  function wrScore(W, tr){ return tr === "ml" ? W.m75.total : W.total; }
  function wrSan(tr, x){ return tr === "ml" ? String(x).replace(/band\s*\d+(\.\d)?\+?/ig, "the top mark").replace(/\bband\b/ig, "mark") : x; }
  function startWriting(){ if (!opn("write")) return hub(); S.cur = "write";
    page(top() + '<div class="hero"><h2>Loading the writing…</h2></div>'); el("cb").onclick = hub;
    Promise.all([wrLoad(), wrTrack()]).then(function(r){
      var FB = r[0], tr = r[1], P = FB.ESSAY[tr];
      S.W = {need: tr === "ml" ? 180 : 250, FB: FB, P: P, tr: tr, ideas: [-1, -1], own: ["", ""], text: "", att: [], t0: Date.now(), mins: tr === "ml" ? 30 : 40};
      wrFirst();
    }).catch(function(){ page(top() + '<div class="card warn"><h2>The writing is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  function wrSteps(){
    var A = S.W.att, h = '<div class="rds"><span class="' + (A.length ? "dn" : "cu") + '">' + (A.length ? "✔ " : "") + '1 · Write</span>';
    A.forEach(function(a, i){ var d = i ? a.sc - A[i - 1].sc : 0; h += '<span class="' + (i === A.length - 1 && S.W.mode === "fb" ? "cu" : "dn") + '">' + (i ? "↻ Rewrite " + i : "✓ Feedback") + ' · ' + a.sc + (i ? (d >= 0 ? " ▲" + d : " ▼" + Math.abs(d)) : "") + '</span>'; });
    if (S.W.mode === "rw" || S.W.mode === "first" && A.length) h += '<span class="cu">↻ Rewrite ' + A.length + '</span>';
    return h + '</div>';
  }
  function wrTimer(){
    if (S.bt) clearInterval(S.bt); var W = S.W, lim = W.mins * 60;
    function tk(){ var e = el("rtm"); if (!e){ clearInterval(S.bt); return; } var s_ = (Date.now() - W.t0) / 1000, left = lim - s_;
      if (left >= 0){ e.textContent = "⏱ " + mmss(left); e.classList.remove("late"); } else { e.textContent = "⏱ +" + mmss(-left); e.classList.add("late"); } }
    tk(); S.bt = setInterval(tk, 500);
  }
  function wrEditor(leftHtml, init){
    var W = S.W, FB = W.FB, NEED = W.need;
    page(top("← Unit") + '<div class="rdh"><h2>✍️ Writing · Unit ' + S.unit + ' · ' + esc(W.P.title) + '</h2>' + wrSteps() + hlTip() + '<div class="rtm" id="rtm">⏱</div></div>'
      + '<div class="rsp"><div class="rpn hlz" id="rdp">' + leftHtml + '</div><div class="rpn q" id="rdq"><div class="wrh">Your answer · ' + (W.tr === "ml" ? "180–200 words" : "at least " + NEED + " words") + '</div>'
      + '<textarea id="wtx" class="wrta" spellcheck="false" autocomplete="off" placeholder="Start writing here…"></textarea>'
      + '<div class="wrm"><b id="wcn">0 words</b><span id="wnd"></span><span id="wpr"></span></div></div></div>'
      + '<div class="rbar rbfix" style="max-width:none"><button class="go" id="wck" disabled>Check my writing</button><small id="whint"></small></div>');
    wide(true); wrTimer(); el("cb").onclick = function(){ if (S.bt) clearInterval(S.bt); wide(false); hub(); };
    var ta = el("wtx"); ta.value = init || ""; ta.onpaste = function(e){ e.preventDefault(); }; ta.ondrop = function(e){ e.preventDefault(); }; ta.oncontextmenu = function(e){ e.preventDefault(); };
    function upd(){
      var tx = ta.value, n = FB.words(tx), u = FB.used(tx); W.text = tx;
      el("wcn").textContent = n + " word" + (n === 1 ? "" : "s"); el("wnd").textContent = n >= NEED ? (W.tr === "ml" && n > 200 ? "a bit long · aim for 180–200" : "enough ✓") : (NEED - n) + " more words needed";
      var pw = tx.split(/\n+/).map(function(x){ return FB.words(x); }).filter(function(x){ return x > 0; }); el("wpr").textContent = pw.length ? "paragraphs: " + pw.join(" + ") : "";
      el("wck").disabled = n < NEED && !O.nofloor; el("whint").textContent = n < NEED ? "The check unlocks at " + NEED + " words." : "Ready. You can keep improving it before you check.";
      [].forEach.call(document.querySelectorAll(".wch span"), function(c){ c.classList.toggle("on", u.indexOf(c.getAttribute("data-c")) > -1); });
    }
    ta.oninput = upd; upd(); ta.focus();
    el("wck").onclick = function(){ wrCheck(); };
  }
  function wrFirst(){
    var W = S.W, P = W.P, FB = W.FB; W.mode = "first";
    function side(k, lab, cls){ var h = '<div class="wrsd">' + lab + '</div>'; [k, k + 1].forEach(function(i){ h += '<button type="button" class="widea ' + cls + '" data-i="' + i + '" data-s="' + (k / 2) + '"><b>Idea ' + (i + 1) + '</b>' + esc(P.ideas[i].t) + '</button>'; });
      return h + '<button type="button" class="widea own ' + cls + '" data-i="' + (4 + k / 2) + '" data-s="' + (k / 2) + '"><b>✏️ Your own idea</b>Write your own idea here</button><input type="text" class="rin wown" id="own' + (k / 2) + '" maxlength="140" placeholder="Type your idea in one short sentence…" style="display:none" spellcheck="false" autocomplete="off">'; }
    var left = '<h1 class="rpt" style="font-size:30px">' + esc(P.title) + '</h1><div class="qgh"><span class="qi">📝</span><div><b>' + esc(P.q) + '</b><small>' + esc(P.how) + '</small></div></div>'
      + '<div class="vh">' + esc(P.sh || "Pick one idea from each side") + '</div>' + side(0, (P.sl || ["👍 One side", "👎 The other side"])[0], "s1") + side(2, (P.sl || ["👍 One side", "👎 The other side"])[1], "s2")
      + '<div class="vh">Useful phrases</div><div class="wpb">' + FB.PHRASES.concat(P.handy ? [{h: "Handy phrases for this topic", l: P.handy}] : []).map(function(g){ return '<div><h4>' + esc(g.h) + '</h4><ul>' + g.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>'; }).join("") + '</div>'
      + '<div class="vh">Unit ' + S.unit + ' words and chunks · they turn green when you use them</div><div class="wch">' + FB.CHUNKS.map(function(c){ return '<span data-c="' + esc(c[0]) + '">' + esc(c[0]) + '</span>'; }).join("") + '</div>';
    wrEditor(left, W.text);
    [].forEach.call(document.querySelectorAll(".widea"), function(bt){ bt.onclick = function(){ var sd = +bt.getAttribute("data-s"); W.ideas[sd] = +bt.getAttribute("data-i");
      [].forEach.call(document.querySelectorAll('.widea[data-s="' + sd + '"]'), function(x){ x.classList.toggle("on", x === bt); }); var oi = el("own" + sd); oi.style.display = bt.classList.contains("own") ? "block" : "none"; if (bt.classList.contains("own")) oi.focus(); }; });
    [].forEach.call(document.querySelectorAll(".wown"), function(oi, k){ oi.oninput = function(){ W.own[k] = oi.value; }; });
  }
  function wrCheck(){
    var W = S.W, r = W.FB.analyseEssay(W.text, W.tr, W.ideas); ["good", "better"].forEach(function(k){ if (r[k]) r[k] = r[k].map(function(x){ return wrSan(W.tr, x); }); });
    W.att.push({W: r, sc: wrScore(r, W.tr), text: W.text}); W.mode = "fb"; wrFeedback();
  }
  function gvP(ttl, emo, G){
    var esc = function(x){ return ESC0(wrSan(S.W.tr, x == null ? "" : x)); };
    var li = function(x){ return '<li>' + esc(x) + '</li>'; };
    var h = '<div class="wgv"><h3>' + emo + ' ' + ttl + '</h3><div class="wgh">✅ You did well</div><ul>' + G.good.map(li).join("") + '</ul><div class="wgh">🔧 Fix these</div>';
    if (!G.fix.length) h += '<p>No mistakes found here. Great!</p>';
    else h += '<ul>' + G.fix.map(function(f){ return '<li><b>' + esc(f.cat) + (f.count ? ' (' + f.count + ')' : '') + '</b><br><span class="wbd">' + esc(f.bad) + '</span> → <span class="wfx">' + esc(f.fix) + '</span>' + (f.extra ? '<br><span class="wbd">' + esc(f.extra.bad) + '</span> → <span class="wfx">' + esc(f.extra.fix) + '</span>' : '') + '<small>' + esc(f.why) + '</small></li>'; }).join("") + '</ul>';
    return h + '<div class="wgh">➡️ Next time</div><p>' + esc(G.next) + '</p></div>';
  }
  function wrDetail(a){
    var W = a.W, NEED = S.W.need, h = "", nt = [];
    if (W.empty) nt.push("You wrote nothing, so the mark is 0."); else if (W.tooShort) nt.push("Only " + W.n + " words. Under 10 words cannot be marked, so the mark is 0."); else if (W.n < NEED) nt.push(W.n + " of " + NEED + " words, so the mark was lowered.");
    if (nt.length) h += '<div class="card warn">' + nt.map(esc).join("<br>") + '</div>';
    if (!W.empty && !W.tooShort){
      if (W.gv && W.gvG && W.gvV) h += '<div class="wgg">' + gvP("Grammar", "📐", W.gvG) + gvP("Vocabulary", "📚", W.gvV) + '</div>';
      if (W.good.length) h += '<div class="wsec"><h3>✅ What went well</h3><ul>' + W.good.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>';
      if (W.better.length) h += '<div class="wsec"><h3>🎯 To improve</h3><ul>' + W.better.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>';
    }
    h += '<div class="wsec"><h3>✍️ Your writing</h3><div class="wlg"><u>red</u> = mistake <span>(green = correct version)</span> · amber dotted = please check · green highlight = unit word</div>' + (a.text.trim() ? '<div class="wess">' + W.html + '</div>' : '<p>Nothing written.</p>') + '</div>';
    return h;
  }
  function wrFeedback(){
    var Wd = S.W, A = Wd.att, a = A[A.length - 1], W = a.W, ml = Wd.tr === "ml", n = W.n, enough = n >= Wd.need;
    var big = ml ? W.m75.total + '<small> / 75</small>' : W.total + '<small> / 9</small>';
    var crit = ml ? [["TA", W.m75.ta, 19], ["CC", W.m75.cc, 19], ["GR", W.m75.gr, 19], ["LR", W.m75.lr, 18]] : [["TA", W.ta, 9], ["CC", W.cc, 9], ["GR", W.gr, 9], ["LR", W.lr, 9]];
    var prev = A.length > 1 ? A[A.length - 2] : null, d = prev ? a.sc - prev.sc : 0;
    var hist = A.map(function(x, i){ var dd = i ? x.sc - A[i - 1].sc : 0; return '<span class="wat ' + (i && dd < 0 ? "dw" : "up") + '"><i>' + (i ? "Rewrite " + i : "First try") + '</i><b>' + x.sc + '</b>' + (i ? '<em>' + (dd >= 0 ? "▲ +" + dd : "▼ " + dd) + '</em>' : "") + '</span>'; }).join('<span class="war">→</span>');
    page(top("← Unit") + '<div class="rdh"><h2>✍️ Writing · feedback</h2>' + wrSteps() + hlTip() + '</div>'
      + '<div class="wsc"><div class="wbg">' + (enough ? big : "–") + '</div>' + (enough ? '<div class="wcr">' + crit.map(function(c){ return '<span>' + c[0] + ' <b>' + c[1] + '</b> / ' + c[2] + '</span>'; }).join("") + '</div><div class="sub" style="margin:2px 0 8px">TA = task · CC = organisation · GR = grammar · LR = vocabulary</div>' : '<div class="sub" style="color:#b2334f;font-weight:700">Write at least ' + Wd.need + ' words to get a mark.</div>')
      + '<div class="wah">' + hist + '</div>' + (prev ? '<p class="sub" style="margin:8px 0 0">' + (d > 0 ? "🔥 You improved by " + d + ". Keep going!" : d === 0 ? "Same mark. Fix the red words below to move up." : "A little lower this time. Check what changed in the red words.") + '</p>' : '<p class="sub" style="margin:8px 0 0">Now fix the mistakes and rewrite. Each rewrite should raise your mark.</p>') + '</div>'
      + '<div class="hlz" id="rdp" style="max-width:1100px;margin:0 auto">' + wrDetail(a) + '</div>'
      + '<div class="rbar rbfix"><button class="go fixgo" id="wrw">↻ Rewrite my essay</button><button class="pill" id="wfin"' + (A.length < 2 ? ' disabled style="opacity:.5;cursor:not-allowed"' : '') + '>Finish writing ✓</button><small>' + (A.length < 2 ? "Finish unlocks after one rewrite." : "You can finish, or rewrite again to push your mark higher.") + '</small></div>');
    wide(false); el("cb").onclick = hub;
    el("wrw").onclick = wrRewrite; el("wfin").onclick = function(){ if (S.W.att.length >= 2) startDrill(); };
  }
  function wrRewrite(){
    var Wd = S.W, a = Wd.att[Wd.att.length - 1]; Wd.mode = "rw";
    wrEditor('<h1 class="rpt" style="font-size:26px">Your feedback</h1><p class="rpi">Use it while you rewrite. Fix every red word, then press Check.</p>' + wrDetail(a), a.text);
  }
  function writingDone(){ if (!floorOk("write", wrFeedback)) return; clearDrafts("write"); S.cur = null; S.wrDone = S.wrDone || {}; S.wrDone[S.unit] = true; if (S.bt) clearInterval(S.bt); wide(false); S.nextKind = "write"; nextStage(); }

  /* ---------- supervision: active time per stage, minimum floors ---------- */
  var FLOOR = {lis: 3000, read: 1200, write: 1200}, SNAME = {lis: "listening", read: "reading", write: "writing"};
  function trk(){
    if (S.trkOn) return; S.trkOn = true; S.tm = {}; S.srv = {}; S.act = Date.now(); S.pend = {};
    ["mousemove", "keydown", "mousedown", "touchstart", "scroll"].forEach(function(ev){ document.addEventListener(ev, function(){ S.act = Date.now(); }, true); });
    function ping(){ if (document.visibilityState !== "visible" || !O.tok) return; try { Promise.resolve(R("nv_class_ping", {tok: O.tok, u: S.unit || 0, cur: S.cur || "hub"})).catch(function(){}); } catch (x) {} }
    setInterval(ping, 45000); setTimeout(ping, 2500);
    /* leaving the window is counted for every classroom stage (one count per trip away) */
    S.lvp = {}; S.away = false;
    function lvSend(){
      Object.keys(S.lvp).forEach(function(k){ var n = S.lvp[k]; if (!n || !O.tok) return; var p = k.split(":"); S.lvp[k] = 0;
        try { Promise.resolve(R("nv_class_log", {tok: O.tok, u: +p[0], stage: p[1], add_secs: 0, detail: {lv: n}})).then(function(r){ if (!r || !r.ok) S.lvp[k] = (S.lvp[k] || 0) + n; }, function(){ S.lvp[k] = (S.lvp[k] || 0) + n; }); } catch (x) { S.lvp[k] += n; } });
    }
    function gone(){ if (S.away) return; S.away = true; if (!S.cur || !S.unit || ["lis", "read", "write"].indexOf(S.cur) < 0) return; var k = S.unit + ":" + S.cur; S.lvp[k] = (S.lvp[k] || 0) + 1; lvSend(); }
    function back(){ S.away = false; lvSend(); }
    document.addEventListener("visibilitychange", function(){ if (document.visibilityState === "hidden") gone(); else back(); });
    window.addEventListener("blur", function(){ setTimeout(function(){ if (!document.hasFocus()) gone(); }, 400); });
    window.addEventListener("focus", function(){ if (document.visibilityState === "visible") back(); });
    setInterval(lvSend, 20000);
    setInterval(function(){
      if (!S.cur || document.visibilityState !== "visible" || Date.now() - S.act > 120000) return;
      var k = S.unit + ":" + S.cur; S.tm[k] = (S.tm[k] || 0) + 1; S.pend[k] = (S.pend[k] || 0) + 1;
      if (S.pend[k] >= 30) flushLog(S.cur);
    }, 1000);
  }
  /* ---- drafts: whatever the student has typed on the current screen, and where they are in the four-stage listening, is kept on this phone AND on the server ---- */
  function stDone(st){ var m = st === "lis" ? S.lisDone : st === "read" ? S.rdDone : S.wrDone; return !!(m && m[S.unit]); }
  function dKey(st){ return "nnt_clsdraft_" + ((O && O.name) || "") + "_" + S.unit + "_" + st; }
  function draftFields(){ var r = root(); return r ? [].slice.call(r.querySelectorAll("textarea, input[type=text], input:not([type])")).filter(function(f){ return !f.disabled && f.type !== "password" && f.type !== "hidden"; }) : []; }
  function loadDraft(st){
    var a = null; try { a = JSON.parse(localStorage.getItem(dKey(st)) || "null"); } catch (e) {}
    var b = S.draft0 && S.draft0[S.unit + ":" + st]; if (b && (!a || (b.at || 0) > (a.at || 0))) a = b; return a;
  }
  function restoreDraft(){
    S.sig = null; if (!S.cur || ["lis", "read", "write"].indexOf(S.cur) < 0) return;
    var f = draftFields(); if (!f.length) return;
    var h2 = root().querySelector("h2"); S.sig = S.unit + "|" + S.cur + "|" + (h2 ? h2.textContent.slice(0, 80) : "") + "|" + f.length;
    if (stDone(S.cur)) return;
    var d = loadDraft(S.cur); if (!d || d.sig !== S.sig) return;
    f.forEach(function(x, i){ if (!x.value && d.vals[i]){ x.value = d.vals[i]; try { x.dispatchEvent(new Event("input", {bubbles: true})); } catch (e) {} } });
  }
  function saveDraft(){
    if (!S.sig || !S.cur) return; var vals = draftFields().map(function(f){ return f.value; }); if (!vals.some(function(v){ return v.trim(); })) return;
    var d = {sig: S.sig, vals: vals, at: Date.now()};
    try { localStorage.setItem(dKey(S.cur), JSON.stringify(d)); } catch (e) {}
    if (!S.dsrv || Date.now() - S.dsrv > 8000){ S.dsrv = Date.now(); flushLog(S.cur, {draft: d}); }
  }
  function draftWatch(){ document.addEventListener("input", function(e){ var t = e.target, c = el("cnv"); if (!S.cur || !c || !c.contains(t)) return; if (t.tagName !== "TEXTAREA" && !(t.tagName === "INPUT" && (!t.type || t.type === "text"))) return; clearTimeout(S.dtm); S.dtm = setTimeout(saveDraft, 1200); }, true); }
  function clearDrafts(st){ try { localStorage.removeItem(dKey(st)); if (st === "lis"){ localStorage.removeItem(progKey()); localStorage.removeItem(prog4Key()); } } catch (e) {} if (S.draft0) delete S.draft0[S.unit + ":" + st]; }
  /* four-stage listening (units 2+): where the student is */
  function prog4Key(){ return "nnt_clsprog4_" + ((O && O.name) || "") + "_" + S.unit; }
  function saveProg4(){
    if (S.dict || !S.L || !S.P || S.cur !== "lis") return;
    var L2 = {}; Object.keys(S.L).forEach(function(k){ if (["dq", "di", "dn", "dfix", "try"].indexOf(k) < 0) L2[k] = S.L[k]; });
    var snap = {v: 4, L: L2, res: S.res || {}, pl: S.pl || {}, fix: (S.fix || []).map(function(e){ return e.id; }), at: Date.now()};
    try { localStorage.setItem(prog4Key(), JSON.stringify(snap)); } catch (e) {}
    flushLog("lis", {prog4: snap});
  }
  function loadProg4(){
    var a = null; try { a = JSON.parse(localStorage.getItem(prog4Key()) || "null"); } catch (e) {}
    var b = S.prog4 && S.prog4[S.unit]; if (b && (!a || (b.at || 0) > (a.at || 0))) a = b; return a && a.v === 4 ? a : null;
  }
  /* the dictation progress is kept on this phone AND on the server, so a log out / log in (even on another device) never loses it */
  function progKey(){ return "nnt_clsprog_" + ((O && O.name) || "") + "_" + S.unit; }
  function saveProg(){
    if (!S.dict || !S.P || S.cur !== "lis") return;
    var ei = 0; S.P.exercises.forEach(function(e, i){ if (S.res[e.id] && ei === i) ei = i + 1; });
    var snap = {ei: ei, res: S.res, pl: S.pl || {}, at: Date.now()};
    try { localStorage.setItem(progKey(), JSON.stringify(snap)); } catch (e) {}
    flushLog("lis", {prog: snap});
  }
  function loadProg(){
    var a = null; try { a = JSON.parse(localStorage.getItem(progKey()) || "null"); } catch (e) {}
    var b = S.prog0 && S.prog0[S.unit]; if (b && (!a || (b.at || 0) > (a.at || 0))) a = b; return a;
  }
  function flushLog(st, detail){
    var k = S.unit + ":" + st, a = S.pend[k] || 0; if (!a && !detail) return; S.pend[k] = 0;
    try { Promise.resolve(R("nv_class_log", {tok: O.tok, u: S.unit, stage: st, add_secs: a, detail: detail || null})).then(function(r){ if (r && r.secs != null) S.srv[k] = r.secs; }, function(){ S.pend[k] = (S.pend[k] || 0) + a; }); } catch (x) {}
  }
  function stageSecs(st){ var k = S.unit + ":" + st; return Math.max(S.tm[k] || 0, S.srv[k] || 0); }
  /* true = may finish. Otherwise shows the "keep going" screen */
  function floorOk(st, back){
    flushLog(st);
    if (O.nofloor) return true;
    var have = stageSecs(st), need = FLOOR[st];
    if (have >= need) return true;
    var left = Math.ceil((need - have) / 60);
    page(top() + '<div class="brk"><div class="bk"><div class="be">⏳</div><h1 class="bh">Not so fast!</h1><p class="sub">Your ' + SNAME[st] + ' needs at least ' + Math.round(need / 60) + ' minutes of real work. You have done ' + Math.floor(have / 60) + '. Use the next ' + left + ' minute' + (left > 1 ? "s" : "") + ' to go back over your mistakes and do it better.</p></div><button class="go" id="fkb" style="margin-top:20px">Go back and keep working →</button></div>');
    el("cb").onclick = hub; el("fkb").onclick = back || hub; return false;
  }

  /* ---------- writing: mistake drill ---------- */
  function drItems(){
    var W = S.W, seen = {}, out = [];
    W.att.forEach(function(a){
      var re = /<u class="err">([^<]+)<\/u>\s*<span class="okfx">\(([^)]*)\)<\/span>/g, m, txt = a.text || "";
      var sents = txt.replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g) || [];
      while ((m = re.exec(a.W.html))){
        var bad = m[1].replace(/&amp;/g, "&").trim(), fix = m[2].replace(/&amp;/g, "&").trim(), key = bad.toLowerCase();
        if (seen[key]) continue;
        var sn = sents.filter(function(x){ return x.toLowerCase().indexOf(key) > -1; })[0]; if (!sn) continue;
        sn = sn.trim(); var i = sn.toLowerCase().indexOf(key);
        var good = sn.slice(0, i) + fix + sn.slice(i + bad.length);
        var info = null; ["gvG", "gvV"].forEach(function(g){ var G = a.W[g]; if (G && G.fix) G.fix.forEach(function(f){ if (!info && (f.bad && f.bad.toLowerCase() === key || f.extra && f.extra.bad && f.extra.bad.toLowerCase() === key)) info = f; }); });
        seen[key] = 1; out.push({sn: sn, bad: bad, fix: fix, good: good, cat: info ? info.cat : "Correct form", why: info ? info.why : "", fails: 0, ok: false});
      }
    });
    out.forEach(function(it){
      var g = it.sn;
      out.filter(function(o){ return o.sn === it.sn; }).forEach(function(o){ var i = g.toLowerCase().indexOf(o.bad.toLowerCase()); if (i > -1) g = g.slice(0, i) + o.fix + g.slice(i + o.bad.length); });
      it.good = g; it.all = out.filter(function(o){ return o.sn === it.sn; }); it.nm = it.all.length;
    });
    out = out.filter(function(it, i){ return out.findIndex(function(o){ return o.sn === it.sn; }) === i; });
    return out.slice(0, 10);
  }
  function drExp(it){ return (it.all || [it]).map(function(o){ return '<div class="drl"><b>' + esc(o.cat) + '</b>' + (o.why ? ' · ' + esc(o.why) : '') + '<br><span class="wbd">' + esc(o.bad) + '</span> → <span class="wfx">' + esc(o.fix) + '</span></div>'; }).join(""); }
  function drNorm(x){ return String(x).toLowerCase().replace(/[“”"']/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim(); }
  function drJudge(it, ans){
    var a = drNorm(ans), g = drNorm(it.good);
    if (a === g) return true;
    return (it.all || [it]).every(function(o){ var b = drNorm(o.bad), f = drNorm(o.fix); return a.indexOf(f) > -1 && (f.indexOf(b) > -1 || a.indexOf(b) < 0); }) && Math.abs(a.split(" ").length - g.split(" ").length) <= 2;
  }
  function startDrill(){
    var W = S.W; W.dr = {q: drItems(), t0: Date.now()};
    if (!W.dr.q.length){ return drFinish(); }
    drAsk();
  }
  function drNext(){ var q = S.W.dr.q.filter(function(x){ return !x.ok; }); if (!q.length) return null; var cur = S.W.dr.last; return q.filter(function(x){ return x !== cur; })[0] || q[0]; }
  function drAsk(){
    var D = S.W.dr, it = drNext(); if (!it) return drFinish(); D.last = it;
    var total = D.q.length, done = D.q.filter(function(x){ return x.ok; }).length;
    page(top("← Unit") + '<div class="rdh"><h2>🔧 Fix your own mistakes</h2><div class="rds"><span class="dn">✓ Write</span><span class="dn">✓ Rewrite</span><span class="cu">3 · Mistake drill ' + done + ' / ' + total + '</span></div></div>'
      + '<div class="drw"><div class="drb"><div class="drp" style="width:' + Math.round(100 * done / total) + '%"></div></div>'
      + '<div class="drc"><div class="dri">Here is a sentence you wrote. It has ' + (it.nm > 1 ? it.nm + " mistakes" : "a mistake") + '.</div><div class="drs">' + esc(it.sn) + '</div>'
      + '<div class="dri">Write the whole sentence again, correctly.</div><textarea id="dra" class="wrta drta" spellcheck="false" autocomplete="off"></textarea>'
      + (it.fails ? '<div class="drx">' + drExp(it) + '</div>' : '')
      + '<div id="drm"></div><button class="go" id="drk">Check</button></div></div>');
    wide(false); el("cb").onclick = hub; var ta = el("dra"); ta.onpaste = function(e){ e.preventDefault(); }; ta.ondrop = ta.onpaste; ta.focus();
    el("drk").onclick = function(){
      var v = ta.value.trim(); if (v.split(/\s+/).length < 3) return;
      if (drJudge(it, v)){ it.ok = true; drOk(it); }
      else { it.fails++; drBad(it, v); }
    };
  }
  function drOk(it){
    page(top("← Unit") + '<div class="brk"><div class="bk good"><div class="be">✅</div><h1 class="bh">Correct!</h1><p class="drg">' + esc(it.good) + '</p><p class="sub">' + (it.fails ? "You fixed it after the explanation. It will stick now." : "Well done.") + '</p></div><button class="go" id="drn" style="margin-top:20px">Next →</button></div>');
    el("cb").onclick = hub; el("drn").onclick = drAsk;
  }
  function drBad(it, v){
    page(top("← Unit") + '<div class="brk"><div class="bk"><div class="be">🤔</div><h1 class="bh">Not quite</h1><p class="sub">You wrote:</p><p class="drg bad">' + esc(v) + '</p><div class="drx" style="text-align:left">' + drExp(it) + '</div><p class="sub">The correct sentence is:</p><p class="drg">' + esc(it.good) + '</p></div><button class="go" id="drn" style="margin-top:20px">Try it again →</button></div>');
    el("cb").onclick = hub; el("drn").onclick = drAsk;
  }
  function drFinish(){
    var D = S.W.dr, n = D ? D.q.length : 0, fails = D ? D.q.reduce(function(a, x){ return a + x.fails; }, 0) : 0;
    flushLog("write", {ok: true, tries: S.W.att.length, sc: S.W.att[S.W.att.length - 1].sc, drill: n, fails: fails});
    page(top() + '<div class="brk"><div class="bk good"><div class="be">🏅</div><h1 class="bh">' + (n ? "All mistakes mastered!" : "No mistakes to drill!") + '</h1><p class="sub">' + (n ? "You corrected " + n + " of your own sentence" + (n > 1 ? "s" : "") + "." : "Your writing had no marked mistakes. Great work.") + '</p></div><button class="go" id="drd" style="margin-top:20px">Finish writing →</button></div>');
    el("cb").onclick = hub; el("drd").onclick = function(){ S.W.drDone = true; writingDone(); };
  }
  /* one break screen for every stage: listening, reading, writing... */
  function listeningDone(){ if (!floorOk("lis")) return; clearDrafts("lis"); flushLog("lis", {done: true, prog: null, prog4: null, draft: null}); S.lisDone = S.lisDone || {}; S.lisDone[S.unit] = true; S.nextKind = "lis"; stageBreak("LISTENING DONE ✔", nextStage); }
  function readingDone(){ if (!floorOk("read")) return; clearDrafts("read"); flushLog("read", {done: true, draft: null}); S.rdDone = S.rdDone || {}; S.rdDone[S.unit] = true; S.nextKind = "read"; stageBreak("READING DONE ✔", nextStage); }
  function stageBreak(label, onNext){ S.cur = null;
    var t0 = Date.now(), C = 2 * Math.PI * 130;
    page('<div class="brk"><small class="wu">' + label + '</small><h1 class="bh">Break time!</h1><p class="sub" id="bsub">Great focus. Recharge for ten minutes. We will keep the clock for you.</p>'
      + '<div class="bring" id="bring"><svg viewBox="0 0 300 300"><defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5df2d6"/><stop offset="1" stop-color="#c58bff"/></linearGradient></defs><circle cx="150" cy="150" r="130" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="16"/><circle id="barc" cx="150" cy="150" r="130" fill="none" stroke="url(#bg1)" stroke-width="16" stroke-linecap="round" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="0" transform="rotate(-90 150 150)"/></svg>'
      + '<div class="bc"><small id="blab">TIME LEFT</small><b id="btm">10:00</b><em id="bsm">☕ breathe</em></div></div>'
      + '<div class="chips"><span>💧 Drink water</span><span>🚶 Stand up</span><span>👀 Rest your eyes</span><span>🌿 Fresh air</span></div>'
      + '<div style="margin-top:22px"><button class="go" id="cbk">I am back →</button> <button class="pill" id="cign" style="margin-left:8px">Skip the break</button></div></div>');
    function tick(){ var el_ = (Date.now() - t0) / 1000, left = BRK - el_, late = el_ > BRK, r = el("bring"); if (!r) return;
      if (!late){ el("btm").textContent = mmss(left); el("barc").setAttribute("stroke-dashoffset", (C * (1 - left / BRK)).toFixed(1)); el("blab").textContent = "TIME LEFT"; el("bsm").textContent = left < 60 ? "⏳ almost time" : "☕ breathe"; }
      else { r.classList.add("late"); el("btm").textContent = "+" + mmss(el_ - BRK); el("barc").setAttribute("stroke-dashoffset", "0"); el("blab").textContent = "YOU ARE LATE"; el("bsm").textContent = "⏰ class is waiting for you"; el("bsub").textContent = "The break is over. Come back now: every second is counted."; } }
    tick(); S.bt = setInterval(tick, 250);
    el("cbk").onclick = function(){ var away = (Date.now() - t0) / 1000; backScreen(away, onNext); };
    el("cign").onclick = function(){ backScreen(-1, onNext); };
  }
  function backScreen(away, onNext){
    var late = away > BRK ? away - BRK : 0, h;
    if (away < 0) h = '<div class="bk skip"><div class="be">🔥</div><h1 class="bh">No break, full power!</h1><p class="sub">You skipped the break. Stay sharp and keep the energy.</p></div>';
    else h = '<div class="bk ' + (late ? "lt" : "good") + '"><div class="be">' + (late ? "⏰" : "🎉") + '</div><h1 class="bh">' + (late ? "Welcome back, a bit late" : "Welcome back, right on time") + '</h1><p class="sub">' + (late ? "The break was 10 minutes. Next time, be back a little sooner." : "You used your break well. Time to continue.") + '</p>'
      + '<div class="fst" style="opacity:1;animation:none"><div><b style="color:#3e63d8">10:00</b><span>break time</span></div><div><b style="color:#0c9c84">' + mmss(away) + '</b><span>you were away</span></div><div><b style="color:' + (late ? "#d6395f" : "#d98b00") + '">' + (late ? "+" + mmss(late) : "0:00") + '</b><span>' + (late ? "late" : "late. Perfect!") + '</span></div></div></div>';
    page('<div class="brk">' + h + '<button class="go" id="cbk2" style="margin-top:20px">Continue →</button></div>');
    el("cbk2").onclick = onNext;
  }
  /* shown after listening, reading and writing are all complete */
  function goldKey(){ return keySvg().replace(/#5df2d6/g, "#fff3b0").replace(/#7aa2ff/g, "#ffc21a").replace(/#c58bff/g, "#d97a00"); }
  function unitDone(){
    S.cur = null;
    var go = function(){ unitShow(); };
    try { Promise.resolve(R("nv_class_done", {tok: O.tok, u: S.unit})).then(function(r){
      if (r && r.err === "notready"){
        var nm = (r.need || []).map(function(k){ return SNAME[k] || k; }).join(", ");
        page(top() + '<div class="brk"><div class="bk"><div class="be">⏳</div><h1 class="bh">Almost there</h1><p class="sub">Your class key is waiting for more work on: <b>' + esc(nm) + '</b>. Go back and spend more time on it, then finish again.</p></div><button class="go" id="nrb" style="margin-top:20px">Back to my unit →</button></div>');
        el("cb").onclick = hub; el("nrb").onclick = hub;
      } else go();
    }, go); } catch (x) { go(); }
  }
  function unitShow(){
    var g = 0, n = 0, ex = 0, secs = Math.max(1, Math.round((Date.now() - (S.t0 || Date.now())) / 1000));
    if (S.P) S.P.exercises.forEach(function(e){ var r = S.res && S.res[e.id]; if (r){ g += r.good; n += r.n; ex++; } });
    var pct = n ? Math.round(100 * g / n) : 100, fx = S.fix ? S.fix.length : 0, mins = Math.max(1, Math.round(secs / 60)), u = S.unit, nx = u + 1, sp = "";
    for (var q = 0; q < 46; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 3.5).toFixed(2) + 's;animation-duration:' + (2.6 + Math.random() * 2.4).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 7).toFixed(1) + 'px;height:' + (8 + Math.random() * 12).toFixed(1) + 'px"></i>';
    page('<div class="fin"><div class="spk">' + sp + '</div><div class="flash"></div><div class="kdrop">' + keySvg() + '</div>'
      + '<h1 class="fh">Unit ' + u + ' conquered</h1><p class="fn">' + esc(O.name || "") + ', your class key is yours.</p>'
      + '<div class="fst"><div><b data-n="' + pct + '" data-s="%">0</b><span>accuracy</span></div><div><b data-n="' + ex + '">0</b><span>exercises</span></div><div><b data-n="' + mins + '" data-s=" min">0</b><span>on task</span></div><div><b data-n="' + fx + '">0</b><span>fixed in the fix round</span></div></div>'
      + '<button class="go" id="cfin">Show me my next stage →</button></div>');
    setTimeout(function(){ [].forEach.call(document.querySelectorAll(".fst b"), function(b){ var t = +b.getAttribute("data-n"), c = 0, sf = b.getAttribute("data-s") || "", iv = setInterval(function(){ c += Math.max(1, Math.ceil(t / 24)); if (c >= t){ c = t; clearInterval(iv); } b.textContent = c + sf; }, 40); }); }, 1700);
    el("cfin").onclick = function(){ S.pop = nx; path(); };
  }

  window.CNV = {
    open: function(o){ O = o; R = o.rpc; css(); hlWire(); trk(); home(); },
    _unitDone: function(){ unitDone(); }
  };
})();
