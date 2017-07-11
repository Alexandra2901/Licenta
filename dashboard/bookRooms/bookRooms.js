angular.module('graduationThesis').controller('BookRoomsController', function($scope, BookingsFactory, $mdDialog) {

  $scope.bookings = BookingsFactory.getAllBookings();
  console.log($scope.bookings);

  $scope.showModal = function(ev, booking) {
    $mdDialog.show({
        locals: {
          item: booking
        },
        controller: "RegisterBookingsController",
        templateUrl: 'dashboard/register-bookings/registerBookings.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {

      }, function() {

      });
  };

  $scope.arrayToString = function(string){
    return string.join(", ");
 };

  $scope.remove = function(booking) {
    console.log(booking);
    BookingsFactory.removeBooking(booking);
    $scope.bookings = BookingsFactory.getAllBookings();
  }

})
