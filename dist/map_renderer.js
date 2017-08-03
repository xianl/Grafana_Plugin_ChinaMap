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
        var myChart = echarts.init(mapContainer[0]);
      }

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
