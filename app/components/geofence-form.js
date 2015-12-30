import Ember from "ember";

export default Ember.Component.extend({
    validate: false,
    isNotificationTextInvalid: Ember.computed.empty("model.notification.text"),
    showNotificationTextInvalid: Ember.computed.and("showErrors", "isNotificationTextInvalid"),
    isValid: Ember.computed.not("isNotificationTextInvalid"),

    validStateHasChanged: Ember.on("init", Ember.observer("isValid", function () {
        this.sendAction("changeValidState", this.get("isValid"));
    })),

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
