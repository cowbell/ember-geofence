import Ember from "ember";

const Geofence = Ember.Object.extend(Ember.Copyable, {
    copy () {
        return Geofence.create({
            id: this.id,
            latitude: this.latitude,
            longitude: this.longitude,
            radius: this.radius,
            transitionType: this.transitionType,
            notification: {
                id: this.notification.id,
                title: this.notification.title,
                text: this.notification.text,
                icon: this.notification.icon,
                openAppOnClick: this.notification.openAppOnClick
            }
        });
    }
})

export default Geofence;
