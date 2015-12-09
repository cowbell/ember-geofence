import Ember from "ember";

export default Ember.Route.extend({
    setupController(controller) {
        controller.set("promise", this.get("geofence-store").findAll());
    }
});
