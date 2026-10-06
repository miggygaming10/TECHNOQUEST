// ================================
// PLAYER DATA
// ================================

let player = {
    level: 1,
    xp: 0,
    coins: 0,
    health: 100,
    maxHealth: 100
};


// ================================
// GAME DATA
// ================================

const rooms = {

    computer: {
        name: "Computer Cavern",
        enemy: "Hardware Golem",
        enemyIcon: "🗿",
        enemyHP: 50,

        questions: [
            {
                question: "Which component is considered the brain of the computer?",
                answers: ["RAM", "CPU", "Monitor", "Keyboard"],
                correct: 1
            },

            {
                question: "Which device is used to display information?",
                answers: ["Monitor", "Mouse", "Keyboard", "Microphone"],
                correct: 0
            },

            {
                question: "Which of these is an input device?",
                answers: ["Monitor", "Speaker", "Keyboard", "Projector"],
                correct: 2
            },

            {
                question: "What does RAM temporarily store?",
                answers: [
                    "Data currently being used",
                    "Printed documents",
                    "Internet websites",
                    "Computer cables"
                ],
                correct: 0
            },

            {
                question: "Which one is software?",
                answers: [
                    "Keyboard",
                    "Mouse",
                    "Windows",
                    "Monitor"
                ],
                correct: 2
            }
        ]
    },


    keyboard: {
        name: "Keyboard Castle",
        enemy: "Keyboard Knight",
        enemyIcon: "⌨️",
        enemyHP: 50,

        questions: [
            {
                question: "What does Ctrl + C usually do?",
                answers: ["Paste", "Copy", "Save", "Undo"],
                correct: 1
            },

            {
                question: "What does Ctrl + V usually do?",
                answers: ["Paste", "Copy", "Delete", "Print"],
                correct: 0
            },

            {
                question: "What does Ctrl + Z usually do?",
                answers: ["Undo", "Redo", "Save", "Close"],
                correct: 0
            },

            {
                question: "Which key is commonly used to create a space?",
                answers: ["Shift", "Enter", "Spacebar", "Tab"],
                correct: 2
            },

            {
                question: "Which key is commonly used to start a new line?",
                answers: ["Enter", "Ctrl", "Alt", "Shift"],
                correct: 0
            }
        ]
    },


    files: {
        name: "File Forest",
        enemy: "File Mimic",
        enemyIcon: "📁",
        enemyHP: 50,

        questions: [
            {
                question: "Which file extension is commonly used for an image?",
                answers: [".jpg", ".exe", ".txt", ".html"],
                correct: 0
            },

            {
                question: "Which action creates a duplicate of a file?",
                answers: ["Copy", "Delete", "Rename", "Close"],
                correct: 0
            },

            {
                question: "What is a folder mainly used for?",
                answers: [
                    "Organizing files",
                    "Increasing internet speed",
                    "Printing documents",
                    "Playing music"
                ],
                correct: 0
            },

            {
                question: "Which extension is commonly associated with a text file?",
                answers: [".mp3", ".txt", ".jpg", ".png"],
                correct: 1
            },

            {
                question: "What happens when you rename a file?",
                answers: [
                    "Its name changes",
                    "It is automatically deleted",
                    "The computer shuts down",
                    "It becomes a virus"
                ],
                correct: 0
            }
        ]
    },


    internet: {
        name: "Internet Ruins",
        enemy: "Web Phantom",
        enemyIcon: "👻",
        enemyHP: 50,

        questions: [
            {
                question: "Which software is used to access websites?",
                answers: [
                    "Web browser",
                    "Calculator",
                    "File manager",
                    "Paint"
                ],
                correct: 0
            },

            {
                question: "What does URL refer to?",
                answers: [
                    "A website address",
                    "A computer virus",
                    "A keyboard shortcut",
                    "A type of hardware"
                ],
                correct: 0
            },

            {
                question: "Which is an example of a web browser?",
                answers: [
                    "Chrome",
                    "Windows",
                    "Photoshop",
                    "Excel"
                ],
                correct: 0
            },

            {
                question: "What should you do with a suspicious link?",
                answers: [
                    "Click it immediately",
                    "Share it",
                    "Avoid clicking it",
                    "Download everything"
                ],
                correct: 2
            },

            {
                question: "What is a search engine used for?",
                answers: [
                    "Finding information online",
                    "Cleaning a keyboard",
                    "Charging a computer",
                    "Creating hardware"
                ],
                correct: 0
            }
        ]
    },


    security: {
        name: "Cyber Dungeon",
        enemy: "Malware Slime",
        enemyIcon: "🦠",
        enemyHP: 60,

        questions: [
            {
                question: "Which password is strongest?",
                answers: [
                    "password123",
                    "john2008",
                    "123456",
                    "T!9q#Lm2@xP"
                ],
                correct: 3
            },

            {
                question: "What is phishing?",
                answers: [
                    "A computer game",
                    "A trick to steal information",
                    "A type of monitor",
                    "A programming language"
                ],
                correct: 1
            },

            {
                question: "What should you do if you receive a suspicious email?",
                answers: [
                    "Click every link",
                    "Send your password",
                    "Be cautious and verify it",
                    "Forward it to everyone"
                ],
                correct: 2
            },

            {
                question: "Why should you keep software updated?",
                answers: [
                    "For security and improvements",
                    "To make the keyboard heavier",
                    "To delete all files",
                    "To stop the monitor"
                ],
                correct: 0
            },

            {
                question: "Should you share your password with strangers?",
                answers: [
                    "Yes",
                    "No",
                    "Only online",
                    "Always"
                ],
                correct: 1
            }
        ]
    },


    coding: {
        name: "Coding Labyrinth",
        enemy: "Bug King",
        enemyIcon: "🐛",
        enemyHP: 70,

        questions: [
            {
                question: "Which language is used to structure webpages?",
                answers: ["HTML", "MP3", "PNG", "CPU"],
                correct: 0
            },

            {
                question: "Which language is mainly used to style webpages?",
                answers: ["CSS", "RAM", "JPG", "USB"],
                correct: 0
            },

            {
                question: "Which language adds interactivity to webpages?",
                answers: ["JavaScript", "HTML", "JPEG", "BIOS"],
                correct: 0
            },

            {
                question: "What is a bug in programming?",
                answers: [
                    "An error in a program",
                    "A computer mouse",
                    "A keyboard",
                    "A monitor"
                ],
                correct: 0
            },

            {
                question: "What does a loop generally allow a program to do?",
                answers: [
                    "Repeat instructions",
                    "Delete the computer",
                    "Turn off the monitor",
                    "Print hardware"
                ],
                correct: 0
            }
        ]
    },


    boss: {
        name: "Digital Overlord",
        enemy: "👑 DIGITAL OVERLORD",
        enemyIcon: "👑",
        enemyHP: 100,

        questions: [
            {
                question: "Which component processes instructions?",
                answers: ["CPU", "Monitor", "Mouse", "Speaker"],
                correct: 0
            },

            {
                question: "Which shortcut copies selected content?",
                answers: ["Ctrl + V", "Ctrl + C", "Ctrl + Z", "Ctrl + X"],
                correct: 1
            },

            {
                question: "Which is a strong password?",
                answers: [
                    "123456",
                    "password",
                    "qwerty",
                    "G7!pL#2xQ@9"
                ],
                correct: 3
            },

            {
                question: "Which language is used for webpage structure?",
                answers: ["CSS", "HTML", "JavaScript", "Python"],
                correct: 1
            },

            {
                question: "What should you do with a suspicious link?",
                answers: [
                    "Click it",
                    "Share it",
                    "Ignore or verify it first",
                    "Send your password"
                ],
                correct: 2
            },

            {
                question: "What is a web browser?",
                answers: [
                    "Software for accessing websites",
                    "A computer cable",
                    "A type of RAM",
                    "A printer"
                ],
                correct: 0
            },

            {
                question: "What is a folder used for?",
                answers: [
                    "Organizing files",
                    "Increasing RAM",
                    "Removing viruses automatically",
                    "Changing the monitor"
                ],
                correct: 0
            }
        ]
    }
};


