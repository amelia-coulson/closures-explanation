// function storing an arguement
function hide() {
    // local variable
    let hideLocation = `Kakamas`;
    // return hideLocation into seek()
    function seek() {
        return hideLocation;
    }
    // return seek into hide()
    return seek;
}

// create variable with function
let startGame = hide();

console.log(startGame());

/* doesn't work because you're trying to get a variable
that isn't in a global scope but is local within a function */
console.log(hideLocation());