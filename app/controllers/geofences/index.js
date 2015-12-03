import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    geofence_store: Ember.inject.service("geofence-store"),

    anyGeofences: Ember.computed("model.length", function () {
        return this.get("model").length > 0;
    }),

    actions: {
        delete(geofence) {
            this.set("isWorking", true);
            this.get("geofence_store").destroy(geofence).then(() => {
                this.set("isWorking", false);
            });
        },

        add() {
            this.transitionToRoute("geofences.new");
        },

        edit(geofence) {
            this.transitionToRoute("geofence", geofence);
        },

        testApplication() {
            window.location.href = "cdvtests/index.html";
        },

        removeAll() {
            this.set("isWorking", true);
            this.get("geofence_store").destroyAll().then(() => {
                this.set("isWorking", false);
            });
        }
    }
});
