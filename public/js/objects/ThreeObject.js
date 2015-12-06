define(['three', 'objects/ThreeObject'],
function(THREE, Object) {

	var ThreeObject = function (texture, scene, position, geo) {
			
		// Set parameters
		this.scene = scene;
		this.position = position;
		this.geo = geo;

		var loader = new THREE.TextureLoader();
		loader.load(
			texture,
			this.onTextureLoaded.bind(this),
			this.onProgress.bind(this),
			this.onError.bind(this)
		);

	}

	ThreeObject.prototype.onTextureLoaded = function (texture) {
		this.render(texture);
	}

	ThreeObject.prototype.onProgress = function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	}

	ThreeObject.prototype.onError = function () {
		console.log( 'An error happened' );
	}

	ThreeObject.prototype.render = function () {
		console.log('ThreeObject / render');
	}

	return ThreeObject;

});