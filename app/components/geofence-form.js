import Ember from "ember";

export default Ember.Component.extend({
    validate: false,
    isNotificationTextInvalid: Ember.computed.empty("model.notification.text"),
    showNotificationTextInvalid: Ember.computed.and("validate", "isNotificationTextInvalid"),

    validStateHasChanged: Ember.observer("isNotificationTextInvalid", function () {
        const isValid = !this.get("isNotificationTextInvalid");
        this.set("isValid", isValid);
    }),

    transitionTypes: [
        {id: 1, label: "On Enter"},
        {id: 2, label: "On Exit"},
        {id: 3, label: "On Both"}
    ],

    transitionTypeLabel: function() {
        return (id) => {
            return this.get("transitionTypes").findBy("id", id).label;
        };
    }.property()
});
