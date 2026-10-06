// =====================================================
// TECHNOQUEST
// =====================================================


// =====================================================
// GAME ELEMENTS
// =====================================================

const game = document.getElementById("game");

const world = document.getElementById("world");

const playerElement =
    document.getElementById("player");

const character =
    document.querySelector(".character");


// =====================================================
// PLAYER
// =====================================================

const player = {

    x: 700,

    y: 500,

    speed: 4

};


// =====================================================
// JOYSTICK
// =====================================================

const joystickBase =
    document.getElementById("joystickBase");

const joystickStick =
    document.getElementById("joystickStick");


let joystickActive = false;

let joystickX = 0;

let joystickY = 0;


// =====================================================
// JOYSTICK START
// =====================================================

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


// =====================================================
// JOYSTICK MOVE
// =====================================================

joystickBase.addEventListener(
    "pointermove",
    function(event) {

        if (!joystickActive) return;

        updateJoystick(event);

    }
);


// =====================================================
// JOYSTICK RELEASE
// =====================================================

joystickBase.addEventListener(
    "pointerup",
    resetJoystick
);

joystickBase.addEventListener(
    "pointercancel",
    resetJoystick
);


// =====================================================
// UPDATE JOYSTICK
// =====================================================

function updateJoystick(event) {

    const rect =
        joystickBase.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    let dx =
        event.clientX -
        centerX;


    let dy =
        event.clientY -
        centerY;


    const maxDistance =
        rect.width / 2 - 32;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    if (distance > maxDistance) {

        dx =
            dx /
            distance *
            maxDistance;


        dy =
            dy /
            distance *
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


// =====================================================
// RESET JOYSTICK
// =====================================================

function resetJoystick() {

    joystickActive = false;

    joystickX = 0;

    joystickY = 0;


    joystickStick.style.left =
        "50%";


    joystickStick.style.top =
        "50%";

}


// =====================================================
// KEYBOARD
// =====================================================

const keys = {};


document.addEventListener(
    "keydown",
    function(event) {

        keys[event.key.toLowerCase()] = true;

    }
);


document.addEventListener(
    "keyup",
    function(event) {

        keys[event.key.toLowerCase()] = false;

    }
);


// =====================================================
// INTERACTABLE OBJECTS
// =====================================================

const objects =
    document.querySelectorAll(".object");


let nearbyObject = null;


// =====================================================
// QUESTIONS
// =====================================================

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
            "Mouse",
            "Keyboard",
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
            "Which password is strongest?",

        answers: [
            "password123",
            "john2008",
            "123456",
            "T!9q#Lm2@xP"
        ],

        correct: 3
    }

];


// =====================================================
// QUIZ VARIABLES
// =====================================================

let currentQuestion = 0;

let correctAnswers = 0;

let questionAnswered = false;


// =====================================================
// PLAYER XP
// =====================================================

let level = 1;

let xp = 0;


// =====================================================
// GAME LOOP
// =====================================================

function gameLoop() {

    let moveX = joystickX;

    let moveY = joystickY;


    // ---------------------------------------------
    // KEYBOARD
    // ---------------------------------------------

    if (
        keys["w"] ||
        keys["arrowup"]
    ) {

        moveY = -1;

    }


    if (
        keys["s"] ||
        keys["arrowdown"]
    ) {

        moveY = 1;

    }


    if (
        keys["a"] ||
        keys["arrowleft"]
    ) {

        moveX = -1;

    }


    if (
        keys["d"] ||
        keys["arrowright"]
    ) {

        moveX = 1;

    }


    // ---------------------------------------------
    // MOVEMENT
    // ---------------------------------------------

    const movementLength =
        Math.sqrt(
            moveX * moveX +
            moveY * moveY
        );


    if (movementLength > 0) {

        if (movementLength > 1) {

            moveX /=
                movementLength;

            moveY /=
                movementLength;

        }


        player.x +=
            moveX *
            player.speed;


        player.y +=
            moveY *
            player.speed;


        character.classList.add(
            "walking"
        );

    } else {

        character.classList.remove(
            "walking"
        );

    }


    // ---------------------------------------------
    // WORLD BOUNDARIES
    // ---------------------------------------------

    player.x =
        Math.max(
            50,
            Math.min(
                1350,
                player.x
            )
        );


    player.y =
        Math.max(
            100,
            Math.min(
                930,
                player.y
            )
        );


    // ---------------------------------------------
    // PLAYER POSITION
    // ---------------------------------------------

    playerElement.style.left =
        `${player.x - 35}px`;


    playerElement.style.top =
        `${player.y - 70}px`;


    // ---------------------------------------------
    // OBJECT DETECTION
    // ---------------------------------------------

    checkNearby();


    // ---------------------------------------------
    // CAMERA
    // ---------------------------------------------

    updateCamera();


    requestAnimationFrame(
        gameLoop
    );

}


// =====================================================
// CAMERA
// =====================================================

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


    const worldWidth =
        1400;


    const worldHeight =
        1000;


    // Keep camera inside world

    cameraX =
        Math.min(
            0,
            Math.max(
                screenWidth -
                worldWidth,
                cameraX
            )
        );


    cameraY =
        Math.min(
            0,
            Math.max(
                screenHeight -
                worldHeight,
                cameraY
            )
        );


    world.style.transform =
        `translate(${cameraX}px, ${cameraY}px)`;

}


