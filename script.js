// ==========================================
// TECHNOQUEST GAME
// ==========================================


// ==========================================
// PLAYER
// ==========================================

const player = {

    x: 500,
    y: 400,

    speed: 3.5,

    level: 1,
    xp: 0,

    health: 100

};


// ==========================================
// WORLD
// ==========================================

const world = document.getElementById("world");
const playerElement = document.getElementById("player");

const game = document.getElementById("game");


// ==========================================
// JOYSTICK
// ==========================================

const joystickBase =
    document.getElementById("joystickBase");

const joystickStick =
    document.getElementById("joystickStick");


let joystickActive = false;

let joystickX = 0;
let joystickY = 0;


// ==========================================
// JOYSTICK POINTER
// Works with:
// PC mouse
// Phone touch
// Tablet
// ==========================================

joystickBase.addEventListener(
    "pointerdown",
    function(event) {

        joystickActive = true;

        joystickBase.setPointerCapture(
            event.pointerId
        );

        updateJoystick(event);

    }
);


joystickBase.addEventListener(
    "pointermove",
    function(event) {

        if (!joystickActive) return;

        updateJoystick(event);

    }
);


joystickBase.addEventListener(
    "pointerup",
    resetJoystick
);


joystickBase.addEventListener(
    "pointercancel",
    resetJoystick
);


function updateJoystick(event) {

    const rect =
        joystickBase.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;


    let dx =
        event.clientX - centerX;

    let dy =
        event.clientY - centerY;


    const maxDistance =
        rect.width / 2 - 32;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    if (distance > maxDistance) {

        dx =
            dx / distance *
            maxDistance;

        dy =
            dy / distance *
            maxDistance;

    }


    joystickX =
        dx / maxDistance;

    joystickY =
        dy / maxDistance;


    joystickStick.style.left =
        `calc(50% + ${dx}px)`;

    joystickStick.style.top =
        `calc(50% + ${dy}px)`;

}


function resetJoystick() {

    joystickActive = false;

    joystickX = 0;
    joystickY = 0;

    joystickStick.style.left = "50%";
    joystickStick.style.top = "50%";

}


// ==========================================
// KEYBOARD SUPPORT
// ==========================================

const keys = {};

document.addEventListener(
    "keydown",
    event => {

        keys[event.key.toLowerCase()] = true;

    }
);


document.addEventListener(
    "keyup",
    event => {

        keys[event.key.toLowerCase()] = false;

    }
);


// ==========================================
// OBJECTS
// ==========================================

const objects =
    document.querySelectorAll(".object");


let nearbyObject = null;


// ==========================================
// GAME LOOP
// ==========================================

function gameLoop() {

    let moveX = joystickX;
    let moveY = joystickY;


    // Keyboard controls

    if (keys["w"] || keys["arrowup"]) {
        moveY = -1;
    }

    if (keys["s"] || keys["arrowdown"]) {
        moveY = 1;
    }

    if (keys["a"] || keys["arrowleft"]) {
        moveX = -1;
    }

    if (keys["d"] || keys["arrowright"]) {
        moveX = 1;
    }


    // Normalize diagonal movement

    const length =
        Math.sqrt(
            moveX * moveX +
            moveY * moveY
        );


    if (length > 1) {

        moveX /= length;
        moveY /= length;

    }


    // Move player

    player.x +=
        moveX * player.speed;

    player.y +=
        moveY * player.speed;


    // World boundaries

    player.x =
        Math.max(
            30,
            Math.min(
                1050,
                player.x
            )
        );

    player.y =
        Math.max(
            80,
            Math.min(
                750,
                player.y
            )
        );


    // Update player position

    playerElement.style.left =
        `${player.x - 27}px`;

    playerElement.style.top =
        `${player.y - 27}px`;


    // Check nearby objects

    checkNearbyObjects();


    // Move camera

    updateCamera();


    requestAnimationFrame(gameLoop);

}


// ==========================================
// CAMERA
// ==========================================

