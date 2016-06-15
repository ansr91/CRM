var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/customerdetail', {
        templateUrl: 'customerdetail.html',
        controller: 'customerctrl'
    }).
    otherwise({
        redirectTo: '/customerdetail'
    });
});
