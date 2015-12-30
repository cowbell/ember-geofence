import Ember from "ember";

export default Ember.Route.extend({
    controllerName: "geofence",

    model() {
        const geolocation = this.get("geolocation");

        var currentPositionPromise = geolocation.getCurrentPosition()
            .then((position) => {
                return this.get("geofence-store").create({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, () => {
                return this.get("geofence-store").create();
            });

        return {
            promise: currentPositionPromise
        };
    },

    setupController(controller, model) {
        controller.setProperties({
            promise: model.promise,
            isValid: null,
            validate: false
        });
    }
});
