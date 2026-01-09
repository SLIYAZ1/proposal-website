const text =
  "From the moment you entered my life, everything became softer, calmer, and more beautiful.";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === "Ayisha") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    type();
  } else {
    alert("Not yet 💔");
  }
}

function goYes() {
  window.location.href = "yes.html";
}
