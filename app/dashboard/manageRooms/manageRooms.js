angular.module('graduationThesis').controller('ManageRoomsController', function($scope, RoomsFactory, $mdDialog) {

  $scope.rooms = RoomsFactory.getAllRooms();

  $scope.showAdvanced = function(ev, room) {
    $mdDialog.show({
        locals: {
          item: room
        },
        controller: "RegisterRoomsController",
        templateUrl: 'dashboard/register-rooms/registerRoomsTemplate.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {

      }, function() {

      });
  };

  $scope.removeItem = function(room) {
    console.log(room);
    RoomsFactory.remove(room);
    $scope.rooms = RoomsFactory.getAllProducts();
  }

});
