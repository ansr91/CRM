myApp.controller('customerctrl', function($scope, $routeParams, display) {
  init();

  $scope.addcustomer = function() {
    if ($scope.editIndex !== -1) {
      $scope.customers[$scope.editIndex] = $scope.newcustomer;
    } else {
      $scope.customers.push($scope.newcustomer);
    }
    window.localStorage.setItem('cus', JSON.stringify($scope.customers));
    alert('Customer Added Succesfully');
    reset();
  };

  function reset() {
    $scope.newcustomer = {
      name: "",
      sex: "",
      email: "",
      product:[{
        name: "",
        price:""
      }]
    };
  }

  function init() {
    $scope.editIndex = -1;
    reset();
    $scope.customers = display.getData();
    var id = $routeParams.id || "";
    if (id !== "") {
      $scope.customers.forEach(function(row, k) {
        if (row.name == id) {
          $scope.newcustomer = row;
          $scope.editIndex = k;
        }
      });
    }

    var eid = $routeParams.eid || "";
    if (eid !== "") {
      $scope.customers.forEach(function(row, k) {
        if (row.email == eid) {
          $scope.newcustomer = row;
          $scope.editIndex = k;
        }
      });
    }

  }
<<<<<<< HEAD
  $scope.services = [];
  $scope.addtran = function(){
    $scope.services.push($scope.service);
    window.localStorage.setItem('order', JSON.stringify($scope.services));
      $scope.service={
      title: "",
      price: ""
    };
};


   $scope.total=function(){
    var t = 0;
    angular.forEach($scope.services, function(s){
      if(s.selected)
      t+=s.price;
    });
    return t;
  };

  $scope.services = display.getProduct();

=======
$scope.remove = function(index){
  $scope.customers = dispaly.getData();
  $scope.customers.splice(index,1);
};
>>>>>>> 61693aeb9368e6af11b9e107fcd8a37c1b3c38ef
});
