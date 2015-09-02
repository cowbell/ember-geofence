import Ember from "ember";

export default Ember.Service.extend({
    _geofences: Ember.makeArray([]),
    simulateDelay: 0,

    addOrUpdate(geofences) {
        let geofencesToAdd = Ember.makeArray(geofences);

        return new Ember.RSVP.Promise((resolve) => {
            Ember.run.later(() => {
                geofencesToAdd.forEach((geofence) => {
                    const finded = this._geofences.find((g) => g.id === geofence.id);

                    if (!finded) {
                        this._geofences.push(geofence);
                    } else {
                        this._geofences[this._geofences.indexOf(finded)] = geofence;
                    }
                });
                resolve();
            }, this.simulateDelay);
        });
    },

    remove(geofenceIds) {
        let ids = Ember.makeArray(geofenceIds);

        return new Ember.RSVP.Promise((resolve) => {
            Ember.run.later(() => {
                ids.forEach((id) => {
                    const finded = this._geofences.find((g) => g.id === id);

                    if (finded) {
                        this._geofences.removeAt(this._geofences.indexOf(finded));
                    }
                });
                resolve();
            }, this.simulateDelay);
        });
    },

    removeAll() {
        return new Ember.RSVP.Promise((resolve) => {
            this._geofences.clear();
            resolve();
        });
    },

    getWatched() {
        return new Ember.RSVP.Promise((resolve) => {
            Ember.run.later(()=>{
                resolve(this._geofences);
            }, this.simulateDelay);
        });
    }
});
