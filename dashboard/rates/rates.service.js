angular.module("graduationThesis").factory("RatesFactory", function($rootScope, $http, $q) {

  var ratesObject = {};
  ratesObject.rates = [];
    // {
    //   id: 1,
    //   name: "Room 1",
    //   type: "Double",
    //   bath: "Yes",
    //   weekdaysPrice: "90",
    //   weekendPrice: "100"
    // },
    // {
    //   id: 2,
    //   name: "Room 2",
    //   type: "Triple",
    //   bath: "Yes",
    //   weekdaysPrice: "100",
    //   weekendPrice: "120"
    // },
    // {
    //   id: 3,
    //   name: "Room 3",
    //   type: "Single",
    //   bath: "Yes",
    //   weekdaysPrice: "80",
    //   weekendPrice: "90"
    // },
    // {
    //   id: 4,
    //   name: "Room 4",
    //   type: "Double",
    //   bath: "Yes",
    //   weekdaysPrice: "90",
    //   weekendPrice: "100"
    // },
    // {
    //   id: 5,
    //   name: "Room 5",
    //   type: "Single",
    //   bath: "Yes",
    //   weekdaysPrice: "80",
    //   weekendPrice: "90"
    // },
    // {
    //   id: 6,
    //   name: "Room 6",
    //   type: "Single",
    //   bath: "No",
    //   weekdaysPrice: "70",
    //   weekendPrice: "80"
    // },
    // {
    //   id: 7,
    //   name: "Room 7",
    //   type: "Double",
    //   bath: "No",
    //   weekdaysPrice: "90",
    //   weekendPrice: "90"
    // },
    // {
    //   id: 8,
    //   name: "Room 8",
    //   type: "Double",
    //   bath: "Yes",
    //   weekdaysPrice: "90",
    //   weekendPrice: "100"
    // },
    // {
    //   id: 9,
    //   name: "Room 9",
    //   type: "Triple",
    //   bath: "No",
    //   weekdaysPrice: "100",
    //   weekendPrice: "100"
    // },
    // {
    //   id: 10,
    //   name: "Room 10",
    //   type: "Triple",
    //   bath: "Yes",
    //   weekdaysPrice: "100",
    //   weekendPrice: "120"
    // }

  ratesObject.editRate = function(rate) {
    var deferred = $q.defer();

    if (rate._id) { // check if has _id property - this is mongodb id so we need to edit it
      // Edit
      $http.put('/api/rates/' + rate._id, rate).then(function (data) {
        deferred.resolve(data);
      }, function (error) {
        deferred.reject(error);
      });
    }
    else {
      // Insert new
      $http.post('/api/rates', rate).then(function (data) {
        deferred.resolve(data);
      }, function (error) {
        deferred.reject(error);
      });
    }

    return deferred.promise;
  };

  ratesObject.getAllRates = function() {
    var deferred = $q.defer();
    $http.get('/api/rates').then(function (data) {
      deferred.resolve(data);
    }, function (error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };

  ratesObject.remove = function(rate) {
    var deferred = $q.defer();

    $http.delete('/api/rates/' + rate._id).then(function (data) {
      deferred.resolve(data);
    }, function (error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };

  return ratesObject;

});
