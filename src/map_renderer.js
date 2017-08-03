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
	
	data.forEach((dataPoint) => {
      
	  if(datapoint.key == 'Sydney')  value1=datapoint.valueFormatted;
	  if(datapoint.key == 'Singapore')  value2=datapoint.valueFormatted;
	  
    });
	
	var option = {
			tooltip: {
				trigger: 'item',
				formatter: '{b}'
			},
			series: [
				{
					name: '中国',
					type: 'map',
					mapType: 'china',
					selectedMode : 'multiple',
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
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
	
    ctrl.map.resize();
	
		

	/*
    if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

    ctrl.map.drawCircles();
	*/
	
  }
}