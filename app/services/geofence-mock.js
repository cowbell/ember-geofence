import Ember from "ember";
import Geofence from "ember-geofence/models/geofence";

const FIXTURES = [
    Geofence.create({id: 1, latitude: 50.3021079, longitude: 18.6771861, radius: 3000, transitionType: 1, notification: {text: "Gliwice Train Station"}}),
    Geofence.create({id: 2, latitude: 50.4728049, longitude: 19.0736874, radius: 3000, transitionType: 1, notification: {text: "Pyrzowice Airport"}}),
    Geofence.create({id: 3, latitude: 50.0671974, longitude: 19.945232, radius: 3000, transitionType: 1, notification: {text: "Cracow Main Station"}}),
    Geofence.create({id: 4, latitude: 52.2287803, longitude: 21.001124, radius: 3000, transitionType: 1, notification: {text: "Warsaw Main Station"}}),
    Geofence.create({id: 5, latitude: 40.7257093, longitude: -74.0032786, radius: 4000, transitionType: 1, notification: {text: "New York - SOHO"}}),
    Geofence.create({id: 6, latitude: 34.0033907, longitude: -118.5069657, radius: 3000, transitionType: 1, notification: {text: "LA - Santa Monica State Beach"}}),
    Geofence.create({id: 7, latitude: 25.8938595, longitude: -80.1330216, radius: 500, transitionType: 1, notification: {text: "Dexter's Apartment - Miami Bay Harbour"}})
];

export default Ember.Service.extend({
    _geofences: Ember.makeArray(FIXTURES),
    // Only for test purposes
    simulateDelay: 500,

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
            Ember.run.later(() => {
                this._geofences.clear();
                resolve();
            }, this.simulateDelay);
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