// ================================
// CURRENT GAME
// ================================

let currentRoom = null;
let currentQuestion = 0;
let enemyHP = 0;
let answered = false;


// ================================
// HTML ELEMENTS
// ================================

const questionModal = document.getElementById("questionModal");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");

const enemyName = document.getElementById("enemyName");
const enemyIcon = document.getElementById("enemyIcon");
const enemyHealthBar = document.getElementById("enemyHealthBar");
const enemyHealthText = document.getElementById("enemyHealthText");

const nextQuestion = document.getElementById("nextQuestion");


// ================================
// ROOM CLICK
// ================================

document.querySelectorAll(".room").forEach(room => {

    room.addEventListener("click", () => {

        if (room.classList.contains("locked")) {
            showMessage(
                "🔒 Area Locked",
                "Defeat the previous area to unlock this dungeon."
            );
            return;
        }

        startRoom(room.dataset.room);

    });

});


// ================================
// START ROOM
// ================================

function startRoom(roomName) {

    currentRoom = rooms[roomName];

    currentQuestion = 0;

    enemyHP = currentRoom.enemyHP;

    enemyName.textContent = currentRoom.enemy;
    enemyIcon.textContent = currentRoom.enemyIcon;

    questionModal.classList.remove("hidden");

    updateEnemy();

    loadQuestion();

}


// ================================
// LOAD QUESTION
// ================================

