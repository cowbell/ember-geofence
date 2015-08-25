import Ember from "ember";

export default Ember.Service.extend({
    _geofences: Ember.makeArray([]),

    addOrUpdate(geofences) {
        let geofencesToAdd = Ember.makeArray(geofences);

        return new Ember.RSVP.Promise((resolve, reject) => {
            geofencesToAdd.forEach((geofence) => {
                const finded = this._geofences.find((g) => g.id === geofence.id);

                if (!finded) {
                    this._geofences.push(geofence);
                } else {
                    this._geofences[this._geofences.indexOf(finded)] = geofence;
                }
            });
            resolve();
        });
    },

    remove(geofenceIds) {
        let ids = Ember.makeArray(geofenceIds);

        return new Ember.RSVP.Promise((resolve, reject) => {
            ids.forEach((id) => {
                const finded = this._geofences.find((g) => g.id === id);

                if (finded) {
                    this._geofences.removeAt(this._geofences.indexOf(finded));
                }
            });
            resolve();
        });
    },

    removeAll() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            this._geofences.clear();
            resolve();
        });
    },

    getWatched() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            resolve(this._geofences);
        });
    }
});
