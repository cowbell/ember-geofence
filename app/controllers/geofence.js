import Ember from "ember";
import WorkingIndicatorMixin from "ember-geofence/mixins/working-indicator";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, WorkingIndicatorMixin, {
    actions: {
        changeValidState(isValid) {
            this.set("isValid", isValid);
        },

        save() {
            const isValid = this.get("isValid");
            this.set("showErrors", true);

            console.log("contr isValid", isValid);

            if (isValid) {
                this.doWork(() => this.get("geofence-store").save(this.get("model")))
                    .then(() => this.transitionToRoute("geofences"));
            }
        },

        back() {
            this.transitionToRoute("geofences");
        }
    }
});
