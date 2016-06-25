myApp.controller('listctrl', function($scope, $routeParams, display) {
    $scope.customers = display.getData();

    

});
