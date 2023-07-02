// Importar los módulos para las conversiones
import { celsiusToFahrenheit } from './temperatura.js';
import { metrosToPies } from './distancia.js';
import { kilogramosToLibras } from './peso.js';

// Obtener referencias a los elementos del DOM
const input = document.getElementById('input');
const output = document.getElementById('output');
const select = document.getElementById('select');

// Cargar unidades y valor previamente seleccionados del Local Storage
const unidadGuardada = localStorage.getItem('unidad');
const valorGuardado = localStorage.getItem('valor');
if (unidadGuardada && valorGuardado) {
  select.value = unidadGuardada;
  input.value = valorGuardado;
}

// Agregar evento de cambio al selector de unidades
select.addEventListener('change', convertir);

// Función para realizar la conversión
function convertir() {
  const valor = parseFloat(input.value);

  if (isNaN(valor)) {
    output.textContent = 'Ingrese un valor numérico';
    return;
  }

  const unidad = select.value;
  let resultado;

  switch (unidad) {
    case 'celsiusToFahrenheit':
      resultado = celsiusToFahrenheit(valor);
      output.textContent = `${valor} °C = ${resultado} °F`;
      break;
    case 'metrosToPies':
      resultado = metrosToPies(valor);
      output.textContent = `${valor} metros = ${resultado} pies`;
      break;
    case 'kilogramosToLibras':
      resultado = kilogramosToLibras(valor);
      output.textContent = `${valor} kg = ${resultado} lb`;
      break;
    default:
      output.textContent = 'Seleccione una conversión';
  }

  // Guardar unidad y valor seleccionados en el Local Storage
  localStorage.setItem('unidad', unidad);
  localStorage.setItem('valor', valor);
}

// Ejecutar la conversión cuando se presiona el botón de convertir
document.getElementById('convertir-btn').addEventListener('click', convertir);
