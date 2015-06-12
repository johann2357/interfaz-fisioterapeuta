angular.module('app').
    run(['$rootScope',
        function ($rootScope) {
            $rootScope.patients = [
                {
                    name: "Joe Smith",
                    pic: "media/user1.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 6,
                },
                {
                    name: "Jane Doe",
                    pic: "media/user2.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 4,
                },
                {
                    name: "Axel Rose",
                    pic: "media/user3.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 8,
                },
            ]

            $rootScope.curPatient = $rootScope.patients[0];

            $rootScope.setCurPatient = function (patient) {
                $rootScope.curPatient = patient;
            }
        }
    ]);