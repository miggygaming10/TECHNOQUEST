// ===============================
// TECHNOQUEST - JAVASCRIPT
// ===============================

// ---------- GAME VARIABLES ----------

let currentMode = "";
let currentDifficulty = "";
let gameQuestions = [];
let questionIndex = 0;
let score = 0;

let bossHP = 0;
let maxBossHP = 0;

let level = 1;
let xp = 0;

let timer;
let timeLeft = 60;


// ---------- DIFFICULTY ----------

const difficultyHP = {
    easy: 100,
    medium: 200,
    hard: 300
};


// ---------- GENERAL QUESTIONS ----------

const questions = {

    easy: [
        {
            question: "What device is mainly used to type text?",
            options: ["Keyboard", "Monitor", "Mouse", "Printer"],
            answer: "Keyboard"
        },
        {
            question: "Which device displays images and text?",
            options: ["Monitor", "Keyboard", "Scanner", "Microphone"],
            answer: "Monitor"
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            answer: "Central Processing Unit"
        },
        {
            question: "Which device is used to move the pointer?",
            options: ["Mouse", "Printer", "Speaker", "Scanner"],
            answer: "Mouse"
        },
        {
            question: "Which one is an operating system?",
            options: ["Windows", "Google", "YouTube", "Facebook"],
            answer: "Windows"
        },
        {
            question: "What is used to print documents?",
            options: ["Printer", "Monitor", "Keyboard", "Webcam"],
            answer: "Printer"
        },
        {
            question: "Which device produces sound?",
            options: ["Speaker", "Scanner", "Keyboard", "Monitor"],
            answer: "Speaker"
        },
        {
            question: "What does RAM temporarily store?",
            options: [
                "Data currently being used",
                "Printed documents",
                "Internet cables",
                "Computer passwords only"
            ],
            answer: "Data currently being used"
        }
    ],

    medium: [
        {
            question: "What does USB stand for?",
            options: [
                "Universal Serial Bus",
                "Universal System Backup",
                "User Storage Base",
                "United Serial Board"
            ],
            answer: "Universal Serial Bus"
        },
        {
            question: "Which file extension is commonly used for a webpage?",
            options: [".html", ".mp3", ".jpg", ".exe"],
            answer: ".html"
        },
        {
            question: "What is the main purpose of an operating system?",
            options: [
                "Manage computer hardware and software",
                "Create internet connections only",
                "Print documents",
                "Play music only"
            ],
            answer: "Manage computer hardware and software"
        },
        {
            question: "Which component stores files permanently?",
            options: ["SSD", "RAM", "CPU", "GPU"],
            answer: "SSD"
        },
        {
            question: "What is a browser used for?",
            options: [
                "Access websites",
                "Edit hardware",
                "Print pictures",
                "Clean a keyboard"
            ],
            answer: "Access websites"
        },
        {
            question: "Which shortcut is commonly used to copy text?",
            options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
            answer: "Ctrl + C"
        },
        {
            question: "Which shortcut is used to paste copied content?",
            options: ["Ctrl + V", "Ctrl + C", "Ctrl + S", "Ctrl + P"],
            answer: "Ctrl + V"
        },
        {
            question: "What is malware?",
            options: [
                "Malicious software",
                "Computer hardware",
                "A type of monitor",
                "A programming language"
            ],
            answer: "Malicious software"
        }
    ],

    hard: [
        {
            question: "What does DNS do?",
            options: [
                "Translates domain names into IP addresses",
                "Stores computer files",
                "Protects the keyboard",
                "Controls the monitor"
            ],
            answer: "Translates domain names into IP addresses"
        },
        {
            question: "What is an IP address?",
            options: [
                "An address identifying a device on a network",
                "A type of computer virus",
                "A file extension",
                "A programming language"
            ],
            answer: "An address identifying a device on a network"
        },
        {
            question: "Which protocol is commonly used for secure websites?",
            options: ["HTTPS", "FTP", "HTTP", "SMTP"],
            answer: "HTTPS"
        },
        {
            question: "What does GPU primarily handle?",
            options: [
                "Graphics processing",
                "Sound recording",
                "Keyboard input",
                "File compression"
            ],
            answer: "Graphics processing"
        },
        {
            question: "What is phishing?",
            options: [
                "A scam designed to steal information",
                "A type of computer processor",
                "A file storage system",
                "A programming method"
            ],
            answer: "A scam designed to steal information"
        },
        {
            question: "What is two-factor authentication?",
            options: [
                "Using two verification methods",
                "Using two computers",
                "Having two passwords only",
                "Using two browsers"
            ],
            answer: "Using two verification methods"
        },
        {
            question: "What does a firewall help protect against?",
            options: [
                "Unauthorized network access",
                "Broken keyboards",
                "Low monitor brightness",
                "Printer paper jams"
            ],
            answer: "Unauthorized network access"
        },
        {
            question: "What is cloud computing?",
            options: [
                "Using remote internet-based computing resources",
                "Repairing computer hardware",
                "Increasing monitor brightness",
                "Installing a keyboard"
            ],
            answer: "Using remote internet-based computing resources"
        }
    ]
};


