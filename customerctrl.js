myApp.controller('customerctrl',function($scope) {
  reset();
  $scope.customers = [];
  $scope.add = function(){
    $scope.customers.push($scope.customer);
    window.localStorage.setItem('user', JSON.stringify($scope.customers));
    alert("saved successfully");
    reset();
  };
  function reset(){
    $scope.customer={
      name:"",
      sex:"",
      email:""
    };
  }

});
