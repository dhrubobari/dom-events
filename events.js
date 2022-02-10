function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// handle blue button
const blueButton = document.getElementById('make-blue');
console.log(blueButton)
// just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'skyblue';
}

// anonymous function (upore makeBlue ase, etate nai) mane tar nam nai
const greenButton = document.getElementById('make-green');
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

// handled by addEventListener
const goldenButton = document.getElementById('make-golden');
goldenButton.addEventListener('click', makeGoldenColor);
function makeGoldenColor(){
    document.body.style.backgroundColor = 'gold';
}

// added addEventListener in var's name
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('make-salmon').addEventListener('click', function(){
    document.body.style.backgroundColor = 'salmon';
})

// these all are steps to do