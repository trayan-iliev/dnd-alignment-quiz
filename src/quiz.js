// Scoring system
var pointsLawful = 0;
var pointsGood = 0;

// Questions
var myQuestions = [
    {
    question: "testqasdads?",
    answers: {
        a: "-5 lawful maybe?",
        b: "10 good maybe?",
        c: "8 lawful maybe?"
    },
    points: {
        a: "-5 lawful",
        b: "10 good",
        c: "8 lawful"
    }
    },
    {
    question: "22222?",
    answers: {
        a: "22-5 lawful maybe?",
        b: "2210 good maybe?",
        c: "2228 lawful maybe?"
    },
    points: {
        a: "-5 lawful",
        b: "10 good",
        c: "8 lawful"
    }
    },
];


function loadQuestion (userChoice) {
    // Get divs & clear them   
    const divQuestion = document.getElementById('question');
    const divAnswers = document.getElementById('answers');
    while (divQuestion.firstChild) {divQuestion.removeChild(divQuestion.firstChild)};
    while (divAnswers.firstChild) {divAnswers.removeChild(divAnswers.firstChild)};

    // Get question, answers & points
    let currentQuesion = myQuestions.shift();
    let currentQuestionText = Object.values(currentQuesion)[0];
    let currentQuestionAnswers = Object.values(currentQuesion)[1];
    let currentQuestionPoints = Object.values(currentQuesion)[2];

    // Populate question
    divQuestion.appendChild(document.createTextNode(currentQuestionText))

    // Populate answers
    const answerCount = Object.keys(currentQuestionAnswers).length;
    for (let i = 0; i < answerCount; i++) {
        let currentAnswer = Object.values(currentQuestionAnswers)[i];
        let div = document.createElement('div');
        div.className = 'answer';
        div.innerText = currentAnswer  ;
        divAnswers.appendChild(div);
    }




    // Console log tests
    console.log(currentQuestionText);
    console.log(currentQuestionAnswers);
    console.log(Object.values(currentQuestionAnswers).length);
    console.log(currentQuestionPoints);
    console.log(myQuestions);

}



// loadQuestion();