import TransitionType from "ember-geofence/services/transition-type";
import Ember from "ember";

export default Ember.Component.extend({
    onEnter: Ember.on("init", Ember.computed("model.transitionType", function () {
        return this.get("model.transitionType") & TransitionType.ENTER;
    })),

    onExit: Ember.on("init", Ember.computed("model.transitionType", function () {
        return this.get("model.transitionType") & TransitionType.EXIT;
    })),

    setTransitionType: Ember.observer("onEnter", "onExit", function () {
        let transitionType;

        transitionType = this.get("onEnter") ? TransitionType.ENTER : 0;
        transitionType |= this.get("onExit") ? TransitionType.EXIT: 0;

        this.set("model.transitionType", transitionType);
    })
});