function loadQuestion() {

    answered = false;

    const question =
        currentRoom.questions[currentQuestion];

    questionText.textContent = question.question;

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} / ${currentRoom.questions.length}`;

    answersContainer.innerHTML = "";

    feedback.textContent = "";

    nextQuestion.style.display = "none";


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            answerQuestion(index, button);

        });

        answersContainer.appendChild(button);

    });

}


// ================================
// ANSWER QUESTION
// ================================

function answerQuestion(selected, button) {

    if (answered) return;

    answered = true;

    const question =
        currentRoom.questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer");


    if (selected === question.correct) {

        button.classList.add("correct");

        feedback.textContent =
            "✅ Correct! The enemy takes damage!";

        feedback.style.color = "#22c55e";

        enemyHP -= 10;

        addXP(20);

        player.coins += 10;

        allButtons.forEach(btn => {
            btn.disabled = true;
        });

        updateEnemy();

    } else {

        button.classList.add("wrong");

        feedback.textContent =
            "❌ Incorrect. Try to remember this answer.";

        feedback.style.color = "#ef4444";

        player.health -= 10;

        if (player.health < 0) {
            player.health = 0;
        }

        updatePlayer();

        allButtons.forEach((btn, index) => {

            if (index === question.correct) {
                btn.classList.add("correct");
            }

            btn.disabled = true;

        });

        if (player.health <= 0) {

            setTimeout(() => {

                questionModal.classList.add("hidden");

                showMessage(
                    "💀 Mission Failed",
                    "Your health reached zero. Review the lessons and try again!"
                );

            }, 800);

            return;
        }

    }


    nextQuestion.style.display = "inline-block";

}


// ================================
// NEXT QUESTION
// ================================

nextQuestion.addEventListener("click", () => {

    if (enemyHP <= 0) {

        finishRoom();

        return;

    }


    currentQuestion++;

    if (
        currentQuestion >=
        currentRoom.questions.length
    ) {

        finishRoom();

        return;

    }


    loadQuestion();

});


// ================================
// ENEMY UPDATE
// ================================

function updateEnemy() {

    const maxHP = currentRoom.enemyHP;

    let percentage =
        (enemyHP / maxHP) * 100;

    if (percentage < 0) percentage = 0;

    enemyHealthBar.style.width =
        percentage + "%";

    enemyHealthText.textContent =
        `${Math.max(enemyHP, 0)} / ${maxHP} HP`;

}


// ================================
// FINISH ROOM
// ================================

function finishRoom() {

    questionModal.classList.add("hidden");

    const roomName =
        Object.keys(rooms).find(
            key => rooms[key] === currentRoom
        );


    unlockNextRoom(roomName);


    if (roomName === "boss") {

        showMessage(
            "🏆 GAME COMPLETE!",
            "You defeated the Digital Overlord and became a Computer Literacy Master!"
        );

        return;

    }


    showMessage(
        "⚔️ Mission Successful!",
        `You defeated ${currentRoom.enemy}! The next area has been unlocked.`
    );

}


// ================================
// UNLOCK NEXT ROOM
// ================================

function unlockNextRoom(roomName) {

    const order = [
        "computer",
        "keyboard",
        "files",
        "internet",
        "security",
        "coding",
        "boss"
    ];

    const currentIndex =
        order.indexOf(roomName);

    const nextRoom =
        order[currentIndex + 1];


    if (!nextRoom) return;


    const nextButton =
        document.querySelector(
            `[data-room="${nextRoom}"]`
        );


    if (nextButton) {

        nextButton.classList.remove("locked");

        const small =
            nextButton.querySelector("small");

        small.textContent =
            "Unlocked!";

    }

}


// ================================
// XP SYSTEM
// ================================

function addXP(amount) {

    player.xp += amount;


    let needed =
        100 + ((player.level - 1) * 5);


    while (player.xp >= needed) {

        player.xp -= needed;

        player.level++;

        needed =
            100 + ((player.level - 1) * 5);

        showMessage(
            "⭐ LEVEL UP!",
            `You reached Level ${player.level}!`
        );

    }


    updatePlayer();

}


// ================================
// UPDATE PLAYER
// ================================

function updatePlayer() {

    const needed =
        100 + ((player.level - 1) * 5);


    document.getElementById("level").textContent =
        player.level;

    document.getElementById("xp").textContent =
        player.xp;

    document.getElementById("xpNeeded").textContent =
        needed;

    document.getElementById("coins").textContent =
        player.coins;


    const xpPercentage =
        (player.xp / needed) * 100;

    document.getElementById("xpBar").style.width =
        xpPercentage + "%";


    document.getElementById("healthBar").style.width =
        player.health + "%";

    document.getElementById("healthText").textContent =
        `${player.health} / ${player.maxHealth}`;

}


// ================================
// MESSAGE
// ================================

function showMessage(title, text) {

    document.getElementById("messageTitle").textContent =
        title;

    document.getElementById("messageText").textContent =
        text;

    document.getElementById("messageBox")
        .classList.remove("hidden");

}


// ================================
// MESSAGE CLOSE
// ================================

document.getElementById("messageButton")
    .addEventListener("click", () => {

        document.getElementById("messageBox")
            .classList.add("hidden");

    });


// ================================
// CLOSE QUESTION
// ================================

document.getElementById("closeQuestion")
    .addEventListener("click", () => {

        questionModal.classList.add("hidden");

    });


// ================================
// INITIALIZE
// ================================

updatePlayer();
