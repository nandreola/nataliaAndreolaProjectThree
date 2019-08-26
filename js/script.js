// Document ready
$(function () {
    // Array of questions and answers
    const quiz = [
        {
            question: 'How clean is your room?', 
            answers: [
                {
                    image: 'assets/roomNice.jpg',
                    alt: 'Neat and clean bedroom',
                    text: 'Clean and neat',
                    score: 1
                },
                {
                    image: 'assets/roomNeutral.jpg',
                    alt: 'Bedroom not 100% organized',
                    text: 'Clean, but not neat',
                    score: 0
                },
                {
                    image: 'assets/roomNaughty.jpg',
                    alt: 'Racoon',
                    text: 'Racoons took over',
                    score: -1
                }
            ],
            type: 'adult',
            id: 'room' 
        },
        {
            question: 'If you see an elderly having a hard time to get in the bus, you:',
            answers: [
                {
                    image: 'assets/busNice.jpg',
                    alt: 'People standing in front of a streetcar',
                    text: 'Help',
                    score: 1
                },
                {
                    image: 'assets/busNeutral.jpg',
                    alt: 'People getting on the bus',
                    text: 'Wait patiently',
                    score: 0
                },
                {
                    image: 'assets/busNaughty.jpg',
                    alt: 'Man with an angry face',
                    text: 'Get angry',
                    score: -1
                }
            ],
            type: 'adult',
            id: 'bus'
        },
        {
            question: 'When asked for donation at the grocery store, you:',
            answers: [
                {
                    image: 'assets/donationNice.jpg',
                    alt: 'Hand with some cash',
                    text: 'Donate',
                    score: 1
                },
                {
                    image: 'assets/donationNeutral.jpg',
                    alt: 'Not now sign',
                    text: 'Say "Not now"',
                    score: 0
                },
                {
                    image: 'assets/donationNaughty.jpg',
                    alt: 'Man holding cash',
                    text: 'Refuse to donate',
                    score: -1
                }
            ],
            type: 'adult',
            id: 'donation'
        },
        {
            question: 'Do you always say "please"?',
            answers: [
                {
                    image: 'assets/pleaseNice.jpg',
                    alt: 'Please say please sign',
                    text: 'Yes, please!',
                    score: 1
                },
                {
                    image: 'assets/pleaseNeutral.jpg',
                    alt: 'Thumb\'s up',
                    text: 'Sometimes',
                    score: 0
                },
                {
                    image: 'assets/pleaseNaughty.jpg',
                    alt: 'Child with his tongue out',
                    text: 'Never',
                    score: -1
                }
            ],
            type: 'adult',
            id: 'please'
        }
    ];
    
    // Array of possible gifts
    const gifts = {
        nice: {
            text: 'nice',
            image: 'assets/giftNice.jpg',
            alt: 'Asaf holding a microphone',
            description: 'A Stand-up Comedy Ticket'
        },
        neutral: {
            text: 'not too naughty',
            image: 'assets/giftNeutral.jpg',
            alt: 'Red shirt with three check-boxes, first for naughty, second for nice, and last one is checked for I tried',
            description: 'A T-shirt to wear on Xmas Eve'
        },
        naughty: {
            text: 'naughty',
            image: 'assets/giftNaughty.jpg',
            alt: 'Funny pair of hairy shoes',
            description: 'A pair of hairy shoes'
        }
    };
        
    // Filter questions based on user type
    // I added this filter method because on my streach goal, it would have the option for the user to choose if child or adult 
    const filteredQuestions = quiz.filter(function(question){
        return question.type === 'adult';
    });
    
    // Display answers 
    const displayAnswers = function(answers, index) {
        const newAnswersArray = answers.map( item => 
            `<label class="answerBox" data-question="${index}">
                <input type="radio" name="answer-${index}" value="${item.score}" required>
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
            const id = array[index + 1].id;
            return `<button class="button next" data-nextid="${id}">Next</button>`
        }
    }
        
    // Display questions based on user type
    const displayQuestions = function(questions){
        questions.forEach(function(item, index, array){
            $('#jsQuestions').append(`
            <li class="questionSection" id="${item.id}">
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
    let scores = [];
    
    // Get points as per answers selected  
    $('#jsQuestions').on('click', 'label', function() {
        const questionIndex = $(this).data('question');
        const score = $(this).find('input').val();
    
        scores[questionIndex] = parseInt(score, 10);
    });
    
    // Event listener to take the quiz
    $('.start').on('click', function() {
        // https://stackoverflow.com/a/19012631
        $('html, body').animate({
            scrollTop: $(`#jsQuestions`).offset().top
        }, 'slow');
    });
    
    // Event listener to move to next question
    $('#jsQuestions').on('click', '.next', function(event) {
        event.preventDefault();
    
        const nextId = $(this).data('nextid');
        // https://stackoverflow.com/a/19012631
        $('html, body').animate({
            scrollTop: $(`#${nextId}`).offset().top
        }, 'slow');
    });
    
    // Event listener to get results
    $('#jsQuestions').on('click', '#jsGetResults', function() {
    
        // sum up scores to find out whether user is nice or naughty
        const totalScores = scores.reduce(function (total, integer) {
            return total + integer;
        }, 0);
    
        // Scroll to result page
        $('html, body').animate({
            scrollTop: $(`#jsGift`).offset().top
        }, 'slow');
    
        displayGift(totalScores);
    
    });
    
    $('form').on('submit', function (event) {
        event.preventDefault();
    });
    
    // display result image according to user's score
    const displayGift = function(totalScores) {
        if (totalScores > 0) {
            $('#jsResultText').html(`${gifts.nice.text}`);
            $('#jsGift').html(`<img src="${gifts.nice.image}" alt="${gifts.nice.alt}" class="giftImg">`);
            $('#jsResultDescription').html(`${gifts.nice.description}`);
        } else if (totalScores < 0) {
            $('#jsResultText').html(`${gifts.naughty.text}`);
            $('#jsGift').html(`<img src="${gifts.naughty.image}" alt="${gifts.naughty.alt}" class="giftImg">`);
            $('#jsResultDescription').html(`${gifts.naughty.description}`);
        } else {
            $('#jsResultText').html(`${gifts.neutral.text}`);
            $('#jsGift').html(`<img src="${gifts.neutral.image}" alt="${gifts.neutral.alt}" class="giftImg">`);
            $('#jsResultDescription').html(`${gifts.neutral.description}`);
        };
    }
    
    // Reset and Play again 
    $('#jsPlayAgain').on('click', function() {
        $('input').removeAttr('checked');
        scores = [];
        $('#jsResultText').html('');
        $('#jsGift').html('');
        $('#jsResultDescription').html('');
    
        // Scroll to top 
        // https://stackoverflow.com/a/1145297
        $("html, body").animate({ scrollTop: 0 }, 'slow');
    });
});    