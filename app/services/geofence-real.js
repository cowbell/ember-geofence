import Ember from "ember";

export default Ember.Service.extend({
    init() {
        if(!this.isGeofenceAvailable()) {
            Ember.Logger.warn("Geofence plugin is not available");
        } else {
            return window.geofence.initialize();
        }
    },

    isGeofenceAvailable() {
        return typeof window.geofence !== "undefined";
    },

    addOrUpdate(geofences) {
        const rawGeofences = Ember.makeArray(geofences).map(g => g.toJson());
        
        return window.geofence.addOrUpdate(rawGeofences);
    },

    remove(geofenceIds) {
        return window.geofence.remove(geofenceIds);
    },

    removeAll() {
        return window.geofence.removeAll();
    },

    getWatched() {
        return window.geofence.getWatched().then((geofences) => {
            return JSON.parse(geofences);
        });
    }
});
