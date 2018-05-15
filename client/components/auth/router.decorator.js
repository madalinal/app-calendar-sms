'use strict';

(function() {

function routerDecorator($provide) {
  var authDecorator = function(route) {
    var auth = route.authenticate;
    if (auth) {
      route.resolve = route.resolve || {};
      route.resolve.user = function($location, $q, Auth) {
        return Auth.getCurrentUser(true)
          .then(function(user) {
            if ((typeof auth !== 'string' && user._id) ||
              (typeof auth === 'string' && Auth.hasRole(auth))) {
              return user;
            }
            $location.path((user._id) ? '/' : '/login');
            return $q.reject('not authorized');
          });
      };
    }
  };

  $provide.decorator('$route', function($delegate) {
    for (var r in $delegate.routes) {
      authDecorator($delegate.routes[r]);
    }
    return $delegate;
  });
}

angular.module('appCalendarSms2App.auth')
  .config(routerDecorator);

})();