// =====================================================
// CHECK NEARBY OBJECT
// =====================================================

function checkNearby() {

    nearbyObject = null;


    objects.forEach(
        function(object) {

            const objectX =
                object.offsetLeft +
                object.offsetWidth / 2;


            const objectY =
                object.offsetTop +
                object.offsetHeight / 2;


            const dx =
                player.x -
                objectX;


            const dy =
                player.y -
                objectY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                nearbyObject =
                    object;

                object.classList.add(
                    "near"
                );

            } else {

                object.classList.remove(
                    "near"
                );

            }

        }
    );


    updateInteraction();

}


// =====================================================
// INTERACTION UI
// =====================================================

const interaction =
    document.getElementById(
        "interaction"
    );


const interactionText =
    document.getElementById(
        "interactionText"
    );


function updateInteraction() {

    if (nearbyObject) {

        interaction.style.display =
            "flex";


        interactionText.textContent =
            nearbyObject.dataset.name;

    } else {

        interaction.style.display =
            "none";

    }

}


// =====================================================
// INTERACT
// =====================================================

document
    .getElementById(
        "interactButton"
    )
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
            "Mystery Chest",
            "📦"
        );

    }


    if (type === "npc") {

        showMessage(
            "👨‍🏫 Computer Teacher",

            "Welcome, Tech Warrior! Walk around the world and interact with objects to learn computer literacy."
        );

    }


    if (type === "door") {

        if (level >= 2) {

            showMessage(
                "🚪 Dungeon Unlocked!",

                "You reached Level 2! The next dungeon is now available."
            );

        } else {

            showMessage(
                "🔒 Dungeon Locked",

                "You need to reach Level 2 before entering this dungeon."
            );

        }

    }

}


// =====================================================
// START QUIZ
// =====================================================

function startQuiz(
    title,
    icon
) {

    currentQuestion = 0;

    correctAnswers = 0;


    document.getElementById(
        "questionTitle"
    ).textContent =
        title;


    document.getElementById(
        "questionIcon"
    ).textContent =
        icon;


    document.getElementById(
        "questionScreen"
    ).style.display =
        "flex";


    loadQuestion();

}


// =====================================================
// LOAD QUESTION
// =====================================================

function loadQuestion() {

    questionAnswered = false;


    const question =
        questions[currentQuestion];


    document.getElementById(
        "questionCounter"
    ).textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    document.getElementById(
        "feedback"
    ).textContent =
        "";


    document.getElementById(
        "nextButton"
    ).style.display =
        "none";


    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function() {

                    answerQuestion(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


// =====================================================
// ANSWER QUESTION
// =====================================================

function answerQuestion(
    selected,
    button
) {

    if (questionAnswered) return;


    questionAnswered = true;


    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        btn => {
            btn.disabled = true;
        }
    );


    if (
        selected ===
        question.correct
    ) {

        button.classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).textContent =
            "✅ Correct! +20 XP";


        document.getElementById(
            "feedback"
        ).style.color =
            "#22c55e";


        correctAnswers++;


        addXP(20);

    } else {

        button.classList.add(
            "wrong"
        );


        buttons[
            question.correct
        ].classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).textContent =
            "❌ Incorrect! The highlighted answer is correct.";


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


// =====================================================
// NEXT QUESTION
// =====================================================

document
    .getElementById(
        "nextButton"
    )
    .addEventListener(
        "click",
        function() {

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


// =====================================================
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    document.getElementById(
        "questionScreen"
    ).style.display =
        "none";


    showMessage(
        "🏆 Challenge Complete!",

        `You got ${correctAnswers} out of ${questions.length} correct!`
    );

}


// =====================================================
// XP
// =====================================================

function addXP(amount) {

    xp += amount;


    let needed =
        100 +
        ((level - 1) * 5);


    while (xp >= needed) {

        xp -= needed;

        level++;


        needed =
            100 +
            ((level - 1) * 5);


        showMessage(
            "⭐ LEVEL UP!",

            `Congratulations! You reached Level ${level}!`
        );

    }


    updateXP();

}


// =====================================================
// UPDATE XP
// =====================================================

function updateXP() {

    const needed =
        100 +
        ((level - 1) * 5);


    document.getElementById(
        "level"
    ).textContent =
        level;


    document.getElementById(
        "xp"
    ).textContent =
        xp;


    document.getElementById(
        "xpNeeded"
    ).textContent =
        needed;


    document.getElementById(
        "xpFill"
    ).style.width =
        `${(xp / needed) * 100}%`;

}


// =====================================================
// MESSAGE
// =====================================================

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


// =====================================================
// CLOSE MESSAGE
// =====================================================

document
    .getElementById(
        "messageButton"
    )
    .addEventListener(
        "click",
        function() {

            document.getElementById(
                "messageScreen"
            ).style.display =
                "none";

        }
    );


// =====================================================
// CLOSE QUESTION
// =====================================================

document
    .getElementById(
        "closeQuestion"
    )
    .addEventListener(
        "click",
        function() {

            document.getElementById(
                "questionScreen"
            ).style.display =
                "none";

        }
    );


// =====================================================
// INITIALIZE
// =====================================================

updateXP();

gameLoop();
