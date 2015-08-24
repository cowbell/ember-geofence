import EmberLeafletComponent from "ember-leaflet/components/leaflet-map";
import MarkerCollectionLayer from "ember-leaflet/layers/marker-collection";
import TileLayer from "ember-leaflet/layers/tile";
import MapMarkerLayer from "ember-geofence/layers/map-marker-layer";

export default EmberLeafletComponent.extend({
    classNames: ["map"],

    center: Ember.computed("location", function () {
        const location = this.get("location");

        return L.latLng(location.get("latitude"), location.get("longitude"));
    }),

    markers: Ember.on("init", Ember.observer("location", function () {
        const location = this.get("location");
        const childLayers = this.get("childLayers");
        const markerLayer = childLayers[1];

        markerLayer.reopen({
            content: [{
                location: L.latLng(location.get("latitude"), location.get("longitude")),
                title: "Current location"
            }]
        });
    })),

    childLayers: [
        TileLayer.extend({
            tileUrl: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            enabled: true,
            options: {
                attribution: "&copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/''>CC-BY-SA</a>",
                maxZoom: 20,
                maxNativeZoom: 18
            }
        }),
        MarkerCollectionLayer.extend({
            itemLayerClass: MapMarkerLayer
        })
    ]
});
