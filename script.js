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
