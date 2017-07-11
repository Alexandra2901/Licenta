angular.module('graduationThesis').controller('RegisterBookingsController', function($scope, $mdDialog, item, BookingsFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.booking = item || {};

  $scope.rooms = RoomsFactory.getAllRooms();

  $scope.saveBooking = function() {
    BookingsFactory.addBooking($scope.booking);
    $mdDialog.hide();
  }
});
