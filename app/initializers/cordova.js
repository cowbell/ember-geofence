// Defers readiness of applicatoin until plugins are ready.
export default {
    name: "cordova",

    initialize(container, application) {
        if(typeof cordova !== "undefined") {
            application.deferReadiness();
            document.addEventListener("deviceready", function() {
                application.advanceReadiness();
            }, false);
        }
    }
};
