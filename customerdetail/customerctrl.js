myApp.controller('customerctrl',function($scope, $routeParams, display) {
init();

$scope.addcustomer = function (){
  $scope.customers.push($scope.newcustomer);
  window.localStorage.setItem('cus',JSON.stringify($scope.customers));
  alert('Customer Added Succesfully');
  reset();
};

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
      if(row.name == id){
        $scope.newcustomer= row;
      }
    });
  }
}

function tran(){
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

tran();


});
