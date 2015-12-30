import Ember from "ember";

export default Ember.Route.extend({
    setupController(controller, model) {
        controller.setProperties({
            promise: Ember.RSVP.resolve(Ember.copy(model)),
            showErrors: false
        });
    }
});
