

$(document).ready(function(){
  $("#button").click(function(){
      a = $('#a').val();
      b = $('#b').val();
      x = $('#x').val();
      // si c está definido
      var html = location.pathname.split('/').pop();
      if (html == "funcionConDivicion.html") {
        c = $('#c').val();
      }
      else {
        // no importa
        c = "-1";
      }
      var funcionValdada = (validar(a, b, c, x));
      if (funcionValdada) {

        // var resultado = (LimiteSimple(a, b, x))
        // var resultado = (FuncionDivicion(a, b, c, x));
        var resultado = (ordenar(a, b, c, x, html));
        $("#mensaje").text(resultado);
      }else {
          $("#mensaje").text("Debe ingresar valoers válidos para continuar");
      }
  });

  // Validar que la función esté bien escrita
  function validar(a, b, c, x){

    a = a.trim();
    b = b.trim();
    c = c.trim();
    x = x.trim();

    return (isNumber(a)&&isNumber(x)&&isNumber(b)&&isNumber(c));
  }

  function ordenar(a, b, c, x, html){
    switch (html) {
      case "funcionSimple.html":
        return (funcionSimple(a, b, x));
        break;
      case "funcionConDivicion.html":
        return (FuncionConDivicion(a, b, c, x));
        break;
      case "funcionConRaiz.html":
        return funcionConRaiz(a, b, x);
        break;
      case "funcionConRaizDos.html":
        return funcionConRaizDos(a, b, x);
        break;
      default:
        return "algo anda mal xdxdxd";
        break;
    }
  }

// realiza la función sin exponente, división o raiz cuadrada
    function funcionSimple(a, b, x){
      var resultado = parseFloat(a)* parseFloat(x);
      var resultado = parseFloat(resultado) + parseFloat(b)
      return resultado;
    }
// realiza la función con una divición
    function FuncionConDivicion(a, b, c, x){
      var divicion = parseFloat(x)+parseFloat(c);
      if (divicion == 0){
        return "No hay limite en este punto";
      }
      else {
        var resultado = parseFloat(a)*parseFloat(x);
        var resultado = parseFloat(resultado) + parseFloat(b);
        var resultado = parseFloat(resultado) / parseFloat(divicion);
        return resultado;
      }
    }
// realiza la funcion con raiz cuadrada
    function funcionConRaiz(a, b, x){
      var resultado = parseFloat(a)* parseFloat(x);
      var resultado = parseFloat(resultado) + parseFloat(b)
      if (resultado < parseFloat(0)) {
        return "No hay limite en este punto";
      }
      else {
        var resultado = Math.sqrt(resultado);
        return resultado;
      }
    }
// realiza la función con raiz cuadrada y exponente
    function funcionConRaizDos(a, b, x){
      var resultado = parseFloat(a)* parseFloat(Math.pow(x, 2));
      var resultado = parseFloat(resultado) + parseFloat(b)
      if (resultado < parseFloat(0)) {
        return "No hay limite en este punto";
      }
      else {
        var resultado = Math.sqrt(resultado);
        return resultado;
      }
    }
// verifica si es un numero
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

});
