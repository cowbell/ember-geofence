import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    actions: {
        save() {
            this.set("isWorking", true);
            this.get("geofence-store").save(this.get("model")).then(() => {
                this.set("isWorking", false);
                this.transitionToRoute("geofences");
            });
        },

        back() {
            this.transitionToRoute("geofences");
        }
    }
});
