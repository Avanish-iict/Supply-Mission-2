class Ground {
    constructor(y,x,width,height){

        var options = {
            isStatic: true
        }

      box = Bodies.rectangle(x,y, height,width,options);

      box.Body.setStatic(box, isStatic)

        box.width = width;
        box.height = width;

       
     World.add(world, box);
    }
    display(){
      var Box =box.body.position;

      push();
      translate(box.y, box.x);
      rectMode(CENTER);
      rect(500, 620, 20, 90);
      pop();
    }
  }
  