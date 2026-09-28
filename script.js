
const writeups=[
 {tag:"CTF",title:"NahamconCTF 2024: Kitty Kitty Bang Bang",date:"2024",meta:"Android CTF",url:"https://github.com/er4pwn/CTF_writeup/blob/main/NahamconCTF2024/Kitty%20Kitty%20Bang%20Bang/README.md"},
 {tag:"CTF",title:"NahamconCTF 2024: The Da Vinci Code",date:"2024",meta:"WEB CTF",url:"https://github.com/er4pwn/CTF_writeup/blob/main/NahamconCTF2024/The%20Da%20Vinci%20Code/README.md"},
 {tag:"CTF",title:"SwampCTF 2025: Preferential Treatment",date:"2025",meta:"Forensics",url:"https://github.com/er4pwn/CTF_writeup/blob/main/SwampCTF/Preferential%20Treatment/README.md"},
 {tag:"CTF",title:"SwampCTF 2025: SlowAPI ",date:"2025",meta:"WEB CTF",url:"https://github.com/er4pwn/CTF_writeup/blob/main/SwampCTF/SlowAPI/README.md"},
 {tag:"CTF",title:"UIUCTF 2023: CornyKernel ",date:"2023",meta:"Misc",url:"https://github.com/er4pwn/CTF_writeup/blob/main/UIUCTF2023/CornyKernel/README.md"}
];

const certifications=[
 {img:"assets/certs/Mark_Rhogie_Purok_Certified_Network_Security_Practitioner_CNSP_page-0001.jpg",title:"Certified Network Security Practitioner",issuer:"PentestingExams",date:"2026",link:"#"},
 {img:"assets/certs/MP_Nahamcon.jpg",title:"Nahamcon 2025 CTF",issuer:"Nahamcon",date:"2025",link:"#"},
 {img:"assets/certs/cyberapocalypse.jpg",title:"Hack The Box Cyber Apocalypse CTF 2025: Tales from Eldoria.",issuer:"HackTheBox",date:"2025",link:"#"},
 {img:"assets/certs/opswat.jpg",title:"Introduction to Critical Infrastructure Protection",issuer:"Nahamcon",date:"2025",link:"#"},
 {img:"assets/certs/apisec.jpg",title:"APISEC Certified Practitioner",issuer:"APISEC University",date:"2025",link:"#"},
 {img:"assets/certs/tryhackmejrptlp.jpg",title:"Jr Penetration Tester Learning Path",issuer:"TryHackMe",date:"2023",link:"#"},
 {img:"assets/certs/inprogress.jpg",title:"Comptia Pentest+",issuer:"Comptia",date:"2026",link:"#"},
 {img:"assets/certs/inprogress.jpg",title:"Certified Web Exploitation Specialist",issuer:"HackTheBox",date:"2026",link:"#"}
];

const list=document.querySelector("#writeupList"), certGrid=document.querySelector("#certGrid");
function renderWriteups(filter="all"){
 list.innerHTML=writeups.filter(x=>filter==="all"||x.cat===filter).map((x,i)=>`<a class="writeup" href="${x.url}" target="_blank" rel="noopener"><span class="writeup-num">0${i+1}</span><div><h3>${x.title}</h3><div class="writeup-meta">${x.date}　${x.meta}</div></div><span class="writeup-tag">${x.tag}</span><span class="read">OPEN →</span></a>`).join("");
}
function renderCertifications(){
 certGrid.innerHTML=certifications.map(x=>`<a class="cert-card" href="${x.link}" target="_blank" rel="noopener"><div class="cert-photo"><img src="${x.img}" alt="${x.title}" onerror="this.onerror=null;this.src='assets/certs/cert-placeholder.svg'"></div><div class="cert-meta"><h3>${x.title}</h3><div class="cert-issuer">${x.issuer}</div><div class="cert-date">${x.date}</div></div></a>`).join("");
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderWriteups(b.dataset.filter)}));

const pages=document.querySelectorAll(".page"), navLinks=document.querySelectorAll("[data-route]");
function route(){
 const id=location.hash.replace("#","")||"home";
 pages.forEach(p=>p.classList.toggle("active-page",p.id===id));
 navLinks.forEach(a=>a.classList.toggle("active",a.dataset.route===id));
 document.querySelector(".nav nav").classList.remove("open");
 window.scrollTo({top:0,behavior:"smooth"});
}
window.addEventListener("hashchange",route);

const lines=[
 ["$ whoami","Mark Rhogie Purok"],
 ["$ role","CTF Player / Penetration Tester"],
 ["$ focus","web application security· api testing · forensics · threat intel"],
 ["$ status","<span class='hi'>online</span> — learning, breaking, gaming"]
];

let ti=0;
function typeTerminal(){
 const box=document.querySelector("#heroTerminal");
 if(ti>=lines.length)return;
 const [cmd,out]=lines[ti++];
 const row=document.createElement("div");row.className="term-line";
 row.innerHTML=`<span class="prompt">${cmd}</span><br><span class="out">${out}</span>`;
 box.appendChild(row);setTimeout(typeTerminal,420);
}
setTimeout(typeTerminal,500);

document.querySelector(".menu-toggle").onclick=()=>document.querySelector(".nav nav").classList.toggle("open");
document.querySelector("#year").textContent=new Date().getFullYear();
function clock(){document.querySelector("#clock").textContent=new Date().toLocaleTimeString("en-GB")}setInterval(clock,1000);clock();

if(window.lucide)lucide.createIcons();
renderWriteups();renderCertifications();route();

// Custom cursor: a glow, a snapping dot, and a ring that eases behind it.
// (body has cursor:none, so without this the mouse pointer is invisible.)
if(!matchMedia("(pointer: coarse)").matches){
 const glow=document.querySelector(".cursor-glow"), dot=document.querySelector(".cursor-dot"), ring=document.querySelector(".cursor-ring");
 let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
 document.addEventListener("mousemove",e=>{
  mx=e.clientX;my=e.clientY;
  glow.style.left=mx+"px";glow.style.top=my+"px";
  dot.style.left=mx+"px";dot.style.top=my+"px";
  document.body.classList.remove("cursor-hidden");
 });
 document.addEventListener("mouseleave",()=>document.body.classList.add("cursor-hidden"));
 document.addEventListener("mouseenter",()=>document.body.classList.remove("cursor-hidden"));
 (function ease(){
  rx+=(mx-rx)*.18;ry+=(my-ry)*.18;
  ring.style.left=rx+"px";ring.style.top=ry+"px";
  requestAnimationFrame(ease);
 })();
 document.addEventListener("mouseover",e=>{
  if(e.target.closest("a,button,.tags span,.filter"))ring.classList.add("hover");
 });
 document.addEventListener("mouseout",e=>{
  if(e.target.closest("a,button,.tags span,.filter"))ring.classList.remove("hover");
 });
}

if(window.THREE){
 const canvas=document.querySelector("#network"), scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,1000);camera.position.z=8;
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
 const count=90, pos=new Float32Array(count*3);
 for(let i=0;i<count*3;i++)pos[i]=(Math.random()-.5)*18;
 const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(pos,3));
 const mat=new THREE.PointsMaterial({size:.035,transparent:true,opacity:.65,color:0xb7ff3c});
 const pts=new THREE.Points(geo,mat);scene.add(pts);
 const clock3=new THREE.Clock();
 function animate(){requestAnimationFrame(animate);pts.rotation.y=clock3.getElapsedTime()*.018;pts.rotation.x=clock3.getElapsedTime()*.006;renderer.render(scene,camera)}animate();
 addEventListener("resize",()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
}
