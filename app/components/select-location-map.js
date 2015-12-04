import Ember from "ember";
// import TileLayer from "ember-leaflet/layers/tile";
// import MapMarkerLayer from "ember-geofence/layers/map-marker-layer";
// import CirleLayer from "ember-leaflet/layers/circle";

export default Ember.Component.extend({
    zoom: 12,

    actions: {
        mapClicked(event) {
            this.setProperties({
                "location.latitude": event.latlng.lat,
                "location.longitude": event.latlng.lng
            });
        },

        updateLocation(event) {
            let location = event.target.getLatLng();

            this.setProperties({
                "location.latitude": location.lat,
                "location.longitude": location.lng
            });
        }
    }
});
