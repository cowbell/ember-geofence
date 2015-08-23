import DS from "ember-data";

export default DS.Model.extend({
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    radius: DS.attr('number', {defaultValue: 1000}),
    transitionType: DS.attr('number'),
    notificationText: DS.attr('string')
});


                        // notification: {
                        //     id: geofenceService.getNextNotificationId(),
                        //     title: 'Ionic geofence example',
                        //     text: '',
                        //     icon: 'res://ic_menu_mylocation',
                        //     openAppOnClick: true
                        // }
