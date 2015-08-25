import Geofence from "ember-geofence/services/geofence-real";
import GeofenceMock from "ember-geofence/services/geofence-mock";
import ENV from "ember-geofence/config/environment";

export default {
    name: "geofence",
    after: "cordova",

    initialize(container, application) {
        application.register("service:geofence", ENV.environment === "development" ? GeofenceMock : Geofence);
    }
};
