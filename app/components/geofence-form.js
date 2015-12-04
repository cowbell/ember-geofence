import TransitionType from "ember-geofence/services/transition-type";
import Ember from "ember";

export default Ember.Component.extend({
    transitionTypes: [
        {id: 1, label: "On Enter"},
        {id: 2, label: "On Exit"},
        {id: 3, label: "On Both"}
    ],

    transitionTypeLabel: function() {
        return (id) => {
            return this.get("transitionTypes").findBy("id", id).label;
        };
});
