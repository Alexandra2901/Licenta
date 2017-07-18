angular.module('graduationThesis').controller('ManageRoomsController', function ($scope, RoomsFactory, $mdDialog) {

  $scope.rooms = [];

  var initData = function () {
    RoomsFactory.getAllRooms().then(function (result) {
      console.log('Rooms ', result.data);
      $scope.rooms = result.data;
    }, function (error) {
      alert("Error!");
    });
  }

  $scope.showAdvanced = function (ev, room) {
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
      .then(function (answer) {
        initData(); // Reload data when the popup closes
      }, function () {
      });
  };

  $scope.removeItem = function (room) {
    console.log(room);
    RoomsFactory.remove(room).then(function (result) {
      initData(); // Refresh data - repopulate the array with the data from the server
    }, function (error) {
      alert("Error!");
    });
    //$scope.rooms = RoomsFactory.getAllProducts();
  }

  // Load data
  initData();

});
