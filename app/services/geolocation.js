import Ember from "ember";

export default Ember.Service.extend({
    currentPositionCache: null,
    currentPositionCacheTimeout: 10000,

    init() {
        if (!this.isPluginAvailable()) {
            Ember.Logger.warn("Missing cordova geolocation plugin - add plugin using cordova plugin add cordova-plugin-geofence");
        }
    },

    isPluginAvailable() {
        return typeof window.navigator.geolocation !== "undefined";
    },

    getCurrentPosition(options) {
        return new Ember.RSVP.Promise( (resolve, reject) => {
            const currentPositionCache = this.get("currentPositionCache");

            if (!currentPositionCache) {
                window.navigator.geolocation.getCurrentPosition((position) => {
                    this.set("currentPositionCache", position);
                    resolve(position);
                    Ember.run.later(() => {
                        this.set("currentPositionCache", null);
                    }, this.get("currentPositionCacheTimeout"));
                }, reject, options);
            } else {
                resolve(currentPositionCache);
            }
        });
    },

    watchPosition() {

    },

    clearWatch() {

    }
});
