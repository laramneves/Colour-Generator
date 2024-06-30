class Colour {
    constructor(hex, element) {
        this.hex = hex;
        this.element = element;
        this.stopped = false;
    }

    setHex(hex) {
        this.hex = hex;
        this.element.style.backgroundColor = hex;
        this.element.querySelector(".colour-input").value = hex;
        console.log("colour set to:${hex}");
    }

    generateHex() {
        if (this.stopped) {
            return;
        }
        const chars = "0123456789ABCDEF";
        let colour = "#";
        for (let i = 0; i < 6; i++) {
            colour += chars[Math.floor(Math.random() * 16)];
        }
        this.setHex(colour);
    }
}

const colourElements = document.querySelectorAll('.colours .colour');
const colours = [];

colourElements.forEach(element => {
    const input = element.querySelector(".colour-input");
    const randomInput = element.querySelector(".random-colour");
    const hex = input.value;

    const colour = new Colour(hex, element);

    // Event listener for each random-colour button to generate a new hex color
    randomInput.addEventListener('click', () => {
        colour.generateHex();
    });

    colour.generateHex();
    colours.push(colour);
});

// Event listener for the generator-button to generate new hex colors for all colours
document.querySelector(".generator-button").addEventListener("click", () => {
    colours.forEach(colour => {
        colour.generateHex();
    });
});