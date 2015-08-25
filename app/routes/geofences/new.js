import Ember from "ember";

export default Ember.Route.extend({
    geolocation: Ember.inject.service("geolocation"),
    geofence_store: Ember.inject.service("geofence-store"),

    model() {
        const geolocation = this.get('geolocation');

        return geolocation.getCurrentPosition()
            .then((position) => {
                return this.get("geofence_store").createRecord({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, (error) => {
                return this.get("geofence_store").createRecord();
            });
    },

    deactivate() {
        // this.get("currentModel").rollback();
    }
});
