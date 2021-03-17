class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':0.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, (radius-20)/2, options);
      this.radius = radius;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };
  