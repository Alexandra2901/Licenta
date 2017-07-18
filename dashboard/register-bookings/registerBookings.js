angular.module('graduationThesis').controller('RegisterBookingsController', function($scope, $mdDialog, item, BookingsFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.booking = item || {};

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

  $scope.saveBooking = function() {
    BookingsFactory.addBooking($scope.booking).then(function (result) {
      // Hide the window after the request is finished
      $mdDialog.hide();
    }, function (error) {
      alert("Error!");
    });
  }
});
