angular.module('app').
    controller('SesionesSalaCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[2]);

        }]);