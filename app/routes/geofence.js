import Ember from "ember";

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find("geofence", params.geofence_id);
    },

    deactivate() {
        this.get("currentModel").rollback();
    }
});
