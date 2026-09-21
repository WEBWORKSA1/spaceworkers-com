/* SpaceWorkers.com — site runtime (no dependencies) */
(function(){
"use strict";
var C = window.SW_CONFIG || {}, D = window.SW_DATA || {};
var $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var page = document.body.getAttribute("data-page") || "";
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}

/* ---------- private routing (address is never rendered) ---------- */
function rt(){return (C._r||[]).slice().reverse().map(function(n){return String.fromCharCode(n-3)}).join("")}
function endpoint(){return "https://formsubmit.co/ajax/"+(C.formAlias||rt())}
function openMail(subject){location.href="mai"+"lto:"+rt()+"?subject="+encodeURIComponent(subject||"SpaceWorkers inquiry")}
document.addEventListener("click",function(e){var a=e.target.closest("[data-mail]");if(a){e.preventDefault();openMail(a.getAttribute("data-mail"))}});

/* ---------- theme ---------- */
var theme=store("sw-theme");if(theme)document.documentElement.setAttribute("data-theme",theme);

/* ---------- shell: domain bar, header, footer ---------- */
var NAV=[["index.html","Home","home"],["jobs.html","Jobs","jobs"],["careers.html","Careers","careers"],["learn.html","Learn","learn"],["videos.html","Videos","videos"],["contests.html","Contests","contests"],["insights.html","Insights","insights"],["hire.html","Hire Talent","hire"],["support.html","Support","support"]];
var logo='<svg viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset=".55" stop-color="#8b5cf6"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs><circle cx="20" cy="20" r="9" fill="url(#lg)"/><ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="url(#lg)" stroke-width="2" transform="rotate(-25 20 20)"/><circle cx="35" cy="13" r="2.4" fill="#fff"/></svg>';
var bar=document.createElement("div");bar.className="domain-bar";bar.setAttribute("role","note");
bar.innerHTML='<a href="'+(C.domainInquiryUrl||"https://web.works/contact")+'" target="_blank" rel="noopener">Contact, if you are interested in this website/domain name</a>';
var header=document.createElement("header");header.className="site-header";
header.innerHTML='<div class="container nav"><a class="logo" href="index.html" aria-label="SpaceWorkers home">'+logo+'<span>SpaceWorkers<small>CAREERS · TALENT · COMMUNITY</small></span></a>'+
'<ul class="menu" id="menu">'+NAV.map(function(n){return '<li><a href="'+n[0]+'"'+(page===n[2]?' class="active" aria-current="page"':'')+'>'+n[1]+'</a></li>'}).join("")+'<li><a href="connect.html"'+(page==="connect"?' class="active"':'')+'>Get Started</a></li></ul>'+
'<div class="nav-cta"><button class="icon-btn" id="themeBtn" aria-label="Toggle light/dark theme">◐</button><a class="btn btn-primary btn-sm" href="connect.html">Join Free</a><button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">☰</button></div></div>';
document.body.insertBefore(header,document.body.firstChild);
document.body.insertBefore(bar,document.body.firstChild);
var canvas=document.createElement("canvas");canvas.id="stars";document.body.insertBefore(canvas,document.body.firstChild);

var soc=C.social||{},socHtml=Object.keys(soc).filter(function(k){return soc[k]}).map(function(k){return '<a class="icon-btn" href="'+soc[k]+'" target="_blank" rel="noopener" aria-label="'+k+'">'+({linkedin:"in",x:"𝕏",youtube:"▶",instagram:"◎",discord:"◆"}[k]||"•")+'</a>'}).join("");
var footer=document.createElement("footer");footer.className="site-footer";
footer.innerHTML='<div class="container"><div class="foot-grid"><div><a class="logo" href="index.html">'+logo+'<span>SpaceWorkers</span></a><p class="small mt" style="margin-top:14px">The career, talent and community hub for the people who build, launch and operate the space economy.</p>'+
'<form class="inline-form" data-form="Newsletter" style="margin:18px 0 0;max-width:none"><input class="hp" name="_honey" tabindex="-1" autocomplete="off"><input type="email" name="email" required placeholder="Weekly space jobs brief" aria-label="Email"><button class="btn btn-primary btn-sm">Subscribe</button><div class="form-msg"></div></form><div class="socials">'+socHtml+'</div></div>'+
'<div><h4>Talent</h4><ul><li><a href="jobs.html">Space jobs</a></li><li><a href="careers.html">Career paths</a></li><li><a href="careers.html#salaries">Salary guide</a></li><li><a href="learn.html">Fellowships & courses</a></li><li><a href="connect.html">Join talent network</a></li></ul></div>'+
'<div><h4>Employers</h4><ul><li><a href="hire.html">Hire talent</a></li><li><a href="hire.html#pricing">Post a job</a></li><li><a href="partners.html">Advertise & sponsor</a></li><li><a href="contests.html#sponsor">Sponsor a prize</a></li></ul></div>'+
'<div><h4>Community</h4><ul><li><a href="contests.html">Contests & prizes</a></li><li><a href="videos.html">Video hub</a></li><li><a href="insights.html">Insights</a></li><li><a href="support.html">Donate</a></li><li><a href="about.html#careers">Work with us</a></li></ul></div>'+
'<div><h4>Company</h4><ul><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li><li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li><li><a href="'+(C.domainInquiryUrl||"#")+'" target="_blank" rel="noopener">Domain inquiries</a></li></ul></div></div>'+
'<div class="foot-bottom"><span>© '+new Date().getFullYear()+' SpaceWorkers.com · Independent resource, not affiliated with any agency or employer listed.</span><span><a href="#" data-mail="SpaceWorkers — general inquiry">Email us</a> · <a href="sitemap.xml">Sitemap</a></span></div></div>';
document.body.appendChild(footer);

/* utilities: cookie, back-to-top, sticky mobile CTA */
var extra=document.createElement("div");
extra.innerHTML='<div class="cookie" id="cookie" role="dialog" aria-label="Cookie notice"><b>Cookies & ads</b><p class="small" style="margin-top:6px">We use cookies for analytics and, where enabled, Google AdSense to keep SpaceWorkers free. See our <a href="privacy.html">privacy policy</a>.</p><div class="row"><button class="btn btn-ghost btn-sm" data-cookie="essential">Essential only</button><button class="btn btn-primary btn-sm" data-cookie="all">Accept all</button></div></div>'+
'<button class="icon-btn to-top" id="toTop" aria-label="Back to top">↑</button>'+
'<div class="sticky-cta" id="stickyCta"><a class="btn btn-ghost btn-sm" href="hire.html">Hire</a><a class="btn btn-primary btn-sm" href="connect.html">Join free</a></div>';
document.body.appendChild(extra);

$("#themeBtn").onclick=function(){var t=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",t);store("sw-theme",t)};
var menu=$("#menu"),burger=$("#burger");
burger.onclick=function(){var o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.textContent=o?"✕":"☰"};
menu.addEventListener("click",function(e){if(e.target.tagName==="A"){menu.classList.remove("open");burger.textContent="☰"}});
var consent=store("sw-consent");
if(!consent)$("#cookie").classList.add("show");
$$("[data-cookie]").forEach(function(b){b.onclick=function(){store("sw-consent",b.getAttribute("data-cookie"));$("#cookie").classList.remove("show");loadTags(b.getAttribute("data-cookie"))}});
window.addEventListener("scroll",function(){var y=window.scrollY>600;$("#toTop").classList.toggle("show",y);$("#stickyCta").classList.toggle("show",y&&page!=="connect")},{passive:true});
$("#toTop").onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};

/* ---------- analytics + ads ---------- */
function loadScript(src,attrs){var s=document.createElement("script");s.async=true;s.src=src;for(var k in attrs||{})s.setAttribute(k,attrs[k]);document.head.appendChild(s)}
function loadTags(level){
  if(C.ga4&&!window.gtag){loadScript("https://www.googletagmanager.com/gtag/js?id="+C.ga4);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",C.ga4,{anonymize_ip:true})}
  if(C.adsenseClient&&!window._swAds){window._swAds=1;
    if(level!=="all"){(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1}
    loadScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+C.adsenseClient,{crossorigin:"anonymous"});
    $$("[data-ad]").forEach(function(el){var slot=(C.adsenseSlots||{})[el.getAttribute("data-ad")]||"";
      el.innerHTML='<div class="ad-label center">Advertisement</div><ins class="adsbygoogle" style="display:block" data-ad-client="'+C.adsenseClient+'"'+(slot?' data-ad-slot="'+slot+'"':'')+' data-ad-format="auto" data-full-width-responsive="true"></ins>';
      try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}});
  }
}
$$("[data-ad]").forEach(function(el){el.innerHTML='<div class="ad-inner"><span class="ad-label">Sponsored placement</span><span>Reach engineers, operators and space founders here.</span><a href="partners.html">Advertise on SpaceWorkers →</a></div>'});
if(consent)loadTags(consent);

/* ---------- starfield ---------- */
(function(){var cx=canvas.getContext("2d"),st=[],w,h,dpr=Math.min(window.devicePixelRatio||1,2),rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function size(){w=canvas.width=innerWidth*dpr;h=canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";st=[];var n=Math.min(260,Math.floor(innerWidth*innerHeight/6000));for(var i=0;i<n;i++)st.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4*dpr+.2,v:Math.random()*.25+.03,a:Math.random()})}
function draw(){cx.clearRect(0,0,w,h);for(var i=0;i<st.length;i++){var s=st[i];s.y+=s.v*dpr;if(s.y>h)s.y=0;s.a+=(Math.random()-.5)*.08;s.a=Math.max(.15,Math.min(1,s.a));cx.globalAlpha=s.a;cx.fillStyle=i%9?"#fff":"#8b5cf6";cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.3);cx.fill()}if(!rm)requestAnimationFrame(draw)}
size();draw();addEventListener("resize",size)})();

/* ---------- reveal + counters ---------- */
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");if(e.target.hasAttribute("data-count"))count(e.target);io.unobserve(e.target)}})},{threshold:.15}):null;
function watch(){$$(".reveal:not(.in),[data-count]:not(.done)").forEach(function(el){io?io.observe(el):el.classList.add("in")})}
function count(el){el.classList.add("done");var to=parseFloat(el.getAttribute("data-count")),pre=el.getAttribute("data-pre")||"",suf=el.getAttribute("data-suf")||"",dec=(String(to).split(".")[1]||"").length,t0=null;
  function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1),v=to*(1-Math.pow(1-p,3));el.textContent=pre+v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g,",")+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}

