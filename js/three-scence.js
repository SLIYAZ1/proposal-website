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

camera.position.z = 5;

/* Flower particles */
const geometry = new THREE.SphereGeometry(0.05, 16, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });

const flowers = [];

for (let i = 0; i < 220; i++) {
  const f = new THREE.Mesh(geometry, material);
  f.position.set(
    (Math.random() - 0.5) * 10,
    Math.random() * 10,
    (Math.random() - 0.5) * 10
  );
  scene.add(f);
  flowers.push(f);
}

function animate() {
  requestAnimationFrame(animate);

  flowers.forEach(f => {
    f.position.y -= 0.02;
    if (f.position.y < -5) f.position.y = 5;
  });

  renderer.render(scene, camera);
}
animate();
