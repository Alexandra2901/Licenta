angular.module('graduationThesis').controller('RatesController', function($scope, RatesFactory, $mdDialog) {

  $scope.rates = [];

  var initData = function() {
    RatesFactory.getAllRates().then(function(result) {
      console.log('Rates ', result.data);
      $scope.rates = result.data;
    }, function(error) {
      alert("Error!");
    });
  }

  $scope.showRatesModal = function(ev, rate) {
    $mdDialog.show({
        locals: {
          item: rate
        },
        controller: "RatesModalController",
        templateUrl: 'dashboard/ratesModal/ratesModalTemplate.html',
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

  $scope.removeRate = function(rate) {
    console.log(rate);
    RatesFactory.remove(rate).then(function (result) {
      initData(); // Refresh data - repopulate the array with the data from the server
    }, function (error) {
      alert("Error!");
    });
  }

  // Load data
  initData();

});
