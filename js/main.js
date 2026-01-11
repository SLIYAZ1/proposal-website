const name = "Ayisha";

const message =
"From the moment you entered my life, everything slowed down — and began to feel right.";

let i = 0;

function typeText() {
  if (i < message.length) {
    document.getElementById("type").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}

document.getElementById("password").addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === name) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    typeText();
  }
}

function goYes() {
  window.location.href = "yes.html";
}
