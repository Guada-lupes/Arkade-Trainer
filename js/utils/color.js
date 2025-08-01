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

    
  return aleatorySymbol()+number;
}

export {getAleatoryColor}