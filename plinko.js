class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      push ();
      translate (position.x, position.y)
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(0,0, this.radius, this.radius);
      pop ();
    }
  };