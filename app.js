    var scotchApp = angular.module('scotchApp', ['ngRoute']);
    scotchApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
    scotchApp.controller('mainController', function($scope) {
        $scope.friends =  [
    {
    name:'sajeda',
    desc:"   Software   Devolper"
    },
    {name:'abdulazeez',
    desc:"   Software  Devolper"},
    {name:'muhaned',
    desc:"   Ping pong player "},
    
]

    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
         
    });




