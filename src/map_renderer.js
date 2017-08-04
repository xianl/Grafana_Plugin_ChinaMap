import echarts from './lib/echarts.min';

export default function link(scope, elem, attrs, ctrl) {
  const mapContainer = elem.find('.chinamap-panel');

  ctrl.events.on('render', () => {
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    //if (!ctrl.data) return;

    if (!ctrl.map) {
      ctrl.map = echarts.init(mapContainer[0]);
	  
    }
	
	const data = ctrl.data;
	var value1;
	var value2;
	var thresholds;
	
	data.forEach((dataPoint) => {
      
	  if(dataPoint.key == 'sydney')  value1=dataPoint.valueFormatted;
	  if(dataPoint.key == 'singapore')  value2=dataPoint.valueFormatted;
	  
    });
	
	thresholds = ctrl.panel.thresholds.split(',').map((strValue) => {
	return Number(strValue.trim());
	 });
	
	var option = {
			backgroundColor: ctrl.panel.backgroundColor,
			tooltip: {
				trigger: 'item',
				formatter: '{b}'
			},
			visualMap: {
				min: thresholds[0],
				max: thresholds[1],
				left: 'left',
				inRange: {
					color: ctrl.panel.dataColors
				},
				textStyle: {
					color:ctrl.panel.thresholdTextColor
			},
			top: 'bottom',
			text: ['高','低'],           // 文本，默认为数值文本
			calculable: true
			},
			series: [
				{
					name: '中国',
					type: 'map',
					mapType: 'china',
					selectedMode : 'multiple',
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
					data:[
						{name:'广东', value: value1},
						{name:'江苏', value: value2},
					]
				}
			]
		};
    // 使用刚指定的配置项和数据显示图表。
    ctrl.map.setOption(option);
	
	var t=setTimeout("alert('alert')",5000);
    ctrl.map.resize();
		

	/*
    if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

    ctrl.map.drawCircles();
	*/
	
  }
}