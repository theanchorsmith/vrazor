require.config({
    baseUrl: "../../bower_components/",
    paths: {
        app: '../js/app',
        objects: '../js/objects',
        buildings: '../js/buildings',
        three: 'three.js/build/three',
        StereoEffect: '../js/libs/StereoEffect',
        OrbitControls: '../js/libs/OrbitControls',
        DeviceOrientationControls: '../js/libs//DeviceOrientationControls',
        jquery: 'jquery/dist/jquery'
    },
    shim: {
        three: {
            exports: 'THREE'
        },
        StereoEffect: {
            deps: ['three']
        },
        OrbitControls: {
            deps: ['three']
        },
        DeviceOrientationControls: {
            deps: ['three']
        }
    }
});

require(['app'], function(App) {

    window.App = App;
    App.init();
    App.animate();

});