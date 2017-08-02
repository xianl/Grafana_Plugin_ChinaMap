'use strict';

System.register(['app/plugins/sdk', './lib/echarts', 'moment'], function (_export, _context) {
	"use strict";

	var MetricsPanelCtrl, echarts, moment, _createClass, ChinaMapCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	return {
		setters: [function (_appPluginsSdk) {
			MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
		}, function (_libEcharts) {
			echarts = _libEcharts.default;
		}, function (_moment) {
			moment = _moment.default;
		}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			_export('ChinaMapCtrl', ChinaMapCtrl = function (_MetricsPanelCtrl) {
				_inherits(ChinaMapCtrl, _MetricsPanelCtrl);

				function ChinaMapCtrl($scope, $injector) {
					_classCallCheck(this, ChinaMapCtrl);

					return _possibleConstructorReturn(this, (ChinaMapCtrl.__proto__ || Object.getPrototypeOf(ChinaMapCtrl)).call(this, $scope, $injector));
				}

				_createClass(ChinaMapCtrl, [{
					key: 'link',
					value: function link(scope, elem, attrs, ctrl) {

						this.events.on('render', function () {

							//updateMap(elem);

							elem = elem.find('.chinamap-panel');
							var myChart = echarts.init(elem);

							// 指定图表的配置项和数据
							var option = {
								tooltip: {
									trigger: 'item',
									formatter: '{b}'
								},
								series: [{
									name: '中国',
									type: 'map',
									mapType: 'china',
									selectedMode: 'multiple',
									label: {
										normal: {
											show: true
										},
										emphasis: {
											show: true
										}
									},
									data: [{ name: '广东', selected: true }]
								}]
							};

							// 使用刚指定的配置项和数据显示图表。
							myChart.setOption(option);
						});
					}
				}]);

				return ChinaMapCtrl;
			}(MetricsPanelCtrl));

			_export('ChinaMapCtrl', ChinaMapCtrl);

			ChinaMapCtrl.templateUrl = 'module.html';
		}
	};
});
//# sourceMappingURL=chinamap_ctrl.js.map
