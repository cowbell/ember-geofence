import DS from "ember-data";
import TransitionType from "ember-geofence/services/transition-type"

export default DS.Model.extend({
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    radius: DS.attr('number', {defaultValue: 1000}),
    transitionType: DS.attr('number', {defaultValue: TransitionType.ENTER}),
    notificationText: DS.attr('string'),
    onEnter: Ember.computed("transitionType", function () {
        return this.get("transitionType") & TransitionType.ENTER;
    }),
    onExit: Ember.computed("transitionType", function () {
        return this.get("transitionType") & TransitionType.EXIT;
    }),
    setTransitionType: Ember.observer("onEnter", "onExit", function () {
        let transitionType;

        transitionType = this.get("onEnter") ? TransitionType.ENTER : 0;
        transitionType |= this.get("onExit") ? TransitionType.EXIT: 0;

        this.set("transitionType", transitionType);
    })
});


                        // notification: {
                        //     id: geofenceService.getNextNotificationId(),
                        //     title: 'Ionic geofence example',
                        //     text: '',
                        //     icon: 'res://ic_menu_mylocation',
                        //     openAppOnClick: true
                        // }
