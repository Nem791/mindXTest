console.log('Test');
// A
// 1.
let inputString = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
// Prints help message to the console
// Returns a string
function allLongestStrings(inputArray) {
    let max = inputArray[0].length;
    let newArray = [];
    for (let i of inputArray) {
        if (i.length >= max) {
            max = i.length;
        }
    }
    for (let i of inputArray) {
        if (i.length === max) {
            newArray.push(i);
        }
    }
    console.log(newArray);
}
allLongestStrings(inputString);

// 2.
// Prints help message to the console
// Returns a string
let inputNumber = [60, 40, 55, 75, 64];
let outputArray = [0, 0]
inputNumber.forEach(alternatingSums);

function alternatingSums(a, i, arr) {

    if (i % 2 == 0) {
        outputArray[0] += arr[i];
    } else if (i % 2 != 0) {
        outputArray[1] += arr[i];
    }
}
console.log(outputArray)

// B
let color = document.querySelector('#pickColor');
let hex = document.querySelector('#hexCode');
let hex1 = document.querySelector('#hexCode1');
let color1 = document.querySelector('#pickColor1');
let color2 = document.querySelector('#pickColor2');

function exerciseB() {
    if (hex.value != color.value) {
        hex.value = color.value;
        document.body.style.background = color.value;
    } else {
        alert('Hex code has been updated');
    }
}

function copyHex() {
    let copyCode = document.getElementById('hexCode');
    copyCode.select();
    document.execCommand("copy");
    alert(`Da copy code ${hex.value}`);
}

function copyHexgradient() {
    let copyCode = document.getElementById('hexCode1');
    copyCode.select();
    document.execCommand("copy");
    alert(`Da copy code ${hex1.value}`);
}

function exerciseBgradient() {
    hex1.value = `linear-gradient(${color1.value}, ${color2.value})`;
    document.body.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

}


















