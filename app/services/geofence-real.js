import Ember from "ember";

export default Ember.Service.extend({
    isInitialized: null,

    init() {
        if(!this.isGeofenceAvailable()) {
            Ember.Logger.warn("Geofence plugin is not available");
        } else {
            this.isInitialized = window.geofence.initialize();
        }
    },

    isGeofenceAvailable() {
        return typeof window.geofence !== "undefined";
    },

    addOrUpdate(geofences) {
        return this.isInitialized.then(() => {
            return window.geofence.addOrUpdate(geofences);
        });
    },

    remove(geofenceIds) {
        return this.isInitialized.then(() => {
            return window.geofence.remove(geofenceIds);
        });
    },

    removeAll() {
        return this.isInitialized.then(() => {
            return window.geofence.removeAll();
        });
    },

    getWatched() {
        return window.geofence.getWatched().then((geofences) => {
            return JSON.parse(geofences);
        });
    }
});
