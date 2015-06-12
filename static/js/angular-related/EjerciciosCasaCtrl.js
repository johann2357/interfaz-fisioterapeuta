angular.module('app').
    controller('EjerciciosCasaCtrl', [
        '$scope', '$rootScope', '$timeout',
        function ($scope, $rootScope, $timeout) {
            $rootScope.setCurTab($rootScope.tabs[1]);

            $scope.init = function () {
                $timeout(function () {
                    var gridster = $(".gridster ul").gridster({
                        widget_base_dimensions: [100, 120],
                        widget_margins: [5, 5],
                        draggable: {
                          handle: 'header'
                        }
                    }).data('gridster');
                }, 100);
            }

            $scope.init();

        }]);