(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name angularYS.ysFactoryKeyboard
     * @description Angular Factory To check Event Press Keyboard Button
     * # ysFactoryKeyboard
     * Factory in the angularYS.
     */
    angular.module('angularYS.FactoryKeyboard', [])
        .factory('ysFactoryKeyboard', keyboard);

    function keyboard() {

        return {
            getKeyCode: getKeyCode,
            getStringCode: getStringCode,
            isCtrlA: isCtrlA,
            isCtrlC: isCtrlC,
            isCtrlX: isCtrlX,
            isCtrlV: isCtrlV,
            isNavegationKey: isNavegationKey,
            isClearKey: isClearKey,
            isDotKey: isDotKey,
            isNumericKey: isNumericKey
        };

        function getKeyCode(e) {
            return e.which || e.charCode || e.keyCode || null;
        }

        function getStringCode(e) {
            return String.fromCharCode(getKeyCode(e)).toUpperCase();
        }

        function isCtrlA(e) {
            var ctrl = getStringCode(e);
            var code = (ctrl === 'A' && e.ctrlKey === true);
            var key = ($.inArray(e.key, ["a", "A"]) !== -1 && e.ctrlKey === true);
            return key || code;
        }

        function isCtrlC(e) {
            var ctrl = getStringCode(e);
            var code = (ctrl === 'C' && e.ctrlKey === true);
            var key = ($.inArray(e.key, ["c", "C"]) !== -1 && e.ctrlKey === true);
            return key || code;
        }

        function isCtrlX(e) {
            var ctrl = getStringCode(e);
            var code = (ctrl === 'X' && e.ctrlKey === true);
            var key = ($.inArray(e.key, ["x", "X"]) !== -1 && e.ctrlKey === true);
            return key || code;
        }

        function isCtrlV(e) {
            var ctrl = getStringCode(e);
            var code = (ctrl === 'V' && e.ctrlKey === true);
            var key = ($.inArray(e.key, ["v", "V"]) !== -1 && e.ctrlKey === true);
            return key || code;
        }

        function isNavegationKey(e) {
            var ctrl = getKeyCode(e);
            var code = ($.inArray(ctrl, [37, 39, 40, 38, 9]) !== -1);
            var key = ($.inArray(e.key, ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Tab"]) !== -1);
            return key || code;
        }

        function isClearKey(e) {
            var ctrl = getKeyCode(e);
            var code = ($.inArray(ctrl, [46, 8]) !== -1);
            var key = ($.inArray(e.key, ["Delete", "Backspace"]) !== -1);
            return key || code;
        }

        function isDotKey(e) {
            var ctrl = getKeyCode(e);
            var code = ($.inArray(ctrl, [110, 190]) !== -1);
            var key = (e.key === ".");
            return key || code;
        }

        function isNumericKey(e) {
            var ctrl = getKeyCode(e);
            var code = ((ctrl >= 48 && ctrl <= 57) || (ctrl >= 96 && ctrl <= 105));
            var key = ($.inArray(e.key, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) !== -1);
            return key || code;
        }

    }

})();