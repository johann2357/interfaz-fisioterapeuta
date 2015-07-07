angular.module('app').
    controller('HistorialCtrl', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.setCurTab($rootScope.tabs[4]);

            $scope.items = [
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                },
                {
                    fecha: '14 Julio',
                    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo bibendum lacinia. Cras consectetur non libero ac pretium. Ut cursus blandit odio. Etiam at ipsum quis justo sagittis mattis. Quisque efficitur egestas aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor pretium luctus. '
                }
            ];

        }]);
