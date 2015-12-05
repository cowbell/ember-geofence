import Ember from "ember";

const Geofence = Ember.Object.extend(Ember.Copyable, {
    copy() {
        return Geofence.create({
            id: this.get("id"),
            latitude: this.get("latitude"),
            longitude: this.get("longitude"),
            radius: this.get("radius"),
            transitionType: this.get("transitionType"),
            notification: {
                id: this.get("notification.id"),
                title: this.get("notification.title"),
                text: this.get("notification.text"),
                icon: this.get("notification.icon"),
                openAppOnClick: this.get("notification.openAppOnClick")
            }
        });
    },

    toJson() {
        return JSON.parse(JSON.stringify(this));
    }
});

export default Geofence;
