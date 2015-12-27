import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    actions: {
        delete(geofence) {
            this.set("isWorking", true);
            this.get("geofence-store").destroy(geofence).then(() => {
                this.set("isWorking", false);
            });
        },

        add() {
            this.transitionToRoute("geofences.new");
        },

        testApplication() {
            window.location.href = "cdvtests/index.html";
        },

        removeAll() {
            this.set("isWorking", true);
            this.get("geofence-store").destroyAll().then(() => {
                this.set("isWorking", false);
            });
        }
    }
});
