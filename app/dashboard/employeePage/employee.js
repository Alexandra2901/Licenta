angular.module('graduationThesis').controller('EmployeeController', function($scope, EmployeesFactory, $stateParams) {
  $scope.showHints = true;
  $scope.id = $stateParams.idEmployee;
  var employees = EmployeesFactory.getAllEmployees();
  $scope.employee = employees[$scope.id-1] || {};
  console.log($scope.employee);

  $scope.add = function() {
    EmployeesFactory.addEmployee($scope.employee);
  }

});
