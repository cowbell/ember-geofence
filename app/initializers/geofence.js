import Geofence from "ember-geofence/services/geofence-real";
import GeofenceMock from "ember-geofence/services/geofence-mock";

export default {
    name: "geofence",
    after: "cordova",

    initialize(application) {
        const isCordova = typeof cordova !== "undefined";

        application.register("service:geofence", isCordova ? Geofence : GeofenceMock);
    }
};
