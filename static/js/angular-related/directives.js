angular.module('app').
    directive('patientProfile', function () {
        return {
            templateUrl: 'partials/patient-profile.html',
        };
    }).

    directive('patientTabs', function () {
        return {
            templateUrl: 'partials/patient-tabs.html',
        };
    });