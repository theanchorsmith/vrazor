define(['three', 'objects/TexturedQube'],
function(THREE, TexturedQube) {

	var DefaultBuilding = function (scene, x, y, z) {
		this.render(scene, x, y, z);
	}

	DefaultBuilding.prototype.render = function (scene, x, y, z) {

		// Add basic qube
        // First floor
        new TexturedQube('/images/textures/brick.png', scene, [x, y, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+40, y, z], [40, 40, 40]);
        new TexturedQube('/images/textures/door.png', scene, [x+80, y, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+120, y, z], [40, 40, 40]);
        new TexturedQube('/images/textures/brick.png', scene, [x+160, y, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+200, y, z], [40, 40, 40]);

        // Second floor
        new TexturedQube('/images/textures/brick.png', scene, [x, y + 40, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+40, y + 40, z], [40, 40, 40]);
        new TexturedQube('/images/textures/brick.png', scene, [x+80, y + 40, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+120, y + 40, z], [40, 40, 40]);
        new TexturedQube('/images/textures/brick.png', scene, [x+160, y + 40, z], [40, 40, 40]);
        new TexturedQube('/images/textures/window.png', scene, [x+200, y + 40, z], [40, 40, 40]);


	}

	return DefaultBuilding;


});