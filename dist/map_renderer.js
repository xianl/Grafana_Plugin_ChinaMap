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
			//if (!ctrl.data) return;

			if (!ctrl.map) {
				ctrl.map = echarts.init(mapContainer[0]);
			}

			var data = ctrl.data;
			var value1;
			var value2;

			data.forEach(function (dataPoint) {

				if (dataPoint.key == 'sydney') value1 = dataPoint.valueFormatted;
				if (dataPoint.key == 'singapore') value2 = dataPoint.valueFormatted;
			});

			var option = {
				backgroundColor: '#808080',
				tooltip: {
					trigger: 'item',
					formatter: '{b}'
				},
				visualMap: {
					min: 0,
					max: 10,
					left: 'left',
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
								color: '#f5f5f5'
							}
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							areaColor: '#2d3339',
							borderColor: '#404a59'
						},
						emphasis: {
							areaColor: '#2a333d'
						}
					},
					data: [{ name: '广东', value: value1 }, { name: '江苏', value: value2 }]
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			ctrl.map.setOption(option);

			ctrl.map.resize();

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
