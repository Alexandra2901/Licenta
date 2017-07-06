var graduationThesis = angular.module("graduationThesis", ["ui.router"]);


graduationThesis.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('manageRooms', {
            name: "manageRooms",
            url: "/manageRooms",
            templateUrl: "dashboard/manageRooms/manageRooms.html"
        })
        .state('specialOffers', {
            name: "specialOffers",
            url: "/specialOffers",
            templateUrl: "dashboard/specialOffers/specialOffers.html"
        });
});
