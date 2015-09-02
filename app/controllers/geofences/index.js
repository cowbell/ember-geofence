import Ember from "ember";

export default Ember.Controller.extend(Ember.PromiseProxyMixin, {
    anyGeofences: Ember.computed("model.length", function () {
        return this.get("model").length > 0;
    })
});
