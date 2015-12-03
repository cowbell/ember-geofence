import ENV from "ember-geofence/config/environment";

// Defers readiness of applicatoin until plugins are ready.
export default {
    name: "cordova",

    initialize(application) {

        if(typeof cordova !== "undefined") {
            appendCSPMeta();
            application.deferReadiness();

            document.addEventListener("deviceready", function() {
                application.advanceReadiness();
            }, false);
        }
    }
};

function appendCSPMeta() {
    const cspContent = Object.keys(ENV.contentSecurityPolicy).reduce(function(memo, value) {
        return memo + value + " " + ENV.contentSecurityPolicy[value] + "; ";
    }, "");
    const meta = document.createElement("meta");

    meta.setAttribute("http-equiv", "Content-Security-Policy");
    meta.setAttribute("content", cspContent);
    document.getElementsByTagName("head")[0].appendChild(meta);
}
