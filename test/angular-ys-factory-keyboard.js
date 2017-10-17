(function() {
  'use strict';

  describe('Check angularYS.FactoryKeyboard', function() {

    beforeEach(angular.mock.module('angularYS.FactoryKeyboard'));

    // instantiate service
    var ysFactoryKeyboard;
    beforeEach(inject(function(_ysFactoryKeyboard_) {
      ysFactoryKeyboard = _ysFactoryKeyboard_;
    }));

    it('Check KeyCode', function() {
      var event = angular.element.Event("keyup");
      event.keyCode = '1';
      expect(ysFactoryKeyboard.getKeyCode(event)).to.equal('1');
    });

  });
})();
