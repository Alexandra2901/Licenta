angular.module('graduationThesis').controller('RatesModalController', function($scope, $mdDialog, item, RatesFactory) {
  $scope.showHints = true;
  $scope.rate =  item || {};

  $scope.types = [
    "Single",
    "Double",
    "Triple"
  ];

  $scope.bathTypes = [
    "Yes",
    "No "
  ];

  $scope.edit = function() {
    RatesFactory.editRate($scope.rate).then(function (result) {
      // Hide the window after the request is finished
      $mdDialog.hide();
    }, function (error) {
      alert("Error!");
    });
  };
  
});
