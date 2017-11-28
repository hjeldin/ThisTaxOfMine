var gray = 0xbebdbb;
var black = 0x1d1d1b;
var white = 0xffffff;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
var canvas;
var renderer;
function initRenderer() {
	canvas = document.getElementById('canvas');
    if (Detector.webgl) {
        renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
    } else {
        renderer = new THREE.CanvasRenderer( { canvas: canvas });
    }
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(new THREE.Color(black), 1.0);
}