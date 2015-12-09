import Ember from "ember";

export default Ember.Route.extend({
    setupController(controller, model) {
        controller.set("promise", Ember.RSVP.resolve(Ember.copy(model)));
    }
});
