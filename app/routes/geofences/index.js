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
    },

    actions: {
        add() {
            this.transitionTo("geofences.new");
        },

        edit(geofence) {
            this.transitionTo("geofence", geofence);
        },

        delete(geofence) {
            this.get("geofence_store").destroyRecord(geofence);
        },

        refresh() {
            this.refresh();
        }
    }
});
