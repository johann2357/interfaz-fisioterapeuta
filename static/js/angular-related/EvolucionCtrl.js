angular.module('app').
    controller('EvolucionCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[2]);
        }]);
