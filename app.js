var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'list/customerlist.html',
        controller: 'listctrl'
    }).
    when('/add',{
        templateUrl:'customerdetail/customerdetail.html',
        controller: 'customerctrl'
    }).
    when('/edit/:id',{
         templateUrl:'customerdetail/customerdetail.html',
         controller: 'customerctrl'
    }).
    when('/delete/:id',{
         templateUrl:'list/customerlist.html',
         controller: 'listctrl'
    }).
    when('/tran/:id',{
        templateUrl: 'list/transactionlist.html',
        controller:'customerctrl'

    }).
    otherwise({
        redirectTo: '/list'
    });
});
