///<reference path="../../node_modules/modr-typescript/src/js/modr.core.loader.ts"/>
///<reference path="../../node_modules/modr-typescript/src/js/modr.interface.jqueryplugin.ts"/>

namespace Modr.Demo {
	export class Base implements Modr.Interface.JQueryPlugin {

		public $element:JQuery;
		public options = {
			foo: 'bar'
		};

		public _dependencies = {
			config1: {
				resources: [
					{
						paths: ['modr.demo.module.js']
					}
				],
				modr: [
					{name: 'Demo', module: 'Module'}
				],
				init: function ($element?:JQuery) {
					console.log('do something');
				},
				test: function () {
					return true;
				}
			}
		};

		constructor($element:JQuery, options:any) {
			this.$element = $element;
			this.options = $.extend({}, this.options, options);
		}

		/**
		 * default init method
		 */
		public init():void {
			this.$element.append(' => Done - Option "foo" = "' + self.options.foo + '"');
			Modr.Core.Loader.load(this._dependencies.config1, this.$element);
		}

		/**
		 * default destroy method
		 */
		public destroy():void {
		}
	}
}
