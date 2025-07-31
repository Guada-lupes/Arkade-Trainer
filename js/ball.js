class Ball {
  constructor(x, y, radius, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update(frame, dialog, score, number) {
    //se actualiza el valor de x e y de forma que aumenta se mantiene avanzando de forma continua
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    //calculamos si tocan las paredes para que se invierta la dirección
    if (this.x + this.vx > 500 || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.vy < 0) {
      this.vy = -this.vy;
    }
    // si toca al jugador se ejecuta el game over
    if (this.y + this.vy >= 560) {
      this.gameOver(frame, dialog, score, number);
      return;
    }
  }
  gameOver(frame, dialog, score, number) {
    //frame tiene el id del la animación
    cancelAnimationFrame(frame);

    setTimeout(() => {
      //metemos el numero en el p
      score.textContent = number;
      //abrimos modal
      dialog.showModal();
    }, 100);
  }
}
export { Ball };
