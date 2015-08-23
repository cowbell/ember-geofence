import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
            this.model.save().then(() => {
                this.transitionTo("geofences");
            });
        }
    }
});
