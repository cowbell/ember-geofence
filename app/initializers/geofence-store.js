import GeofenceStore from "ember-geofence/services/geofence-store";

export default {
    name: "geofence-store",

    initialize(application) {
        application.register("service:geofence-store", GeofenceStore);
        application.inject("controller", "geofence-store", "service:geofence-store");
        application.inject("route", "geofence-store", "service:geofence-store");
    }
};
