angular.module("graduationThesis").factory("BookingsFactory", function($rootScope) {

var bookingsObject = {};
bookingsObject.bookings = [{
      id: 1,
      checkin: new Date("July 21, 2017"),
      checkout: new Date("July 23, 2017"),
      rooms: ["Room 1"],
      name: "Popescu Ana",
      phone: "0745657876"
    },
    {
      id: 2,
      checkin: new Date("July 8, 2017"),
      checkout: new Date("July 15, 2017"),
      rooms: ["Room 1, Room 2"],
      name: "Popescu Ana",
      phone: "0745657876"
    },
    {
      id: 3,
      checkin: new Date("July 11, 2017"),
      checkout: new Date("July 16, 2017"),
      rooms: ["Room 2"],
      name: "Popescu Ana12",
      phone: "0745657876"
    }
  ];

  bookingsObject.addBooking = function(booking) {
    if(booking.id) {
      bookingsObject.removeBooking(booking);
    }
    else {
     booking.id = bookingsObject.bookings[bookingsObject.bookings.length-1].id +1;
    }
   bookingsObject.bookings.push(booking);
   };

bookingsObject.getAllBookings = function() {
       return bookingsObject.bookings;
   };

  bookingsObject.removeBooking = function(booking) {
       console.log(booking);
       var index = 0;
       for (var i = 0; i < bookingsObject.bookings.length; i++) {
           if (bookingsObject.bookings[i].id == booking.id) {
               index = i;
               break;
           }
       }
       bookingsObject.bookings.splice(index, 1);
   };

  return bookingsObject;

});
