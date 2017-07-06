angular.module('graduationThesis', ['ngMaterial','ngMessages'])
.controller('SpecialOffersController', function() {
  this.startDate = new Date();
  this.endDate = new Date();
  this.isOpen = false;
});;
