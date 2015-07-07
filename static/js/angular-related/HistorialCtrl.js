angular.module('app').
    controller('HistorialCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[4]);

            $scope.items = [
                {
                    fecha: '3 Julio',
                    data: 'El paciente menciono que realizo ejercicios de la casa y termino normalmente la sesion de hoy'
                },
                {
                    fecha: '2 Julio',
                    data: 'El paciente se canso en los ultimos ejercicios, sin embargo luego de un descanso logro terminar la sesion'
                },
                {
                    fecha: '1 Julio',
                    data: 'Se incrementaron el numero de repeticiones de cada ejercicio (2 mas) no mostro problemas en completar nueva rutina'
                },
                {
                    fecha: '30 Junio',
                    data: 'Se realizo la sesion sin ningun sobresalto y se termino en el tiempo deseado'
                },
                {
                    fecha: '29 Junio',
                    data: 'Se pudo recuperar la cantidad de repeticiones iniciales, ya se recupero de las molestias de la espalda al hacer los ejercicios'
                },
                {
                    fecha: '26 Julio',
                    data: 'La cantidad de ejercicios se aumenta gradualmente, hoy es el ultimo aumento gradual para volver a la rutina inicial'
                },
                {
                    fecha: '25 Julio',
                    data: 'Los ejercicios se redujeron a la mitad debido a que se presento dolores en la espalda'
                },
                {
                    fecha: '24 Julio',
                    data: 'La sesion fue hecha sin ningun inconveniente'
                }
            ];

        }]);
