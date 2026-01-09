const music = document.getElementById("bgMusic");

/* Start music on first click (mobile-safe) */
document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

/* Resize handler */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
