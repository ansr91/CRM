myApp.controller('tranctrl', function($scope, display){

$scope.addtran = function(){
  $scope.services.push($scope.service);
  window.localStorage.setItem('order', JSON.stringify($scope.services));
    $scope.service={
    title: "",
    price: "",
    name: "",
    email: ""
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
});
