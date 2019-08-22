// Set up the array of questions and answers
const quiz = [
    {
        question: 'q1', 
        answers: [
            {
                image: 'assets/imagepath.jpg',
                text: 't1',
                score: 1
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't2',
                score: 0
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't3',
                score: -1
            }
        ],
        background: 'bg-red',
        type: 'adult' 
    },
    {
        question: 'q2',
        answers: [
            {
                image: 'assets/imagepath.jpg',
                text: 't1',
                score: 1
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't2',
                score: 0
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't3',
                score: -1
            }
        ],
        background: 'bg-green',
        type: 'adult'
    },
    {
        question: 'q3',
        answers: [
            {
                image: 'assets/imagepath.jpg',
                text: 't1',
                score: 1
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't2',
                score: 0
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't3',
                score: -1
            }
        ],
        background: 'bg-red',
        type: 'adult'
    },
    {
        question: 'q4',
        answers: [
            {
                image: 'assets/imagepath.jpg',
                text: 't1',
                score: 1
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't2',
                score: 0
            },
            {
                image: 'assets/imagepath.jpg',
                text: 't3',
                score: -1
            }
        ],
        background: 'bg-red',
        type: 'adult'
    }
];

// Filter questions based on user type
const filteredQuestions = quiz.filter(function(item){
    return item.type === 'adult';
});

// Display questions based on user type
const displayQuestions = function(questions){

    questions.forEach(function(item){

        $('ul').append(`
        <form action="">
            <h3>${item.question}</h3> 

            <div class="answerContainer">
                <input type="radio" class="nice" name="answer" id="choiceOne">
                <label for="choiceOne" class="answerBox">${item.answers[0].text}</label>

                <input type="radio" class="neutral" name="answer" id="choiceTwo">
                <label for="choiceTwo" class="answerBox">${item.answers[1].text}</label>

                <input type="radio" class="naughty" name="answer" id="choiceThree">
                <label for="choiceThree" class="answerBox">${item.answers[2].text}</label>
            </div> <!-- .answerContainer  -->

            <button class="button next">Next</button>

        </form>
        `);
    });
}
displayQuestions(filteredQuestions);





