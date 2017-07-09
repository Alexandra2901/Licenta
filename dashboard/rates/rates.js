angular.module('graduationThesis').controller('RatesController', function($scope, RatesFactory, $mdDialog) {

  $scope.rates =RatesFactory.getAllRates();
  console.log($scope.rates);

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

      }, function() {

      });
  };

  $scope.removeRate = function(rate) {
    console.log(rate);
    RatesFactory.remove(rate);
    $scope.rates = RatesFactory.getAllRates();
  }

})
