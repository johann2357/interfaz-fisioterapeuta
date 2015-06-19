angular.module('app').
    controller('EjerciciosCasaCtrl', [
        '$scope', '$rootScope', '$timeout',
        function ($scope, $rootScope, $timeout) {
            $rootScope.setCurTab($rootScope.tabs[5]);

            $scope.init = function () {
                $(".sortable ul").sortable({
                    revert: 300,
                });
            }

            $scope.init();

        }]);