function updateCamera() {

    const screenWidth =
        game.clientWidth;

    const screenHeight =
        game.clientHeight;


    let cameraX =
        screenWidth / 2 -
        player.x;

    let cameraY =
        screenHeight / 2 -
        player.y;


    const worldWidth = 1100;
    const worldHeight = 800;


    // Don't show outside world

    cameraX =
        Math.min(
            0,
            Math.max(
                screenWidth - worldWidth,
                cameraX
            )
        );


    cameraY =
        Math.min(
            0,
            Math.max(
                screenHeight - worldHeight,
                cameraY
            )
        );


    world.style.transform =
        `translate(${cameraX}px, ${cameraY}px)`;

}


// ==========================================
// FIND NEARBY OBJECT
// ==========================================

function checkNearbyObjects() {

    nearbyObject = null;


    objects.forEach(object => {

        const objectX =
            object.offsetLeft +
            object.offsetWidth / 2;

        const objectY =
            object.offsetTop +
            object.offsetHeight / 2;


        const dx =
            player.x - objectX;

        const dy =
            player.y - objectY;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if (distance < 110) {

            nearbyObject = object;

            object.classList.add("near");

        } else {

            object.classList.remove("near");

        }

    });


    updateInteraction();

}


// ==========================================
// INTERACTION UI
// ==========================================

const interaction =
    document.getElementById("interaction");

const interactionText =
    document.getElementById("interactionText");


function updateInteraction() {

    if (nearbyObject) {

        interaction.style.display =
            "flex";

        interactionText.textContent =
            `💬 ${nearbyObject.dataset.name}`;

    } else {

        interaction.style.display =
            "none";

    }

}


// ==========================================
// INTERACT BUTTON
// ==========================================

document
    .getElementById("interactButton")
    .addEventListener(
        "click",
        interact
    );


function interact() {

    if (!nearbyObject) return;


    const type =
        nearbyObject.dataset.type;


    if (type === "computer") {

        startQuiz(
            "Computer Challenge",
            "🖥️"
        );

    }


    if (type === "chest") {

        startQuiz(
            "Mystery Chest Challenge",
            "📦"
        );

    }


    if (type === "npc") {

        showMessage(
            "👨‍🏫 Teacher",
            "Welcome, Tech Warrior! Explore the area and interact with objects to test your computer knowledge."
        );

    }


    if (type === "door") {

        if (player.level >= 2) {

            showMessage(
                "🚪 Gate Unlocked!",
                "You have enough knowledge to enter the next dungeon!"
            );

        } else {

            showMessage(
                "🔒 Gate Locked",
                "Reach Level 2 to unlock this dungeon."
            );

        }

    }

}


// ==========================================
// QUESTIONS
// ==========================================

const questions = [

    {
        question:
            "Which component is known as the brain of the computer?",

        answers: [
            "RAM",
            "CPU",
            "Monitor",
            "Keyboard"
        ],

        correct: 1
    },

    {
        question:
            "Which device is used to display information?",

        answers: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Microphone"
        ],

        correct: 2
    },

    {
        question:
            "Which of these is an input device?",

        answers: [
            "Monitor",
            "Speaker",
            "Keyboard",
            "Projector"
        ],

        correct: 2
    },

    {
        question:
            "What does Ctrl + C usually do?",

        answers: [
            "Paste",
            "Copy",
            "Undo",
            "Save"
        ],

        correct: 1
    },

    {
        question:
            "What does Ctrl + V usually do?",

        answers: [
            "Paste",
            "Copy",
            "Delete",
            "Undo"
        ],

        correct: 0
    },

    {
        question:
            "Which file extension is commonly used for images?",

        answers: [
            ".jpg",
            ".exe",
            ".txt",
            ".mp3"
        ],

        correct: 0
    },

    {
        question:
            "Which software is used to access websites?",

        answers: [
            "Web browser",
            "Calculator",
            "File manager",
            "Paint"
        ],

        correct: 0
    },

    {
        question:
            "Which is the strongest password?",

        answers: [
            "password123",
            "john2008",
            "123456",
            "T!9q#Lm2@xP"
        ],

        correct: 3
    }

];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let quizCorrect = 0;

let quizActive = false;

let questionAnswered = false;


// ==========================================
// START QUIZ
// ==========================================

