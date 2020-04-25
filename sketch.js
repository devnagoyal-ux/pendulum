var bob;
var string;
var angle1 = 45; 
var av = 0;
var ac = 0;
 
function setup(){
var canvas = createCanvas(400,400);

fill('red');
bob = new Bob(150,200,50,angle1);


}

function draw(){
background('rgb(0,255,0)');

 bob.display();

 string = line(120,-40,bob.x,bob.y);

 ac = -0.15 * sin(angle1);
 bob.x = 100+100 * sin(angle1);
bob.y = 100+100 * cos(angle1);

 angle1 = angle1 + av;
 av  = av + ac;
 av = av * 1.00;

}

function keyPressed(){
    if(keyCode === 32){
        angle1 = 0;
        av = 0;
        ac = 0;
    }
}