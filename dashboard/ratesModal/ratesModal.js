angular.module('graduationThesis').controller('RatesModalController', function ($scope, $mdDialog, item, RatesFactory, RoomsFactory) {
  $scope.showHints = true;
  $scope.rooms = [];
  $scope.rate = {};

  var initData = function () {
    RoomsFactory.getAllRooms().then(function (result) {
      console.log('Rooms ', result.data);
      $scope.rooms = result.data;
      if (item) {
        angular.copy(item, $scope.rate);
        $scope.rate.roomId = $scope.rate.room._id;
      }
    }, function (error) {
      alert("Error!");
    });
  }

  $scope.types = [
    "Single",
    "Double",
    "Triple"
  ];

  $scope.bathTypes = [
    "Yes",
    "No "
  ];

  $scope.$watch('rate.roomId', function (newValue, oldValue) {
    var room = {};
    for (var r = 0; r < $scope.rooms.length; r++) {
      if (newValue == $scope.rooms[r]._id) {
        $scope.rate.room = $scope.rooms[r];
      }
    }
  });

  $scope.edit = function () {
    $scope.rate.room = $scope.rate.roomId;
    RatesFactory.editRate($scope.rate).then(function (result) {
      // Hide the window after the request is finished
      $mdDialog.hide();
    }, function (error) {
      alert("Error!");
    });
  };


  initData();
});
