angular.module('graduationThesis', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope, $mdDialog) {
    $scope.showHints = true;
    $scope.types = [
          "single",
          "double",
          "triple"
      ];
    $scope.room = {
      room: "1",
      type: ""
    };

    var confirm = $mdDialog.confirm()
          .targetEvent(ev)
          .ok('Next')
          .cancel('Finish');
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
      controller: DialogController,
      templateUrl: 'registerRoomsTemplate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      }).then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
        };
  });
