'use strict';

System.register(['./lib/echarts.min'], function (_export, _context) {
	"use strict";

	var echarts;
	function link(scope, elem, attrs, ctrl) {
		var mapContainer = elem.find('.chinamap-panel');

		ctrl.events.on('render', function () {
			render();
			ctrl.renderingCompleted();
		});

		function render() {
			if (!ctrl.data) return;

			if (!ctrl.map) {
				ctrl.map = echarts.init(mapContainer[0]);
			}

			var data = ctrl.data;
			//var value1;
			//var value2;
			//var value3;


			var thresholds;

			data.forEach(function (dataPoint) {

				if (dataPoint.key == '天津') ctrl.mapValue.天津 = dataPoint.valueFormatted;
				if (dataPoint.key == '辽宁') ctrl.mapValue.辽宁 = dataPoint.valueFormatted;
				if (dataPoint.key == '山东') ctrl.mapValue.山东 = dataPoint.valueFormatted;
			});

			thresholds = ctrl.panel.thresholds.split(',').map(function (strValue) {
				return Number(strValue.trim());
			});

			var option = {
				backgroundColor: ctrl.panel.backgroundColor,
				tooltip: {
					trigger: 'item',
					formatter: '{b} {c}'
				},
				visualMap: {
					min: thresholds[0],
					max: thresholds[1],
					left: 'left',
					inRange: {
						color: ctrl.panel.dataColors
					},
					textStyle: {
						color: ctrl.panel.thresholdTextColor
					},
					top: 'bottom',
					text: ['高', '低'], // 文本，默认为数值文本
					calculable: true
				},
				series: [{
					name: '中国',
					type: 'map',
					mapType: 'china',
					selectedMode: 'multiple',
					label: {
						normal: {
							show: true,
							textStyle: {
								color: ctrl.panel.labelColor
							}
						},
						emphasis: {
							show: true,
							textStyle: {
								color: ctrl.panel.labelEmphasisColor
							}
						}
					},
					itemStyle: {
						normal: {
							areaColor: ctrl.panel.itemNormalColor,
							borderColor: ctrl.panel.itemBorderColor
						},
						emphasis: {
							areaColor: ctrl.panel.itemEmphasisColor
						}
					},
					data: [{ name: '天津', value: ctrl.mapValue.天津 }, { name: '辽宁', value: ctrl.mapValue.辽宁 }, { name: '山东', value: ctrl.mapValue.山东 }]
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			ctrl.map.setOption(option);

			var opts = {

				width: 'auto',
				height: ctrl.height,
				silent: false
			};

			ctrl.map.resize(opts);

			/*
      if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();
   
      if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();
   
      ctrl.map.drawCircles();
   */
		}
	}

	_export('default', link);

	return {
		setters: [function (_libEchartsMin) {
			echarts = _libEchartsMin.default;
		}],
		execute: function () {}
	};
});
//# sourceMappingURL=map_renderer.js.map
