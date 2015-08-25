import Ember from "ember";
import Geofence from "ember-geofence/models/geofence";

export default Ember.Route.extend({
    model: function(params) {
        return Geofence.find(params.geofence_id);
    },

    setupController(controller, model) {
        controller.set("model", Ember.copy(model));
    }
});
