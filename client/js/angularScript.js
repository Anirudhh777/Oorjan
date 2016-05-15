var myapp = angular.module('Oorjan', ['ngRoute', 'duScroll', 'ng-fusioncharts']).value('duScrollDuration', 1000);;
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
            $scope.solarSystemSize = Math.floor(solarSystem2);
           }else{
            $scope.solarSystemSize = Math.floor(solarSystem1);
           }
           
           var solarUnitsPerMonth = $scope.solarSystemSize * 4 * 30;
           
           var unitSolarSystemCost = $scope.solarSystemSize * 75000;
           $scope.totalSolarSystemCost = Math.floor(unitSolarSystemCost * $scope.solarSystemSize);
           
           var currentBill = $scope.calc.units * $scope.calc.location1;
           var reducedBill = ($scope.calc.units - solarUnitsPerMonth) * $scope.calc.location1;
           var loanAmount = ($scope.totalSolarSystemCost * $scope.calc.amount) / 100;
           $scope.emi = Math.floor((loanAmount + (loanAmount * 11 * $scope.calc.tenure) / 100) / ($scope.calc.tenure * 12));
           $scope.monthlySavings = currentBill - reducedBill - $scope.emi
           $scope.solarUnitsPerMonth = Math.floor(solarUnitsPerMonth);
           // console.log("EMI " + $scope.emi);
           // console.log("Savings " + $scope.monthlySavings);
           // console.log("Total Cost " + $scope.totalSolarSystemCost);
           // console.log(" Size " + $scope.solarSystemSize);
           // console.log("Units per Month " + solarUnitsPerMonth);

        }
        $scope.dataSource= {
            "chart": {
                "caption": "Cash Outflow Graph",
                "xaxisname": "Time in Years",
                "yaxisname": "Cash Outflow on Electricity(In Rs)",
                "showBorder": 0,
                "bgColor": "#ffffff",
                "numberprefix": "INR",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "1"
                        },
                        {
                            "label": "2"
                        },
                        {
                            "label": "3"
                        },
                        {
                            "label": "4"
                        },
                        {
                            "label": "5"
                        },
                        {
                            "label": "6"
                        },
                        {
                            "label": "7"
                        }
                    ]
                }
            ],
            "dataset": [
        {
                    "seriesname": "No Solar System",
                    "renderas": "line",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "1500"
                        },
                        {
                            "value": "1600"
                        },
                        {
                            "value": "17000"
                        },
                        {
                            "value": "1800"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "1900"
                        },
                        {
                            "value": "1900"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "2200"
                        },
                        {
                            "value": "2300"
                        }
                    ]
                },
                {
                    "seriesname": "Solar System With Loan",
                    "renderas": "line",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "15000"
                        },
                        {
                            "value": "16000"
                        },
                        {
                            "value": "17000"
                        },
                        {
                            "value": "18000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "22000"
                        },
                        {
                            "value": "23000"
                        }
                    ]
                },
                {
                    "seriesname": "Solar System Without Loan",
                    "renderas": "line",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "11000"
                        },
                        {
                            "value": "26000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "18000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "22000"
                        },
                        {
                            "value": "23000"
                        }
                    ]
                }
            ]
        }
}).value('duScrollOffset', -3);
