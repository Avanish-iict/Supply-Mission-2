class Box1 {
    constructor(y,x,width,height){

      var options = {
        isStatic: true
    }

      box = Bodies.rectangle(x,y, 90,90);

        box.width = 90;
        box.height = 90;

       
     World.add(world, box);
    }
    display(){
      var Box =box.positionY;
      var Box =box.positionX;
      push();
      translate(box.y, box.x);
      rectMode(CENTER);
      strokeWeight(5);
      //stroke("blue");
      fill("green");
      rect(320, 620, 20, 90);
      pop();
    }
  }
  