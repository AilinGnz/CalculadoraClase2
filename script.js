function sumar() {
    let operand1 = parseFloat(document.getElementById('operand1').value);
    let operand2 = parseFloat(document.getElementById('operand2').value);
    document.getElementById('resultado').value = operand1 + operand2;
  }
  
  function restar() {
    let operand1 = parseFloat(document.getElementById('operand1').value);
    let operand2 = parseFloat(document.getElementById('operand2').value);
    document.getElementById('resultado').value = operand1 - operand2;
  }
  
  function multiplicar() {
    let operand1 = parseFloat(document.getElementById('operand1').value);
    let operand2 = parseFloat(document.getElementById('operand2').value);
    document.getElementById('resultado').value = operand1 * operand2;
  }
  
  function dividir() {
    let operand1 = parseFloat(document.getElementById('operand1').value);
    let operand2 = parseFloat(document.getElementById('operand2').value);
    if (operand2 !== 0) {
      document.getElementById('resultado').value = operand1 / operand2;
    } else {
      alert("Error: No se puede dividir por cero");
    }
  }
  