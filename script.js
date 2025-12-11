function calcularFrete() {
  var diesel = parseFloat(document.getElementById("diesel").value);
  var kmL = parseFloat(document.getElementById("kmL").value);
  var fator = parseFloat(document.getElementById("fator").value);
  var kmRodados = parseFloat(document.getElementById("kmRodados").value);
  var pedagio = parseFloat(document.getElementById("pedagio").value);
  var aet = parseFloat(document.getElementById("aet").value);
  var outrosCustos = parseFloat(document.getElementById("outrosCustos").value);
  var impostos = parseFloat(document.getElementById("impostos").value);

  var valorKmRodado = (diesel / kmL) * fator;
  var percentualDiesel = (diesel / kmL) / valorKmRodado;
  var custoInicial = kmRodados * valorKmRodado;
  var escolta = valorKmRodado * 2;
  var custoTotal = custoInicial + pedagio + aet + escolta + outrosCustos;
  var custoFinal = custoTotal * (1 + impostos / 100);

  document.getElementById("valorKmRodado").innerText = valorKmRodado.toFixed(2);
  document.getElementById("percentualDiesel").innerText = (percentualDiesel * 100).toFixed(2) + '%';
  document.getElementById("custoInicial").innerText = custoInicial.toFixed(2);
  document.getElementById("escolta").innerText = escolta.toFixed(2);
  document.getElementById("custoTotal").innerText = custoTotal.toFixed(2);
  document.getElementById("custoFinal").innerText = custoFinal.toFixed(2);

  document.getElementById("resultadoFinal").innerText = "R$ " + custoFinal.toFixed(2);
}
