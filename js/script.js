// Array of questions and answers
const quiz = [
    {
        question: 'How clean is your room?', 
        answers: [
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Clean and neat',
                score: 1
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Clean, but not neat',
                score: 0
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Raccons took over',
                score: -1
            }
        ],
        background: 'bg-red',
        type: 'adult' 
    },
    {
        question: 'What would you do if you see an elderly having a hard time to get in the bus?',
        answers: [
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Help',
                score: 1
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Wait patiently',
                score: 0
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Get angry',
                score: -1
            }
        ],
        background: 'bg-green',
        type: 'adult'
    },
    {
        question: 'When asked for donation at the grocery store, you:',
        answers: [
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Donate',
                score: 1
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Say "next time"',
                score: 0
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Refuse to donate',
                score: -1
            }
        ],
        background: 'bg-red',
        type: 'adult'
    },
    {
        question: 'Do you always say "please"?',
        answers: [
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Yes, please!',
                score: 1
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Sometimes',
                score: 0
            },
            {
                image: 'https://via.placeholder.com/200',
                alt: '',
                text: 'Never',
                score: -1
            }
        ],
        background: 'bg-green',
        type: 'adult'
    }
];

// Array of possible gifts
const gifts = {
    nice: {
        image: 'https://via.placeholder.com/400',
        alt: ''
    },
    neutral: {
        image: 'https://via.placeholder.com/400',
        alt: ''
    },
    naughty: {
        image: 'https://via.placeholder.com/400',
        alt: ''
    }
};
    
// Filter questions based on user type
const filteredQuestions = quiz.filter(function(question){
    return question.type === 'adult';
});

// Display answers 
const displayAnswers = function(answers, index) {
    const newAnswersArray = answers.map( item => 
        `<label class="answerBox" data-question="${index}">
            <img src="${item.image}" alt="${item.alt}">
            <input type="radio" name="answer" value="${item.score}">
            <p>${item.text}</p>
        </label>
    `);

    return newAnswersArray.join('');        
}

function getButton(array, index) {
    if (array.length -1 === index) {
        return `<button class="button getResultsButton" id="jsGetResults">Get results</button>`
    } else {
        return `<button class="button next">Next</button>`
    }
}
    
// Display questions based on user type
const displayQuestions = function(questions){
    questions.forEach(function(item, index, array){
        $('#jsQuestions').append(`
        <li>
            <div class="wrapper questionContainer">
                <h3>${item.question}</h3> 
                <div class="answerContainer">
                    ${displayAnswers(item.answers, index)}          
                </div> 
                ${getButton(array, index)}
            </div>
        </li>
        `);
    });
}
displayQuestions(filteredQuestions);

// Create array to store scores
const scores = [];

// Get points as per answers selected  
$('#jsQuestions').on('click', 'label', function() {
    const questionIndex = $(this).data('question');
    const score = $(this).find('input').val();

    scores[questionIndex] = parseInt(score, 10);

});

// Event listener to get results
$('#jsQuestions').on('click', '#jsGetResults', function(event) {
    event.preventDefault();

    // sum up scores to find out whether user is nice or naughty
    const totalScores = scores.reduce(function (total, integer) {
        return total + integer;
    });

});

// display result image according to user's score



// add smooth scroll to the page



// Document ready
$(function(){

});