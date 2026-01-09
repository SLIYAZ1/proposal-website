const name = "Ayisha";
const hour = new Date().getHours();

let greeting =
  hour < 12 ? "Good morning" :
  hour < 18 ? "Good afternoon" :
  "Good evening";

const text =
  `${greeting}, ${name}.
From the moment you entered my life,
everything slowed down —
and somehow became clearer.`;

let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === name) {
    document.getElementById("lock").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("lock").style.display = "none";
      document.getElementById("experience").classList.remove("hidden");
      document.getElementById("bgMusic").play();
      type();
    }, 1200);
  }
}

function goYes() {
  window.location.href = "yes.html";
}
