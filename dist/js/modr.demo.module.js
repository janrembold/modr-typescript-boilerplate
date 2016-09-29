///<reference path="../../node_modules/modr-typescript/src/js/modr.core.loader.ts"/>
///<reference path="../../node_modules/modr-typescript/src/js/modr.interface.jqueryplugin.ts"/>
var Modr;
(function (Modr) {
    var Demo;
    (function (Demo) {
        var Module = (function () {
            function Module($element, options) {
                this.options = {
                    var1: true
                };
                this.$element = $element;
                this.options = $.extend({}, this.options, options);
            }
            Module.prototype.init = function () {
                console.log('init Modr:Demo:Module');
                var self = this;
                self.$element.append(' => Launched mod');
            };
            Module.prototype.destroy = function () {
                console.log('destroy Modr:Demo:Module');
            };
            return Module;
        }());
        Demo.Module = Module;
    })(Demo = Modr.Demo || (Modr.Demo = {}));
})(Modr || (Modr = {}));
