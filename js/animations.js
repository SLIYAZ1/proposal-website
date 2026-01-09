/* Typewriter */
const message = "From the moment you came into my life, everything became beautiful 💖";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

/* Slideshow sync with 28-sec music */
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 7000);

/* YES Button */
document.getElementById("yesBtn").addEventListener("click", () => {
  gsap.to(".content", { scale: 1.3, duration: 0.6 });
  gsap.to(".slide", { opacity: 0.8, duration: 0.8 });

  setTimeout(() => {
    alert("Ayisha 💖 Will you marry me?");
  }, 800);
});
