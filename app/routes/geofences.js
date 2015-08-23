import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            id: 1,
            notification: {
                text: "Geofence 1"
            }
        }, {
            id: 2,
            notification: {
                text: "Geofence 2"
            }
        }]
    }
});
