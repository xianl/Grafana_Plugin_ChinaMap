import {MetricsPanelCtrl} from 'app/plugins/sdk';
import echarts from './lib/echarts';
import china from './lib/china';
import moment from 'moment';

export class ChinaMapCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    //this.updateMap();
  }


link(scope, elem, attrs, ctrl) {
     
	 this.events.on('render', () => {

		
		
		elem = elem.find('.chinamap-panel');
		//console.log(elem[0]);
        var myChart = echarts.init(elem[0]);

		
		
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
		console.log("finish");
		
		
		});
    }
}

ChinaMapCtrl.templateUrl = 'module.html';