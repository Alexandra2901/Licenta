angular.module('graduationThesis').controller('EmployeeController', function($scope, EmployeesFactory) {
  $scope.showHints = true;
  $scope.employee =  {};

  $scope.add = function() {
    EmployeesFactory.addEmployee($scope.employee);
  }

});
