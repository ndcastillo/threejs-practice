import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


/**
 * AXES HELPER
 */

const axesHelper = new THREE.AxesHelper(5);
const axesObject = new THREE.AxesHelper();

/**
 * Cursor
 */

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove',(event)=>{
    cursor.x = (event.clientX) / sizes.width - 0.5;
    cursor.y = (event.clientY) / sizes.height - 0.5;
    // console.log(cursor.x);
    // console.log(mesh.position)
})


/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const aspectRadio = sizes.width/sizes.height;
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(-1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

mesh.material.wireframe = true;
mesh.add(axesObject);

scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 5
camera.lookAt(mesh.position)
scene.add(camera)

scene.add(axesHelper)




// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);

/**
 * Orbit Controls
 */

const controls = new OrbitControls(camera, canvas);
// controls.target.y = 2;
controls.enableDamping = true;
controls.update();

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;
    // mesh.position.x = Math.sin(elapsedTime);

    // Update camera
    // camera.position.x = 2 * Math.sin(cursor.x * 2 * Math.PI );
    // camera.position.z = 2 * Math.cos(cursor.x * 2 * Math.PI );
    // camera.position.y = cursor.y * 2 ;
    // camera.lookAt(mesh.position);

    // update controls
    controls.update();

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()