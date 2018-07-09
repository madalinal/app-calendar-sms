'use strict';

class Navbar2Controller {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },
    {
      'title': 'Programari',
      'link': '/programari'
    }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('appCalendarSms2App')
  .controller('Navbar2Controller', Navbar2Controller);
