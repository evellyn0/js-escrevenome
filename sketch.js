function setup() {
    createCanvas(500, 500);
   background("black");
   }
  function draw() {
   
  
    stroke("white");
    fill("pink");
  
    // console.log (mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 45, 45);
    }
  }