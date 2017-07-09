angular.module("graduationThesis").factory("EmployeesFactory", function($rootScope) {

  var employeesObject = {};
  employeesObject.employees = [{
    id: 1,
    firstName: "Mircea",
    lastName: "Scarlatescu",
    job: "Receptionist",
    phone: "0745678903",
    email: "mircea@yahoo.com",
    address: "Unirii 47",
    city: "Bucharest",
    country: "Romania"
  },
{
  id: 2,
  firstName: "Ana",
  lastName: "Scarlatescu",
  job: "Receptionist",
  phone: "0745678903",
  email: "ana@yahoo.com",
  address: "Unirii 47",
  city: "Bucharest",
  country: "Romania"
}];

employeesObject.addEmployee = function(employee) {
     if(employee.id) {
       employeesObject.remove(employee);
     }
     else {
      employee.id = employeesObject.employees[employeesObject.employees.length-1].id +1;
     }
    employeesObject.employees.push(employee);
 };

employeesObject.getAllEmployees = function() {
     return employeesObject.employees;
 };

employeesObject.remove = function(employee) {
     console.log(employee);
     var index = 0;
     for (var i = 0; i < employeesObject.employees.length; i++) {
         if (employeesObject.employees[i].id == employee.id) {
             index = i;
             break;
         }
     }
     employeesObject.employees.splice(index, 1);
 };

return employeesObject;

});
