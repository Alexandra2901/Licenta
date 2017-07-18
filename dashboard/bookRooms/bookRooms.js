angular.module('graduationThesis').controller('BookRoomsController', function($scope, BookingsFactory, $mdDialog) {

  $scope.bookings = [];

  var initData = function () {
    BookingsFactory.getAllBookings().then(function (result) {
      console.log('Bookings ', result.data);
      $scope.bookings = result.data;
    }, function (error) {
      alert("Error!");
    });
  }

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
        initData(); // Reload data when the popup closes
      }, function() {
      });
  };

  $scope.arrayToString = function(string){
    return string.join(", ");
 };

  $scope.remove = function(booking) {
    console.log(booking);
    BookingsFactory.removeBooking(booking).then(function (result) {
      initData(); // Refresh data - repopulate the array with the data from the server
    }, function (error) {
      alert("Error!");
    });
  }

  // Load data
  initData();

})