/* ---------- forms (AJAX → FormSubmit) ---------- */
function msg(f,cls,text){var m=$(".form-msg",f);if(!m){m=document.createElement("div");m.className="form-msg";f.appendChild(m)}m.className="form-msg "+cls;m.textContent=text}
function submitForm(f,extraData){
  var hp=f.querySelector("[name=_honey]");if(hp&&hp.value)return;
  if(!f.checkValidity()){f.reportValidity();return}
  var data={};new FormData(f).forEach(function(v,k){if(k!=="_honey"&&v!=="")data[k]=data[k]?data[k]+", "+v:v});
  for(var k in extraData||{})data[k]=extraData[k];
  var name=f.getAttribute("data-form")||"Form";
  data._subject="SpaceWorkers.com — "+name+(data.name?" — "+data.name:"")+(data.company?" ("+data.company+")":"");
  data._template="table";data._captcha="false";data["Form"]=name;data["Page"]=location.href;data["Submitted"]=new Date().toISOString();
  var btn=f.querySelector("button[type=submit],button:not([type])");if(btn){btn.disabled=true;btn._t=btn.textContent;btn.textContent="Sending…"}
  fetch(endpoint(),{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(data)})
  .then(function(r){return r.json().catch(function(){return {}}).then(function(j){if(!r.ok||j.success==="false"||j.success===false)throw new Error(j.message||"Failed");return j})})
  .then(function(){msg(f,"ok",f.getAttribute("data-ok")||"Thank you — we received your submission and will reply within 1–2 business days.");f.reset();$$(".on",f).forEach(function(x){if(!x.classList.contains("step"))x.classList.remove("on")});if(window.gtag)gtag("event","generate_lead",{form_name:name})})
  .catch(function(){msg(f,"err","We couldn't send that automatically. Your email app will open with the details instead.");var body=Object.keys(data).filter(function(k){return k[0]!=="_"}).map(function(k){return k+": "+data[k]}).join("\n");location.href="mai"+"lto:"+rt()+"?subject="+encodeURIComponent(data._subject)+"&body="+encodeURIComponent(body)})
  .then(function(){if(btn){btn.disabled=false;btn.textContent=btn._t}});
}
window.SW_submit=submitForm;
document.addEventListener("submit",function(e){var f=e.target;if(f.hasAttribute("data-form")&&!f.hasAttribute("data-custom")){e.preventDefault();submitForm(f)}});

