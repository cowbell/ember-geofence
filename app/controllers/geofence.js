export default Ember.Controller.extend({
    geofence_store: Ember.inject.service("geofence-store"),

    actions: {
        save() {
            this.get("geofence_store").saveRecord(this.get("model")).then(() => {
                this.transitionToRoute("geofences");
            });
        }
    }
});
