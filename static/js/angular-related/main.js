var app = angular.module("app", [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/ejercicios-en-casa', {
                templateUrl: 'partials/ejercicios-en-casa.html',
            }).
            when('/sesiones-en-sala', {
                templateUrl: 'partials/sesiones-en-sala.html',
            }).
            when('/progreso', {
                templateUrl: 'partials/progreso.html',
            }).
            otherwise({
                redirectTo: '/ejercicios-en-casa'
            });
    }]);
