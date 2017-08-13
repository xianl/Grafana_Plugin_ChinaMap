import echarts from './lib/echarts.min';

export default function link(scope, elem, attrs, ctrl) {
  const mapContainer = elem.find('.chinamap-panel');

  ctrl.events.on('render', () => {
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    if (!ctrl.data) return;

    if (!ctrl.map) {
      ctrl.map = echarts.init(mapContainer[0]);
	  
    }
	
	const data = ctrl.data;
	//var value1;
	//var value2;
	//var value3;

	

	var thresholds;
	
	data.forEach((dataPoint) => {
      
	  if(dataPoint.key == '天津')  ctrl.mapValue.天津=dataPoint.valueFormatted;
	  if(dataPoint.key == '辽宁')  ctrl.mapValue.辽宁=dataPoint.valueFormatted;
	  if(dataPoint.key == '山东')  ctrl.mapValue.山东=dataPoint.valueFormatted;
	
	  
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
						{name:'天津', value: ctrl.mapValue.天津},
						{name:'辽宁', value: ctrl.mapValue.辽宁},
						{name:'山东', value: ctrl.mapValue.山东},
					]
				}
			]
		};
    // 使用刚指定的配置项和数据显示图表。
    ctrl.map.setOption(option);
	
	var opts = {
		
		width:'auto',
		height: ctrl.height,
		silent: false
	}
	
    ctrl.map.resize(opts);
		

	/*
    if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

    ctrl.map.drawCircles();
	*/
	
  }
}