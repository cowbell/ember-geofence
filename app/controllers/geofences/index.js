import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add() {
            this.transitionTo("geofences.new");
        },

        edit(geofence) {
            this.transitionTo("geofence", geofence);
        },

        delete(geofence) {
            geofence.destroyRecord();
        }
    }
});
