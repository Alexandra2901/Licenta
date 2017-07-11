angular.module('graduationThesis').controller('LoginRegisterController', function($scope, UsersFactory, $mdDialog) {

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
        controller: "LoginRegisterModalController",
        templateUrl: 'dashboard/login_register_modal/login_register_modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {

      }, function() {

      });
  };
});
