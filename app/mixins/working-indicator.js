import Ember from 'ember';

export default Ember.Mixin.create({
    doWork(func) {
        this.set("isWorking", true);
        return Ember.RSVP.resolve(func()).finally(() => {
            this.set("isWorking", false);
        });
    }
});
