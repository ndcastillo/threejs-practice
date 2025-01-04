import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object

const group = new THREE.Group();

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

group.add(cube1);
group.position.x = 3;

gsap
    .to(group.position, { duration: 2.5,
        
        x: 1,
        y: 1,
        ease: "power4.out",
    });

scene.add(group);



const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
material.wireframe = true;
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;
camera.lookAt(group.position);

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const AxesHelper = new THREE.AxesHelper(5);
scene.add(AxesHelper);

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



let clock = new THREE.Clock(); // clock
// Animations
const tick = ()=>{

    let elapsedTime = clock.getElapsedTime()/2;

    // update objects
    // mesh.rotation.y = Math.PI * elapsedTime;
    // camera.position.x = Math.cos(elapsedTime);
    // camera.position.y = Math.sin(elapsedTime);

    // render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

// const moveCamera = setInterval(()=>{
//     camera.position.z += 0.01;
//     if(camera.position.z > 1){
//         // camera.position.z = 3;
//         console.log('clear interval');
        
//         camera.rotation.y = Math.PI/4;
//         camera.lookAt(mesh.position);
//         // clearInterval(moveCamera);
//     }
// }, 10) // 10 second



