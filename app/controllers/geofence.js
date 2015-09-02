import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    geofence_store: Ember.inject.service("geofence-store"),

    actions: {
        save() {
            this.set("isWorking", true);
            this.get("geofence_store").saveRecord(this.get("model")).then(() => {
                this.set("isWorking", false);
                this.transitionToRoute("geofences");
            });
        }
    }
});
