(function() {
    'use strict';

    describe('Check angularYS.FactoryKeyboard', function() {

        beforeEach(angular.mock.module('angularYS.FactoryKeyboard'));

        // instantiate service
        var ysFactoryKeyboard;
        beforeEach(inject(function(_ysFactoryKeyboard_) {
            ysFactoryKeyboard = _ysFactoryKeyboard_;
        }));

        describe('Check method getKeyCode', function() {

            it('Check not code', function() {
                var event = angular.element.Event("keyup");
                expect(ysFactoryKeyboard.getKeyCode(event)).to.be.null;
            });

            it('Check which code', function() {
                var event = angular.element.Event("keyup");
                event.which = 0x31;
                expect(ysFactoryKeyboard.getKeyCode(event)).to.equal(0x31);
            });

            it('Check charCode', function() {
                var event = angular.element.Event("keyup");
                event.charCode = 0x32;
                expect(ysFactoryKeyboard.getKeyCode(event)).to.equal(0x32);
            });

            it('Check KeyCode', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x33;
                expect(ysFactoryKeyboard.getKeyCode(event)).to.equal(0x33);
            });

        });

        describe('Check method getStringCode', function() {

            it('Check not code', function() {
                var event = angular.element.Event("keyup");
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('\u0000');
            });

            it('Check which code', function() {
                var event = angular.element.Event("keyup");
                event.which = 0x31;
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('1');
            });

            it('Check charCode', function() {
                var event = angular.element.Event("keyup");
                event.charCode = 0x32;
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('2');
            });

            it('Check KeyCode', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x33;
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('3');
            });

            it('Check KeyCode A', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x41;
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('A');
            });

            it('Check KeyCode a', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x61;
                expect(ysFactoryKeyboard.getStringCode(event)).to.equal('A');
            });

        });

        describe('Check method isCtrlA', function() {

            it('Check KeyCode a without CtrlKey', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x61;
                event.ctrlKey = false;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.false;
            });

            it('Check KeyCode b', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x62;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.false;
            });

            it('Check Key a', function() {
                var event = angular.element.Event("keyup");
                event.key = 'a';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.true;
            });

            it('Check Key A', function() {
                var event = angular.element.Event("keyup");
                event.key = 'A';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.true;
            });

            it('Check KeyCode a', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x61;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.true;
            });

            it('Check KeyCode A', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x41;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlA(event)).to.be.true;
            });

        });

        describe('Check method isCtrlC', function() {

            it('Check KeyCode c without CtrlKey', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x63;
                event.ctrlKey = false;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.false;
            });

            it('Check KeyCode b', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x62;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.false;
            });

            it('Check Key c', function() {
                var event = angular.element.Event("keyup");
                event.key = 'c';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.true;
            });

            it('Check Key C', function() {
                var event = angular.element.Event("keyup");
                event.key = 'C';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.true;
            });

            it('Check KeyCode c', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x63;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.true;
            });

            it('Check KeyCode C', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x43;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlC(event)).to.be.true;
            });

        });

        describe('Check method isCtrlX', function() {

            it('Check KeyCode x without CtrlKey', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x78;
                event.ctrlKey = false;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.false;
            });

            it('Check KeyCode b', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x62;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.false;
            });

            it('Check Key x', function() {
                var event = angular.element.Event("keyup");
                event.key = 'x';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.true;
            });

            it('Check Key X', function() {
                var event = angular.element.Event("keyup");
                event.key = 'X';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.true;
            });

            it('Check KeyCode x', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x78;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.true;
            });

            it('Check KeyCode X', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x58;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlX(event)).to.be.true;
            });

        });

        describe('Check method isCtrlV', function() {

            it('Check KeyCode v without CtrlKey', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x76;
                event.ctrlKey = false;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.false;
            });

            it('Check KeyCode b', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x62;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.false;
            });

            it('Check Key v', function() {
                var event = angular.element.Event("keyup");
                event.key = 'v';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.true;
            });

            it('Check Key V', function() {
                var event = angular.element.Event("keyup");
                event.key = 'V';
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.true;
            });

            it('Check KeyCode v', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x76;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.true;
            });

            it('Check KeyCode V', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 0x56;
                event.ctrlKey = true;
                expect(ysFactoryKeyboard.isCtrlV(event)).to.be.true;
            });

        });

        describe('Check method isNavegationKey', function() {

            it('Check Key up', function() {
                var event = angular.element.Event("keyup");
                event.key = 'ArrowUp';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.true;
            });

            it('Check Key down', function() {
                var event = angular.element.Event("keyup");
                event.key = 'ArrowDown';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.true;
            });

            it('Check Key left', function() {
                var event = angular.element.Event("keyup");
                event.key = 'ArrowLeft';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.true;
            });

            it('Check Key right', function() {
                var event = angular.element.Event("keyup");
                event.key = 'ArrowRight';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.true;
            });

            it('Check Key tab', function() {
                var event = angular.element.Event("keyup");
                event.key = 'Tab';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.true;
            });

            it('Check Key other', function() {
                var event = angular.element.Event("keyup");
                event.key = 'x';
                expect(ysFactoryKeyboard.isNavegationKey(event)).to.be.false;
            });

        });

        describe('Check method isClearKey', function() {

            it('Check Key delete', function() {
                var event = angular.element.Event("keyup");
                event.key = 'Delete';
                expect(ysFactoryKeyboard.isClearKey(event)).to.be.true;
            });

            it('Check Key back', function() {
                var event = angular.element.Event("keyup");
                event.key = 'Backspace';
                expect(ysFactoryKeyboard.isClearKey(event)).to.be.true;
            });

            it('Check Key other', function() {
                var event = angular.element.Event("keyup");
                event.key = 'x';
                expect(ysFactoryKeyboard.isClearKey(event)).to.be.false;
            });

        });

        describe('Check method isDotKey', function() {

            it('Check Key dot', function() {
                var event = angular.element.Event("keyup");
                event.key = '.';
                expect(ysFactoryKeyboard.isDotKey(event)).to.be.true;
            });

            it('Check Key other', function() {
                var event = angular.element.Event("keyup");
                event.key = 'x';
                expect(ysFactoryKeyboard.isDotKey(event)).to.be.false;
            });

        });

        describe('Check method isNumericKey', function() {

            it('Check Key zero', function() {
                var event = angular.element.Event("keyup");
                event.key = '0';
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check Key one', function() {
                var event = angular.element.Event("keyup");
                event.key = '1';
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check KeyCode 0', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 48;
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check KeyCode 1', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 57;
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check KeyCode 0', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 96;
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check KeyCode 1', function() {
                var event = angular.element.Event("keyup");
                event.keyCode = 105;
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.true;
            });

            it('Check Key not numeric', function() {
                var event = angular.element.Event("keyup");
                event.key = 'x';
                expect(ysFactoryKeyboard.isNumericKey(event)).to.be.false;
            });

        });

    });
})();