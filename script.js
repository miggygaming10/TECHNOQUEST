// ===============================
// TECHNOQUEST GAME
// ===============================

const player = document.getElementById("player");

let playerX = 500;
let playerY = 500;

let level = 1;
let xp = 0;
let neededXP = 100;

const speed = 25;


// ===============================
// PLAYER MOVEMENT
// ===============================

function updatePlayer() {

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

    checkNearby();
}


// ===============================
// MOVEMENT FUNCTIONS
// ===============================

function moveUp() {

    playerY -= speed;

    if (playerY < 0) {
        playerY = 0;
    }

    updatePlayer();
}


function moveDown() {

    playerY += speed;

    if (playerY > 900) {
        playerY = 900;
    }

    updatePlayer();
}


function moveLeft() {

    playerX -= speed;

    if (playerX < 0) {
        playerX = 0;
    }

    updatePlayer();
}


function moveRight() {

    playerX += speed;

    if (playerX > 1340) {
        playerX = 1340;
    }

    updatePlayer();
}


// ===============================
// KEYBOARD CONTROLS
// ===============================

document.addEventListener("keydown", function(event) {

    if (
        event.key === "ArrowUp" ||
        event.key.toLowerCase() === "w"
    ) {
        moveUp();
    }

    if (
        event.key === "ArrowDown" ||
        event.key.toLowerCase() === "s"
    ) {
        moveDown();
    }

    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {
        moveLeft();
    }

    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {
        moveRight();
    }

});


// ===============================
// CHECK NEARBY OBJECTS
// ===============================

function checkNearby() {

    const objects = document.querySelectorAll(".object");

    let nearSomething = false;

    objects.forEach(object => {

        const objectX = object.offsetLeft;
        const objectY = object.offsetTop;

        const distance = Math.sqrt(
            Math.pow(playerX - objectX, 2) +
            Math.pow(playerY - objectY, 2)
        );

        if (distance < 130) {

            nearSomething = true;

            object.style.transform = "scale(1.15)";
            object.style.boxShadow =
                "0 0 30px white";

        } else {

            object.style.transform = "scale(1)";
            object.style.boxShadow =
                "0 0 15px rgba(255,255,255,0.5)";
        }

    });

}


// ===============================
// INTERACT
// ===============================

function interact() {

    const objects = document.querySelectorAll(".object");

    let closest = null;
    let closestDistance = Infinity;

    objects.forEach(object => {

        const objectX = object.offsetLeft;
        const objectY = object.offsetTop;

        const distance = Math.sqrt(
            Math.pow(playerX - objectX, 2) +
            Math.pow(playerY - objectY, 2)
        );

        if (distance < closestDistance) {

            closestDistance = distance;
            closest = object;

        }

    });


    if (closestDistance > 150) {

        alert("Move closer to an object!");

        return;
    }


    // COMPUTER

    if (closest.id === "computer") {

        computerQuiz();

    }


    // CHEST

    if (closest.id === "chest") {

        chestQuiz();

    }


    // TEACHER

    if (closest.id === "teacher") {

        alert(
            "Teacher: Welcome to TechnoQuest! Explore the map and test your computer skills!"
        );

    }


    // DOOR

    if (closest.id === "door") {

        alert(
            "Dungeon locked! Complete more challenges to enter."
        );

    }

}


// ===============================
// COMPUTER QUIZ
// ===============================

function computerQuiz() {

    const answer = prompt(
        "COMPUTER QUIZ\n\n" +
        "What does CPU stand for?\n\n" +
        "A. Central Processing Unit\n" +
        "B. Computer Personal Unit\n" +
        "C. Central Program Utility"
    );


    if (answer === null) {
        return;
    }


    if (answer.toUpperCase() === "A") {

        alert("CORRECT! +25 XP");

        addXP(25);

    } else {

        alert(
            "Incorrect!\n\n" +
            "The correct answer is A."
        );

    }

}


// ===============================
// CHEST QUIZ
// ===============================

function chestQuiz() {

    const answer = prompt(
        "QUIZ CHEST\n\n" +
        "Which device is used to type text?\n\n" +
        "A. Monitor\n" +
        "B. Keyboard\n" +
        "C. Speaker"
    );


    if (answer === null) {
        return;
    }


    if (answer.toUpperCase() === "B") {

        alert("CORRECT! +25 XP");

        addXP(25);

    } else {

        alert(
            "Incorrect!\n\n" +
            "The correct answer is B."
        );

    }

}


// ===============================
// XP SYSTEM
// ===============================

function addXP(amount) {

    xp += amount;

    while (xp >= neededXP) {

        xp -= neededXP;

        level++;

        neededXP += 5;

        alert(
            "LEVEL UP!\n\n" +
            "You are now Level " + level + "!"
        );

    }

    document.getElementById("level").textContent = level;

    document.getElementById("xp").textContent = xp;

    document.getElementById("needed").textContent = neededXP;

}


// ===============================
// START GAME
// ===============================

updatePlayer();

console.log("TechnoQuest loaded successfully!");
