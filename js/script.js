const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const titleHeader = document.querySelector("#title-header");

const FINAL_TEXT = "BARROSDEV";
let interval = null;

// Force final value
titleHeader.dataset.value = FINAL_TEXT;

titleHeader.addEventListener("mouseover", (event) => {
    let iterations = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.textContent = FINAL_TEXT
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return FINAL_TEXT[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        iterations += 0.5;

        if (iterations >= FINAL_TEXT.length) {
            clearInterval(interval);
            event.target.textContent = FINAL_TEXT;
        }
    }, 50);
});

// Optional auto-trigger
titleHeader.dispatchEvent(new Event("mouseover"));
