var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'customerdetail.html',
        controller: 'customerctrl'
    }).
    when('/customer/:id',{
         templateUrl:'customerdetail.html',
         controller: 'customerctrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});
