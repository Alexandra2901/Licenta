angular.module('graduationThesis').controller('LoginRegisterController', function($scope, UsersFactory, $state) {

  $scope.showHints = true;
  $scope.user = {};

  $scope.addUser = function() {
    UsersFactory.addUser($scope.user);
  }

  $scope.login = function() {
    if ($scope.user.email == "admin@admin.ro" && $scope.user.password == "password") {
      $state.go('manageRooms');
    } else {
      alert('Email or password incorrect!');
    }
  }
});