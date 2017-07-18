angular.module("graduationThesis").controller('ReportsController', function ($scope, BookingsFactory, RoomsFactory, RatesFactory, $filter) {

  $scope.bookings = [];
  $scope.allRooms = [];
  $scope.rates = [];

  // var initBookings = function () {
  //   BookingsFactory.getAllBookings().then(function (result) {
  //     console.log('Bookings ', result.data);
  //     $scope.bookings = result.data;
  //   }, function (error) {
  //     alert("Error!");
  //   });
  // };
  // initBookings();


  // var initRooms = function () {
  //   RoomsFactory.getAllRooms().then(function (result) {
  //     console.log('Rooms ', result.data);
  //     $scope.allRooms = result.data;
  //   }, function (error) {
  //     alert("Error!");
  //   });
  // };
  // initRooms();


  // var initRates = function () {
  //   RatesFactory.getAllRates().then(function (result) {
  //     console.log('Rates ', result.data);
  //     $scope.rates = result.data;
  //   }, function (error) {
  //     alert("Error!");
  //   });
  // };

  function init() {
    RoomsFactory.getAllRooms().then(function (result) {
      $scope.allRooms = result.data;

      BookingsFactory.getAllBookings().then(function (result) {
        $scope.bookings = result.data;

        RatesFactory.getAllRates().then(function (result) {
          $scope.rates = result.data;

          // All data is loaded - lets render the charts
          renderCharts();

        }, function (error) {
          alert("Error!");
        });

      }, function (error) {
        alert("Error!");
      });

    }, function (error) {
      alert("Error!");
    });
  }

  function renderCharts() {
    var reservations = [];
    var singles = [];
    var doubles = [];
    var triples = [];
    var profits = [];
    var days = [];
    var averages = [];
    for (var i = 0; i < 12; i++) {
      reservations[i] = 0;
      singles[i] = 0;
      doubles[i] = 0;
      triples[i] = 0;
      profits[i] = 0;
      days[i] = 0;
      averages[i] = 0;
    }

    for (var i = 0; i < $scope.bookings.length; i++) {
      switch ($filter('date')($scope.bookings[i].checkin, 'MMMM')) {
        case 'January':
          reservations[0]++;
          break;
        case 'February':
          reservations[1]++;
          break;
        case 'March':
          reservations[2]++;
          break;
        case 'April':
          reservations[3]++;
          break;
        case 'May':
          reservations[4]++;
          break;
        case 'June':
          reservations[5]++;
          break;
        case 'July':
          reservations[6]++;
          break;
        case 'August':
          reservations[7]++;
          break;
        case 'September':
          reservations[8]++;
          break;
        case 'October':
          reservations[9]++;
          break;
        case 'November':
          reservations[10]++;
          break;
        case 'December':
          reservations[11]++;
          break;
      }
    }

    for (var i = 0; i < $scope.bookings.length; i++) {
      for (var j = 0; j < $scope.bookings[i].rooms.length; j++) {
        var roomNb = $scope.bookings[i].rooms[j];

        if (roomNb.type == 'Single') {
          singles[$filter('date')($scope.bookings[i].checkin, 'M') - 1]++;
        }
        else if (roomNb.type == 'Double') {
          doubles[$filter('date')($scope.bookings[i].checkin, 'M') - 1]++;
        }
        else {
          triples[$filter('date')($scope.bookings[i].checkin, 'M') - 1]++;
        }

        profits[$filter('date')($scope.bookings[i].checkin, 'M') - 1] += parseInt($scope.rates[roomNb - 1].weekdaysPrice);

      }
    }

    for (var i = 0; i < $scope.bookings.length; i++) {
      days[$filter('date')($scope.bookings[i].checkin, 'M') - 1] += $filter('date')($scope.bookings[i].checkout, 'd') - $filter('date')($scope.bookings[i].checkin, 'd');
    }
    for (var i = 0; i < 12; i++) {
      averages[i] = days[i] / reservations[i];
    }

    var lineChartOptions = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          backgroundColor: ['rgba(84, 196, 194, 0.5)'],
          borderColor: ['rgba(84, 196, 194, 1)'],
          label: '# of Reservations',
          data: reservations,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              reverse: false
            }
          }]
        }
      }
    }

    var barChartOptions = {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            backgroundColor: 'rgba(247, 70, 74, 0.8)',
            borderColor: 'rgba(247, 70, 74, 1)',
            label: '# of Single rooms',
            data: singles,
            borderWidth: 1
          },
          {
            backgroundColor: 'rgba(255, 206, 86, 0.8)',
            borderColor: 'rgba(255, 206, 86, 1)',
            label: '# of Double Rooms',
            data: doubles,
            borderWidth: 1
          },
          {
            backgroundColor: 'rgba(151, 187, 205, 0.8)',
            borderColor: 'rgba(151, 187, 205, 1)',
            label: '# of Triple Rooms',
            data: triples,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              reverse: false
            }
          }]
        }
      }
    }

    var doughnutChartOptions = {
      type: 'doughnut',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            backgroundColor: ['rgba(19, 86, 128, 0.8)', 'rgba(14, 64, 97, 0.8)', 'rgba(23, 132, 189, 0.8)', 'rgba(18, 99, 144, 0.8)', 'rgba(33, 174, 254, 0.8)', 'rgba(26, 130, 191, 0.8)',
              'rgba(78, 189, 255, 0.8)', 'rgba(71, 154, 204, 0.8)', 'rgba(122, 206, 253, 0.8)', 'rgba(117, 181, 217, 0.8)', 'rgba(167, 224, 253, 0.8)', 'rgba(164, 206, 232, 0.8)'],
            label: 'Profit',
            data: profits,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              reverse: false
            }
          }]
        }
      }
    }

    var pieChartOptions = {
      type: 'pie',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          backgroundColor: ['rgba(246, 160, 23, 0.8)', 'rgba(249, 162, 91, 0.8)', 'rgba(243, 124, 32, 0.8)', 'rgba(251, 176, 49, 0.8)', 'rgba(246, 128, 38, 0.8)', 'rgba(246, 128, 38, 0.8)',
            'rgba(246, 131, 38, 0.8)', 'rgba(226, 110, 27, 0.8)', 'rgba(248, 155, 86, 0.8)', 'rgba(232, 148, 24, 0.8)', 'rgba(249, 158, 88, 0.8)', 'rgba(244, 115, 32, 0.8)'],
          label: 'Average # of Days',
          data: averages,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              reverse: false
            }
          }]
        }
      }
    }

    var ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, lineChartOptions);

    var ctxBar = document.getElementById('barGraph').getContext('2d');
    new Chart(ctxBar, barChartOptions);

    var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, doughnutChartOptions);

    var ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, pieChartOptions);
  }

  init();


});
