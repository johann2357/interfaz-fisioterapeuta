var app = angular.module("app", [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/informacion', {
                controller: 'InformacionCtrl',
                templateUrl: 'partials/informacion.html',
            }).
            when('/plan-de-tratamiento', {
                controller: 'PlanCtrl',
                templateUrl: 'partials/plan.html',
            }).
            when('/evolucion-semanal', {
                controller: 'EvolucionCtrl',
                templateUrl: 'partials/evolucion.html',
            }).
            when('/progreso', {
                controller: 'ProgresoCtrl',
                templateUrl: 'partials/progreso.html',
            }).
            when('/historial', {
                controller: 'HistorialCtrl',
                templateUrl: 'partials/historial.html',
            }).

            when('/ejercicios-en-casa', {
                controller: 'EjerciciosCasaCtrl',
                templateUrl: 'partials/ejercicios-en-casa.html',
            }).
            otherwise({
                redirectTo: '/informacion'
            });
    }]);
