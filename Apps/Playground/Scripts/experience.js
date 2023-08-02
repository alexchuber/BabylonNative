/// <reference path="../../node_modules/babylonjs/babylon.module.d.ts" />
/// <reference path="../../node_modules/babylonjs-loaders/babylonjs.loaders.module.d.ts" />
/// <reference path="../../node_modules/babylonjs-materials/babylonjs.materials.module.d.ts" />
/// <reference path="../../node_modules/babylonjs-gui/babylon.gui.module.d.ts" />

var engine = new BABYLON.NativeEngine();
var scene = new BABYLON.Scene(engine);

BABYLON.SceneLoader.AppendAsync("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/ToyCar/glTF-Binary/ToyCar.glb").then(function () {

// This creates and positions a free camera (non-mesh)
scene.createDefaultCamera(true, true, true);
scene.activeCamera.alpha += Math.PI;

scene.createDefaultEnvironment({ createGround: false, createSkybox: false });

for (let mat of scene.materials) {
    mat.debugMode = 20; // Toy car is all PBRMaterials
}

engine.runRenderLoop(function () {
    scene.render();
});

}, function (ex) {
    console.log(ex.message, ex.stack);
});
