export function generateLetters() {
    let app = document.querySelector("body");
    let random = 0
    const letter = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    console.log(letter);
    for (let index = 0; index < 120; index++) {
        const newDiv = document.createElement("div");
        random = Math.round(Math.random() * 25)
        newDiv.createTextNode(letter[random]);
        if (index < 40) {
            newDiv.style.cssText = "font-size: " + (11 + ind) + "px; font-weight: " + 300 + ";";
        } else if (index < 80) {
            newDiv.style.cssText = "font-size: " + (11 + ind) + "px; font-weight: " + 400 + ";";
        } else {
            newDiv.style.cssText = "font-size: " + (11 + ind) + "px; font-weight: " + 600 + ";";
        }
        app.append(nextDiv);
    }
}