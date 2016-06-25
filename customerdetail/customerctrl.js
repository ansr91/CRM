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
      email: ""
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

});
