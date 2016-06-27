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
    when('/delete/:uid',{
         templateUrl:'list/customerlist.html',
         controller: 'customerctrl'
    }).
    when('/tran/:eid',{
        templateUrl: 'list/transactionlist.html',
        controller:'tranctrl'

    }).
    otherwise({
        redirectTo: '/list'
    });
});
