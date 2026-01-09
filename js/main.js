const music = document.getElementById("bgMusic");

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === "Ayisha") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    music.play();
  } else {
    alert("Wrong password 💔");
  }
}
