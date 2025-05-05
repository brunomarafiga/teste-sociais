// script.js - Updated to select 35 Core + 15 Other questions
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

    // --- Configurações do Quiz ---
    const numCoreRequired = 35;
    const numOtherRequired = 15;
    const totalQuizQuestions = numCoreRequired + numOtherRequired;
    const coreDisciplines = ['Sociologia', 'Antropologia', 'Ciencia Politica']; // Case-sensitive match with 'disciplina' property

    // --- Estado do Quiz ---
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = []; // Array para guardar as 50 perguntas SELECIONADAS
    let userAnswers = []; // Guarda { questionIndex, type, disciplina, questionText, [affirmations], options/tfOptions, userAnswer, correctAnswer, isCorrect }

    // --- Funções ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function selectQuestions() {
        // Assume 'questions' is loaded globally from questions.js
        if (typeof questions === 'undefined' || questions.length === 0) {
            console.error("Global 'questions' array not found or empty!");
            return false; // Indicate failure
        }

        // 1. Filter questions by category
        const coreQuestions = questions.filter(q => coreDisciplines.includes(q.disciplina));
        const otherQuestions = questions.filter(q => !coreDisciplines.includes(q.disciplina) && q.disciplina); // Ensure 'disciplina' exists

        // 2. Check if enough questions are available
        if (coreQuestions.length < numCoreRequired) {
            console.error(`Not enough core questions. Required: ${numCoreRequired}, Available: ${coreQuestions.length}`);
            alert(`Erro: Não há perguntas suficientes nas disciplinas principais (${coreDisciplines.join(', ')}). São necessárias ${numCoreRequired}, mas só existem ${coreQuestions.length}.`);
            return false;
        }
        if (otherQuestions.length < numOtherRequired) {
            console.error(`Not enough other questions. Required: ${numOtherRequired}, Available: ${otherQuestions.length}`);
             alert(`Erro: Não há perguntas suficientes nas outras disciplinas. São necessárias ${numOtherRequired}, mas só existem ${otherQuestions.length}.`);
            return false;
        }

        // 3. Shuffle each category
        shuffleArray(coreQuestions);
        shuffleArray(otherQuestions);

        // 4. Select the required number from each
        const selectedCore = coreQuestions.slice(0, numCoreRequired);
        const selectedOther = otherQuestions.slice(0, numOtherRequired);

        // 5. Combine and shuffle the final quiz set
        quizData = [...selectedCore, ...selectedOther];
        shuffleArray(quizData);

        console.log(`Selected ${quizData.length} questions (${selectedCore.length} core, ${selectedOther.length} other).`);
        return true; // Indicate success
    }


    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];

        // Select the 50 questions for this quiz run
        if (!selectQuestions()) {
            // Stop if selection failed (e.g., not enough questions)
             questionText.textContent = "Erro ao carregar ou selecionar perguntas. Verifique o console.";
             nextBtn.disabled = true;
             progressBar.value = 0;
             progressBar.max = 1; // Avoid division by zero errors
             progressText.textContent = "Erro";
            return;
        }

        // Set progress bar max based on SELECTED questions
        progressBar.max = totalQuizQuestions;

        quizArea.classList.remove('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');

        loadQuestion();
    }

    function loadQuestion() {
        nextBtn.disabled = true;
        optionsContainer.innerHTML = ''; // Clear previous options/affirmations

        // Remove affirmations list if it exists from previous AG question
        const oldAffirmations = quizArea.querySelector('.affirmations-list');
         if (oldAffirmations) {
             oldAffirmations.remove();
         }

        if (currentQuestionIndex < quizData.length) { // Use quizData length (50)
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNum = currentQuestionIndex + 1;

            // Update progress
            progressText.textContent = `Questão ${questionNum} de ${totalQuizQuestions}`; // Use total selected
            progressBar.value = questionNum;

            // Display question number and text (without context)
            questionNumber.textContent = `Questão ${questionNum}`;
            questionText.textContent = currentQuestion.pergunta; // 'pergunta' already excludes context

            // --- Load based on question type ---
            if (currentQuestion.tipo === 'AG') {
                // Display affirmations for Group Affirmation questions
                const affirmationsList = document.createElement('ol');
                affirmationsList.classList.add('affirmations-list');
                 // Check if affirmations exist before iterating
                 if (currentQuestion.afirmacoes && Array.isArray(currentQuestion.afirmacoes)) {
                    currentQuestion.afirmacoes.forEach(affirmation => {
                        const li = document.createElement('li');
                        li.textContent = affirmation;
                        affirmationsList.appendChild(li);
                    });
                     // Insert affirmations *before* the options container within the card
                     questionText.after(affirmationsList); // Place affirmations after question text
                 } else {
                    console.warn(`Question ${questionNum} is AG type but missing 'afirmacoes' array.`);
                 }
                // Load A-E options (standard MC logic)
                createMcOptions(currentQuestion);

            } else if (currentQuestion.tipo === 'VF') {
                // Load True/False options
                createTfOptions(currentQuestion);

            } else { // Default to Multiple Choice (MC)
                createMcOptions(currentQuestion);
            }

            // Update next button text
            if (currentQuestionIndex === quizData.length - 1) { // Use quizData length (50)
                nextBtn.textContent = 'Ver Resultado';
            } else {
                nextBtn.textContent = 'Próxima Questão';
            }

        } else {
            showResults();
        }
    }

    function createMcOptions(question) {
        const optionLetters = 'ABCDE';
        // Check if options exist before iterating
        if (question.opcoes && Array.isArray(question.opcoes)) {
            question.opcoes.forEach((option, index) => {
                if (index >= optionLetters.length) return;
                const letter = optionLetters[index];
                const optionId = `q${currentQuestionIndex}_opt${letter}`;
                const radioName = `q${currentQuestionIndex}_options`;
                createRadioOption(letter, option, optionId, radioName);
            });
        } else {
             console.warn(`Question ${currentQuestionIndex + 1} is ${question.tipo} type but missing 'opcoes' array.`);
             // Optionally display an error message to the user in the options container
             optionsContainer.textContent = "Erro: Opções não encontradas para esta questão.";
        }
    }

    function createTfOptions(question) {
        const tfOptions = [ { letter: 'V', text: 'Verdadeiro' }, { letter: 'F', text: 'Falso' } ];
        const radioName = `q${currentQuestionIndex}_options`;

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

        const userAnswer = selectedOptionInput.value;
        const currentQuestion = quizData[currentQuestionIndex];
        const correctAnswer = currentQuestion.resposta.toUpperCase();
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            score++;
        }

        // Prepare answer data for review
        const answerData = {
            questionIndex: currentQuestionIndex, // Index within the selected 50
            type: currentQuestion.tipo,
            disciplina: currentQuestion.disciplina || 'Desconhecida', // Store discipline
            questionText: currentQuestion.pergunta,
            contexto: currentQuestion.contexto || '', // Store context if needed later
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        };

        // Add specific data based on type for review
        if (currentQuestion.tipo === 'AG') {
            answerData.affirmations = currentQuestion.afirmacoes;
            answerData.options = currentQuestion.opcoes;
        } else if (currentQuestion.tipo === 'VF') {
            answerData.tfOptions = { V: 'Verdadeiro', F: 'Falso' };
        } else { // MC
            answerData.options = currentQuestion.opcoes;
        }

        userAnswers.push(answerData);

        // Move to next question or results
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) { // Use quizData length (50)
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizArea.classList.add('hidden');
        resultsArea.classList.remove('hidden');
        reviewArea.classList.add('hidden');

        // Use totalQuizQuestions (50) for calculation
        const percentage = totalQuizQuestions > 0 ? ((score / totalQuizQuestions) * 100).toFixed(1) : 0;

        scoreText.textContent = `Você acertou ${score} de ${totalQuizQuestions} questões.`;
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

        userAnswers.sort((a, b) => a.questionIndex - b.questionIndex); // Sort by original index if needed, though index is now 0-49

        userAnswers.forEach((answer, displayIndex) => { // Use displayIndex for numbering 1-50
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const questionTitle = document.createElement('p');
            // Include discipline in review title
            questionTitle.innerHTML = `<strong>Questão ${displayIndex + 1} (${answer.type} - ${answer.disciplina}):</strong> ${answer.questionText}`;
            reviewItem.appendChild(questionTitle);

            // --- Display based on question type ---
            if (answer.type === 'AG') {
                if (answer.affirmations && Array.isArray(answer.affirmations)) {
                    const affirmationsList = document.createElement('ol');
                    affirmationsList.classList.add('review-affirmations');
                    answer.affirmations.forEach(affirmation => {
                        const li = document.createElement('li');
                        li.textContent = affirmation;
                        affirmationsList.appendChild(li);
                    });
                    reviewItem.appendChild(affirmationsList);
                }
                if (answer.options && Array.isArray(answer.options)) {
                    answer.options.forEach((optionText, optIndex) => {
                         if (optIndex >= optionLetters.length) return;
                         const letter = optionLetters[optIndex];
                         createReviewOption(reviewItem, letter, optionText, answer);
                    });
                }

            } else if (answer.type === 'VF') {
                 createReviewOption(reviewItem, 'V', answer.tfOptions.V, answer);
                 createReviewOption(reviewItem, 'F', answer.tfOptions.F, answer);

            } else { // MC
                if (answer.options && Array.isArray(answer.options)) {
                    answer.options.forEach((optionText, optIndex) => {
                         if (optIndex >= optionLetters.length) return;
                         const letter = optionLetters[optIndex];
                         createReviewOption(reviewItem, letter, optionText, answer);
                    });
                }
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
        if (answerData.type === 'VF') optionP.classList.add('vf-option'); // Add class for potential VF specific styling

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
    // Ensure questions.js is loaded before starting
    if (typeof questions !== 'undefined') {
         startQuiz();
    } else {
         console.error("questions.js not loaded yet or 'questions' array is missing.");
         // Display an error message to the user
         questionText.textContent = "Erro ao carregar perguntas. Verifique se o arquivo questions.js está presente e correto.";
    }
});
