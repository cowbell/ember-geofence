import Ember from "ember";

export default Ember.Route.extend({
    geofence_store: Ember.inject.service("geofence-store"),

    model() {
        return {
            promise: this.get("geofence_store").findAll()
        };
    },

    setupController(controller, model) {
        controller.set("promise", model.promise);
    }
});
