function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
  }
  
  function mostrarEntradas(opcion) {
    var entradasHTML = '';
    switch (opcion) {
      case 'velocidad':
        entradasHTML = `
          <div>
            <label for="distancia">Distancia (m): </label>
            <input type="number" id="distancia">
            <br>
            <label for="tiempo">Tiempo (s): </label>
            <input type="number" id="tiempo">
          </div>
        `;
        break;
      case 'fuerza':
        entradasHTML = `
          <div>
            <label for="masa">Masa (kg): </label>
            <input type="number" id="masa">
            <br>
            <label for="aceleracion">Aceleración (m/s^2): </label>
            <input type="number" id="aceleracion">
          </div>
        `;
        break;
      case 'energia':
        entradasHTML = `
          <div>
            <label for="masaE">Masa (kg): </label>
            <input type="number" id="masaE">
            <br>
            <label for="altura">Altura (m): </label>
            <input type="number" id="altura">
          </div>
        `;
        break;
      case 'velocidad_angular':
        entradasHTML = `
          <div>
            <label for="radio">Radio (m): </label>
            <input type="number" id="radio">
            <br>
            <label for="tiempoA">Tiempo (s): </label>
            <input type="number" id="tiempoA">
          </div>
        `;
        break;
      default:
        break;
    }
    document.getElementById('entradas').innerHTML = entradasHTML;
    document.getElementById('calcular').innerHTML = '<button onclick="calcularResultado(\'' + opcion + '\')">Calcular</button>';
  }
  
  function calcularResultado(opcion) {
    switch (opcion) {
      case 'velocidad':
        calcularVelocidad();
        break;
      case 'fuerza':
        calcularFuerza();
        break;
      case 'energia':
        calcularEnergia();
        break;
      case 'velocidad_angular':
        calcularVelocidadAngular();
        break;
      default:
        break;
    }
  }
