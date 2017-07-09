var graduationThesis = angular.module("graduationThesis", ["ui.router","ngMaterial"]);


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
        })
        .state('rates', {
            name: "rates",
            url: "/rates",
            templateUrl: "dashboard/rates/rates.html"
        })
        .state('booking', {
            name: "booking",
            url: "/booking",
            templateUrl: "dashboard/bookRooms/bookRooms.html"
        })
        .state('reports', {
            name: "reports",
            url: "/reports",
            templateUrl: "dashboard/reports/reports.html"
        })
        .state('employees', {
            name: "employees",
            url: "/employees",
            templateUrl: "dashboard/manageEmployees/manageEmployees.html"
        }).state('editEmployeesPage', {
            name: "editEmployeesPage",
            url: "/editEmployeesPage",
            templateUrl: "dashboard/employeePage/employee.html"
        });
});
