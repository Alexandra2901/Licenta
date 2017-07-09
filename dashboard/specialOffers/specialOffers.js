angular.module('graduationThesis').controller('SpecialOffersController', function($scope) {
  $scope.easterPrice;
  $scope.christmasPrice;
  $scope.newYearPrice;

 $scope.prices = [];
 $scope.prices[0] = $scope.easterPrice;
 $scope.prices[1] = $scope.christmasPrice;
 $scope.prices[2] = $scope.newYearPrice;

 $scope.addEasterPrice = function() {
   $scope.prices[0] = document.getElementById('easter').value;
 };

 $scope.addChristmasPrice = function() {
   $scope.prices[1] = document.getElementById('christmas').value;
 };

 $scope.addNewYearPrice = function() {
   $scope.prices[2] = document.getElementById('newYear').value;
 };

 console.log($scope.prices);

});;
