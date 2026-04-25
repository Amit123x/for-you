// =====================
// DATA
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

// images (match your folder exactly)
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
let typingTimeout;

// =====================
// ELEMENTS
// =====================

const textEl = document.getElementById("text");
const imageEl = document.getElementById("cardImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finalScreen = document.getElementById("finalScreen");

// =====================
// TYPE EFFECT (FIXED)
// =====================

function typeText(text) {
    textEl.innerHTML = "";
    clearTimeout(typingTimeout);

    const lines = text.split("\n");
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {

            const line = document.createElement("div");
            line.className = "line";
            textEl.appendChild(line);

            let charIndex = 0;

            function typeChar() {
                if (charIndex < lines[lineIndex].length) {
                    line.innerHTML += lines[lineIndex].charAt(charIndex);
                    charIndex++;
                    typingTimeout = setTimeout(typeChar, 35);
                } else {
                    lineIndex++;
                    setTimeout(typeLine, 250);
                }
            }

            typeChar();
        }
    }

    typeLine();
}

// =====================
// UPDATE IMAGE
// =====================

function updateImage() {
    imageEl.src = images[index % images.length];
}

// =====================
// SHOW STEP
// =====================

function showStep() {

    if (index >= steps.length) {
        document.querySelector(".story").classList.add("hidden");
        finalScreen.classList.remove("hidden");
        return;
    }

    typeText(steps[index]);
    updateImage();

    prevBtn.disabled = index === 0;
}

// =====================
// NAVIGATION
// =====================

function next() {
    index++;
    showStep();
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

document.getElementById("yesBtn").onclick = () => {
    alert("Thank you ❤️");
};

document.getElementById("noBtn").onclick = () => {
    alert("I understand 💔");
};

// =====================
// INIT
// =====================

showStep();