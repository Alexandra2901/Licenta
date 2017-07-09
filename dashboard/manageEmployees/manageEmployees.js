angular.module('graduationThesis').controller('ManageEmployeesController', function($scope, EmployeesFactory, $mdDialog){
  $scope.employees = EmployeesFactory.getAllEmployees();

  $scope.removeEmployee = function(employee) {
    console.log(employee);
    EmployeesFactory.remove(employee);
    $scope.employees = EmployeesFactory.getAllEmployees();
  }
})
