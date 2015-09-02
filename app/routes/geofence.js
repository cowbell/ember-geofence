import Ember from "ember";
import Geofence from "ember-geofence/models/geofence";

export default Ember.Route.extend({
    model: function(params) {
        const fetchGeofence = Geofence.find(params.geofence_id)
                .then((geofence) => {
                    return Ember.copy(geofence);
                });

        return {
            promise: fetchGeofence
        };
    },

    setupController(controller, model) {
        if (model.promise) {
            controller.set("promise", model.promise);
        } else {
            controller.set("promise", Ember.RSVP.Promise.resolve(Ember.copy(model)));
        }
    },

    actions: {
        back() {
            this.transitionTo("geofences");
        }
    }
});
