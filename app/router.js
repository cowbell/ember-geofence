import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource("geofences", function() {
        this.route("new");
    });
    this.resource("geofence", { path: "/geofence/:geofence_id" });
});

export default Router;
