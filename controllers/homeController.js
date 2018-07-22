app.controller('home', function($scope) {
    $scope.view='pageOne';
    $scope.items = {
        btnOne: {
            text: 'f(x) = Ax +b',
            url: 'pageTwo'
        },
        btnTwo: {
            text: 'f(x) = (Ax +B) / (x +C)',
            url: 'pageThree'
        },
        btnThree: {
            text: 'f(x) = √(Ax +b)',
            url: 'pageFour'
        },
        btnFour: {
            text: 'f(x) = √(Ax² +b)',
            url: 'pageFive'
        }
    };
    $scope.dir = 'funcionSimple.html';
    $scope.algo = function(url) {
        $scope.view=url;
    };

    $scope.operate = function(a, b, x, c){
        a = a.aValue;
        b = b.bValue;
        x = x.xValue;

        if ($scope.view == 'pageThree') {
            c = c.cValue;
        }
        else {
            c = "1";
        }

        var funcionValdada = (validar(a, b, c, x));

        if (funcionValdada) {
            var resultado = (ordenar(a, b, c, x, $scope.view));
            $("#mensaje").text(resultado);
        }else {
            $("#mensaje").text("Debe ingresar valoers válidos para continuar");
        }
    }

    function validar(a, b, c, x){
    
        if (a && b && x) {
            a = a.trim();
            b = b.trim();
            c = c.trim();
            x = x.trim();
        
            return (isNumber(a)&&isNumber(x)&&isNumber(b)&&isNumber(c));   
        } else {
            return false;
        }
    }
    
    function ordenar(a, b, c, x, page){
        switch (page) {
            case "pageTwo":
                return (funcionSimple(a, b, x));
                break;
            case "pageThree":
                return (FuncionConDivicion(a, b, c, x));
                break;
            case "pageFour":
                return funcionConRaiz(a, b, x);
                break;
            case "pageFive":
                return funcionConRaizDos(a, b, x);
                break;
            default:
                return "Error";
                break;
        }
    }

        function funcionSimple(a, b, x){
            var resultado = parseFloat(a)*parseFloat(x);
            var resultado = parseFloat(resultado) + parseFloat(b)
            return resultado;
        }

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
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

});

