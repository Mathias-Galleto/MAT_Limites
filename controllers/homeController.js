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
    $scope.algoMas = "<h3>Lim</h3>√(<input type='text' id='a'>x²+<input type='text' id='b'>)<h3>x→</h3><input type='text' id='x' placeholder='a'><button id='button'>Dale al botón</button>";
    $scope.dir = 'funcionSimple.html';
    $scope.algo = function(url) {
        $scope.view=url;
    };
});