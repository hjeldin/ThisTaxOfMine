var intro = {
    init: function () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(canvas.clientWidth / -2, canvas.clientWidth / 2, canvas.clientHeight / 2, canvas.clientHeight / -2, 1, 2000);
        this.camera.position.y = 100;
        this.camera.position.z = 0;
        this.camera.lookAt(0,0,0);

        var gridHelper = new THREE.GridHelper( 1000, 20 );
        this.scene.add( gridHelper );
        var tween = new TWEEN.Tween(this.camera.position)
        .to({ x: 300, z: 200 }, 5000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .yoyo()
        .repeat(Infinity)
        .start();
    },
    update: function (dt) {
        renderer.render(this.scene, this.camera);
    },
    deinit: function () {
        this.scene = undefined;
        this.camera = undefined;
        renderer.clearColor();
    }
}