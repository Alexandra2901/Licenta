angular.module('graduationThesis').controller('RegisterBookingsController', function ($scope, $mdDialog, item, BookingsFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.booking = {};
  if (item) {
    angular.copy(item, $scope.booking);
  }

  if ($scope.booking.rooms) {
    var roomsIds = [];
    for (var i = 0; i < $scope.booking.rooms.length; i++) {
      roomsIds.push($scope.booking.rooms[i]._id);
    }
    $scope.booking.rooms = roomsIds;
  }


  $scope.rooms = [];
  var initRooms = function () {
    RoomsFactory.getAllRooms().then(function (result) {
      console.log('Rooms ', result.data);
      $scope.rooms = result.data;
    }, function (error) {
      alert("Error!");
    });
  };
  initRooms();

  $scope.saveBooking = function () {
    BookingsFactory.addBooking($scope.booking).then(function (result) {
      // Hide the window after the request is finished
      $mdDialog.hide();
    }, function (error) {
      alert("Error!");
    });
  }
});
