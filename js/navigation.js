/* ================= WORK DATA ================= */

const researchData = [

/* ===== RESEARCH PAPER ===== */

{
type: "research",
title: "Plant Leaf Disease Detection using AI",
desc: "Applied 5 advanced DL models on plant datasets for image classification.",
img: "assets/images/teach2.png",
pdf: "uploads/research/paper1.pdf"
},

/* ===== PROJECT ===== */
{
type: "project",
title: "Converting voters list to .csv format",
desc: "In this project, I extracted text data from a voter list publicly available on the Election Commission website, applied NLP techniques, and converted the data into a machine-readable CSV format.",
github: "https://github.com/sibajee1/voter_data_cvt_to_csv"
},
{
type: "project",
title: "Sentiment Analysis on a instagram dataset",
desc: "I found an Instagram dataset containing 30,000 entries. The dataset includes features such as post type, number of likes, comments, shares, and follower count and lots of important features. Based on this data, I performed sentiment analysis and appliy a machine learning technique(Random forest) to predict using some important feature, is this post goes viral or not ?",
github: "https://github.com/sibajee1/sentiment_analysis"
},
{
type: "project",
title: "gHummi gHummi",
desc: "Travel agency website with modern responsive UI.",
github: "https://github.com/sibajee1/gHummigHummi"
},
{
type: "project",
title: "Coders of Delhi",
desc: "In this project, I collected data on coders from Delhi, stored it in a JSON file, and analyzed the data using pure Python (without any external libraries), deriving several meaningful insights.",
github: "https://github.com/sibajee1/coders_of_delhi"
},
{
type: "project",
title: "IPL Team Selection",
desc: "In this project, I analyzed the past performance of players from two teams, assigned points based on their performance, and selected the best 11 players out of 22.",
github: "https://github.com/sibajee1/ipl_team_selection"
}


];

/* ================= TEACHING DATA ================= */

const teachingData = [

{
title: "Preserving Nature With the Power of Data Science and Mathematics",
desc: "28-07-2025, HBTU Kanpur",
img: "assets/images/teach8.png"
}

];


/* ================= LOAD WORKS GRID (research.html) ================= */

document.addEventListener("DOMContentLoaded", ()=>{

const rGrid = document.getElementById("researchGrid");

if(rGrid){

researchData.forEach((item,i)=>{

rGrid.innerHTML += `
<div class="research-card" onclick="location.href='research_post.html?id=${i}'">
<h3>${item.title}</h3>
<p>${item.desc}</p>
</div>
`;

});

}

});


/* ================= LOAD SINGLE WORK (research_post.html) ================= */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id !== null){

const work = researchData[id];

if(work){

const title = document.getElementById("researchTitle");
const desc = document.getElementById("researchDesc");
const img = document.getElementById("researchImg");
const actionBtn = document.getElementById("researchPdf");

if(title) title.innerText = work.title;
if(desc) desc.innerText = work.desc;

/* ===== IF RESEARCH ===== */

if(work.type === "research"){

if(img){
img.style.display = "block";
img.src = work.img;
}

if(actionBtn){
actionBtn.style.display = "inline-block";
actionBtn.innerText = "📄 Download Paper";
actionBtn.href = work.pdf;
}

}

/* ===== IF PROJECT ===== */

if(work.type === "project"){

if(img){
img.style.display = "none";   // Hide image for project
}

if(actionBtn){
actionBtn.style.display = "inline-block";
actionBtn.innerText = "💻 View on GitHub";
actionBtn.href = work.github;
}

}

}

}

/* ================= LOAD TEACHING POST ================= */

const teachingParams = new URLSearchParams(window.location.search);
const teachingId = teachingParams.get("id");

if(teachingId !== null){

const teachingTitle = document.getElementById("teachingTitle");

if(teachingTitle){

const talk = teachingData[teachingId];

if(talk){

document.getElementById("teachingTitle").innerText = talk.title;
document.getElementById("teachingDesc").innerText = talk.desc;
document.getElementById("teachingImg").src = talk.img;

}

}

}
/* ================= LOAD TEACHING GRID (teaching.html) ================= */

document.addEventListener("DOMContentLoaded", ()=>{

const tGrid = document.getElementById("teachingGrid");

if(tGrid){

teachingData.forEach((item,i)=>{

tGrid.innerHTML += `
<div class="research-card" onclick="location.href='teaching_post.html?id=${i}'">
<h3>${item.title}</h3>
<p>${item.desc}</p>
</div>
`;

});

}

});
/* ================= SEARCH ================= */

function runSearch(){

const input = document.getElementById("searchInput");
const box = document.getElementById("searchResults");

if(!input || !box) return;

const q = input.value.toLowerCase();

if(q === ""){
box.style.display = "none";
return;
}

let results = [];

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

/* Works */

researchData.forEach((item,i)=>{
if(item.title.toLowerCase().includes(q)){
results.push({type:"work",name:item.title,id:i});
}
});

box.innerHTML = "";

results.forEach(r=>{

if(r.type === "page"){
box.innerHTML += `
<div class="search-item" onclick="location.href='${r.url}'">${r.name}</div>
`;
}

if(r.type === "work"){
box.innerHTML += `
<div class="search-item" onclick="location.href='research_post.html?id=${r.id}'">${r.name}</div>
`;
}

});

box.style.display = results.length ? "block" : "none";
}


/* ================= MOBILE MENU ================= */

function toggleMenu(){
const menu = document.querySelector(".nav-menu");
if(menu) menu.classList.toggle("show");
}


/* ================= CLOSE SEARCH WHEN CLICK OUTSIDE ================= */

document.addEventListener("click", e=>{
const box = document.getElementById("searchResults");
const input = document.getElementById("searchInput");

if(box && input && !box.contains(e.target) && e.target !== input){
box.style.display = "none";
}
});