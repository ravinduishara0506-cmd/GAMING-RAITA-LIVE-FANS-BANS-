
const CHANNEL_URL = "https://www.youtube.com/";
const nav = document.querySelector(".navlinks");
const menu = document.querySelector(".menu");
if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navlinks a").forEach(a=>{
  if(a.getAttribute("href") === path) a.classList.add("active");
});

document.querySelectorAll("[data-channel]").forEach(el=>{
  el.href = CHANNEL_URL;
  el.target="_blank";
  el.rel="noopener";
});

const year = document.querySelector("#year");
if(year) year.textContent = new Date().getFullYear();

const countdown = document.querySelector("#countdown");
if(countdown){
  // Demo schedule: next 10:30 AM in the visitor's local time.
  function next1030(){
    const now = new Date(), t = new Date(now);
    t.setHours(10,30,0,0);
    if(t <= now) t.setDate(t.getDate()+1);
    return t;
  }
  function tick(){
    const diff = Math.max(0,next1030()-new Date());
    const h=Math.floor(diff/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
    countdown.textContent = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  }
  tick(); setInterval(tick,1000);
}
