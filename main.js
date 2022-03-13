function generateText() {
    var textField = document.getElementById("randomText");
    const textOptions = ["i have a symbiotic relationship with stackoverflow", "probably not a good option but an option nonetheless", "i know too much languages", "currently playing gartic phone as im writing this", "i am a developer in a ROBLOX group. i've hit rock bottom.", "strange obsession with gradients"]
    var arrayIndex = Math.floor(Math.random() * textOptions.length);
    var text = textOptions[arrayIndex];
    textField.innerHTML = text;
}