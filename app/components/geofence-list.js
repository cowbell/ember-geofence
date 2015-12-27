import Ember from 'ember';

export default Ember.Component.extend({
    anyGeofences: Ember.computed("geofences.length", function () {
        return this.get("geofences").length > 0;
    }),

    actions: {
        delete(geofence) {
            this.sendAction("delete", geofence);
        },

        edit(geofence) {
            this.sendAction("edit", geofence);
        }
    }
});
