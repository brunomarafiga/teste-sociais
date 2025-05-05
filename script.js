// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const questionNumber = document.getElementById('question-number');
    const questionDiscipline = document.getElementById('question-discipline'); // Elemento para disciplina
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
    const presentationArea = document.getElementById('presentation-area'); // Nova área
    const startBtn = document.getElementById('start-btn'); // Novo botão

    // --- Configurações do Quiz ---
    // Assumindo que 'questions' já está carregado globalmente e corrigido (100 únicas)
    let totalQuizQuestions = 0; // Será definido em initQuiz

    // --- Estado do Quiz ---
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = []; // Será preenchido a partir do 'questions' global
    let userAnswers = []; // Guarda dados para revisão

    // --- Funções ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function initQuiz() {
         // Verifica se a variável global 'questions' existe e tem conteúdo
        if (typeof questions === 'undefined' || !Array.isArray(questions) || questions.length === 0) {
            console.error("Erro: A variável global 'questions' não foi encontrada, está vazia ou não é um array.");
            // Mostra erro na tela de apresentação ou em um local visível
            presentationArea.innerHTML = `<h2>Erro ao Carregar Perguntas</h2><p>Não foi possível encontrar os dados das perguntas. Verifique se o arquivo <code>questions.js</code> está na pasta correta, foi incluído no HTML antes de <code>script.js</code> e não contém erros de sintaxe.</p>`;
            presentationArea.classList.remove('hidden'); // Garante que a área de erro seja visível
            quizArea.classList.add('hidden');
            resultsArea.classList.add('hidden');
            reviewArea.classList.add('hidden');
            return; // Impede a continuação
        }

        // Se as perguntas existem, configura o quiz
        quizData = [...questions]; // Copia as perguntas globais
        totalQuizQuestions = quizData.length; // Define o total
        progressBar.max = totalQuizQuestions; // Define o max da barra

        // Configura a tela inicial
        presentationArea.classList.remove('hidden');
        quizArea.classList.add('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');

        // Adiciona listener ao botão de iniciar
        startBtn.addEventListener('click', startQuiz);
        // Adiciona listeners aos outros botões (faz sentido fazer aqui uma vez)
        nextBtn.addEventListener('click', handleNextQuestion);
        restartBtn.addEventListener('click', () => location.reload()); // Recarrega a página para resetar
        reviewBtn.addEventListener('click', showReview);
        backToResultsBtn.addEventListener('click', showResults);
        restartFromReviewBtn.addEventListener('click', () => location.reload()); // Recarrega a página
    }


    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        shuffleArray(quizData); // Embaralha as 100 perguntas para cada tentativa

        presentationArea.classList.add('hidden');
        quizArea.classList.remove('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');

        loadQuestion();
    }

    function loadQuestion() {
        nextBtn.disabled = true;
        optionsContainer.innerHTML = ''; // Limpa opções/afirmações anteriores

        // Remove lista de afirmações se existir (de questão AG anterior)
        const oldAffirmations = quizArea.querySelector('.affirmations-list');
         if (oldAffirmations) {
             oldAffirmations.remove();
         }

        if (currentQuestionIndex < totalQuizQuestions) {
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNum = currentQuestionIndex + 1;

            // Atualiza progresso
            progressText.textContent = `Questão ${questionNum} de ${totalQuizQuestions}`;
            progressBar.value = questionNum;

            // Exibe número, disciplina e texto da pergunta
            questionNumber.textContent = `Questão ${questionNum}`;
            questionDiscipline.textContent = `Disciplina: ${currentQuestion.disciplina || 'Desconhecida'}`; // Mostra a disciplina
            questionText.textContent = currentQuestion.pergunta;

            // --- Carrega opções ou afirmações baseado no tipo ---
             if (currentQuestion.tipo === 'AG') {
                 const affirmationsList = document.createElement('ol');
                 affirmationsList.classList.add('affirmations-list');
                 if (currentQuestion.afirmacoes && Array.isArray(currentQuestion.afirmacoes)) {
                     currentQuestion.afirmacoes.forEach(affirmation => {
                         const li = document.createElement('li');
                         li.textContent = affirmation;
                         affirmationsList.appendChild(li);
                     });
                     // Insere lista de afirmações *depois* do texto da pergunta
                     questionText.after(affirmationsList);
                 } else {
                     console.warn(`Questão ${questionNum} (ID: ${currentQuestion.id}) é AG mas falta 'afirmacoes'.`);
                 }
                 // Carrega opções A-E (MC/AG/VF usam a mesma lógica de opções agora)
                 createMcOptions(currentQuestion);

             } else { // MC e VF carregam opções da mesma forma
                 createMcOptions(currentQuestion);
             }


            // Atualiza texto do botão
            if (currentQuestionIndex === totalQuizQuestions - 1) {
                nextBtn.textContent = 'Ver Resultado';
            } else {
                nextBtn.textContent = 'Próxima Questão';
            }

        } else {
            showResults();
        }
    }

    function createMcOptions(question) {
        const optionLetters = 'ABCDE'; // Para MC e AG
        const radioName = `q${currentQuestionIndex}_options`;

        if (!question.opcoes || !Array.isArray(question.opcoes)) {
             console.error(`Erro: Questão ${currentQuestionIndex + 1} (ID: ${question.id}) não possui 'opcoes' válidas.`);
             optionsContainer.textContent = "Erro: Opções não encontradas para esta questão.";
             return;
        }

        question.opcoes.forEach((optionText, index) => {
            let valueLetter = '';
            // Determina a letra/valor da opção
            if (question.tipo === 'VF') {
                 // Para VF, o valor é a própria string da opção (ex: "V, V, F, F, V")
                 // mas o label visível deve ser A), B), etc.
                 if (index < optionLetters.length) {
                     valueLetter = optionLetters[index]; // O *valor* selecionado será A, B, C...
                 } else {
                     return; // Limita a 5 opções visuais mesmo para VF
                 }
            } else { // Para MC e AG, a letra é o valor e o índice corresponde
                 if (index < optionLetters.length) {
                     valueLetter = optionLetters[index];
                 } else {
                      return; // Limita a 5 opções
                 }
            }

            const optionId = `q${currentQuestionIndex}_opt${valueLetter}`; // ID usa a letra
            createRadioOption(valueLetter, `${valueLetter}) ${optionText}`, optionId, radioName); // Label visual inclui letra
        });
    }

    // Função auxiliar unificada para criar radio buttons
    function createRadioOption(value, labelText, optionId, radioName) {
        const div = document.createElement('div');
        div.classList.add('option-item'); // Classe para estilização se necessário

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optionId;
        input.name = radioName;
        input.value = value; // O valor é A, B, C, D ou E

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = labelText; // Texto do label (ex: "A) Texto da opção")

        input.addEventListener('change', () => {
            nextBtn.disabled = false;
        });

        div.appendChild(input);
        div.appendChild(label);
        optionsContainer.appendChild(div);
    }


    function handleNextQuestion() {
        const selectedOptionInput = optionsContainer.querySelector('input[type="radio"]:checked');
        if (!selectedOptionInput) return; // Não faz nada se nada foi selecionado

        const userAnswerValue = selectedOptionInput.value; // Será A, B, C, D ou E
        const currentQuestion = quizData[currentQuestionIndex];
        const correctAnswerLetter = currentQuestion.resposta.toUpperCase(); // Resposta correta (A, B, C, D ou E)

        const isCorrect = userAnswerValue === correctAnswerLetter;

        if (isCorrect) {
            score++;
        }

        // Prepara dados para revisão
        const answerData = {
            questionIndex: currentQuestionIndex,
            id: currentQuestion.id, // Guarda ID original
            type: currentQuestion.tipo,
            disciplina: currentQuestion.disciplina || 'Desconhecida',
            questionText: currentQuestion.pergunta,
            contexto: currentQuestion.contexto || '',
            options: currentQuestion.opcoes, // Guarda todas as opções
            userAnswer: userAnswerValue, // A letra que o usuário selecionou (A, B, C, D, E)
            correctAnswer: correctAnswerLetter, // A letra correta (A, B, C, D, E)
            isCorrect: isCorrect
        };

        // Adiciona afirmações se for tipo AG
        if (currentQuestion.tipo === 'AG') {
            answerData.affirmations = currentQuestion.afirmacoes;
        }

        userAnswers.push(answerData);

        // Vai para próxima questão ou resultados
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuizQuestions) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizArea.classList.add('hidden');
        resultsArea.classList.remove('hidden');
        reviewArea.classList.add('hidden');

        const percentage = totalQuizQuestions > 0 ? ((score / totalQuizQuestions) * 100).toFixed(1) : 0;

        scoreText.textContent = `Você acertou ${score} de ${totalQuizQuestions} questões.`;
        percentageText.textContent = `Sua pontuação: ${percentage}%`;

        // Determina nível (ajuste os limites conforme necessário)
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

        // Ordena as respostas pela ordem original em que apareceram no quiz atual
        userAnswers.sort((a, b) => a.questionIndex - b.questionIndex);

        userAnswers.forEach((answer, displayIndex) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const questionTitle = document.createElement('p');
            // Inclui disciplina e tipo na revisão
            questionTitle.innerHTML = `<strong>Questão ${displayIndex + 1} (${answer.disciplina} - ${answer.type}):</strong><br>${answer.questionText}`; // Quebra de linha para melhor leitura
            reviewItem.appendChild(questionTitle);

             // Adiciona contexto se existir
             if (answer.contexto) {
                 const contextP = document.createElement('p');
                 contextP.classList.add('review-context'); // Pode estilizar se quiser
                 contextP.innerHTML = `<em>Contexto: ${answer.contexto}</em>`;
                 reviewItem.appendChild(contextP);
             }


            // Adiciona afirmações se for AG
            if (answer.type === 'AG' && answer.affirmations && Array.isArray(answer.affirmations)) {
                const affirmationsList = document.createElement('ol');
                affirmationsList.classList.add('review-affirmations');
                answer.affirmations.forEach(affirmation => {
                    const li = document.createElement('li');
                    li.textContent = affirmation;
                    affirmationsList.appendChild(li);
                });
                reviewItem.appendChild(affirmationsList);
            }

            // Mostra todas as opções
            if (answer.options && Array.isArray(answer.options)) {
                 answer.options.forEach((optionText, optIndex) => {
                      if (optIndex >= optionLetters.length) return; // Limita a 5 opções
                      const letter = optionLetters[optIndex];
                      createReviewOption(reviewItem, letter, optionText, answer);
                 });
            } else {
                 const errorP = document.createElement('p');
                 errorP.textContent = "Erro: Opções desta questão não foram salvas para revisão.";
                 reviewItem.appendChild(errorP);
            }


            reviewContent.appendChild(reviewItem);
        });
    }

    // Função auxiliar para criar as opções na tela de revisão
    function createReviewOption(container, letter, text, answerData) {
        const optionP = document.createElement('div'); // Usar div para melhor controle
        optionP.classList.add('review-option');

        // Texto da opção formatado (ex: "A) Texto da opção")
        optionP.textContent = `${letter}) ${text}`;

        const isUserAnswer = (letter === answerData.userAnswer);
        const isCorrectAnswer = (letter === answerData.correctAnswer);

        if (isCorrectAnswer) {
            optionP.classList.add('correct');
        }

        if (isUserAnswer) {
             const indicator = document.createElement('span');
             indicator.classList.add('user-answer-indicator');
             indicator.textContent = ' (Sua Resposta)';
             optionP.appendChild(indicator); // Adiciona o indicador

            if (!answerData.isCorrect) {
                optionP.classList.add('incorrect', 'user-selected');
            } else {
                 optionP.classList.add('user-selected'); // Marca como selecionado mesmo se correto
            }
        }

        container.appendChild(optionP);
    }


    // --- Iniciar ---
    initQuiz(); // Chama a função inicializadora
});
