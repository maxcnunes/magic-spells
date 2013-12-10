'use strict';

angular.module('magicSpellsApp')
  .controller('GeneralChartCtrl', function ($scope, $http, MagicService) {
    MagicService.getGeneralResult().success(function (result) {
      var rounds = [];
      for (var i = 0; i < result.length; i++) {
        rounds.push(i+1);
      };
      $scope.chartConfig = {
        options: {
          chart: { type: 'spline', zoomType: 'x' },
          title: { text: 'General Result' },
          legend: { itemMarginBottom: 15 },
          xAxis: {
            categories: rounds
          },
          yAxis: {
               title: { text: 'Points' },
          //labels: {
          //    formatter: function() { return this.value +'°' }
          //  }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
        },
        series: result,
        loading: false
      }
    });
});