// ---------- TECH FIXER ----------

const fixerQuestions = {

    easy: [
        {
            question: "The computer has no sound. What should you check first?",
            options: [
                "Volume settings",
                "Keyboard cable",
                "Wallpaper",
                "File name"
            ],
            answer: "Volume settings"
        },
        {
            question: "The mouse is not moving. What should you check?",
            options: [
                "Mouse connection",
                "Monitor brightness",
                "Printer ink",
                "Browser history"
            ],
            answer: "Mouse connection"
        }
    ],

    medium: [
        {
            question: "A computer program stops responding. What can you try?",
            options: [
                "Close and reopen the program",
                "Turn off the monitor only",
                "Delete the keyboard",
                "Change the wallpaper"
            ],
            answer: "Close and reopen the program"
        },
        {
            question: "A computer is running very slowly. What can help?",
            options: [
                "Close unnecessary programs",
                "Increase screen brightness",
                "Disconnect the mouse",
                "Change the desktop wallpaper"
            ],
            answer: "Close unnecessary programs"
        }
    ],

    hard: [
        {
            question: "Which Windows tool can help diagnose system problems?",
            options: [
                "Task Manager",
                "Paint",
                "Calculator",
                "Notepad"
            ],
            answer: "Task Manager"
        },
        {
            question: "What should you do before making major system changes?",
            options: [
                "Back up important files",
                "Delete temporary files randomly",
                "Disconnect the monitor",
                "Remove the keyboard"
            ],
            answer: "Back up important files"
        }
    ]
};


// ---------- FILE MASTER ----------

const fileQuestions = {

    easy: [
        {
            question: "Which extension is commonly used for an image?",
            options: [".jpg", ".exe", ".html", ".txt"],
            answer: ".jpg"
        },
        {
            question: "Which extension is commonly used for a text file?",
            options: [".txt", ".mp4", ".png", ".exe"],
            answer: ".txt"
        },
        {
            question: "Which extension is commonly used for a video?",
            options: [".mp4", ".jpg", ".txt", ".html"],
            answer: ".mp4"
        }
    ],

    medium: [
        {
            question: "Which file format is commonly used for documents?",
            options: [".docx", ".mp3", ".png", ".exe"],
            answer: ".docx"
        },
        {
            question: "Which format is commonly used for compressed files?",
            options: [".zip", ".jpg", ".html", ".mp4"],
            answer: ".zip"
        },
        {
            question: "Which extension is commonly associated with JavaScript?",
            options: [".js", ".css", ".jpg", ".mp3"],
            answer: ".js"
        }
    ],

    hard: [
        {
            question: "Which extension is commonly used for CSS files?",
            options: [".css", ".js", ".html", ".exe"],
            answer: ".css"
        },
        {
            question: "Which extension is commonly used for executable Windows programs?",
            options: [".exe", ".txt", ".jpg", ".css"],
            answer: ".exe"
        }
    ]
};


// ---------- CYBER DEFENDER ----------

const cyberQuestions = {

    easy: [
        {
            question: "Which password is safer?",
            options: [
                "T!ger9#Moon42",
                "123456",
                "password",
                "qwerty"
            ],
            answer: "T!ger9#Moon42"
        },
        {
            question: "What should you do with a suspicious link?",
            options: [
                "Do not click it",
                "Click it immediately",
                "Send it to everyone",
                "Enter your password"
            ],
            answer: "Do not click it"
        }
    ],

    medium: [
        {
            question: "What is phishing mainly designed to steal?",
            options: [
                "Personal information",
                "Monitor brightness",
                "Computer speakers",
                "Keyboard keys"
            ],
            answer: "Personal information"
        },
        {
            question: "Which action improves account security?",
            options: [
                "Enable two-factor authentication",
                "Reuse one password everywhere",
                "Share passwords with friends",
                "Turn off security updates"
            ],
            answer: "Enable two-factor authentication"
        }
    ],

    hard: [
        {
            question: "What is ransomware?",
            options: [
                "Malware that can lock or encrypt files for payment",
                "A type of keyboard",
                "A graphics card",
                "A web browser"
            ],
            answer: "Malware that can lock or encrypt files for payment"
        },
        {
            question: "What is social engineering?",
            options: [
                "Manipulating people into revealing information",
                "Building computer hardware",
                "Designing websites",
                "Installing a graphics card"
            ],
            answer: "Manipulating people into revealing information"
        }
    ]
};