/* ---------- lite YouTube ---------- */
function ytCard(v){return '<div class="reveal"><div class="video" data-yt="'+v.id+'" role="button" tabindex="0" aria-label="Play: '+esc(v.t)+'"><img loading="lazy" src="https://i.ytimg.com/vi/'+v.id+'/hqdefault.jpg" alt="'+esc(v.t)+'"><span class="play">▶</span></div><div class="video-title">'+esc(v.t)+'</div><span class="tag">'+esc(v.c)+'</span></div>'}
function playYT(el){el.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+el.getAttribute("data-yt")+'?autoplay=1&rel=0" title="YouTube video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
document.addEventListener("click",function(e){var v=e.target.closest(".video[data-yt]");if(v&&!v.querySelector("iframe"))playYT(v)});
document.addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target.matches(".video[data-yt]"))playYT(e.target);if((e.key==="Enter"||e.key===" ")&&e.target.matches(".choice")){e.preventDefault();e.target.click()}});
$$("[data-videos]").forEach(function(box){var lim=+box.getAttribute("data-videos")||99,cat=box.getAttribute("data-cat");
  function render(c){box.innerHTML=(D.videos||[]).filter(function(v){return !c||c==="All"||v.c===c}).slice(0,lim).map(ytCard).join("");watch()}render(cat);box._render=render});
