/* ================= MULTI-PAGE SAFE NAVIGATION ================= */


/* ================= RESEARCH DATA ================= */

const researchData = [
{
title:"Plant Leaf Disease Detection using AI",
desc:"Applied 5 Advance DL models in Plant Leaf dataset to find which is the best model for image classification.",
img:"assets/images/teach2.png",
pdf:"uploads/research/paper1.pdf"
}
];

/* ================= RESEARCH LIST PAGE ================= */

document.addEventListener("DOMContentLoaded", ()=>{

const rGrid = document.getElementById("researchGrid");

if(rGrid){
researchData.forEach((r,i)=>{
rGrid.innerHTML += `
<div class="research-card" onclick="location.href='research_post.html?id=${i}'">
<h3>${r.title}</h3>
<p>${r.desc}</p>
</div>
`;
});
}

});

/* ================= SEARCH (ALL PAGES) ================= */
function runSearch(){

const input=document.getElementById("searchInput");
const box=document.getElementById("searchResults");

if(!input || !box) return;

const q=input.value.toLowerCase();

if(q===""){
box.style.display="none";
return;
}

let results=[];

/* Pages */
[
{n:"home",p:"index.html"},
{n:"research",p:"research.html"},
{n:"teaching",p:"teaching.html"},
{n:"articles",p:"article.html"},
{n:"about",p:"about.html"}
].forEach(s=>{
if(s.n.includes(q)){
results.push({type:"page",name:s.n,url:s.p});
}
});

/* Research titles */

researchData.forEach((r,i)=>{
if(r.title.toLowerCase().includes(q)){
results.push({type:"research",name:r.title,id:i});
}
});

box.innerHTML="";

results.forEach(r=>{

if(r.type==="page"){
box.innerHTML+=`
<div class="search-item" onclick="location.href='${r.url}'">${r.name}</div>`;
}

if(r.type==="research"){
box.innerHTML+=`
<div class="search-item" onclick="location.href='research_post.html?id=${r.id}'">${r.name}</div>`;
}

});

box.style.display=results.length?"block":"none";
}
/* ================= MOBILE MENU ================= */

function toggleMenu(){
const menu = document.querySelector(".nav-menu");
if(menu) menu.classList.toggle("show");
}

/* Close search when clicking outside */

document.addEventListener("click", e=>{
const box=document.getElementById("searchResults");
const input=document.getElementById("searchInput");
if(box && input && !box.contains(e.target) && e.target!==input){
box.style.display="none";
}
});