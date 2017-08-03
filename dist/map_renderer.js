'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function link(scope, elem, attrs, ctrl) {
    var mapContainer = elem.find('.chinamap-panel');

    ctrl.events.on('render', function () {
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

  _export('default', link);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=map_renderer.js.map
