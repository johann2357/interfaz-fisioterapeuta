angular.module('app').
    run(['$rootScope',
        function ($rootScope) {
            var exercises = [
                {
                    name: "Dominadas",
                    pic: "static/images/exercises/dominadas.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Estiramiento de espalda",
                    pic: "static/images/exercises/estiramiento-de-espalda.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Estiramiento de gluteos",
                    pic: "static/images/exercises/estiramiento-de-gluteos.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Estiramiento de pantorrilla",
                    pic: "static/images/exercises/estiramiento-de-pantorrilla.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Estiramiento de pierna",
                    pic: "static/images/exercises/estiramiento-de-pierna.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Planchas",
                    pic: "static/images/exercises/planchas.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Planchas con aplauso",
                    pic: "static/images/exercises/planchas-con-aplauso.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Sentadillas",
                    pic: "static/images/exercises/sentadillas.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
                {
                    name: "Sentadillas con barra",
                    pic: "static/images/exercises/sentadillas-con-barra.jpg",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
            ];

            $rootScope.patients = [
                {
                    name: "Joe Smith",
                    pic: "media/user1.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 6,
                    exercises: exercises,
                },
                {
                    name: "Jane Doe",
                    pic: "media/user2.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 4,
                    exercises: exercises,
                },
                {
                    name: "Axel Rose",
                    pic: "media/user3.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 8,
                    exercises: exercises,
                },
            ];
            $rootScope.curPatient = $rootScope.patients[0];

            $rootScope.setCurPatient = function (patient) {
                $rootScope.curPatient = patient;
            };

            $rootScope.tabs = [
                {
                    name: "Información",
                    href: "#informacion",
                },
                {
                    name: "Plan de tratamiento",
                    href: "#plan-de-tratamiento",
                },
                {
                    name: "Evolución semanal",
                    href: "#evolucion-semanal",
                },
                {
                    name: "Progreso",
                    href: "#progreso",
                },
                {
                    name: "Historial",
                    href: "#historial",
                },
                {
                    name: "Ejercicios en casa",
                    href: "#ejercicios-en-casa",
                },
            ];
            $rootScope.curTab = $rootScope.tabs[0];

            $rootScope.setCurTab = function (tab) {
                $rootScope.curTab = tab;
            };

        }
    ]);