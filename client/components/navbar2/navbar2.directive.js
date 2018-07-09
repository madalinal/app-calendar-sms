'use strict';

angular.module('appCalendarSms2App')
  .directive('navbar2', () => ({
    templateUrl: 'components/navbar2/navbar2.html',
    restrict: 'E',
    controller: 'Navbar2Controller',
    controllerAs: 'nav'
  }));
