const name = "Ayisha";

/* Time-based personalization */
const hour = new Date().getHours();
let greeting =
  hour < 12 ? "Good morning" :
  hour < 18 ? "Good afternoon" :
  "Good evening";

const message =
`${greeting}, ${name}.
From the moment you entered my life,
everything slowed down —
and began to feel right.`;

let i = 0;

function typeText() {
  if (i < message.length) {
    document.getElementById("type").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 65);
  }
}

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === name) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("app").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    if (music) music.play();

    setTimeout(typeText, 600);
  } else {
    alert("Not yet 💔");
  }
}

function goYes() {
  window.location.href = "yes.html";
}
