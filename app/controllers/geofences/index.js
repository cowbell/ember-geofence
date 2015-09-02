import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    geofence_store: Ember.inject.service("geofence-store"),

    anyGeofences: Ember.computed("model.length", function () {
        return this.get("model").length > 0;
    }),

    actions: {
        delete(geofence) {
            this.set("isWorking", true);
            this.get("geofence_store").destroyRecord(geofence).then(() => {
                this.set("isWorking", false);
            });
        }
    }
});