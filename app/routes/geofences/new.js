import Ember from "ember";

export default Ember.Route.extend({
    geolocation: Ember.inject.service("geolocation"),
    geofence_store: Ember.inject.service("geofence-store"),

    model() {
        const geolocation = this.get('geolocation');

        var currentPositionPromise = geolocation.getCurrentPosition()
            .then((position) => {
                return this.get("geofence_store").createRecord({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, () => {
                return this.get("geofence_store").createRecord();
            });

        return {
            promise: currentPositionPromise
        };
    },

    setupController(controller, model) {
        controller.set("promise", model.promise);
    }
});
