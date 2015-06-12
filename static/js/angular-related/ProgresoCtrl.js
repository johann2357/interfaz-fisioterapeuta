angular.module('app').
    controller('ProgresoCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[0]);

        }]);