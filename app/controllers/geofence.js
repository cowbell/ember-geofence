import Ember from "ember";

export default Ember.Controller.extend({
    geofence_store: Ember.inject.service("geofence-store"),

    actions: {
        save() {
            this.set("isWorking", true);
            this.get("geofence_store").save(this.get("model")).then(() => {
                this.set("isWorking", false);
                this.transitionToRoute("geofences");
            });
        },

        back() {
            this.transitionToRoute("geofences");
        }
    }
});
