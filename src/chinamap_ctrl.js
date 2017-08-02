import {MetricsPanelCtrl} from 'app/plugins/sdk';
import echarts from './lib/echarts';
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
			title: { text: 'ECharts 入门示例' },
			tooltip: {},
			xAxis: {
				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		console.log("finish");
		
		
		});
    }
}

ChinaMapCtrl.templateUrl = 'module.html';