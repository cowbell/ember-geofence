import Ember from "ember";

export default Ember.Route.extend({
    geolocation: Ember.inject.service("geolocation"),

    model() {
        const geolocation = this.get('geolocation');

        return geolocation.getCurrentPosition()
            .then((position) => {
                return this.store.createRecord('geofence', {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    notification: this.store.createRecord("notification")
                });
            }, (error) => {
                return this.store.createRecord('geofence');
            });
    },

    deactivate() {
        this.get("currentModel").rollback();
    }
});
