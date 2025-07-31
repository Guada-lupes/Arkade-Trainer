import { Player } from "./player.js";
import { Ball } from "./ball.js";

//traemos canvas del dom
const canvas = document.getElementById("canvas");
//traemos dialog
const dialog = document.getElementById("window");
//traemos p del score
const score = document.getElementById("score");
//traemos el boton
const button = document.getElementById("acept");

//establecemos medidas y contexto
canvas.height = 600;
canvas.width = 500;
const ctx = canvas.getContext("2d");
//creamos elementos
const ball = new Ball(250, 100, 15, 3, 3, "#e96d97");
const player = new Player(250, 550, 100, 15, "#e96d97");
//Para guardar el frame y luego cancelarlo
let frame;
let hits = 0;
//utilizamos esta variable para guardar cada 5 golpes y evitar que se acelere la velocidad en los segundos que lo golpes son multiplos de 5
let lastSpeedUpHit = 0;

// actualizar después de aceptar
button.addEventListener("click", () => {
  location.reload();
});

//Función para color aleatorio
function getAleatoryColor() {

    function aleatorySymbol() {
      let negative = Math.round(Math.random());
      if (negative === 0) {
        return "-";
      } else {
        return "+";
      }
    }
    let number = Math.floor(Math.random() * 125);

    console.log(aleatorySymbol()+number);
    
  return aleatorySymbol()+number;
}

//Función para golpear pelota
function hitBall() {
  //ubicación del jugador en el eje x
  let a = player.x - 10;
  let b = a + 110;
  let bar = ball.x >= a && ball.x <= b;

  //si la pelota esta en el ejex y ejey del player
  if (ball.y == 550 && bar) {
    ball.color = `lab(100 ${getAleatoryColor()} ${getAleatoryColor()})`;
    player.color = `lab(100 ${getAleatoryColor()} ${getAleatoryColor()})`;
    hits++;
    //revertimos dirección
    ball.vy = -ball.vy;
  }
  //aumentamos la velocidad cada 5 golpes
  if (hits % 2 === 0 && hits !== lastSpeedUpHit) {
    ball.vx *= 1.2;
    ball.vy *= 1.2;
    lastSpeedUpHit = hits; // ⬅️ actualizamos el último múltiplo
  }
}

//Función de animación
function animate() {
  //limpiamos el canva
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //dibujamos player y ball
  player.draw(ctx);
  ball.draw(ctx);
  //ejecutamos funciones
  hitBall();
  player.update();
  ball.update(frame, dialog, score, hits);
  //Guardamos el id de la petición y a la vez se activa la misma
  frame = requestAnimationFrame(animate);
}

//Llamamos a la animación
animate();
