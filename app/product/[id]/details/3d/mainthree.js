// 'use client';

// import * as THREE from 'three';

// export default function Canvas({ id }: { id: string }) {
//   console.log(id);

//   const windowSizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
//   };

//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     windowSizes.width / windowSizes.height,
//     0.1,
//     1000,
//   );
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector(('.canvas-three')as any),
//   });

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(windowSizes.width, windowSizes.height);
//   renderer.setClearColor(new THREE.Color('#0b0010'), 1);
//   camera.position.setZ(30);

//   const torusKnotGeometry = new THREE.TorusKnotGeometry(7, 3, 100, 16);
//   const torusKnotMaterial = new THREE.MeshStandardMaterial({
//     wireframe: true,
//     color: 0x8b516a,
//   });
//   const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);

//   scene.add(torusKnot);

//   function mainAnimation() {
//     window.requestAnimationFrame(mainAnimation);
//     renderer.render(scene, camera);
//   }

//   mainAnimation();
//   return <canvas id="canvas-three"></canvas>;
// }
