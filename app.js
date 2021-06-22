// Exercise 1

function printOdds(count) {
    for (let i = 1; i < count; i++) {
        console.log(i);
    }
}

printOdds(101)


// Exercise 2

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you're not old enough to drive`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge()