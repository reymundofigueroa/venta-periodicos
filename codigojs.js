// Definimos los costos de cada periódico
const infor = 7;
const mural = 20;
const metro = 8;
const milenio = 8;
const occi = 8;
const diario = 5;

// Obtenemos referencias a los elementos de entrada (input) en el DOM
const inputInfor = document.getElementById('infor'); 
const inputMural = document.getElementById('mural');
const inputMetro = document.getElementById('metro');
const inputMilenio = document.getElementById('milenio');
const inputOcci = document.getElementById('occidental');
const inputDiario = document.getElementById('diario');

// Obtenemos referencia al elemento donde se mostrará el total en el DOM
const totalElement = document.getElementById('total');

// Seleccionamos todos los elementos de entrada (input) que son de tipo "number"
const inputs = document.querySelectorAll('.card-container input[type="number"]');

// Definimos una función para calcular el total
function total (){
  // Obtenemos el valor de cada input, si no es un número válido, se asume como 0
  let valueInfor = parseInt(inputInfor.value) || 0;
  let valueMural = parseInt(inputMural.value) || 0;
  let valueMetro = parseInt(inputMetro.value) || 0;
  let valueMilenio = parseInt(inputMilenio.value) || 0;
  let valueOcci = parseInt(inputOcci.value) || 0;
  let valueDiario = parseInt(inputDiario.value) || 0;

  // Calculamos el costo de cada periódico multiplicando su valor por su costo
  let costInfor = valueInfor * infor;
  let costMural = valueMural * mural;
  let costMetro = valueMetro * metro;
  let costMilenio = valueMilenio * milenio;
  let costOcci = valueOcci * occi;
  let costDiario = valueDiario * diario;

  // Calculamos el total sumando los costos individuales de cada periódico
  let totalCost = costInfor + costMural + costMetro + costMilenio + costOcci + costDiario;

  // Mostramos el total en el elemento correspondiente del DOM
  totalElement.innerHTML = `Total: $${totalCost.toFixed(2)}`;
}

// Llamamos a la función 'total' al cargar la página
window.addEventListener('load', total);

// Agregamos un event listener a cada input para que llame a la función 'total' cuando su valor cambie
inputs.forEach(input => {
  input.addEventListener('input', total);
});
