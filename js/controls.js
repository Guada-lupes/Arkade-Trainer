class Controls {
  constructor() {
    this.left = false;
    this.right = false;
    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
        default:
          break;
      }
      
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
        default:
          break;
      }
    });
  }
}
export { Controls };
