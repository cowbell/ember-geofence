import Ember from "ember";

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('geofence');
    },

    deactivate() {
        this.get("currentModel").rollback();
    }
});
