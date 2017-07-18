angular.module("graduationThesis").factory("BookingsFactory", function($rootScope, $http, $q) {

  var bookingsObject = {};
  bookingsObject.bookings = [];
  // {
  //     id: 1,
  //     checkin: new Date("July 21, 2017"),
  //     checkout: new Date("July 23, 2017"),
  //     rooms: ["Room 1", "Room 3"],
  //     name: "Popescu Ana",
  //     phone: "0745657876"
  //   },
  //   { id: 2,
  //     checkin: new Date("July 8, 2017"),
  //     checkout: new Date("July 15, 2017"),
  //     rooms: ["Room 1", "Room 2"],
  //     name: "Popescu Ioana",
  //     phone: "0745657876"
  //   },
  //   { id: 3,
  //     checkin: new Date("August 11, 2017"),
  //     checkout: new Date("August 16, 2017"),
  //     rooms: ["Room 4", "Room 10"],
  //     name: "Ionescu AnaMaria",
  //     phone: "0745657876"
  //   },
  //   { id: 4,
  //     checkin: new Date("August 3, 2017"),
  //     checkout: new Date("August 6, 2017"),
  //     rooms: ["Room 7", "Room 8"],
  //     name: "Deaconescu Maria",
  //     phone: "0745657876"
  //   },
  //   { id: 5,
  //     checkin: new Date("August 23, 2017"),
  //     checkout: new Date("August 26, 2017"),
  //     rooms: ["Room 2", "Room 3", "Room 4", "Room 5", "Room 6"],
  //     name: "Costachescu Bogdan",
  //     phone: "0745657876"
  //   },
  //   { id: 6,
  //     checkin: new Date("January 11, 2017"),
  //     checkout: new Date("January 16, 2017"),
  //     rooms: ["Room 5"],
  //     name: "Pusca Alexandra",
  //     phone: "0745657876"
  //   },
  //   { id: 7,
  //     checkin: new Date("March 2, 2017"),
  //     checkout: new Date("March 16, 2017"),
  //     rooms: ["Room 2", "Room 5", "Room 7", "Room 8", "Room 9", "Room 10"],
  //     name: "Apetrei Victor",
  //     phone: "0745657876"
  //   },
  //   { id: 8,
  //     checkin: new Date("May 11, 2017"),
  //     checkout: new Date("May 16, 2017"),
  //     rooms: ["Room 3"],
  //     name: "Ionascu Diana",
  //     phone: "0745657876"
  //   },
  //   { id: 9,
  //     checkin: new Date("May 21, 2017"),
  //     checkout: new Date("May 26, 2017"),
  //     rooms: ["Room 4"],
  //     name: "Georgescu Alexandra",
  //     phone: "0745657876"
  //   },
  //   { id: 10,
  //     checkin: new Date("April 1, 2017"),
  //     checkout: new Date("April 6, 2017"),
  //     rooms: ["Room 1", "Room 2", "Room 3", "Room 4", "Room 10"],
  //     name: "Cireasa Mihai",
  //     phone: "0745657876"
  //   },
  //   { id: 11,
  //     checkin: new Date("June 11, 2017"),
  //     checkout: new Date("June 16, 2017"),
  //     rooms: ["Room 2", "Room 3"],
  //     name: "Pantelimon Florin",
  //     phone: "0745657876"
  //   },
  //   { id: 12,
  //     checkin: new Date("April 21, 2017"),
  //     checkout: new Date("April 26, 2017"),
  //     rooms: ["Room 2"],
  //     name: "Tudorache Andreea",
  //     phone: "0745657876"
  //   },
  //   { id: 13,
  //     checkin: new Date("September 11, 2017"),
  //     checkout: new Date("September 16, 2017"),
  //     rooms: ["Room 2", "Room 3", "Room 4"],
  //     name: "Constantin Alice",
  //     phone: "0745657876"
  //   },
  //   { id: 14,
  //     checkin: new Date("September 1, 2017"),
  //     checkout: new Date("September 6, 2017"),
  //     rooms: ["Room 2", "Room 9"],
  //     name: "Constantin Doinita",
  //     phone: "0745657876"
  //   },
  //   { id: 15,
  //     checkin: new Date("August 5, 2017"),
  //     checkout: new Date("August 6, 2017"),
  //     rooms: ["Room 10"],
  //     name: "Predescu Eduard",
  //     phone: "0745657876"
  //   },
  //   { id: 16,
  //     checkin: new Date("July 1, 2017"),
  //     checkout: new Date("July 6, 2017"),
  //     rooms: ["Room 2", "Room 4", "Room 7", "Room 8"],
  //     name: "Bisag Alexandru",
  //     phone: "0745657876"
  //   },
  //   { id: 17,
  //     checkin: new Date("July 29, 2017"),
  //     checkout: new Date("July 31, 2017"),
  //     rooms: ["Room 2", "Room 10"],
  //     name: "Ionita Alexandra",
  //     phone: "0745657876"
  //   },
  //   { id: 18,
  //     checkin: new Date("February 22, 2017"),
  //     checkout: new Date("February 28, 2017"),
  //     rooms: ["Room 8"],
  //     name: "Chirculescu Mihai",
  //     phone: "0745657876"
  //   },
  //   { id: 19,
  //     checkin: new Date("January 26, 2017"),
  //     checkout: new Date("January 29, 2017"),
  //     rooms: ["Room 2", "Room 5", "Room 6", "Room 7"],
  //     name: "Pirlog Leonard",
  //     phone: "0745657876"
  //   },
  //   { id: 20,
  //     checkin: new Date("October 11, 2017"),
  //     checkout: new Date("October 16, 2017"),
  //     rooms: ["Room 2", "Room 7", "Room 8"],
  //     name: "Visan Mihai",
  //     phone: "0745657876"
  //   }

  bookingsObject.addBooking = function(booking) {
    var deferred = $q.defer();
    console.log("aici");

    if (booking._id) { // check if has _id property - this is mongodb id so we need to edit it
      console.log("intra pe if");
      // Edit
      $http.put('/api/bookings/' + booking._id, booking).then(function(data) {
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });
    } else {
      console.log("intra pe else");
      // Insert new
      $http.post('/api/bookings', booking).then(function(data) {
        console.log("a ajuns aici");
        deferred.resolve(data);
      }, function(error) {
        console.log("error", error);
        deferred.reject(error);
      });
    }

    return deferred.promise;
  };

  bookingsObject.getAllBookings = function() {
    var deferred = $q.defer();
    $http.get('/api/bookings').then(function(data) {
      deferred.resolve(data);
    }, function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };

  bookingsObject.removeBooking = function(booking) {
    var deferred = $q.defer();

    $http.delete('/api/bookings/' + booking._id).then(function (data) {
      deferred.resolve(data);
    }, function (error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };

  return bookingsObject;

});
