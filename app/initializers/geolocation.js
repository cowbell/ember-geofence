import Geolocation from "ember-geofence/services/geolocation";

export default {
    name: "geolocation",
    after: "cordova",

    initialize(container, application) {
        application.register("geolocation:main", Geolocation);
        application.inject("controller", "geolocation", "geolocation:main");
        application.inject("route", "geolocation", "geolocation:main");
    }
};
