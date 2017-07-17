angular.module('graduationThesis').controller('RegisterRoomsController', function ($scope, $mdDialog, item, RoomsFactory) {
  $scope.showHints = true;
  $scope.room = item || {};

  $scope.types = [
    "Single",
    "Double",
    "Triple"
  ];

  $scope.bathTypes = [
    "Yes",
    "No "
  ];

  $scope.add = function () {
    RoomsFactory.addRoom($scope.room).then(function (result) {
      // Hide the window after the request is finished
      $mdDialog.hide();
    }, function (error) {
      alert("Error!");
    });

  }

});
