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

    when('/tran',{
        templateUrl: 'list/transactionlist.html',
        controller:'tranctrl'
    }).
    when('/print',{
         templateUrl: 'print/printlist.html',
         controller: 'printctrl'
    }).
    otherwise({
        redirectTo: '/list'
    });
});
