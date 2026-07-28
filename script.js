/*=========================================
        PREMIUM ENVELOPE
=========================================*/

const envelope = document.getElementById("openInvitation");
const openingScreen = document.getElementById("opening-screen");
const website = document.getElementById("website");

const flap = document.querySelector(".envelope-flap");
const paper = document.querySelector(".invite-paper");

website.style.display = "none";

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open envelope flap
    flap.style.transform = "rotateX(180deg)";
    envelope.classList.add("opened");

    // Slide invitation card
    setTimeout(() => {

        paper.classList.add("open");

    }, 500);

    // Fade opening screen
    setTimeout(() => {

        openingScreen.style.opacity = "0";
        openingScreen.style.transform = "scale(1.05)";

    }, 1800);

    // Show website
    setTimeout(() => {

        openingScreen.style.display = "none";
        website.style.display = "block";

setTimeout(() => {

    website.style.opacity = "1";

},100);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2600);

});


/*=========================================
            COUNTDOWN
=========================================*/

const targetDate = new Date("August 23, 2026 11:15:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(section=>{

    observer.observe(section);

});