const msg = "From the moment you entered my life, everything became magical 💖";
let i = 0;

function typeWriter() {
  if (i < msg.length) {
    document.getElementById("typewriter").innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

document.getElementById("yesBtn").onclick = () => {
  window.location.href = "yes.html";
};
