'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs : 'vm'
  });
}])

.controller('View1Ctrl', [function() {
    var vm = this;
    vm.test = `VerEx().
              startOfLine().
              then('http').
              maybe('s').
              then('://').
              maybe('www.').
              anythingBut(' ')
              .endOfLine();`
    vm.exp = "http://www.google.com";
    
    this.testExp = function () {
       vm.res = "";
      vm.regex = "";
      var tester  = eval(vm.test);
      if (tester.test(vm.exp)) {
       vm.res = 'match :)';
       vm.regex = tester;
      } else {
       vm.res = 'not match :(';
      }

    
    }
}]);