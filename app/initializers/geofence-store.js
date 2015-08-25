import GeofenceStore from "ember-geofence/services/geofence-store";

export default {
    name: "geofence-store",

    initialize(container, application) {
        application.register("geofence-store:main", GeofenceStore);
        application.inject("controller", "geofence", "geofence-store:main");
        application.inject("route", "geofence", "geofence-store:main");
    }
};
