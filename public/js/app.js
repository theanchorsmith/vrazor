define([
    'three',
    'buildings/DefaultBuilding',
    'StereoEffect',
    'OrbitControls'],
    function(THREE, DefaultBuilding) {

    var renderer,
        element,
        container,
        effects,
        controls,
        camera,
        scene;

    var clock = new THREE.Clock();

    var App = {

        container,

        init: function (){

            var light,
                texture,
                loader;

            renderer = new THREE.WebGLRenderer();
            element = renderer.domElement;
            container = document.getElementById('container');
            container.appendChild(element);
            effect = new THREE.StereoEffect(renderer);

            // setup scene
            scene = new THREE.Scene();

            // Setup camera
            camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
            camera.position.set(0, 10, 0);
            scene.add(camera);

            // Setup controls
            controls = new THREE.OrbitControls(camera, element);
            controls.target.set(
                camera.position.x + 0.1,
                camera.position.y,
                camera.position.z
                );

            // Setup light
            light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
            scene.add(light);

            // Setup texture
            loader = new THREE.TextureLoader();
            loader.load(
                // resource URL
                '/images/textures/grid.png',
                // Function when resource is loaded
                function (texture) {

                    var material, 
                    geometry,
                    mesh;

                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat = new THREE.Vector2(50, 50);
                    texture.anisotropy = renderer.getMaxAnisotropy();

                    // do something with the texture
                    material = new THREE.MeshPhongMaterial({
                        color: 0xffffff,
                        specular: 0xffffff,
                        shininess: 0,
                        shading: THREE.FlatShading,
                        map: texture
                    }); 

                    geometry = new THREE.PlaneGeometry(1000, 1000);
                    mesh = new THREE.Mesh(geometry, material);
                    mesh.rotation.x = -Math.PI / 2;
                    scene.add(mesh);

                },
                // Function called when download progresses
                function ( xhr ) {
                    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
                },
                // Function called when download errors
                function ( xhr ) {
                    console.log( 'An error happened' );
                }
            );
    
            // Add objects
            this.addObjects();

            window.addEventListener('resize', this.resize.bind(this), false);
            window.addEventListener('deviceorientation', this.setOrientationControls.bind(this), true);

            setTimeout(this.resize.bind(this), 1);
        },

        addObjects: function () {
            
            
            new DefaultBuilding(scene, -20, 20, 100);
            new DefaultBuilding(scene, 280, 20, 100);
        

        },

        setOrientationControls: function(e) {
            if (!e.alpha) {
              return;
          }

          controls = new THREE.DeviceOrientationControls(camera, true);
          controls.connect();
          controls.update();

          element.addEventListener('click', this.fullscreen.bind(this), false);
          window.removeEventListener('deviceorientation', setOrientationControls, true);
        },

        resize: function() {
            var width = container.offsetWidth;
            var height = container.offsetHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            effect.setSize(width, height);
        },

        update: function(dt) {
            this.resize();
            camera.updateProjectionMatrix();
            controls.update(dt);
        },

        render: function(dt) {
            effect.render(scene, camera);
        },

        animate: function(t) {  
            requestAnimationFrame(this.animate.bind(this));
            this.update(clock.getDelta());
            this.render(clock.getDelta());
        },

        fullscreen: function() {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            }
        }
    };

    return App;

});