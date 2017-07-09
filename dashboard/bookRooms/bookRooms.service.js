angular.module("graduationThesis").factory("BookingsFactory", function($rootScope) {

var bookingsObject = {};
bookingsObject.bookings = [{
      id: 1,
      checkin: "08/07/2017",
      checkout: "15/07/2017",
      rooms: [1,2],
      name: "Popescu Ana",
      phone: "0745657876"
    },
    {
      id: 2,
      checkin: "08/07/2017",
      checkout: "15/07/2017",
      rooms: [1,2],
      name: "Popescu Ana",
      phone: "0745657876"
    },
    {
      id: 3,
      checkin: "08/07/2017",
      checkout: "15/07/2017",
      rooms: [1,2],
      name: "Popescu Ana",
      phone: "0745657876"
    }
  ];

  bookingsObject.addBooking = function(booking) {
       var ok = true;
       booking.id = bookingsObject.bookings.length+1;
       for (var i = 0; i < bookingsObject.bookings.length; i++) {
           if (bookingsObject.bookings[i].id == booking.id) {
               ok = false;
               break;
           }
       }
       if (ok) {
           console.log("Added ", booking);
           bookingsObject.bookings.push(booking);
       } else {
           console.log("Already exists ", booking);
       }
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
