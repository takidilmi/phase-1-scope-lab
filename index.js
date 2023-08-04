// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
    customerName = customerName.toUpperCase();
  } else {
    console.log("customerName is not a string or not defined!");
  }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'IDK';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'NoOne';    
}

