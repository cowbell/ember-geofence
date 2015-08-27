import Ember from "ember";
import EmberLeafletComponent from "ember-leaflet/components/leaflet-map";
import TileLayer from "ember-leaflet/layers/tile";
import MapMarkerLayer from "ember-geofence/layers/map-marker-layer";
import CirleLayer from "ember-leaflet/layers/circle";

export default EmberLeafletComponent.extend({
    classNames: ["map"],

    center: Ember.computed("location", function () {
        return L.latLng(this.get("location.latitude"), this.get("location.longitude"));
    }),

    markerPosition: Ember.computed("location", function () {
        return L.latLng(this.get("location.latitude"), this.get("location.longitude"));
    }),

    onMarkerPositionChanged: Ember.observer("markerPosition", function () {
        this.set("location.latitude", this.get("markerPosition").lat);
        this.set("location.longitude", this.get("markerPosition").lng);
    }),

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
        MapMarkerLayer.extend({
            location: Ember.computed.alias("controller.markerPosition")
        }),
        CirleLayer.extend({
            radius: Ember.computed("controller.location.radius", function () {
                return this.controller.get("location.radius");
            }),
            location: Ember.computed.alias("controller.markerPosition")
        })
    ]
});
