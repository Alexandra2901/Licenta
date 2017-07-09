angular.module("graduationThesis").factory("RatesFactory", function($rootScope) {

var ratesObject = {};
ratesObject.rates =[{
    id: 1,
    name: "Room 1",
    type: "Double",
    bath: "Yes",
    weekdaysPrice: "90",
    weekendPrice: "100"
  },
  {
    id: 2,
    name: "Room 2",
    type: "Triple",
    bath: "Yes",
    weekdaysPrice: "80",
    weekendPrice: "100"
  },
  {
    id: 3,
    name: "Room 3",
    type: "Triple",
    bath: "No",
    weekdaysPrice: "80",
    weekendPrice: "90"
  }
];

ratesObject.editRate = function(rate) {
       var ok = true;
       rate.id = ratesObject.rates.length+1;
       for (var i = 0; i < ratesObject.rates.length; i++) {
           if (ratesObject.rates[i].id == rate.id) {
               ok = false;
               break;
           }
       }
       if (ok) {
           console.log("Added ", rate);
           ratesObject.rates.push(rate);
       } else {
           console.log("Already exists ", rate);
       }
   };

ratesObject.getAllRates = function() {
       return ratesObject.rates;
   };

  ratesObject.remove = function(rate) {
       console.log(rate);
       var index = 0;
       for (var i = 0; i < ratesObject.rates.length; i++) {
           if (ratesObject.rates[i].id == rate.id) {
               index = i;
               break;
           }
       }
       ratesObject.rates.splice(index, 1);
   };

  return ratesObject;

});
