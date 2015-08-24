import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  classNames: ["map"],
  childLayers: [
    TileLayer.extend({
      tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      enabled: true,
      options:{
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom:20,
        maxNativeZoom:18
      }
    }),
    MarkerCollectionLayer.extend({
      contentBinding: 'controller'
    })
  ]
});
