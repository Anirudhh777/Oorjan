myapp.controller('mainController', function($scope, $document) {
    var about = angular.element(document.getElementById('about'));
    $scope.toabout = function() {
      $document.scrollToElementAnimated(about);
    }
    var homeLoan = angular.element(document.getElementById('homeLoan'));
    $scope.tohome = function() {
      $document.scrollToElementAnimated(homeLoan);
    }
    var societyLoan = angular.element(document.getElementById('societyLoan'));
    $scope.tosociety = function() {
      $document.scrollToElementAnimated(societyLoan);
    }
    var perUnit = angular.element(document.getElementById('perUnit'));
    $scope.toperUnit = function() {
      $document.scrollToElementAnimated(perUnit);
    }
    var installer = angular.element(document.getElementById('installer'));
    $scope.topartner = function() {
      $document.scrollToElementAnimated(installer);
    }
    var services = angular.element(document.getElementById('services'));
    $scope.toservices = function() {
      $document.scrollToElementAnimated(services);
    }
    var bg = angular.element(document.getElementById('bg'));
    $scope.tobg = function() {
      $document.scrollToElementAnimated(bg);
    }
    var results = angular.element(document.getElementById('results'));
    $scope.toresults = function() {
      $document.scrollToElementAnimated(results);
    }
}).value('duScrollOffset', -3);




