angular.module('app').
    controller('EvolucionCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[2]);

            $scope.items = [
                {
                    fecha: '4 Julio',
                    data: 'El paciente pudo realizar la sesion de ejercicios propuestos sin dolor, tambien hizo los ejercicios en la casa por lo que se vio una mejora substancial'
                },
                {
                    fecha: '27 Junio',
                    data: 'El paciente menciono que sentia unos dolores en la espalda baja por lo que se limito a la mitad la cantidad de repeticiones de los ejercicios que involucren la espalda baja'
                },
                {
                    fecha: '20 Junio',
                    data: 'El paciente asistio a sus primeras terapias, mostro un gran entusiasmo por aprender los ejercicios y los realizo todos los ejercicios propuestos en las sesiones'
                }
            ];

        }]);
