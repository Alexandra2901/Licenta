angular.module('graduationThesis').controller('BookRoomsController', function($scope, BookingsFactory, $mdDialog) {

  $scope.bookings = [];

  var initData = function() {
    BookingsFactory.getAllBookings().then(function(result) {
      console.log('Bookings ', result.data);
      $scope.bookings = result.data;
    }, function(error) {
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
      }, function() {});
  };

  $scope.arrayToString = function(string) {
    return string.join(", ");
  };

  $scope.remove = function(booking) {
    console.log(booking);
    BookingsFactory.removeBooking(booking).then(function(result) {
      initData(); // Refresh data - repopulate the array with the data from the server
    }, function(error) {
      alert("Error!");
    });
  }

  // Load data
  initData();

}).filter('myFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, searchBox) {

    if(!searchBox) {
      return input;
    }

    var output = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].name.indexOf(searchBox) > -1
      || input[i].checkin.split('T')[0].indexOf(searchBox) > -1
      || input[i].checkout.split('T')[0].indexOf(searchBox) > -1
      || input[i].phone.indexOf(searchBox) > -1) {
        output.push(input[i]);
      }
      else {
        var added = false;
        for(var j=0;j<input[i].rooms.length;j++) {
          if(input[i].rooms[j].name.indexOf(searchBox) > -1 && !added) {
            output.push(input[i]);
            added = true;
          }
        }
      }
    }

    return output;

  }

});
