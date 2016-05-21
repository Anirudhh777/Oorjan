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

myapp.controller('solarCalc', ['$scope', function($scope, $document) {
    var results = angular.element(document.getElementById('results'));
    $scope.toresults = function() {
      $document.scrollToElementAnimated(results);
    }

    $scope.solarCalc = function() {
        var interest = 11;
        var unitSolarSystemCost = 75000;
        var solarSystem1 = $scope.calc.units / 120;
        var solarSystem2 = $scope.calc.roofSize / 100;

        if (solarSystem1 > solarSystem2  ){
            $scope.solarSystemSize = Math.floor(solarSystem2);
        }else{
            $scope.solarSystemSize = Math.floor(solarSystem1);
        }
       
        var solarUnitsPerMonth = $scope.solarSystemSize * 4 * 30;
        $scope.totalSolarSystemCost = Math.floor(unitSolarSystemCost * $scope.solarSystemSize);
       
        $scope.currentBill = $scope.calc.units * $scope.calc.location1;
        $scope.reducedBill = ($scope.calc.units - solarUnitsPerMonth) * $scope.calc.location1;
        var loanAmount = ($scope.totalSolarSystemCost * $scope.calc.amount) / 100;
        $scope.balanceAmount = $scope.totalSolarSystemCost - loanAmount;
        $scope.downPayment = Math.floor((loanAmount * 10) / 100);
        $scope.emi = Math.floor((loanAmount + (loanAmount * 11 * $scope.calc.tenure) / 100) / ($scope.calc.tenure * 12));
        $scope.monthlySavings = $scope.currentBill - $scope.reducedBill - $scope.emi
        $scope.solarUnitsPerMonth = Math.floor(solarUnitsPerMonth);
        // console.log("EMI " + $scope.emi);
        // console.log("Savings " + $scope.monthlySavings);
        // console.log("Total Cost " + $scope.totalSolarSystemCost);
        // console.log(" Size " + $scope.solarSystemSize);
        // console.log("Units per Month " + solarUnitsPerMonth);
        // console.log($scope.downPayment + " downPayment");
        // console.log(loanAmount + " loanAmount");
        // console.log($scope.balanceAmount + " balanceAmount");
        // console.log($scope.reducedBill + " reducedBill");
        $scope.noSolar1 = $scope.currentBill * 12;
        $scope.noSolar2 = $scope.noSolar1 * 2;
        $scope.noSolar3 = $scope.noSolar1 * 3;
        $scope.noSolar4 = $scope.noSolar1 * 4;
        $scope.noSolar5 = $scope.noSolar1 * 5;
        $scope.noSolar6 = $scope.noSolar1 * 6;
        $scope.noSolar7 = $scope.noSolar1 * 7;
        $scope.noSolar8 = $scope.noSolar1 * 8;
        $scope.noSolar9 = $scope.noSolar1 * 9;
        $scope.noSolar10 = $scope.noSolar1 * 10;
        $scope.noSolar11 = $scope.noSolar1 * 11;
        $scope.noSolar12 = $scope.noSolar1 * 12;

        $scope.noLoanSolar1 = $scope.totalSolarSystemCost + ($scope.reducedBill * 12);
        $scope.noLoanSolar2 = $scope.noLoanSolar1 + ($scope.reducedBill * 12);
        $scope.noLoanSolar3 = $scope.noLoanSolar2 + ($scope.reducedBill * 12);
        $scope.noLoanSolar4 = $scope.noLoanSolar3 + ($scope.reducedBill * 12);
        $scope.noLoanSolar5 = $scope.noLoanSolar4 + ($scope.reducedBill * 12);
        $scope.noLoanSolar6 = $scope.noLoanSolar5 + ($scope.reducedBill * 12);
        $scope.noLoanSolar7 = $scope.noLoanSolar6 + ($scope.reducedBill * 12);
        $scope.noLoanSolar8 = $scope.noLoanSolar7 + ($scope.reducedBill * 12);
        $scope.noLoanSolar9 = $scope.noLoanSolar8 + ($scope.reducedBill * 12);
        $scope.noLoanSolar10 = $scope.noLoanSolar9 + ($scope.reducedBill * 12);
        $scope.noLoanSolar11 = $scope.noLoanSolar10 + ($scope.reducedBill * 12);
        $scope.noLoanSolar12 = $scope.noLoanSolar11 + ($scope.reducedBill * 12);

        if($scope.calc.tenure == 5){
            $scope.loanSolar1 = $scope.balanceAmount + $scope.downPayment + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar2 = $scope.loanSolar1 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar3 = $scope.loanSolar2 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar4 = $scope.loanSolar3 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar5 = $scope.loanSolar4 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar6 = $scope.loanSolar5 + ($scope.reducedBill * 12);
            $scope.loanSolar7 = $scope.loanSolar6 + ($scope.reducedBill * 12);
            $scope.loanSolar8 = $scope.loanSolar7 + ($scope.reducedBill * 12);
            $scope.loanSolar9 = $scope.loanSolar8 + ($scope.reducedBill * 12);
            $scope.loanSolar10 = $scope.loanSolar9 + ($scope.reducedBill * 12);
            $scope.loanSolar11 = $scope.loanSolar10 + ($scope.reducedBill * 12);
            $scope.loanSolar12 = $scope.loanSolar11 + ($scope.reducedBill * 12);
        }

        if($scope.calc.tenure == 6){
            $scope.loanSolar1 = $scope.balanceAmount + $scope.downPayment + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar2 = $scope.loanSolar1 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar3 = $scope.loanSolar2 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar4 = $scope.loanSolar3 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar5 = $scope.loanSolar4 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar6 = $scope.loanSolar5 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar7 = $scope.loanSolar6 + ($scope.reducedBill * 12);
            $scope.loanSolar8 = $scope.loanSolar7 + ($scope.reducedBill * 12);
            $scope.loanSolar9 = $scope.loanSolar8 + ($scope.reducedBill * 12);
            $scope.loanSolar10 = $scope.loanSolar9 + ($scope.reducedBill * 12);
            c$scope.loanSolar11 = $scope.loanSolar10 + ($scope.reducedBill * 12);
            $scope.loanSolar12 = $scope.loanSolar11 + ($scope.reducedBill * 12);
        }

        if($scope.calc.tenure == 7){
            $scope.loanSolar1 = $scope.balanceAmount + $scope.downPayment + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar2 = $scope.loanSolar1 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar3 = $scope.loanSolar2 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar4 = $scope.loanSolar3 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar5 = $scope.loanSolar4 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar6 = $scope.loanSolar5 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar7 = $scope.loanSolar6 + ($scope.emi * 12) + ($scope.reducedBill * 12);
            $scope.loanSolar8 = $scope.loanSolar7 + ($scope.reducedBill * 12);
            $scope.loanSolar9 = $scope.loanSolar8 + ($scope.reducedBill * 12);
            $scope.loanSolar10 = $scope.loanSolar9 + ($scope.reducedBill * 12);
            $scope.loanSolar11 = $scope.loanSolar10 + ($scope.reducedBill * 12);
            $scope.loanSolar12 = $scope.loanSolar11 + ($scope.reducedBill * 12);
        }
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
                        "label": "0"
                    },
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
                    },
                    {
                        "label": "8"
                    },
                    {
                        "label": "9"
                    },
                    {
                        "label": "10"
                    },
                    {
                        "label": "11"
                    },
                    {
                        "label": "12"
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
                        "value": 0
                    },
                    {
                        "value": $scope.noSolar1
                    },
                    {
                        "value": $scope.noSolar2
                    },
                    {
                        "value": $scope.noSolar3
                    },
                    {
                        "value": $scope.noSolar4
                    },
                    {
                        "value": $scope.noSolar5
                    },
                    {
                        "value": $scope.noSolar6
                    },
                    {
                        "value": $scope.noSolar7
                    },
                    {
                        "value": $scope.noSolar8
                    },
                    {
                        "value": $scope.noSolar9
                    },
                    {
                        "value": $scope.noSolar10
                    },
                    {
                        "value": $scope.noSolar11
                    },
                    {
                        "value": $scope.noSolar12
                    }
                ]
            },
            {
                "seriesname": "Solar System With Loan",
                "renderas": "line",
                "showvalues": "0",
                "data": [
                    {
                        "value": 0
                    },
                    {
                        "value": $scope.loanSolar1
                    },
                    {
                        "value": $scope.loanSolar2
                    },
                    {
                        "value": $scope.loanSolar3
                    },
                    {
                        "value": $scope.loanSolar4
                    },
                    {
                        "value": $scope.loanSolar5
                    },
                    {
                        "value": $scope.loanSolar6
                    },
                    {
                        "value": $scope.loanSolar7
                    },
                    {
                        "value": $scope.loanSolar8
                    },
                    {
                        "value": $scope.loanSolar9
                    },
                    {
                        "value": $scope.loanSolar10
                    },
                    {
                        "value": $scope.loanSolar11
                    },
                    {
                        "value": $scope.loanSolar12
                    }
                ]
            },
            {
                "seriesname": "Solar System Without Loan",
                "renderas": "line",
                "showvalues": "0",
                "data": [
                    {
                        "value": 0
                    },
                    {
                        "value": $scope.noLoanSolar1
                    },
                    {
                        "value": $scope.noLoanSolar2
                    },
                    {
                        "value": $scope.noLoanSolar3
                    },
                    {
                        "value": $scope.noLoanSolar4
                    },
                    {
                        "value": $scope.noLoanSolar5
                    },
                    {
                        "value": $scope.noLoanSolar6
                    },
                    {
                        "value": $scope.noLoanSolar7
                    },
                    {
                        "value": $scope.noLoanSolar8
                    },
                    {
                        "value": $scope.noLoanSolar9
                    },
                    {
                        "value": $scope.noLoanSolar10
                    },
                    {
                        "value": $scope.noLoanSolar11
                    },
                    {
                        "value": $scope.noLoanSolar12
                    }
                ]
            }
        ]
    }
        
}]).value('duScrollOffset', -3);
