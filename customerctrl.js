myApp.controller('customerctrl',function($scope, data) {
data.getcustomers().succes(JSON.parse(data));
$scope.customers = data;
$scope.newcustomer = {name:"",
                      sex: "",
                      email:""
                    };

$scope.addcustomer = function addcustomer(){
    var names= $scope.newcustomer.name.split(' ');
    data.addcustomer({
      first_name:names[0],
      last_name:names[1],
      email:$scope.newcustomer.email
    })
    .success(customeraddsuccess).error(customeradderror);
  };
function customeraddsuccess(data){
  $scope.error = null;
  $scope.customers.push(data);
  $scope.newcustomer = {name:"",
                        sex: "",
                        email:""};
}

function customeradderror(data){
  $scope.error= data;
}

});
