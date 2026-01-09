const message =
  "From the moment you entered my life, everything became softer and clearer.";
let i = 0;

function typeText() {
  if (i < message.length) {
    document.getElementById("type").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === "Ayisha") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    typeText();
  } else {
    alert("Not yet 💔");
  }
}

function goYes() {
  window.location.href = "yes.html";
}