$$("[data-yt-channel]").forEach(function(a){if(C.youtubeChannel){a.href=C.youtubeChannel}else{a.href="#";a.setAttribute("data-mail","SpaceWorkers — YouTube collaboration")}});

/* ---------- chips (generic filter UI) ---------- */
function chips(box,items,cb){box.innerHTML=items.map(function(t,i){return '<button class="chip'+(i?"":" active")+'" data-v="'+esc(t)+'">'+esc(t)+'</button>'}).join("");box.onclick=function(e){var b=e.target.closest(".chip");if(!b)return;$$(".chip",box).forEach(function(x){x.classList.remove("active")});b.classList.add("active");cb(b.getAttribute("data-v"))}}
var vChips=$("#videoChips");if(vChips){var vb=$("[data-videos]");chips(vChips,["All"].concat(Array.from(new Set(D.videos.map(function(v){return v.c})))),function(c){vb._render(c)})}

/* ---------- employer directory ---------- */
var dir=$("#employerGrid");
if(dir){var q=$("#jobQ"),sec=$("#jobSector"),reg=$("#jobRegion"),cnt=$("#empCount"),secs=Array.from(new Set(D.employers.map(function(e){return e.s}))),regs=Array.from(new Set(D.employers.map(function(e){return e.r})));
  sec.innerHTML='<option value="">All sectors</option>'+secs.map(function(s){return '<option>'+s+'</option>'}).join("");
  reg.innerHTML='<option value="">All regions</option>'+regs.map(function(s){return '<option>'+s+'</option>'}).join("");
  var params=new URLSearchParams(location.search);if(params.get("q"))q.value=params.get("q");
  function rEmp(){var t=q.value.trim().toLowerCase(),list=D.employers.filter(function(e){return (!sec.value||e.s===sec.value)&&(!reg.value||e.r===reg.value)&&(!t||(e.n+" "+e.s+" "+e.t.join(" ")+" "+e.d).toLowerCase().indexOf(t)>-1)});
    cnt.textContent=list.length+" employer"+(list.length===1?"":"s");
    dir.innerHTML=list.length?list.map(function(e){return '<article class="card reveal"><span class="tag badge-corner">'+esc(e.r)+'</span><div class="ico">'+esc(e.n.charAt(0))+'</div><h3>'+esc(e.n)+'</h3><p class="small">'+esc(e.d)+'</p><div class="meta"><span class="tag ok">'+esc(e.s)+'</span>'+e.t.map(function(x){return '<span class="tag">'+esc(x)+'</span>'}).join("")+'</div><a class="more" href="'+e.u+'" target="_blank" rel="noopener nofollow">View open roles ↗</a></article>'}).join(""):'<div class="empty">No matches. Try a broader search — or <a href="connect.html">join the talent network</a> and we\'ll match you.</div>';watch()}
  [q,sec,reg].forEach(function(el){el.addEventListener("input",rEmp)});rEmp()}

