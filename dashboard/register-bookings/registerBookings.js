angular.module('graduationThesis').controller('RegisterBookingsController', function($scope, $mdDialog, item, BookingsFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.booking = item || {};

  $scope.rooms = RoomsFactory.getAllRooms();

  $scope.clearSearchTerm = function() {
       $scope.searchTerm = '';
  };

  // $element.find('input').on('keydown', function(ev) {
  //         ev.stopPropagation();
  // });

  $scope.saveBooking = function() {
    BookingsFactory.addBooking($scope.booking);
    $mdDialog.hide();
  }
});
