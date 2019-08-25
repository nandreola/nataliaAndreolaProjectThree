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
                text: 'Racoons took over',
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
                image: 'assets/donationNice.jpg',
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
                image: 'https://via.placeholder.com/600',
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
        text: 'nice',
        image: 'https://via.placeholder.com/400',
        alt: ''
    },
    neutral: {
        text: 'not too naughty',
        image: 'assets/giftNeutral.jpg',
        alt: ''
    },
    naughty: {
        text: 'naughty',
        image: 'assets/giftNaughty.jpg',
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
            <input type="radio" name="answer" value="${item.score}">
            <div class="imgBox">
                <img src="${item.image}" alt="${item.alt}" class="imgChoice">
            </div>
            <p class="textChoice">${item.text}</p>
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
        <li class="questionSection">
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
    }, 0);

    displayGift(totalScores);
});

// display result image according to user's score
const displayGift = function(totalScores) {
    if (totalScores > 0) {
        $('#jsResultText').append(`${gifts.nice.text}`);
        $('#jsGift').append(`<img src="${gifts.nice.image}" alt="${gifts.nice.alt}">`);
    } else if (totalScores < 0) {
        $('#jsResultText').append(`${gifts.naughty.text}`);
        $('#jsGift').append(`<img src="${gifts.naughty.image}" alt="${gifts.naughty.alt}">`);
    } else {
        $('#jsResultText').append(`${gifts.neutral.text}`);
        $('#jsGift').append(`<img src="${gifts.neutral.image}" alt="${gifts.neutral.alt}">`);
    };
}



// Play again 
$('#jsPlayAgain').on('click', function() {
    
})


// add smooth scroll to the page



// Document ready
$(function(){

});