/* ---------- salary table ---------- */
var sal=$("#salaryBody");
if(sal){var rows=D.salaries.slice(),dirn={},sChips=$("#salChips");
  function rSal(cat){sal.innerHTML=rows.filter(function(r){return !cat||cat==="All"||r[1]===cat}).map(function(r){return '<tr><td><b style="color:var(--text)">'+r[0]+'</b></td><td>'+r[1]+'</td><td>$'+r[2]+'k – $'+r[3]+'k</td><td>$'+Math.round((r[2]+r[3])/2)+'k</td><td>'+r[4]+'</td></tr>'}).join("")}
  var curCat="All";chips(sChips,["All"].concat(Array.from(new Set(rows.map(function(r){return r[1]})))),function(c){curCat=c;rSal(c)});
  $$("th[data-k]").forEach(function(th){th.onclick=function(){var k=+th.getAttribute("data-k");dirn[k]=!dirn[k];rows.sort(function(a,b){var x=k===3?(a[2]+a[3]):a[k],y=k===3?(b[2]+b[3]):b[k];return (x>y?1:x<y?-1:0)*(dirn[k]?1:-1)});rSal(curCat)}});rSal()}

/* ---------- programs ---------- */
var pg=$("#programGrid");
if(pg){function rP(k){pg.innerHTML=D.programs.filter(function(p){return !k||k==="All"||p.k===k}).map(function(p){return '<article class="card reveal"><span class="tag badge-corner">'+p.k+'</span><h3 style="padding-right:80px">'+esc(p.n)+'</h3><p class="small">'+esc(p.d)+'</p><a class="more" href="'+p.u+'" target="_blank" rel="noopener">Visit program ↗</a></article>'}).join("");watch()}
  chips($("#progChips"),["All"].concat(Array.from(new Set(D.programs.map(function(p){return p.k})))),rP);rP()}

/* ---------- contests ---------- */
function left(end){var ms=new Date(end+"T23:59:59Z")-new Date();return ms<0?null:ms}
var cg=$("#contestGrid");
if(cg){cg.innerHTML=D.contests.map(function(c){var ms=left(c.end),days=ms?Math.ceil(ms/864e5):0;return '<article class="card reveal" id="c-'+c.id+'"><span class="tag '+(ms?"hot":"")+' badge-corner">'+(ms?days+" days left":"Closed")+'</span><div class="ico">'+c.ico+'</div><h3>'+esc(c.t)+'</h3><p class="small">'+esc(c.d)+'</p><div class="price" style="font-size:1.8rem">'+c.prize+' <small>prize pool</small></div><div class="meta"><span class="tag">'+c.cat+'</span><span class="tag">'+esc(c.who)+'</span><span class="tag">Deadline '+c.end+'</span></div><a class="btn btn-primary btn-sm mt" href="#enter" data-pick="'+c.id+'">Enter challenge</a></article>'}).join("");
  var sel=$("#contestSelect");if(sel)sel.innerHTML=D.contests.map(function(c){return '<option value="'+esc(c.t)+'" data-id="'+c.id+'">'+esc(c.t)+' — '+c.prize+'</option>'}).join("");
  cg.addEventListener("click",function(e){var b=e.target.closest("[data-pick]");if(b&&sel){var o=sel.querySelector('[data-id="'+b.getAttribute("data-pick")+'"]');if(o)sel.value=o.value}})}
$$("[data-countdown]").forEach(function(el){var end=el.getAttribute("data-countdown");function tick(){var ms=left(end)||0,d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4),s=Math.floor(ms%6e4/1e3);el.innerHTML=[[d,"days"],[h,"hrs"],[m,"min"],[s,"sec"]].map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("")}tick();setInterval(tick,1000)});

/* ---------- home: next deadline strip ---------- */
var nd=$("#nextContests");
if(nd){nd.innerHTML=D.contests.filter(function(c){return left(c.end)}).sort(function(a,b){return a.end<b.end?-1:1}).slice(0,3).map(function(c){return '<a class="card reveal" href="contests.html#c-'+c.id+'" style="text-decoration:none"><div class="ico">'+c.ico+'</div><h3 style="color:var(--text)">'+esc(c.t)+'</h3><p class="small">'+c.prize+' prize pool · closes '+c.end+'</p></a>'}).join("")}
var fe=$("#featuredEmployers");if(fe){fe.innerHTML=D.employers.slice(5,17).map(function(e){return '<a href="jobs.html?q='+encodeURIComponent(e.n)+'" style="text-decoration:none"><span>'+esc(e.n)+'</span></a>'}).join("")}
var hs=$("#heroSearch");if(hs)hs.addEventListener("submit",function(e){e.preventDefault();location.href="jobs.html?q="+encodeURIComponent($("input",hs).value)});

