var myapp = angular.module('Oorjan', ['ngRoute', 'duScroll']).value('duScrollDuration', 1000);;
	myapp.config(function ($routeProvider) {
		$routeProvider
		.when('/',{     
                templateUrl: 'partials/main.html'
            })
        .when('/calc',{
            templateUrl: 'partials/calc.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

myapp.controller('solarCalc', function($scope, $document) {
    var results = angular.element(document.getElementById('results'));
    $scope.toresults = function() {
      $document.scrollToElementAnimated(results);
    }
    $scope.solarCalc = function() {
            var interest = 11;
           var solarSystem1 = $scope.calc.units / 120;
           var solarSystem2 = $scope.calc.roofSize / 100;

           if (solarSystem1 > solarSystem2  ){
            $scope.solarSystemSize = solarSystem2;
           }else{
            $scope.solarSystemSize = solarSystem1;
           }
           
           var solarUnitsPerMonth = $scope.solarSystemSize * 4 * 30;
           
           var unitSolarSystemCost = $scope.solarSystemSize * 75000;
           $scope.totalSolarSystemCost = unitSolarSystemCost * $scope.solarSystemSize;
           
           var currentBill = $scope.calc.units * $scope.calc.location1;
           var reducedBill = ($scope.calc.units - solarUnitsPerMonth) * $scope.calc.location1;
           var loanAmount = ($scope.totalSolarSystemCost * $scope.calc.amount) / 100;
           $scope.emi = (loanAmount + (loanAmount * 11 * $scope.calc.tenure) / 100) / ($scope.calc.tenure * 12);
           $scope.monthlySavings = currentBill - reducedBill - $scope.emi
           $scope.solarUnitsPerMonth = solarUnitsPerMonth;
           console.log("EMI " + $scope.emi);
           console.log("Savings " + $scope.monthlySavings);
           console.log("Total Cost " + $scope.totalSolarSystemCost);
           console.log(" Size " + $scope.solarSystemSize);
           console.log("Units per Month " + solarUnitsPerMonth)

        }
}).value('duScrollOffset', -3);
