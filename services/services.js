myApp.service('display', function() {
  this.getData = function() {
    var customers = window.localStorage.getItem('cus');
    if (customers !== null) {
      customers = JSON.parse(customers);
    } else {
      customers = [];
    }
    return customers;
  };
  this.getProduct = function(){
    var services = window.localStorage.getItem('order');
    if(services !== null){
      services = JSON.parse(services);
    } else {
      services = [];
    }
  };
});
