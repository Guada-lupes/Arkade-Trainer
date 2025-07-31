import { Controls } from "./controls.js";

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.controls = new Controls();
  }
  update(){
    if(this.controls.left && this.x > 0){
      this.x -=10
    }
    if(this.controls.right && this.x < 400){
      this.x +=10
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export { Player }