// ======================================
// RANDOMIZER
// ======================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


// ======================================
// GET QUESTIONS
// ======================================

function getQuestions() {

    if (currentMode === "fixer") {
        return fixerQuestions[currentDifficulty];
    }

    if (currentMode === "file") {
        return fileQuestions[currentDifficulty];
    }

    if (currentMode === "cyber") {
        return cyberQuestions[currentDifficulty];
    }

    // Boss Battle, Speed Type and Computer Challenge
    return questions[currentDifficulty];
}


// ======================================
// START GAME
// ======================================

function startGame() {
    score = 0;
    questionIndex = 0;

    // Get questions
    let selectedQuestions = getQuestions();

    // Make a completely separate copy
    gameQuestions = selectedQuestions.map(question => ({
        question: question.question,
        answer: question.answer,
        options: [...question.options]
    }));

    // RANDOMIZE THE QUESTIONS
    shuffleArray(gameQuestions);

    // RANDOMIZE THE ANSWERS
    gameQuestions.forEach(question => {
        shuffleArray(question.options);
    });

    console.log("RANDOMIZED QUESTIONS:");
    console.log(gameQuestions);

    maxBossHP = difficultyHP[currentDifficulty];
    bossHP = maxBossHP;

    updateBossHP();

    showScreen("gameScreen");

    if (currentMode === "speed") {
        startTimer();
    }

    loadQuestion();
}


// ======================================
// LOAD QUESTION
// ======================================

function loadQuestion() {

    if (questionIndex >= gameQuestions.length) {
        stopTimer();
        missionSuccess();
        return;
    }

    const question = gameQuestions[questionIndex];

    // Show randomized question
    document.getElementById("question").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    // Make a new randomized copy of the choices
    let choices = [...question.options];

    shuffleArray(choices);

    choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = choice;

        button.onclick = function () {
            checkAnswer(choice, question.answer);
        };

        answersContainer.appendChild(button);
    });
}

// ======================================
// CHECK ANSWER
// ======================================

function checkAnswer(selectedAnswer, correctAnswer) {

    // Disable all buttons
    document.querySelectorAll(".answer-btn")
        .forEach(button => {

            button.disabled = true;

        });


    if (selectedAnswer === correctAnswer) {

        // Correct answer
        score += 20;

        addXP(20);

        showFeedback("CORRECT!", true);


        // Boss Battle damage
        if (currentMode === "boss") {

            bossHP -= 20;

            if (bossHP < 0) {
                bossHP = 0;
            }

            updateBossHP();


            // Boss defeated
            if (bossHP <= 0) {

                setTimeout(() => {

                    missionSuccess();

                }, 700);

                return;
            }
        }

    } else {

        // Wrong answer
        showFeedback("WRONG ANSWER!", false);
    }


    questionIndex++;


    setTimeout(() => {

        loadQuestion();

    }, 700);
}


// ======================================
// FEEDBACK
// ======================================

function showFeedback(message, correct) {

    const result =
        document.getElementById("resultMessage");

    if (!result) return;

    result.textContent = message;

    if (correct) {

        result.className =
            "result-message correct";

    } else {

        result.className =
            "result-message wrong";
    }
}


// ======================================
// BOSS HP
// ======================================

function updateBossHP() {

    const hpBar =
        document.getElementById("bossHP");

    const hpText =
        document.getElementById("bossHPText");


    if (hpBar) {

        const percentage =
            (bossHP / maxBossHP) * 100;

        hpBar.style.width =
            percentage + "%";
    }


    if (hpText) {

        hpText.textContent =
            `${bossHP} / ${maxBossHP} HP`;
    }
}


// ======================================
// TIMER
// ======================================

function startTimer() {

    timeLeft = 60;

    updateTimer();


    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            // Time ran out
            missionFailed();

        }

    }, 1000);
}


function stopTimer() {

    clearInterval(timer);
}


function updateTimer() {

    const timerElement =
        document.getElementById("timer");

    if (timerElement) {

        timerElement.textContent =
            `TIME: ${timeLeft}`;
    }
}


// ======================================
// XP SYSTEM
// ======================================

function addXP(amount) {

    xp += amount;

    checkLevelUp();

    updateXP();
}


