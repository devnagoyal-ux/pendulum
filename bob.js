class Bob{
constructor(x,y,diameter){

this.diameter = diameter;
this.x = x;
this.y = y;
this.body = circle(x,y,this.diameter);
}
 display(){
     circle(this.x,this.y,this.diameter);
     fill('red');
 }
}