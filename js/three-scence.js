const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("threeCanvas"),
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 6;

/* IMAGE PLANES */
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const planes = [];
const radius = 3;

const loader = new THREE.TextureLoader();

images.forEach((img, i) => {
  const texture = loader.load(`assets/images/${img}`);
  const geometry = new THREE.PlaneGeometry(2, 2.5);
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  const plane = new THREE.Mesh(geometry, material);

  const angle = (i / images.length) * Math.PI * 2;
  plane.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

  scene.add(plane);
  planes.push(plane);
});

let rotation = 0;

function animate() {
  requestAnimationFrame(animate);
  rotation += 0.003;

  planes.forEach((p, i) => {
    const angle = rotation + (i / planes.length) * Math.PI * 2;
    p.position.x = Math.cos(angle) * radius;
    p.position.z = Math.sin(angle) * radius;
    p.lookAt(camera.position);
  });

  renderer.render(scene, camera);
}
animate();
