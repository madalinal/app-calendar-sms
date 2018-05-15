'use strict';

describe('Controller: ProgramariCtrl', function () {

  // load the controller's module
  beforeEach(module('appCalendarSms2App'));

  var ProgramariCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgramariCtrl = $controller('ProgramariCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
