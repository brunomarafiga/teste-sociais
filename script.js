// script.js - Updated for MC, VF, AG questions
document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const quizArea = document.getElementById('quiz-area');
    const resultsArea = document.getElementById('results-area');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');
    const levelText = document.getElementById('level-text');
    const reviewBtn = document.getElementById('review-btn');
    const restartBtn = document.getElementById('restart-btn');
    const reviewArea = document.getElementById('review-area');
    const reviewContent = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results-btn');
    const restartFromReviewBtn = document.getElementById('restart-from-review-btn');

    // --- Estado do Quiz ---
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = []; // Array para guardar as perguntas (possivelmente embaralhadas)
    let userAnswers = []; // Guarda { questionIndex, type, questionText, [affirmations], options/tfOptions, userAnswer, correctAnswer, isCorrect }

    // --- Funções ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        // Ensure questions are loaded before shuffling
        if (typeof questions !== 'undefined' && questions.length > 0) {
            quizData = shuffleArray([...questions]); // Use loaded questions
             progressBar.max = quizData.length; // Set max progress based on actual questions loaded
        } else {
            console.error("Questions not loaded or empty!");
            questionText.textContent = "Erro: Perguntas não carregadas.";
            return; // Stop quiz if no questions
        }

        quizArea.classList.remove('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');

        loadQuestion();
    }

    function loadQuestion() {
        nextBtn.disabled = true;
        optionsContainer.innerHTML = ''; // Clear previous options/affirmations

        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNum = currentQuestionIndex + 1;

            // Update progress
            progressText.textContent = `Questão ${questionNum} de ${quizData.length}`;
            progressBar.value = questionNum;

            // Display question number and text
            questionNumber.textContent = `Questão ${questionNum}`;
            questionText.textContent = currentQuestion.pergunta;

            // --- Load based on question type ---
            if (currentQuestion.tipo === 'AG') {
                // Display affirmations for Group Affirmation questions
                const affirmationsList = document.createElement('ol');
                affirmationsList.classList.add('affirmations-list');
                currentQuestion.afirmacoes.forEach(affirmation => {
                    const li = document.createElement('li');
                    li.textContent = affirmation;
                    affirmationsList.appendChild(li);
                });
                // Insert affirmations *before* the options container within the card
                questionText.after(affirmationsList); // Place affirmations after question text

                // Load A-E options (standard MC logic)
                createMcOptions(currentQuestion);

            } else if (currentQuestion.tipo === 'VF') {
                // Load True/False options
                createTfOptions(currentQuestion);

            } else { // Default to Multiple Choice (MC)
                createMcOptions(currentQuestion);
            }

            // Update next button text
            if (currentQuestionIndex === quizData.length - 1) {
                nextBtn.textContent = 'Ver Resultado';
            } else {
                nextBtn.textContent = 'Próxima Questão';
            }

        } else {
            showResults();
        }
    }

    function createMcOptions(question) {
        const optionLetters = 'ABCDE'; // Assuming max 5 options for MC/AG
        question.opcoes.forEach((option, index) => {
            if (index >= optionLetters.length) return; // Safety check
            const letter = optionLetters[index];
            const optionId = `q${currentQuestionIndex}_opt${letter}`;
            const radioName = `q${currentQuestionIndex}_options`;

            createRadioOption(letter, option, optionId, radioName);
        });
    }

    function createTfOptions(question) {
        const tfOptions = [ { letter: 'V', text: 'Verdadeiro' }, { letter: 'F', text: 'Falso' } ];
        const radioName = `q${currentQuestionIndex}_options`; // Can reuse name if options are cleared

        tfOptions.forEach(opt => {
            const optionId = `q${currentQuestionIndex}_opt${opt.letter}`;
            createRadioOption(opt.letter, opt.text, optionId, radioName);
        });
    }

    function createRadioOption(valueLetter, labelText, optionId, radioName) {
        const div = document.createElement('div');

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optionId;
        input.name = radioName;
        input.value = valueLetter;

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = labelText;

        input.addEventListener('change', () => {
            nextBtn.disabled = false;
        });

        div.appendChild(input);
        div.appendChild(label);
        optionsContainer.appendChild(div);
    }


    function handleNextQuestion() {
        const selectedOptionInput = optionsContainer.querySelector('input[type="radio"]:checked');
        if (!selectedOptionInput) return;

        const userAnswer = selectedOptionInput.value; // 'A', 'B', 'C', 'D', 'E', 'V', or 'F'
        const currentQuestion = quizData[currentQuestionIndex];
        const correctAnswer = currentQuestion.resposta.toUpperCase(); // Ensure uppercase
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            score++;
        }

        // Prepare answer data for review
        const answerData = {
            questionIndex: currentQuestionIndex,
            type: currentQuestion.tipo,
            questionText: currentQuestion.pergunta,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        };

        // Add specific data based on type for review
        if (currentQuestion.tipo === 'AG') {
            answerData.affirmations = currentQuestion.afirmacoes;
            answerData.options = currentQuestion.opcoes; // A-E descriptions
        } else if (currentQuestion.tipo === 'VF') {
            // Store the text for review display
            answerData.tfOptions = { V: 'Verdadeiro', F: 'Falso' };
        } else { // MC
            answerData.options = currentQuestion.opcoes;
        }

        userAnswers.push(answerData);

        // Move to next question or results
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            // Remove affirmations list if it exists from previous AG question
            const oldAffirmations = quizArea.querySelector('.affirmations-list');
             if (oldAffirmations) {
                 oldAffirmations.remove();
             }
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizArea.classList.add('hidden');
        resultsArea.classList.remove('hidden');
        reviewArea.classList.add('hidden');

        const totalQuestions = quizData.length;
        const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;

        scoreText.textContent = `Você acertou ${score} de ${totalQuestions} questões.`;
        percentageText.textContent = `Sua pontuação: ${percentage}%`;

        // Determine level (adjust thresholds as needed)
        let level = "Pontuação abaixo do nível Associate.";
        if (percentage >= 80) {
            level = "Nível: Master (Lembre-se que o nível Master oficial requer 2 exames especialistas)";
        } else if (percentage >= 70) {
            level = "Nível: Practitioner";
        } else if (percentage >= 60) {
            level = "Nível: Associate";
        }
        levelText.textContent = level;
    }

    function showReview() {
        resultsArea.classList.add('hidden');
        reviewArea.classList.remove('hidden');
        reviewContent.innerHTML = '';

        const optionLetters = 'ABCDE';

        userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const questionTitle = document.createElement('p');
            questionTitle.innerHTML = `<strong>Questão ${index + 1} (${answer.type}):</strong> ${answer.questionText}`;
            reviewItem.appendChild(questionTitle);

            // --- Display based on question type ---
            if (answer.type === 'AG') {
                // Display affirmations
                const affirmationsList = document.createElement('ol');
                affirmationsList.classList.add('review-affirmations'); // Style differently if needed
                answer.affirmations.forEach(affirmation => {
                    const li = document.createElement('li');
                    li.textContent = affirmation;
                    affirmationsList.appendChild(li);
                });
                reviewItem.appendChild(affirmationsList);

                // Display A-E options (MC style)
                answer.options.forEach((optionText, optIndex) => {
                     if (optIndex >= optionLetters.length) return;
                     const letter = optionLetters[optIndex];
                     createReviewOption(reviewItem, letter, optionText, answer);
                });

            } else if (answer.type === 'VF') {
                // Display True/False options
                 createReviewOption(reviewItem, 'V', answer.tfOptions.V, answer);
                 createReviewOption(reviewItem, 'F', answer.tfOptions.F, answer);

            } else { // MC
                // Display A-E options
                answer.options.forEach((optionText, optIndex) => {
                     if (optIndex >= optionLetters.length) return;
                     const letter = optionLetters[optIndex];
                     createReviewOption(reviewItem, letter, optionText, answer);
                });
            }

            reviewContent.appendChild(reviewItem);
        });
    }

    // Helper function for creating review options
    function createReviewOption(container, letter, text, answerData) {
        const optionP = document.createElement('span');
        optionP.classList.add('review-option');
        // For MC/AG, add letter prefix. For VF, just show text.
        optionP.textContent = (answerData.type === 'VF') ? text : `${letter}) ${text}`;

        if (letter === answerData.correctAnswer) {
            optionP.classList.add('correct');
        }
        if (letter === answerData.userAnswer) {
            optionP.classList.add('user-selected');
            if (!answerData.isCorrect) {
                optionP.classList.add('incorrect');
            }
        }
        container.appendChild(optionP);
    }


    // --- Event Listeners ---
    nextBtn.addEventListener('click', handleNextQuestion);
    restartBtn.addEventListener('click', startQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToResultsBtn.addEventListener('click', showResults);
    restartFromReviewBtn.addEventListener('click', startQuiz);

    // --- Iniciar o Quiz ---
    startQuiz();
});
