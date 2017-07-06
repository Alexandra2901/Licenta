var graduationThesis = angular.module("graduationThesis", ["ui.router", "ngRoute"]);


graduationThesis.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "manageRooms/manageRooms.html"
        })
        .when("/specialOffers", {
            templateUrl: "specialOffers/specialOffers.html"
        })
        .when("/rates", {
            templateUrl: "rates/rates.html"
        })
        .when("/bookRooms", {
            templateUrl: "bookRooms/bookRooms.html"
        })
        .when("/reports", {
            templateUrl: "reports/reports.html"
        })
        .when("/manageEmployees", {
            templateUrl: "manageEmployees/manageEmployees.html"
        })
        .otherwise("/#", {
          templateUrl: "index.html"
        });
});
