angular.module('graduationThesis').controller('RegisterBookingsController', function($scope, BookingsFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.booking = {};

  $scope.rooms = RoomsFactory.getAllRooms();

  $scope.clearSearchTerm = function() {
       $scope.searchTerm = '';
  };

  // $element.find('input').on('keydown', function(ev) {
  //         ev.stopPropagation();
  // });

  $scope.selected = [];
  $scope.toggle = function(item, list) {
    var index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(item);
    }
  };

  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };

  $scope.addBooking = function() {
    var savedBooking = {};
    savedBooking.checkin = document.getElementById('Checkin').value;
    savedBooking.checkout = document.getElementById('Checkout').value;
    savedBooking.rooms = $scope.selected;
    savedBooking.name = document.getElementById('OccupantName').value;
    savedBooking.phone = document.getElementById('OccupantPhone').value;
    BookingsFactory.addBooking(savedBooking);
  }
});
