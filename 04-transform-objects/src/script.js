import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects = GEOMETRY + MATERIAL
 */

const group = new THREE.Group();
group.position.y = 1;
// group.rotation.y = 1;
scene.add(group);


const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

cube2.position.x = -2;

group.add(cube2);


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube3.position.x = 2;

group.add(cube3);

/*
* Axes Helper
*/

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10;
scene.add(camera)

// console.log(`Con responecto al origin: `,mesh.position.length());
// console.log(`Distancia con respecto a la camara: `, mesh.position.distanceTo(camera.position));
// console.log(`Distancia con respecto a la camara Rapido: `, mesh.position.normalize());

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);

setInterval(()=>{
    // cube1.rotation.y += 0.01;
    // cube1.rotation.reorder('YZX')
    cube1.material.wireframe = true;
    cube1.rotation.z += 0.01; 
    // group.scale.x += 0.01;   
    renderer.render(scene, camera);
},10)