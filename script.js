// =====================
// DATA (FIXED)
// =====================
const steps = [
`Buggu…

pata nahi kaise bolu ye

bas kal se ajeeb lag raha hai`,

`wo reels jo maine repost kari thi…

wo tumhare liye nahi thi

bas mera dimaag hi ulta chal raha tha`,

`faltu soch raha tha

ki kahi main enough na hua toh…`,

`par jo sabse galat hua…

maine tumhe doubt feel kara diya`,

`tumne kabhi mujhe aisa feel nahi karaya

aur maine kar diya`,

`I know…

ab sab same nahi rahega`,

`aur main expect bhi nahi kar raha

ki sab ekdum thik ho jaye`,

`bas itna samajh aa gaya hai

ki galti kaha hui`,

`I really hope ki tum mujhe ek last mauka dogi`,

`I AM STILL YOUR OLD BUBU`,

`I am really "SORRY" baccha`
];

// MATCH YOUR RENAMED FILES
const images = [
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg",
"images/7.jpg",
"images/8.jpg",
"images/9.jpg"
];

let index = 0;

// ELEMENTS
const textEl = document.getElementById("text");
const cardImage = document.getElementById("cardImage");
const finalScreen = document.getElementById("finalScreen");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// =====================
// TYPE EFFECT
// =====================
function typeText(text) {
    textEl.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {

            const char = text[i];   // ✅ capture FIRST

            if (char === "\n") {
                textEl.innerHTML += "<br>";
            } else {
                textEl.innerHTML += char;
            }

            // delay logic based on CURRENT char
            let delay = 35;
            if (char === ".") delay = 120;
            if (char === "…") delay = 250;
            if (char === "\n") delay = 120;

            i++;   // ✅ increment AFTER using char

            setTimeout(type, delay);
        }
    }

    type();
}
// =====================
// UPDATE IMAGE
// =====================
function updateImage() {
    cardImage.classList.remove("active");

    setTimeout(() => {
        cardImage.src = images[index % images.length];
        cardImage.classList.add("active");
    }, 150);
}

// =====================
// SHOW STEP
// =====================
function showStep() {

    if (index >= steps.length) {
        document.querySelector(".story").style.display = "none";
        finalScreen.classList.add("show");
        return;
    }

    textEl.classList.remove("show");

    setTimeout(() => {
        updateImage();
        typeText(steps[index]);
        textEl.classList.add("show");
    }, 200);
}

// =====================
// NAVIGATION
// =====================
function next() {
    if (index < steps.length) {
        index++;
        showStep();
    }
}

function prev() {
    if (index > 0) {
        index--;
        showStep();
    }
}

// =====================
// EVENTS
// =====================
prevBtn.onclick = prev;
nextBtn.onclick = next;

document.querySelector(".tap.left").onclick = prev;
document.querySelector(".tap.right").onclick = next;

// FINAL BUTTONS
document.getElementById("yesBtn").onclick = () => {
    finalScreen.innerHTML = "❤️ Thank you Buggu… I’ll prove it.";
};

document.getElementById("noBtn").onclick = () => {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.top = Math.random()*80 + "%";
    btn.style.left = Math.random()*80 + "%";
};

// INIT
showStep();