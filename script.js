const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let circle1;
let circle2;
var sound;
function init(){
    ctx.canvas.width  = window.innerWidth-50;
    ctx.canvas.height = window.innerHeight-30;
    circle1=new Circle(50+1,ctx.canvas.height-50,50,0,0);
    circle2=new Circle(ctx.canvas.width-50-1,ctx.canvas.height-50,50,0,0);
    drawCircle(circle1,'purple');
    drawCircle(circle2,'orange');
    sound=new Audio('tick.mp3');

}
class Circle{
    constructor(x,y,size,dx,dy){
        this.x=x;
        this.y=y;
        this.size=size;
        this.dx=dx;
        this.dy=dy;
    }
}




function collect(){
   
    let alertUser= document.getElementById('alertUser');
    alertUser.innerHTML="";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let u1 = document.getElementById("u1");
    let u2 = document.getElementById("u2");

    initialize(parseInt(m1.value),parseInt(m2.value),parseInt(u1.value),parseInt(u2.value) );
    // console.log( m1.value+' '+m2.value+' '+u1.value+' '+u2.value);
    update();
}

function initialize(m1,m2,u1,u2){
    circle1.x=m1;
    circle1.y=canvas.height-m1;
    circle1.size=m1;
    circle1.dx=u1;
    circle1.dy=0;

    circle2.x=canvas.width-m2;
    circle2.y=canvas.height-m2;
    circle2.size=m2;
    circle2.dx=-u2;
    circle2.dy=0;

}

function drawCircle(circle,color){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
}



function hitWall(circle){
   
    if(circle.x+circle.size>=canvas.width){
        circle.dx=(-1*(circle.dx));
        sound.play();
        sound.currentTime=0;
    }else if(circle.x-circle.size<=0){
        circle.dx=(-1*(circle.dx));
        sound.play();
        sound.currentTime=0;
    }  
}

function changeX(circle){
    circle.x+=circle.dx;
}

function areColliding(circle1,circle2){
    if(Math.abs(circle1.x-circle2.x)<=Math.abs(circle1.size+circle2.size)){
        sound.play();
        sound.currentTime=0;
        // conserving momentum and kinetic energy during the collision
        let v2=((2*circle1.dx)+((1-(circle2.size/circle1.size))*circle2.dx))/((1+(circle2.size/circle1.size)));
        let v1=v2-circle1.dx+circle2.dx;

        circle1.dx=(v1);
        circle2.dx=(v2);

        // console.log(circle1.dx);
        // console.log(circle2.dx);
        if(circle1.dx==0 && circle2.dx==0){
            let alertUser= document.getElementById('alertUser');
            alertUser.innerHTML="System is at rest now :) ... Peace";
            init();
            return;
        }
        
    }
}

function update(){

   ctx.clearRect(0,0,canvas.width,canvas.height);
   drawCircle(circle1,'purple');
   drawCircle(circle2,'orange');
   
   changeX(circle1);
   changeX(circle2);   
   
   hitWall(circle1);
   hitWall(circle2);

   areColliding(circle1,circle2);
   if( Math.abs(circle1.dx)>10000 || Math.abs(circle2.dx) >10000){
       let alertUser= document.getElementById('alertUser');
       alertUser.innerHTML='Too Fast, Please change the values and simulate again :(';
       console.log('Too Fast, Please change the values :(');
       init();
       return;
   }
   requestAnimationFrame(update);
}




