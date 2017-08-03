'use strict';

System.register(['./lib/echarts.min'], function (_export, _context) {
	"use strict";

	var echarts;
	function link(scope, elem, attrs, ctrl) {
		var mapContainer = elem.find('.chinamap-panel');
		var myChart;

		ctrl.events.on('render', function () {
			render();
			ctrl.renderingCompleted();
		});

		function render() {
			//if (!ctrl.data) return;

			if (!mychart) {
				myChart = echarts.init(mapContainer[0]);
			}

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
			console.log("finish");
			/*
      ctrl.map.resize();
   
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
