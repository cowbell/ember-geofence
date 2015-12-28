import Ember from "ember";
import WorkingIndicatorMixin from "ember-geofence/mixins/working-indicator";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, WorkingIndicatorMixin, {
    actions: {
        save() {
            this.doWork(() => this.get("geofence-store").save(this.get("model")))
                .then(() => this.transitionToRoute("geofences"));
        },

        back() {
            this.transitionToRoute("geofences");
        }
    }
});
