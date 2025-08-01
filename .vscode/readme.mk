# 🕹️ Arkade Trainer

**Arkade Trainer** es un pequeño juego arcade desarrollado con JavaScript puro y HTML Canvas. Consiste en golpear una pelota con una barra controlada por el teclado. Cada dos golpes, la velocidad de la pelota aumenta, y el juego finaliza cuando la bola toca el borde inferior. La puntuación final corresponde al número de golpes acertados.

---

## 🚀 Tecnologías utilizadas

- **HTML5**: estructura del juego y uso del elemento `<canvas>`.
- **CSS3**: estilos básicos.
- **JavaScript (ES6)**:
  - Uso de **clases** para organizar objetos como la bola, el jugador y los controles.
  - **`requestAnimationFrame`** para crear el bucle de animación.
  - **Eventos de teclado** con `keydown` y `keyup`.
  - **`<dialog>` y `showModal()`** para mostrar manejo de la ventana modal.

---

## 📚 Inspiración

El proyecto está inspirado en el tutorial de YouTube de Midudev:  
[https://www.youtube.com/watch?v=P3n28hPyYOk](https://www.youtube.com/watch?v=P3n28hPyYOk)

A partir de ese tutorial, realicé mis propias modificaciones y mejoras para adaptar el código, reorganizar la estructura y practicar buenas prácticas de desarrollo.

---

## 🎮 ¿Cómo se juega?

1. Abre el archivo `index.html` en un navegador moderno.
2. Mueve la barra con las teclas **← (izquierda)** y **→ (derecha)**.
3. Golpea la pelota para evitar que caiga.
4. Cada **dos golpes**, la velocidad de la pelota aumenta.
5. El juego termina cuando la bola toca el borde inferior.
6. Verás tu puntuación final en una ventana modal.

---

## 🧪 Qué practiqué con este proyecto

- Creación y uso de **clases en JavaScript**
- Manejo de **eventos de teclado**
- Dibujo y animación en **canvas**
- Control del flujo del juego con **`requestAnimationFrame`**
- Uso del elemento **`<dialog>`** y del método **`showModal()`** para mostrar resultados

---

## 📁 Estructura del proyecto

```plaintext
arkade-trainer/
├── index.html
├── index.css
├── /js
│   ├── main.js
│   ├── game.js
│   ├── player.js
│   ├── ball.js
│   ├── controls.js
│   └── utils/
│       └── color.js
