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
      ctrl.map = echarts.init(mapContainer);
    }

	/*
    ctrl.map.resize();

    if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

    ctrl.map.drawCircles();
	*/
	
  }
}