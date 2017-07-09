angular.module('graduationThesis').controller('RatesController', function($scope) {

  $scope.rates = [{
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
      type: "Triple",
      bath: "Yes",
      weekdaysPrice: "80",
      weekendPrice: "100"
    }
  ];

})
