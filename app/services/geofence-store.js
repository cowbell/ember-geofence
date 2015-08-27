import Ember from "ember";
import TransitionType from "ember-geofence/services/transition-type";
import Geofence from "ember-geofence/models/geofence";
import generateGuid from "ember-geofence/utils/generate-guid";

export default Ember.Service.extend({
    geofence: Ember.inject.service("geofence"),
    _geofences: Ember.makeArray([]),

    createRecord(mergeProperties) {
        let properties = {
            id: generateGuid(),
            radius: 1000,
            transitionType: TransitionType.ENTER,
            notification: {
                // id: geofenceService.getNextNotificationId(),
                title: 'Ionic geofence example',
                text: '',
                icon: 'res://ic_menu_mylocation',
                openAppOnClick: true
            }
        };

        Ember.merge(properties, mergeProperties);

        return Geofence.create(properties);
    },

    saveRecord(geofence) {
        return this.get("geofence").addOrUpdate(geofence).then(() => {
            this._geofences.push(geofence);
        });
    },

    destroyRecord(geofence) {
        return this.get("geofence").remove(geofence.id).then(() => {
            this._geofences.removeObject(geofence);
        });
    },

    find(id) {
        return this.findAll()
            .then((geofences) => {
                return geofences.find((geofence) => geofence.id === id);
            })
            .then((geofence) => {
                return Geofence.create(geofence);
            });
    },

    findAll() {
        return this.get("geofence")
            .getWatched()
            .then((geofences) => {
                this._geofences.clear();
                Ember.makeArray(geofences).forEach((item) => this._geofences.push(item));
                return this._geofences;
            });
    }
});