function startQuiz(title, icon) {

    currentQuestion = 0;

    quizCorrect = 0;

    quizActive = true;

    document.getElementById(
        "questionTitle"
    ).textContent = title;

    document.getElementById(
        "questionIcon"
    ).textContent = icon;


    document.getElementById(
        "questionScreen"
    ).style.display = "flex";


    loadQuestion();

}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    questionAnswered = false;


    const q =
        questions[currentQuestion];


    document.getElementById(
        "questionCounter"
    ).textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    document.getElementById(
        "questionText"
    ).textContent =
        q.question;


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    document.getElementById(
        "feedback"
    ).textContent = "";


    document.getElementById(
        "nextButton"
    ).style.display = "none";


    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () =>
                    answerQuestion(
                        index,
                        button
                    )
            );


            answers.appendChild(button);

        }
    );

}


// ==========================================
// ANSWER QUESTION
// ==========================================

function answerQuestion(
    selected,
    button
) {

    if (questionAnswered) return;

    questionAnswered = true;


    const q =
        questions[currentQuestion];


    const allButtons =
        document.querySelectorAll(".answer");


    allButtons.forEach(
        btn => btn.disabled = true
    );


    if (selected === q.correct) {

        button.classList.add("correct");


        document.getElementById(
            "feedback"
        ).textContent =
            "✅ Correct! +20 XP";


        document.getElementById(
            "feedback"
        ).style.color =
            "#22c55e";


        quizCorrect++;

        addXP(20);


    } else {

        button.classList.add("wrong");


        allButtons[
            q.correct
        ].classList.add("correct");


        document.getElementById(
            "feedback"
        ).textContent =
            "❌ Incorrect!";


        document.getElementById(
            "feedback"
        ).style.color =
            "#ef4444";

    }


    document.getElementById(
        "nextButton"
    ).style.display =
        "inline-block";

}


// ==========================================
// NEXT QUESTION
// ==========================================

document
    .getElementById("nextButton")
    .addEventListener(
        "click",
        () => {

            currentQuestion++;


            if (
                currentQuestion >=
                questions.length
            ) {

                finishQuiz();

            } else {

                loadQuestion();

            }

        }
    );


// ==========================================
// FINISH QUIZ
// ==========================================

function finishQuiz() {

    document.getElementById(
        "questionScreen"
    ).style.display =
        "none";


    showMessage(
        "🏆 Challenge Complete!",
        `You answered ${quizCorrect} out of ${questions.length} correctly!`
    );


    quizActive = false;

}


// ==========================================
// XP SYSTEM
// ==========================================

function addXP(amount) {

    player.xp += amount;


    let needed =
        100 +
        ((player.level - 1) * 5);


    while (player.xp >= needed) {

        player.xp -= needed;

        player.level++;


        needed =
            100 +
            ((player.level - 1) * 5);


        showMessage(
            "⭐ LEVEL UP!",
            `Congratulations! You reached Level ${player.level}!`
        );

    }


    updateXP();

}


// ==========================================
// UPDATE XP
// ==========================================

function updateXP() {

    const needed =
        100 +
        ((player.level - 1) * 5);


    document.getElementById(
        "level"
    ).textContent =
        player.level;


    document.getElementById(
        "xp"
    ).textContent =
        player.xp;


    document.getElementById(
        "xpNeeded"
    ).textContent =
        needed;


    document.getElementById(
        "xpFill"
    ).style.width =
        `${(player.xp / needed) * 100}%`;

}


// ==========================================
// MESSAGE
// ==========================================

function showMessage(
    title,
    message
) {

    document.getElementById(
        "messageTitle"
    ).textContent =
        title;


    document.getElementById(
        "messageText"
    ).textContent =
        message;


    document.getElementById(
        "messageScreen"
    ).style.display =
        "flex";

}


// ==========================================
// CLOSE MESSAGE
// ==========================================

document
    .getElementById("messageButton")
    .addEventListener(
        "click",
        () => {

            document.getElementById(
                "messageScreen"
            ).style.display =
                "none";

        }
    );


// ==========================================
// CLOSE QUESTION
// ==========================================

document
    .getElementById("closeQuestion")
    .addEventListener(
        "click",
        () => {

            document.getElementById(
                "questionScreen"
            ).style.display =
                "none";

        }
    );


// ==========================================
// START GAME
// ==========================================

updateXP();

gameLoop();
