const hexBtn = document.querySelector('.hex-button');
const getHexValue = document.querySelector('.hex-color-value');
const HexColorcontainer = document.querySelector('.hex-color-container');





//random hex color

hexBtn.addEventListener("click", () => {
    let characterSet = "0123456789ABCDEF";
    let hexColorOutput = "";

    for (let i = 0; i < 6; i++) {
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * characterSet.length)
        );
    }

    console.log(hexColorOutput);
    getHexValue.textContent = `#${hexColorOutput}`;

    HexColorcontainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;



})
//rgb color name changing

const rgbBtn = document.querySelector('#rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorcontainer = document.querySelector('.rbg-color-container');
const changeColorButton = document.querySelector('#rgb-btn');


rgbBtn.addEventListener("click", () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    // console.log(extractBlueValue, extractBlueValue, extractBlueValue)

    rgbColorcontainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    changeColorButton.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
})
//rgb(255,217,36)
const hexCopyButton = document.querySelector('.hex-color');
const rgbCopyButton = document.querySelector('.rgb-color');

function CopyHecCOlorToCLipBoard() {
    navigator.clipboard.writeText(getHexValue.textContent);
    alert('HEx color is copied to clipboard');
}

function CopyrgbCOlorToCLipBoard() {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    navigator.clipboard.writeText(`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`);

    alert('rgb color is copied to clipboard');
}
rgbCopyButton.addEventListener("click", CopyrgbCOlorToCLipBoard);

hexCopyButton.addEventListener("click", CopyHecCOlorToCLipBoard);
