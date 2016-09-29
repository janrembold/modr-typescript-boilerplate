///<reference path="../../node_modules/modr-typescript/src/js/modr.core.loader.ts"/>
///<reference path="../../node_modules/modr-typescript/src/js/modr.interface.jqueryplugin.ts"/>
var Modr;
(function (Modr) {
    var Demo;
    (function (Demo) {
        var Base = (function () {
            function Base($element, options) {
                this.options = {
                    foo: 'bar'
                };
                this._dependencies = {
                    config1: {
                        resources: [
                            {
                                paths: ['modr.demo.module.js']
                            }
                        ],
                        modr: [
                            { name: 'Demo', module: 'Module' }
                        ],
                        init: function ($element) {
                            console.log('do something');
                        },
                        test: function () {
                            return true;
                        }
                    }
                };
                this.$element = $element;
                this.options = $.extend({}, this.options, options);
            }
            /**
             * default init method
             */
            Base.prototype.init = function () {
                var self = this;
                self.$element.append(' => Done - Option "foo" = "' + self.options.foo + '"');
                Modr.Core.Loader.load(self._dependencies.config1, self.$element);
            };
            /**
             * default destroy method
             */
            Base.prototype.destroy = function () {
            };
            return Base;
        }());
        Demo.Base = Base;
    })(Demo = Modr.Demo || (Modr.Demo = {}));
})(Modr || (Modr = {}));
