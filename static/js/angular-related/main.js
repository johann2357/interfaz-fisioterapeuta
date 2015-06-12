var app = angular.module("app", [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/ejercicios-en-casa', {
                controller: 'EjerciciosCasaCtrl',
                templateUrl: 'partials/ejercicios-en-casa.html',
            }).
            when('/sesiones-en-sala', {
                controller: 'SesionesSalaCtrl',
                templateUrl: 'partials/sesiones-en-sala.html',
            }).
            when('/progreso', {
                controller: 'ProgresoCtrl',
                templateUrl: 'partials/progreso.html',
            }).
            otherwise({
                redirectTo: '/ejercicios-en-casa'
            });
    }]);
