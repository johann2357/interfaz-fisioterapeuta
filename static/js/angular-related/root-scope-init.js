angular.module('app').
    run(['$rootScope',
        function ($rootScope) {
            var exercises = [
                {
                    name: "Williams 1",
                    pic: "static/images/exercises/williams1.png",
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
                    pic: "static/images/exercises/gluteos.jpg",
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
                    name: "Williams 2",
                    pic: "static/images/exercises/williams2.png",
                    series: 3,
                    reps: 10,
                    time: 5,
                },
            ];

            $rootScope.patients = [
                {
                    name: "Joe Smith",
                    age: 35,
                    job: "Obrero",
                    phone: 98788555,
                    goal: "Jugar futbol",
                    pic: "media/user1.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 6,
                    exercises: exercises,
                },
                {
                    name: "Jane Doe",
                    age: 45,
                    job: "Catedratico",
                    phone: 98788555,
                    goal: "Caminar normalmente",
                    pic: "media/user2.jpg",
                    desease: "Hernia Lumbar L2",
                    day: 4,
                    exercises: exercises,
                },
                {
                    name: "Axel Rose",
                    age: 25,
                    job: "Modelo",
                    phone: 98788555,
                    goal: "Ir al gym para conservar la figura",
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