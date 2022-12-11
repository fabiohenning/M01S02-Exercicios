var numero = parseInt(prompt('Informe o número'));

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  var resultado = '';

  for (var i = 0; i != -1;) {
    resultado += numero + ' x ' + i + ' = ' + numero * i + '\n';
  }
  alert(resultado);
}
