import {MetricsPanelCtrl} from 'app/plugins/sdk';
import echarts from './lib/echarts';
import moment from 'moment';

export class ChinaMapCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    //this.updateMap();
  }


link(scope, elem, attrs, ctrl) {
     
	 //this.events.on('render', () => {

		//updateMap(elem);
		
		elem = elem.find('.chinamap-panel');
		//console.log(elem[0]);
        var myChart = echarts.init(elem[0]);

		
		
        // 指定图表的配置项和数据
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
						{name:'广东', selected:true}
					]
				}
			]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		
		
	//});
    }
}

ChinaMapCtrl.templateUrl = 'module.html';