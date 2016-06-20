myApp.controller('customerctrl',function($scope) {
$scope.customers = [ ];
$scope.newcustomer = {
  id: "",
  name: "",
  sex: "",
  email: ""
};
$scope.addcustomer = function (){
  $scope.customers.push($scope.newcustomer);
  window.localStorage.setItem('cus',JSON.stringify($scope.customers));
  alert('Customer Added Succesfully');
  $scope.newcustomer = {
    id: "" ,
    name:"",
    sex: "",
    email: ""
  };
};


$scope.edit = function(){
  var obj = window.localStorage.getItem('cus');
  $scope.customers= JSON.parse(obj);
  var i = $scope.customers.length;
  if($scope.customers[i].id==$scope.newcustomer.id){
    $scope.newcustomer = angular.copy($scope.customers[i]);
    }
};

$scope.show = function(){
  var customers = window.localStorage.getItem('cus');
  if (customers !== null) {
    customers = JSON.parse(customers);
  } else {
    customers = [];
  }
  $scope.customers=customers;
};
 });
