const canvas = document.getElementById("mathCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* detect mobile */
const isMobile = window.innerWidth < 768;

const equations = [
"∫ f(x)dx","Σ xᵢ","π ≈ 3.14159","λ → ∞","ℝⁿ","∂f/∂x",
"AI = ML + DL","P(A|B)","CNN","RNN","DINO-V3","ViT",
"Δt → 0","x̄","β","∑ᵢ","∞","α","μ"
];

const colors=[
"rgba(30, 66, 138, 0.8)",
"rgba(77, 170, 202, 0.7)",
"rgba(34, 119, 136, 0.7)"
];

/* FEWER particles on mobile */
const PARTICLE_COUNT = isMobile ? 20 : 70;

/* SMALLER text on mobile */
const MIN_SIZE = isMobile ? 10 : 14;
const MAX_SIZE = isMobile ? 16 : 24;

/* SLOWER on mobile */
const SPEED = isMobile ? 0.2 : 0.4;

let particles=[];

class Particle{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.text=equations[Math.floor(Math.random()*equations.length)];
this.size=MIN_SIZE+Math.random()*(MAX_SIZE-MIN_SIZE);
this.speedX=(Math.random()-0.5)*SPEED;
this.speedY=(Math.random()-0.5)*SPEED;
this.color = colors[Math.floor(Math.random()*colors.length)];
}

draw(){
ctx.fillStyle=this.color;
ctx.shadowBlur = 6;
ctx.shadowColor = "#55350e";
ctx.font=this.size+"px Times New Roman";
ctx.fillText(this.text,this.x,this.y);
}

update(){
this.x+=this.speedX;
this.y+=this.speedY;

if(this.x<0||this.x>canvas.width) this.speedX*=-1;
if(this.y<0||this.y>canvas.height) this.speedY*=-1;
}
}

/* init */
for(let i=0;i<PARTICLE_COUNT;i++){
particles.push(new Particle());
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

animate();

/* resize handler */
window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});