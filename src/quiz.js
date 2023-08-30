// Scoring system
var pointsLawful = 0;
var pointsGood = 0;

// FOR TESTING PURPOSES: Show score while doing the quiz
document.getElementById("points").append(document.createTextNode(`Lawful pts: ${pointsLawful} ||| Good pts: ${pointsGood}`))

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
    const formAnswers = document.getElementById('answers');
    while (divQuestion.firstChild) {divQuestion.removeChild(divQuestion.firstChild)};
    while (formAnswers.firstChild) {formAnswers.removeChild(formAnswers.firstChild)};

    // Get question, answers & points
    let currentQuestion = myQuestions.shift();
    if (typeof currentQuestion === "undefined") {alert("FINISHED"); return;};   // Check if questions are over & go to results function
    let currentQuestionText = Object.values(currentQuestion)[0];
    let currentQuestionAnswers = Object.values(currentQuestion)[1];
    // let currentQuestionPoints = Object.values(currentQuestion)[2];
    
    // Populate question
    divQuestion.appendChild(document.createTextNode(currentQuestionText))

    // Populate answers
    const answerCount = Object.keys(currentQuestionAnswers).length;
    for (let i = 0; i < answerCount; i++) {
        
        // Get current answer, it's value and alignment switch
        let currentAnswer = Object.values(currentQuestionAnswers)[i];
        // let currentPoints = document.createTextNode(Object.values(currentQuestionPoints)[i]);
        // currentPoints = currentPoints.split(' ');
        // currentAlignment = currentPoints[1];
        // currentPoints = currentPoints[0];
        // currentPoints = parseInt(currentPoints);

        let radioButtonDiv = document.createElement('div');
        radioButtonDiv.className = 'answer';
        let radioButton = document.createElement('input');
        radioButton.type='radio';
        radioButton.name = 'answer';
        let radioButtonLabel = document.createElement('label');
        radioButtonLabel.textContent = currentAnswer;
        radioButtonDiv.appendChild(radioButton);
        radioButtonDiv.appendChild(radioButtonLabel);
        formAnswers.appendChild(document.createElement('br'));
    }



}


function answerQuestion(answer) {
    alert('submitted');
}