function getXPNeeded() {

    // Level 1 = 100
    // Level 2 = 105
    // Level 3 = 110
    // etc.

    return 100 + ((level - 1) * 5);
}


function checkLevelUp() {

    let neededXP = getXPNeeded();


    while (xp >= neededXP) {

        xp -= neededXP;

        level++;

        neededXP = getXPNeeded();

        showLevelUp();
    }
}


function updateXP() {

    const xpText =
        document.getElementById("xpText");

    const xpBar =
        document.getElementById("xpBar");

    const needed =
        getXPNeeded();


    if (xpText) {

        xpText.textContent =
            `${xp} / ${needed} XP`;
    }


    if (xpBar) {

        const percentage =
            (xp / needed) * 100;

        xpBar.style.width =
            percentage + "%";
    }


    const levelText =
        document.getElementById("levelText");

    if (levelText) {

        levelText.textContent =
            `LEVEL ${level}`;
    }
}


// ======================================
// LEVEL UP
// ======================================

function showLevelUp() {

    const popup =
        document.getElementById("levelUpPopup");

    if (!popup) return;

    popup.classList.add("show");


    setTimeout(() => {

        popup.classList.remove("show");

    }, 2000);
}


// ======================================
// MISSION SUCCESS
// ======================================

function missionSuccess() {

    stopTimer();

    // Completion bonus
    addXP(50);


    const scoreElement =
        document.getElementById("finalScore");

    if (scoreElement) {

        scoreElement.textContent =
            `SCORE: ${score}`;
    }


    showScreen("successScreen");
}


// ======================================
// MISSION FAILED
// ======================================

function missionFailed() {

    stopTimer();


    const failedScore =
        document.getElementById("failedScore");

    if (failedScore) {

        failedScore.textContent =
            `SCORE: ${score}`;
    }


    showScreen("failedScreen");
}


// ======================================
// SCREEN NAVIGATION
// ======================================

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const screen =
        document.getElementById(screenId);

    if (screen) {

        screen.classList.add("active");
    }
}


// ======================================
// SELECT GAME MODE
// ======================================

function selectMode(mode) {

    currentMode = mode;

    showScreen("difficultyScreen");
}


// ======================================
// SELECT DIFFICULTY
// ======================================

function selectDifficulty(difficulty) {

    currentDifficulty = difficulty;

    startGame();
}


// ======================================
// HOME
// ======================================

function goHome() {

    stopTimer();

    showScreen("homeScreen");
}


// ======================================
// RETRY
// ======================================

function retryGame() {

    startGame();
}


// ======================================
// INITIALIZE
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    updateXP();

    showScreen("homeScreen");

});

/* =====================================================
   TECHNOQUEST SOUNDS
===================================================== */

function playSound(soundId) {

    const sound = document.getElementById(soundId);

    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(() => {
        // Browser may block audio until user interacts
    });
}


/* =====================================================
   BUTTON CLICK SOUND
===================================================== */

document.addEventListener("click", function(event) {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        playSound("clickSound");
    }

});


/* =====================================================
   GAME SOUND FUNCTIONS
===================================================== */

function playCorrectSound() {

    playSound("correctSound");

}


function playWrongSound() {

    playSound("wrongSound");

}


function playDamageSound() {

    playSound("damageSound");

}


function playSuccessSound() {

    playSound("successSound");

}


function playFailedSound() {

    playSound("failedSound");

}


function playLevelUpSound() {

    playSound("levelSound");

}


function playLoginSound() {

    playSound("loginSound");

}


/* =====================================================
   THEMES
===================================================== */

function toggleThemes() {

    const menu =
        document.getElementById("themeMenu");

    menu.classList.toggle("show");

}


function setTheme(theme) {

    document.body.classList.remove(
        "theme-cyber",
        "theme-inferno",
        "theme-galaxy",
        "theme-matrix",
        "theme-ice"
    );


    document.body.classList.add(
        "theme-" + theme
    );


    localStorage.setItem(
        "technoquestTheme",
        theme
    );


    document
        .getElementById("themeMenu")
        .classList.remove("show");

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "technoquestTheme"
    );


if (savedTheme) {

    setTheme(savedTheme);

} else {

    document.body.classList.add(
        "theme-cyber"
    );

}


/* =====================================================
   CLOSE THEME MENU
===================================================== */

document.addEventListener("click", function(event) {

    const panel =
        document.querySelector(".theme-panel");

    if (
        panel &&
        !panel.contains(event.target)
    ) {

        document
            .getElementById("themeMenu")
            .classList.remove("show");

    }

});