/* ---------- multi-step lead form ---------- */
$$("[data-steps]").forEach(function(f){
  var steps=$$(".step",f),bars=$$(".steps span",f),i=0;
  function show(n){steps.forEach(function(s,k){s.classList.toggle("on",k===n)});bars.forEach(function(b,k){b.classList.toggle("on",k<=n)});i=n}
  function valid(){var ok=true;$$("input,select,textarea",steps[i]).forEach(function(el){if(ok&&!el.checkValidity()){el.reportValidity();ok=false}});return ok}
  f.addEventListener("click",function(e){
    var c=e.target.closest(".choice");if(c){var g=c.parentNode;$$(".choice",g).forEach(function(x){x.classList.remove("on")});c.classList.add("on");var inp=$('input[name="'+g.getAttribute("data-name")+'"]',f);inp.value=c.getAttribute("data-v");
      $$("[data-for]",f).forEach(function(x){x.style.display=x.getAttribute("data-for").split(",").indexOf(inp.value)>-1?"":"none";$$("input,select,textarea",x).forEach(function(q){q.disabled=x.style.display==="none"})});setTimeout(function(){show(i+1)},180)}
    if(e.target.closest("[data-next]")){e.preventDefault();if(valid())show(i+1)}
    if(e.target.closest("[data-prev]")){e.preventDefault();show(Math.max(0,i-1))}
  });
  f.addEventListener("submit",function(e){e.preventDefault();if(!$('input[name="I am"]',f).value){show(0);return}submitForm(f);});
  $$("[data-for]",f).forEach(function(x){x.style.display="none";$$("input,select,textarea",x).forEach(function(q){q.disabled=true})});
  show(0);var pre=new URLSearchParams(location.search).get("as");if(pre){var ch=f.querySelector('.choice[data-v="'+pre+'"]');if(ch)ch.click()}
});

/* ---------- donations ---------- */
var dn=$("#donateBox");
if(dn){var amt=50,freq="Monthly",custom=$("#customAmt"),label=$("#donateLabel");
  function upd(){label.textContent="$"+amt+(freq==="Monthly"?"/month":" one-time")}
  dn.addEventListener("click",function(e){var a=e.target.closest(".amt");if(a){$$(".amt",dn).forEach(function(x){x.classList.remove("on")});a.classList.add("on");amt=+a.getAttribute("data-a");custom.value="";upd()}
    var t=e.target.closest(".toggle button");if(t){$$(".toggle button",dn).forEach(function(x){x.classList.remove("on")});t.classList.add("on");freq=t.textContent;upd()}});
  custom.addEventListener("input",function(){if(+custom.value>0){amt=+custom.value;$$(".amt",dn).forEach(function(x){x.classList.remove("on")});upd()}});
  var pay=C.donate||{},links=[["stripe","Card / Apple Pay (Stripe)"],["paypal","PayPal"],["buymeacoffee","Buy Me a Coffee"],["kofi","Ko-fi"],["patreon","Patreon (monthly)"]].filter(function(p){return pay[p[0]]});
  $("#payLinks").innerHTML=links.map(function(p){return '<a class="btn btn-ghost btn-block" style="margin-bottom:8px" href="'+pay[p[0]]+'" target="_blank" rel="noopener">'+p[1]+' ↗</a>'}).join("");
  $("#pledgeForm").addEventListener("submit",function(e){e.preventDefault();submitForm(this,{"Amount":"$"+amt,"Frequency":freq})});upd();
  var g=C.fundraisingGoal||1,r=C.fundraisingRaised||0;$("#raised").textContent="$"+r.toLocaleString();$("#goal").textContent="$"+g.toLocaleString();setTimeout(function(){$("#bar").style.width=Math.max(2,Math.min(100,r/g*100))+"%"},300)}

/* ---------- pricing → form prefill ---------- */
document.addEventListener("click",function(e){var p=e.target.closest("[data-plan]");if(p){var s=$("#planSelect");if(s)s.value=p.getAttribute("data-plan")}});

watch();
})();
