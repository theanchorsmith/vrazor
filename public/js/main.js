require.config({
    baseUrl: "../../bower_components/",
    paths: {
        app: '../js/app',
        views: '../js/views',
        chic: 'chic/lib/chic',
        jquery: 'jquery/dist/jquery',
        three: 'three.js/build/three',
        StereoEffect: 'three.js/examples/js/effects/StereoEffect',
        OrbitControls: 'three.js/examples/js/controls/OrbitControls',
        DeviceOrientationControls: 'three.js/examples/js/controls/DeviceOrientationControls',
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
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});

require(['app'], function(App) {

    window.App = App;
    App.init();
    App.animate();

});