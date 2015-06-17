angular.module('app').
    controller('HistorialCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[4]);
        }]);
