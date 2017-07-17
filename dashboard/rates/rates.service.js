angular.module("graduationThesis").factory("RatesFactory", function($rootScope) {

  var ratesObject = {};
  ratesObject.rates = [{
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
      weekdaysPrice: "100",
      weekendPrice: "120"
    },
    {
      id: 3,
      name: "Room 3",
      type: "Single",
      bath: "Yes",
      weekdaysPrice: "80",
      weekendPrice: "90"
    },
    {
      id: 4,
      name: "Room 4",
      type: "Double",
      bath: "Yes",
      weekdaysPrice: "90",
      weekendPrice: "100"
    },
    {
      id: 5,
      name: "Room 5",
      type: "Single",
      bath: "Yes",
      weekdaysPrice: "80",
      weekendPrice: "90"
    },
    {
      id: 6,
      name: "Room 6",
      type: "Single",
      bath: "No",
      weekdaysPrice: "70",
      weekendPrice: "80"
    },
    {
      id: 7,
      name: "Room 7",
      type: "Double",
      bath: "No",
      weekdaysPrice: "90",
      weekendPrice: "90"
    },
    {
      id: 8,
      name: "Room 8",
      type: "Double",
      bath: "Yes",
      weekdaysPrice: "90",
      weekendPrice: "100"
    },
    {
      id: 9,
      name: "Room 9",
      type: "Triple",
      bath: "No",
      weekdaysPrice: "100",
      weekendPrice: "100"
    },
    {
      id: 10,
      name: "Room 10",
      type: "Triple",
      bath: "Yes",
      weekdaysPrice: "100",
      weekendPrice: "120"
    }
  ];

  ratesObject.editRate = function(rate) {
    if (rate.id) {
      ratesObject.remove(rate);
    } else {
      rate.id = ratesObject.rates[ratesObject.rates.length - 1].id + 1;
    }
    ratesObject.rates.push(rate);
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
