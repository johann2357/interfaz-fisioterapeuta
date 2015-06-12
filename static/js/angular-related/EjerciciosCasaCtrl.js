angular.module('app').
    controller('EjerciciosCasaCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[1]);

            $scope.init = function () {
                var gridster = $(".gridster ul").gridster({
                    widget_base_dimensions: [100, 120],
                    widget_margins: [5, 5],
                    draggable: {
                      handle: 'header'
                    }
                }).data('gridster');
            }

            $scope.init();

        }]);