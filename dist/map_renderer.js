'use strict';

System.register(['./lib/echarts.min', 'lodash'], function (_export, _context) {
	"use strict";

	var echarts, _;

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

				switch (dataPoint.key) {

					case '北京':
						ctrl.mapValue.北京 = dataPoint.valueFormatted;
						break;
					case '天津':
						ctrl.mapValue.天津 = dataPoint.valueFormatted;
						break;
					case '上海':
						ctrl.mapValue.上海 = dataPoint.valueFormatted;
						break;
					case '重庆':
						ctrl.mapValue.重庆 = dataPoint.valueFormatted;
						break;
					case '河北':
						ctrl.mapValue.河北 = dataPoint.valueFormatted;
						break;
					case '山西':
						ctrl.mapValue.山西 = dataPoint.valueFormatted;
						break;
					case '辽宁':
						ctrl.mapValue.辽宁 = dataPoint.valueFormatted;
						break;
					case '吉林':
						ctrl.mapValue.吉林 = dataPoint.valueFormatted;
						break;
					case '黑龙江':
						ctrl.mapValue.黑龙江 = dataPoint.valueFormatted;
						break;
					case '江苏':
						ctrl.mapValue.江苏 = dataPoint.valueFormatted;
						break;
					case '浙江':
						ctrl.mapValue.浙江 = dataPoint.valueFormatted;
						break;
					case '安徽':
						ctrl.mapValue.安徽 = dataPoint.valueFormatted;
						break;
					case '福建':
						ctrl.mapValue.福建 = dataPoint.valueFormatted;
						break;
					case '江西':
						ctrl.mapValue.江西 = dataPoint.valueFormatted;
						break;
					case '山东':
						ctrl.mapValue.山东 = dataPoint.valueFormatted;
						break;
					case '河南':
						ctrl.mapValue.河南 = dataPoint.valueFormatted;
						break;
					case '湖北':
						ctrl.mapValue.湖北 = dataPoint.valueFormatted;
						break;
					case '湖南':
						ctrl.mapValue.湖南 = dataPoint.valueFormatted;
						break;
					case '广东':
						ctrl.mapValue.广东 = dataPoint.valueFormatted;
						break;
					case '海南':
						ctrl.mapValue.海南 = dataPoint.valueFormatted;
						break;
					case '四川':
						ctrl.mapValue.四川 = dataPoint.valueFormatted;
						break;
					case '贵州':
						ctrl.mapValue.贵州 = dataPoint.valueFormatted;
						break;
					case '云南':
						ctrl.mapValue.云南 = dataPoint.valueFormatted;
						break;
					case '陕西':
						ctrl.mapValue.陕西 = dataPoint.valueFormatted;
						break;
					case '甘肃':
						ctrl.mapValue.甘肃 = dataPoint.valueFormatted;
						break;
					case '青海':
						ctrl.mapValue.青海 = dataPoint.valueFormatted;
						break;
					case '台湾':
						ctrl.mapValue.台湾 = dataPoint.valueFormatted;
						break;
					case '内蒙古':
						ctrl.mapValue.内蒙古 = dataPoint.valueFormatted;
						break;
					case '广西':
						ctrl.mapValue.广西 = dataPoint.valueFormatted;
						break;
					case '西藏':
						ctrl.mapValue.西藏 = dataPoint.valueFormatted;
						break;
					case '宁夏':
						ctrl.mapValue.宁夏 = dataPoint.valueFormatted;
						break;
					case '新疆':
						ctrl.mapValue.新疆 = dataPoint.valueFormatted;
						break;
					case '香港':
						ctrl.mapValue.香港 = dataPoint.valueFormatted;
						break;
					case '澳门':
						ctrl.mapValue.澳门 = dataPoint.valueFormatted;
						break;
				}
			});

			thresholds = ctrl.panel.thresholds.split(',').map(function (strValue) {
				return Number(strValue.trim());
			});

			var option = {
				backgroundColor: ctrl.panel.backgroundColor,
				tooltip: {
					trigger: 'item',
					formatter: '{b}: {c}'
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
					data: [{ name: '北京', value: ctrl.mapValue.北京 == null ? null : _.round(ctrl.mapValue.北京, 2) }, { name: '天津', value: _.round(ctrl.mapValue.天津) }, { name: '上海', value: _.round(ctrl.mapValue.上海) }, { name: '重庆', value: _.round(ctrl.mapValue.重庆) }, { name: '河北', value: _.round(ctrl.mapValue.河北) }, { name: '山西', value: _.round(ctrl.mapValue.山西) }, { name: '辽宁', value: _.round(ctrl.mapValue.辽宁) }, { name: '吉林', value: _.round(ctrl.mapValue.吉林) }, { name: '黑龙江', value: _.round(ctrl.mapValue.黑龙江) }, { name: '江苏', value: _.round(ctrl.mapValue.江苏) }, { name: '浙江', value: _.round(ctrl.mapValue.浙江) }, { name: '安徽', value: _.round(ctrl.mapValue.安徽) }, { name: '福建', value: _.round(ctrl.mapValue.福建) }, { name: '江西', value: _.round(ctrl.mapValue.江西) }, { name: '山东', value: _.round(ctrl.mapValue.山东) }, { name: '河南', value: _.round(ctrl.mapValue.河南) }, { name: '湖北', value: _.round(ctrl.mapValue.湖北) }, { name: '湖南', value: _.round(ctrl.mapValue.湖南) }, { name: '广东', value: _.round(ctrl.mapValue.广东) }, { name: '海南', value: _.round(ctrl.mapValue.海南) }, { name: '四川', value: _.round(ctrl.mapValue.四川) }, { name: '贵州', value: _.round(ctrl.mapValue.贵州) }, { name: '云南', value: _.round(ctrl.mapValue.云南) }, { name: '陕西', value: _.round(ctrl.mapValue.陕西) }, { name: '甘肃', value: _.round(ctrl.mapValue.甘肃) }, { name: '青海', value: _.round(ctrl.mapValue.青海) }, { name: '台湾', value: _.round(ctrl.mapValue.台湾) }, { name: '内蒙古', value: _.round(ctrl.mapValue.内蒙古) }, { name: '广西', value: _.round(ctrl.mapValue.广西) }, { name: '西藏', value: _.round(ctrl.mapValue.西藏) }, { name: '宁夏', value: _.round(ctrl.mapValue.宁夏) }, { name: '新疆', value: _.round(ctrl.mapValue.新疆) }, { name: '香港', value: _.round(ctrl.mapValue.香港) }, { name: '澳门', value: _.round(ctrl.mapValue.澳门) }]
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
		}, function (_lodash) {
			_ = _lodash.default;
		}],
		execute: function () {}
	};
});
//# sourceMappingURL=map_renderer.js.map
