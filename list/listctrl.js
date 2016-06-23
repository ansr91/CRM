myApp.controller('listctrl', function($scope, $routeParams, display) {
    $scope.customers = display.getData();

    $scope.delete = function (){
      remove();
    };
    function remove(){
      $scope.customers = display.getData();
      var id = $routeParams.id;
      if(id !== ""){
        $scope.customers.forEach(function(row){
          if(row.name == id){
            $scope.newcustomers = row;
            $scope.customers.splice($scope.newcustomer,1);
          }
        });
      }
    }

    function reset(){
      $scope.newcustomer = {
        name: "",
        sex: "",
        email: ""
      };
    }

    function init(){
      reset();
      $scope.customers = display.getData();
      var id = $routeParams.id;
      if(id !== ""){
        $scope.customers.forEach(function(row){
          if(row.email == id){
            $scope.newcustomer= row;
          }
        });
      }
    }
$scope.tran = function(){
  init();
};
});
