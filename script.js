function calcularVelocidad() {
    var distancia = parseFloat(document.getElementById('distancia').value);
    var tiempo = parseFloat(document.getElementById('tiempo').value);
    var velocidad = (distancia / tiempo).toFixed(2);
    mostrarResultado("La velocidad es: " + velocidad + " m/s");
  }
  
  function calcularFuerza() {
    var masa = parseFloat(document.getElementById('masa').value);
    var aceleracion = parseFloat(document.getElementById('aceleracion').value);
    var fuerza = (masa * aceleracion).toFixed(2);
    mostrarResultado("La fuerza es: " + fuerza + " N");
  }
  
  function calcularEnergia() {
    var masa = parseFloat(document.getElementById('masaE').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var energiaPotencial = (masa * 9.81 * altura).toFixed(2);
    mostrarResultado("La energía potencial gravitatoria es: " + energiaPotencial + " J");
  }
  
  function calcularVelocidadAngular() {
    var radio = parseFloat(document.getElementById('radio').value);
    var tiempo = parseFloat(document.getElementById('tiempoA').value);
    var velocidadAngular = (2 * Math.PI * radio / tiempo).toFixed(2);
    mostrarResultado("La velocidad angular es: " + velocidadAngular + " rad/s");
  }

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
