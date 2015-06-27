// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module BlankCordovaApp1 {
    "use strict";

    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            document.addEventListener("backbutton", onBackKeyDown, false);
            console.log('Device ready - register onBackKeyDown()');                
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }

        function onBackKeyDown(e) {
            e.preventDefault();
            navigator.notification.confirm("Are you sure you want to exit ?", onConfirm, "Confirmation","Yes,No"); 
            // Prompt the user with the choice
        }

        function onConfirm(button) {
            if (button == 2) {//If User selected No, then we just do nothing
                return;
            } else {
                navigator.app.exitApp();// Otherwise we quit the app.
            }
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }

    }

    window.onload = function () {
        Application.initialize();
    }
}
