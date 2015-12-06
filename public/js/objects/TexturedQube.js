define(['three', 'objects/ThreeObject'],
function(THREE, ThreeObject) {

	var BasicQube = function (texture, scene, position, geo) {
		ThreeObject.call(this, texture, scene, position, geo);
		return this;
	}

	BasicQube.prototype = Object.create(ThreeObject.prototype);

	BasicQube.prototype.render = function (texture) {

		var geometry = new THREE.BoxGeometry(this.geo[0], this.geo[1], this.geo[2] );
		var material = new THREE.MeshBasicMaterial({ map: texture, overdraw:false});
		var qube = new THREE.Mesh( geometry, material );

		qube = new THREE.Mesh( geometry, material );
		
		qube.position.x = this.position[0];
        qube.position.y = this.position[1];
        qube.position.z = this.position[2];

		this.scene.add(qube);

	}

	return BasicQube;


});