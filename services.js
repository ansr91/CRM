myApp.service('customerService',function() {
  var uid = 1 ;
  var customers = [];
  var customer = {
       id : 0 ,
       name: "",
       sex : "",
       email: ""
  };
  this.save = function(){
    if(customer.id === null){
      customer.id = uid++;
      customers.push(customer);
      window.localStorage.setItem('user',JSON.stringify(customers));
    }else{
      for (i in customers) {
        if(customers[i].id == customer.id){
          customer[i] = customer;
        }
      }
    }
  };
  this.get = function(id){
    var customers = window.localStorage.getItem('user');
    for(i in customers){
      if (customers[i].id == customer.id){
        customers = JSON.parse(customers);
        return customers[i];
      }
    }
  };
  this.delete = function(id){
    for(i in customers) {
      if(customers[i].id == id){
        customers.splice(i, 1);
      }
    }
  };
  this.list = function(){
    customers=window.localStorage.getItem('user');
    customers=JSON.parse(customers);
    return customers;
  };
});
