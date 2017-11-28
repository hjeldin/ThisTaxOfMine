function Scene(init, update, deinit) {
    this.init = init || function() { this.scene = new THREE.Scene(); this.camera = new THREE.Camera(); };
    this.update = update || function(dt) { renderer.render(this.scene, this.camera); };
    this.deinit = deinit || function() { };
}
function SceneManager() {
    this.currentScene = null;
}
SceneManager.prototype.run = function(dt) {
    requestAnimationFrame(this.run.bind(this));
    if (!this.currentScene) { return; }
    dt = dt || 0.0;
    this.currentScene.update(dt);
    TWEEN.update(dt);
}
SceneManager.prototype.changeScene = function(scene) {
    if (this.currentScene) { this.currentScene.deinit(); this.currentScene = undefined; }
    scene.init();
    this.currentScene = scene;
}

var sm = new SceneManager();
sm.run();


// cavallier projection matrix -> used by intro and outro geometry
var shearAngle = Math.PI / 4;
var Syx = 0,
    Szx = - 0.5 * Math.cos( shearAngle ),
    Sxy = 0,
    Szy = - 0.5 * Math.sin( shearAngle ),
    Sxz = 0,
    Syz = 0;
var matrix = new THREE.Matrix4();
matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
            0,     0,   0,   1  );