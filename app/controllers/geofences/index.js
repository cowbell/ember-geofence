import Ember from "ember";
import WorkingIndicatorMixin from "ember-geofence/mixins/working-indicator";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, WorkingIndicatorMixin, {
    actions: {
        delete(geofence) {
            this.doWork(() => this.get("geofence-store").destroy(geofence));
        },

        add() {
            this.transitionToRoute("geofences.new");
        },

        testApplication() {
            window.location.href = "cdvtests/index.html";
        },

        removeAll() {
            this.doWork(() => this.get("geofence-store").destroyAll());
        }
    }
});
