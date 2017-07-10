var myApplication = angular.module("myApplication", ["ui.router", "ngMaterial"]);

myApplication.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      name: "login",
      url: "/",
      templateUrl: "login_register_modal/login_register_modal.html"
    })
    .state('indexApplication', {
      name: "indexApplication",
      url: "/indexApplication",
      templateUrl: "app/indexApplication.html"
    });
}]);
