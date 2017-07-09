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

  $scope.myFunction = function(){
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

})
