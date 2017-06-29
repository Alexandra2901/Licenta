angular.module('graduationThesis', ['ngMaterial','ngMessages'])
.controller('specialOffersController', function() {
  this.startDate = new Date();
  this.endDate = new Date();
  this.isOpen = false;
});;
