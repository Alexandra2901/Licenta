angular.module('graduationThesis').controller('LoginRegisterController', function($scope, UsersFactory) {

  $scope.showHints = true;
  $scope.user =  {};

  $scope.addUser = function() {
    UsersFactory.addUser($scope.user);
  }
});
