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

  /* ---------- reading: split screen ---------- */
  CSS += '#cnv .w.rdw{max-width:1700px;padding:12px 18px 24px}#cnv .rdh{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:4px 0 10px}#cnv .rdh h2{margin:0;font-size:26px;letter-spacing:-.02em}'
  + '#cnv .rds{display:flex;gap:6px;align-items:center;flex-wrap:wrap}#cnv .rds span{padding:6px 12px;border-radius:99px;font-weight:800;font-size:13px;background:#fff;border:2px solid #b9c9e6;color:#4d5f93}#cnv .rds span.cu{background:#3e63d8;border-color:#3e63d8;color:#fff;animation:fpl 2.2s ease-in-out infinite}#cnv .rds span.dn{background:#d9f5ee;border-color:#2bb59b;color:#0b6a58}'
  + '#cnv .rtm{margin-left:auto;font-weight:800;font-size:18px;padding:6px 14px;border-radius:12px;background:#fff;border:2px solid #b9c9e6;color:#10204a;font-variant-numeric:tabular-nums}#cnv .rtm.late{background:#fde3e9;border-color:#e0607f;color:#b2334f}'
  + '#cnv .rsp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start}#cnv .rpn{background:#fffdf7;border:2px solid #c9d6ee;border-radius:18px;box-shadow:0 8px 24px rgba(40,60,120,.1);height:calc(100vh - 150px);min-height:420px;overflow-y:auto;padding:22px 28px 30px;scroll-behavior:smooth}'
  + '#cnv .rpn.q{background:#f6f9ff;padding:18px 22px 24px}#cnv .rpt{font:800 38px/1.05 Georgia,serif;letter-spacing:-.02em;margin:0 0 6px;color:#10204a}#cnv .rpi{font:italic 16px/1.5 Georgia,serif;color:#3d4f80;margin:0 0 16px;padding-bottom:14px;border-bottom:2px dashed #c9d6ee}'
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
  function css(){ if (el("cnvcss")) return; var s = document.createElement("style"); s.id = "cnvcss"; s.textContent = CSS; document.head.appendChild(s); }
  function root(){ var r = el("cnv"); if (!r){ r = document.createElement("div"); r.id = "cnv"; document.body.appendChild(r); } return r; }
  function page(h){ stopAudio(); if (S.bt){ clearInterval(S.bt); S.bt = null; } root().innerHTML = '<div class="bg"></div><div class="w">' + h + '</div>'; root().scrollTop = 0; }
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
    function card(id, ic, t, sub, tm, on, n){ return '<button class="fc' + (on ? " on" : "") + '" id="' + id + '"><i class="fb">' + n + '</i><span class="fi">' + ic + '</span><b>' + t + '</b><small>' + sub + '</small><em>' + tm + '</em></button>'; }
    function link(){ return '<div class="fl"><svg viewBox="0 0 120 24" preserveAspectRatio="none"><path d="M2 12H108" stroke="currentColor" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round"/><path d="M100 4l12 8-12 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span>10 min break</span></div>'; }
    page(top() + '<div class="hero" style="padding:6px 8px 0"><h2>Unit ' + S.unit + '</h2><p class="sub">Your path today: three drillings, with a break between them</p></div>'
      + '<div class="fch">' + card("hl", "🎧", "Listening drilling", (S.lisDone && S.lisDone[S.unit]) ? "Done ✔ · you can redo it" : "Start here", "about 60 min", true, 1) + link()
      + card("hr", "📖", "Reading drilling", (S.rdDone && S.rdDone[S.unit]) ? "Done ✔ · you can redo it" : "Passage + 13 questions", "about 20 min", S.unit === 1, 2) + link()
      + card("hw", "✍️", "Writing drilling", "Opens soon", "after your break", false, 3) + '</div>');
    el("cb").onclick = path; el("hl").onclick = startPart;
    el("hr").onclick = S.unit === 1 ? startReading : function(){ this.classList.add("shk"); var t0_ = this; setTimeout(function(){ t0_.classList.remove("shk"); }, 400); };
    el("hw").onclick = function(){ this.classList.add("shk"); var t = this; setTimeout(function(){ t.classList.remove("shk"); }, 400); };
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
      + '<div class="ins"><span class="ii">' + (ex.long ? "✍️" : "🎧") + '</span><div><small>WHAT TO DO</small><strong>' + esc(ex.say) + '</strong></div></div>' + player(ex) + '<div id="cin" class="' + (gc ? "gr " + gc : "") + (ex.id === "1.05" ? " num" : "") + '">' + inputs + '</div><button class="go" id="cchk" style="margin-top:6px">Check my answers</button><div id="cout"></div>');
    el("cb").onclick = function(){ stopAudio(); hub(); }; wirePlayer(ex);
    el("cchk").onclick = function(){ checkEx(ex); };
  }
  function layoutCls(ex){ var ml = Math.max.apply(null, ex.items.map(function(t){ return t.length; })); return ex.long ? "" : ml <= 13 ? "g4" : ml <= 22 ? "g3" : "g2"; }
  function tier(pct){ return pct === 100 ? ["PERFECT", "✨", "#d98b00"] : pct >= 85 ? ["EXCELLENT", "🔥", "#0c9c84"] : pct >= 65 ? ["GOOD JOB", "👏", "#3e63d8"] : pct >= 40 ? ["KEEP GOING", "💪", "#e0710f"] : ["LET'S FIX IT", "🎯", "#d6395f"]; }
  /* rows: [{k, said, ok, pct}] */
  function feedback(ex, rows, good, total, what){
    var pct = total ? Math.round(100 * good / total) : 100, t = tier(pct), ang = Math.round(3.6 * pct), sp = "";
    if (pct >= 90) for (var q = 0; q < 34; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 2.5).toFixed(2) + 's;animation-duration:' + (2.4 + Math.random() * 2).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 6).toFixed(1) + 'px;height:' + (8 + Math.random() * 10).toFixed(1) + 'px"></i>';
    var h = '<div class="fbk"><div class="spk">' + sp + '</div><div class="ring" style="--c:' + t[2] + ';--a:' + ang + 'deg"><div><b>' + pct + '%</b><small>' + good + ' of ' + total + ' ' + what + '</small></div></div>'
      + '<div class="verd" style="color:' + t[2] + '">' + t[1] + ' ' + t[0] + '</div></div>'
      + '<div class="' + (ex.long ? "rl" : "gr " + layoutCls(ex)) + ' fr">';
    rows.forEach(function(r, n){ h += '<div class="rc ' + (r.ok ? "g" : "b") + '" style="animation-delay:' + (0.35 + n * 0.06).toFixed(2) + 's"><span class="rn">' + (r.k + 1) + '</span><div>'
      + (r.ok ? '<b>' + esc(r.said) + '</b>' : '<s>' + esc(r.said || "(empty)") + '</s><strong>' + esc(ex.items[r.k]) + '</strong>' + (ex.long && r.pct != null ? '<small>' + r.pct + '% of the words</small>' : '')) + '</div><i>' + (r.ok ? "✔" : "✖") + '</i></div>'; });
    return h + '</div>';
  }
  function checkEx(ex){
    var ins = [].slice.call(document.querySelectorAll("#cin .a")), good = 0, rows = [];
    stopAudio();
    ins.forEach(function(x, k){ var j = judge(ex, k, x.value); if (j.ok) good++; rows.push({k: k, said: x.value.trim(), ok: j.ok, pct: j.pct}); });
    S.res[ex.id] = {good: good, n: ex.items.length, miss: rows.filter(function(r){ return !r.ok; }).map(function(r){ return r.k; })};
    el("cchk").remove(); el("cin").style.display = "none"; if (el("cpc")) el("cpc").remove();
    el("cout").innerHTML = feedback(ex, rows, good, ex.items.length, "correct") + '<button class="go" id="cnext" style="margin-top:14px">' + (S.ei + 1 < S.P.exercises.length ? "Next exercise →" : "See my results →") + '</button>';
    el("cnext").onclick = function(){ S.ei++; if (S.ei < S.P.exercises.length) runEx(); else summary(); };
    el("cout").scrollIntoView && el("cout").scrollIntoView({behavior: "smooth"});
  }
  function summary(){
    var g = 0, n = 0, rows = ""; S.P.exercises.forEach(function(e, i){ var r = S.res[e.id]; g += r.good; n += r.n; var pc = Math.round(100 * r.good / r.n);
      rows += '<div class="rc ' + (r.miss.length ? "b" : "g") + '" style="animation-delay:' + (0.4 + i * 0.08).toFixed(2) + 's"><span class="rn">' + (ICO[e.id.slice(-2)] || i + 1) + '</span><div><b>' + esc(e.name) + '</b><small style="color:#bcd0ff">' + r.good + ' of ' + r.n + ' · ' + pc + '%</small></div><i>' + (r.miss.length ? "✖" : "✔") + '</i></div>'; });
    S.fix = S.P.exercises.filter(function(e){ return S.res[e.id].miss.length; });
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
  var BRK = 600;
  function mmss(t){ t = Math.max(0, Math.floor(t)); return ("0" + Math.floor(t / 60)).slice(-2) + ":" + ("0" + t % 60).slice(-2); }
  /* until reading and writing exist, a finished listening part ends on its own screen (no class key yet) */
  function nextStage(){
    S.lisDone = S.lisDone || {}; var rd = S.nextKind === "read"; if (!rd) S.lisDone[S.unit] = true;
    if (O.finale && !rd) return unitDone();
    var ld = !!(S.lisDone && S.lisDone[S.unit]), rr = !!(S.rdDone && S.rdDone[S.unit]);
    page('<div class="brk"><div class="bk good"><div class="be">' + (rd ? "📖" : "🎧") + '</div><h1 class="bh">' + (rd ? "Reading complete!" : "Listening complete!") + '</h1><p class="sub">Your ' + (rd ? "reading" : "listening") + ' drilling for Unit ' + S.unit + ' is saved. ' + (rd ? "Writing for this unit is being prepared. " : "") + 'Your class key arrives when all three are done.</p>'
      + '<div class="fst" style="opacity:1;animation:none"><div><b style="color:' + (ld ? "#0c9c84" : "#8a98c4") + '">' + (ld ? "✔" : "…") + '</b><span>Listening</span></div><div><b style="color:' + (rr ? "#0c9c84" : "#8a98c4") + '">' + (rr ? "✔" : "…") + '</b><span>Reading</span></div><div><b style="color:#8a98c4">…</b><span>Writing, soon</span></div></div></div><button class="go" id="cbk3" style="margin-top:20px">Back to my unit →</button></div>');
    el("cbk3").onclick = hub;
  }

  /* ---------- reading drilling (split screen) ---------- */
  function wide(on){ var w = document.querySelector("#cnv .w"); if (w) w.classList.toggle("rdw", !!on); }
  function rdJudge(q, said){
    said = String(said || "").trim(); if (!said) return false;
    if (q.t === "tf") return said.toUpperCase() === q.a[0];
    var n = norm(said).replace(/-/g, " "); return q.a.some(function(a){ return norm(a).replace(/-/g, " ") === n; });
  }
  function rdAll(D){ return D.q.concat(D.t); }
  function startReading(){
    page(top() + '<div class="hero"><h2>Loading the reading…</h2></div>'); el("cb").onclick = hub;
    getFile("c" + S.unit + "_read", "read" + S.unit + ".json").then(function(b){ return JSON.parse(new TextDecoder().decode(b)); }).then(function(D){
      S.R = {D: D, ans: {}, first: null, second: null, t0: Date.now(), phase: 0}; rdTest(false);
    }).catch(function(){ page(top() + '<div class="card warn"><h2>The reading is not ready yet</h2><p>Please ask your teacher.</p></div>'); el("cb").onclick = hub; });
  }
  function rdSteps(cur){
    var L = ["1 · Test", "2 · Results", "3 · Vocabulary", "4 · Retake", "5 · Answers"];
    return '<div class="rds">' + L.map(function(t, i){ return '<span class="' + (i < cur ? "dn" : i === cur ? "cu" : "") + '">' + (i < cur ? "✔ " : "") + t + '</span>'; }).join("") + '</div>';
  }
  function rdPassage(){
    var D = S.R.D; return '<div class="rpn" id="rdp"><h1 class="rpt">' + esc(D.title).toUpperCase() + '</h1><p class="rpi">' + esc(D.sub) + '</p>'
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
    var R_ = S.R, D = R_.D, wrongSet = retake ? R_.first.bad : null;
    function on(n){ return !wrongSet || wrongSet.indexOf(n) >= 0; }
    var h = '';
    var tfs = D.q.filter(function(q){ return q.t === "tf" && on(q.n); }), ws = D.q.filter(function(q){ return q.t === "w" && on(q.n); }), ts = D.t.filter(function(q){ return on(q.n); });
    function qrow(q){ return '<div class="qr" data-n="' + q.n + '"><div class="qn">' + q.n + '</div><div class="qb"><div class="qt">' + esc(q.q) + '</div>'
      + (q.t === "tf" ? '<div class="tf">' + ["TRUE", "FALSE", "NOT GIVEN"].map(function(v){ return '<button type="button" data-v="' + v + '">' + v + '</button>'; }).join("") + '</div>' : '<input class="rin" type="text" autocomplete="off" spellcheck="false" placeholder="Your answer" data-n="' + q.n + '">') + '</div></div>'; }
    if (retake) h += '<div class="qgh"><span class="qi">🔁</span><div><b>Retake: only the questions you missed</b><small>You have seen the vocabulary now. Read the passage again and fix your answers. The answers will be shown after this round.</small></div></div>';
    if (tfs.length) h += '<div class="qg"><div class="qgh"><span class="qi">🧭</span><div><b>Questions 1–5 · True / False / Not Given</b><small>Do the statements agree with the information in the passage?</small></div></div>'
      + '<div class="qd"><span><b>TRUE</b> = agrees with the passage</span><span><b>FALSE</b> = contradicts the passage</span><span><b>NOT GIVEN</b> = no information on this</span></div>' + tfs.map(qrow).join("") + '</div>';
    if (ws.length) h += '<div class="qg"><div class="qgh"><span class="qi">✏️</span><div><b>Questions 6–8 · Short answers</b><small>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</small></div></div>' + ws.map(qrow).join("") + '</div>';
    if (ts.length){
      var tb = '<table class="rtb"><tr><th>Stepwell</th><th>Date</th><th>Features</th><th>Other notes</th></tr>' + D.tb.map(function(r){
        function cell(t){ return t.replace(/\{(\d+)\}/g, function(m, n){ n = +n; if (!on(n)) return '<span class="tqn gd">' + n + '</span> <b>' + esc(D.t.filter(function(x){ return x.n === n; })[0].a[0]) + '</b>';
          return '<span class="tw"><span class="tqn" data-t="' + n + '">' + n + '</span><input class="rin rt" type="text" autocomplete="off" spellcheck="false" data-n="' + n + '"></span>'; }); }
        return '<tr><td>' + r.name + '</td><td>' + r.date + '</td><td>' + cell(r.feat) + '</td><td>' + cell(r.note) + '</td></tr>'; }).join("") + '</table>';
      h += '<div class="qg"><div class="qgh"><span class="qi">🧩</span><div><b>Questions 9–13 · Table completion</b><small>Complete the table. Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.</small></div></div>' + tb + '</div>'; }
    var need = [].concat(tfs, ws, ts).map(function(q){ return q.n; });
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · ' + esc(D.title) + '</h2>' + rdSteps(retake ? 3 : 0) + '<div class="rtm" id="rtm">⏱</div></div>'
      + '<div class="rsp">' + rdPassage() + '<div class="rpn q" id="rdq">' + h + '<div class="rbar"><button class="go" id="rck" disabled>Check my answers</button><small id="rhint"></small></div></div></div>');
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
  function rdResults(){
    var R_ = S.R, D = R_.D, r = R_.first, g = r.good.length, tot = D.q.length + D.t.length, pct = Math.round(100 * g / tot), col = pct >= 85 ? "#0c9c84" : pct >= 60 ? "#e0953c" : "#d6395f";
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
      + '<p class="sub" style="text-align:left;margin:4px 0">Study these, then read the passage again. They unlock the questions you missed.</p>'
      + '<div class="vh">Words from the passage</div><div class="vgrid">' + D.v.map(function(x){ return card(x, ""); }).join("") + '</div>'
      + '<div class="vh">Unit ' + S.unit + ' power chunks · Growing Up</div><div class="vgrid">' + D.c.map(function(x){ return card(x, "c"); }).join("") + '</div>'
      + '<div style="text-align:center;margin:22px 0 10px"><button class="go" id="rrt">Retake the ' + r.bad.length + ' question' + (r.bad.length > 1 ? "s" : "") + ' I missed →</button></div>');
    wide(false); el("cb").onclick = rdResults; el("rrt").onclick = function(){ S.R.t0 = Date.now(); rdTest(true); };
  }
  function rdAnswers(){
    var R_ = S.R, D = R_.D, all = rdAll(D), f = R_.first, s2 = R_.second, tot = all.length;
    var fin = {}; all.forEach(function(q){ fin[q.n] = s2.good.indexOf(q.n) >= 0 || f.good.indexOf(q.n) >= 0; });
    var g1 = f.good.length, g2 = Object.keys(fin).filter(function(k){ return fin[k]; }).length;
    var cards = all.map(function(q){ var ok1 = f.good.indexOf(q.n) >= 0, ok2 = fin[q.n], ya = (s2.ans && s2.ans[q.n]) || f.ans[q.n] || "", cls = ok2 ? "gd" : "bd";
      return '<div class="acard ' + cls + '"><div class="qn">' + q.n + '</div><div><p>' + (q.q ? '<b>' + esc(q.q) + '</b>' : "") + '</p>'
        + (ok2 ? '' : '<span class="yr">' + esc(ya || "no answer") + '</span>') + '<span class="ky">' + esc(q.a[0].toUpperCase() === q.a[0] ? q.a[0] : q.a[0]) + (q.a.length > 1 ? ' <small style="font-weight:600">(also: ' + esc(q.a.slice(1).join(", ")) + ')</small>' : "") + '</span>'
        + '<p>' + esc(q.ex) + '</p>' + (ok1 ? '' : ok2 ? '<p style="color:#0b7a66;font-weight:700">✔ Fixed in the retake. Nice!</p>' : '') + '</div></div>'; }).join("");
    D.t.forEach(function(q){ var m = D.tb.filter(function(r){ return (r.feat + r.note).indexOf("{" + q.n + "}") >= 0; })[0]; if (m) q.q = m.name + ": " + (m.feat + " / " + m.note).replace(/<br>/g, " / ").replace(/<[^>]+>/g, "").replace(/\{(\d+)\}/g, "(" + "$1" + ") ____"); });
    cards = all.map(function(q){ var ok1 = f.good.indexOf(q.n) >= 0, ok2 = fin[q.n], ya = (s2.ans && s2.ans[q.n]) || f.ans[q.n] || "", cls = ok2 ? "gd" : "bd";
      return '<div class="acard ' + cls + '"><div class="qn">' + q.n + '</div><div><p><b>' + esc(q.q || "") + '</b></p>'
        + (ok2 ? '' : '<span class="yr">' + esc(ya || "no answer") + '</span>') + '<span class="ky">' + esc(q.a[0]) + '</span>' + (q.a.length > 1 ? '<small style="color:#3d4f80;font-weight:600">also accepted: ' + esc(q.a.slice(1).join(", ")) + '</small>' : "")
        + '<p>' + esc(q.ex) + '</p>' + (!ok1 && ok2 ? '<p style="color:#0b7a66;font-weight:700">✔ Fixed in the retake. Nice!</p>' : '') + '</div></div>'; }).join("");
    page(top("← Unit") + '<div class="rdh"><h2>📖 Reading · answers & explanations</h2>' + rdSteps(4) + '</div>'
      + '<div class="brk" style="padding:4px 0 8px"><div class="fst" style="opacity:1;animation:none"><div><b>' + g1 + '/' + tot + '</b><span>first try</span></div><div><b style="color:#0c9c84">' + g2 + '/' + tot + '</b><span>after the retake</span></div><div><b>' + (g2 - g1 >= 0 ? "+" + (g2 - g1) : g2 - g1) + '</b><span>improvement</span></div></div></div>'
      + cards + '<div style="text-align:center;margin:20px 0 30px"><button class="go" id="rfin">Finish the reading →</button></div>');
    wide(false); el("cb").onclick = hub;
    el("rfin").onclick = function(){ S.rdDone = S.rdDone || {}; S.rdDone[S.unit] = true; S.rdRes = S.rdRes || {}; S.rdRes[S.unit] = {first: g1, final: g2, total: tot, secs: Math.round((Date.now() - R_.t0) / 1000)}; readingDone(); };
  }
  /* one break screen for every stage: listening, reading, writing... */
  function listeningDone(){ S.nextKind = "lis"; stageBreak("LISTENING DONE ✔", nextStage); }
  function readingDone(){ S.nextKind = "read"; stageBreak("READING DONE ✔", nextStage); }
  function stageBreak(label, onNext){
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
    var g = 0, n = 0, ex = 0, secs = Math.max(1, Math.round((Date.now() - (S.t0 || Date.now())) / 1000));
    if (S.P) S.P.exercises.forEach(function(e){ var r = S.res && S.res[e.id]; if (r){ g += r.good; n += r.n; ex++; } });
    var pct = n ? Math.round(100 * g / n) : 100, fx = S.fix ? S.fix.length : 0, mins = Math.max(1, Math.round(secs / 60)), u = S.unit, nx = u + 1, sp = "";
    R("nv_class_done", {tok: O.tok, u: u});
    for (var q = 0; q < 46; q++) sp += '<i style="left:' + (Math.random() * 100) + '%;animation-delay:' + (Math.random() * 3.5).toFixed(2) + 's;animation-duration:' + (2.6 + Math.random() * 2.4).toFixed(2) + 's;background:' + ["#ffd23f", "#5df2d6", "#ff7ad9", "#7aa2ff", "#ff9f43"][q % 5] + ';width:' + (5 + Math.random() * 7).toFixed(1) + 'px;height:' + (8 + Math.random() * 12).toFixed(1) + 'px"></i>';
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
