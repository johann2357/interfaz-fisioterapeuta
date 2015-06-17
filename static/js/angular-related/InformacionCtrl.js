angular.module('app').
    controller('InformacionCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[0]);
        }]);
