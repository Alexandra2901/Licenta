angular.module('graduationThesis').controller('LoginRegisterModalController', function($scope, $mdDialog, UsersFactory) {
  $scope.showHints = true;
  $scope.user =  {};

  $scope.addUser = function() {
    UsersFactory.addUser($scope.user);
    $mdDialog.hide();
  }

});
