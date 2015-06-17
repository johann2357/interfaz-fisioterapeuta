angular.module('app').
    controller('PlanCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[1]);
        }]);
