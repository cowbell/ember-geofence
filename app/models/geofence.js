import DS from "ember-data";
import Notification from "./notification"
import TransitionType from "ember-geofence/services/transition-type"

export default DS.Model.extend({
    latitude: DS.attr("number"),
    longitude: DS.attr("number"),
    radius: DS.attr("number", {defaultValue: 1000}),
    transitionType: DS.attr("number", {defaultValue: TransitionType.ENTER}),
    notification: DS.belongsTo("notification")
});


