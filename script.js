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

    // Adicione esta função após a função shuffleArray existente
    function selectQuestions(allQuestions) {
        // Separar questões por área
        const principalAreas = ['Antropologia', 'Ciencia Politica', 'Sociologia'];
        const principalQuestions = allQuestions.filter(q => principalAreas.includes(q.disciplina));
        const otherQuestions = allQuestions.filter(q => !principalAreas.includes(q.disciplina));

        // Embaralhar as questões de cada grupo
        const shuffledPrincipal = shuffleArray([...principalQuestions]);
        const shuffledOthers = shuffleArray([...otherQuestions]);

        // Selecionar 35 questões das áreas principais
        const selectedPrincipal = shuffledPrincipal.slice(0, 35);
        
        // Selecionar 15 questões das outras áreas
        const selectedOthers = shuffledOthers.slice(0, 15);

        // Combinar e embaralhar novamente
        return shuffleArray([...selectedPrincipal, ...selectedOthers]);
    }

    // Modifique a função initQuiz para usar a nova seleção
    function initQuiz() {
        if (typeof questions === 'undefined' || !Array.isArray(questions) || questions.length === 0) {
            console.error("Erro: A variável global 'questions' não foi encontrada, está vazia ou não é um array.");
            presentationArea.innerHTML = `<h2>Erro ao Carregar Perguntas</h2><p>Não foi possível encontrar os dados das perguntas. Verifique se o arquivo <code>questions.js</code> está na pasta correta, foi incluído no HTML antes de <code>script.js</code> e não contém erros de sintaxe.</p>`;
            presentationArea.classList.remove('hidden'); // Garante que a área de erro seja visível
            quizArea.classList.add('hidden');
            resultsArea.classList.add('hidden');
            reviewArea.classList.add('hidden');
            return; // Impede a continuação
        }

        // Seleciona 50 questões com a distribuição desejada
        quizData = selectQuestions(questions);
        totalQuizQuestions = quizData.length; // Agora será 50
        progressBar.max = totalQuizQuestions;

        // Resto do código permanece igual...
        presentationArea.classList.remove('hidden');
        quizArea.classList.add('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');

        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', handleNextQuestion);
        restartBtn.addEventListener('click', () => location.reload());
        reviewBtn.addEventListener('click', showReview);
        backToResultsBtn.addEventListener('click', showResults);
        restartFromReviewBtn.addEventListener('click', () => location.reload());
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
        optionsContainer.innerHTML = ''; // Limpa opções

        // Remove lista de afirmações/statements se existir (de questão AG/VF anterior)
        const oldList = quizArea.querySelector('.statements-list'); // Usar classe genérica
        if (oldList) {
            oldList.remove();
        }

        if (currentQuestionIndex < totalQuizQuestions) {
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNum = currentQuestionIndex + 1;

            // Atualiza progresso
            progressText.textContent = `Questão ${questionNum} de ${totalQuizQuestions}`;
            progressBar.value = questionNum;

            // Exibe número, disciplina e texto da pergunta (instrução)
            questionNumber.textContent = `Questão ${questionNum}`;
            questionDiscipline.textContent = `Disciplina: ${currentQuestion.disciplina || 'Desconhecida'}`;
            questionText.textContent = currentQuestion.pergunta;

            // --- Cria lista de afirmações/statements para AG ou VF ---
            let statementsArray = null;
            if (currentQuestion.tipo === 'AG' && currentQuestion.afirmacoes) {
                statementsArray = currentQuestion.afirmacoes;
            } else if (currentQuestion.tipo === 'VF' && currentQuestion.vfStatements) { // Verifica o novo campo
                statementsArray = currentQuestion.vfStatements;
            }

            if (statementsArray && Array.isArray(statementsArray)) {
                const statementsList = document.createElement('ol');
                statementsList.classList.add('statements-list'); // Classe genérica
                statementsList.setAttribute('start', 'I'); // Inicia com I (CSS fará ser Roman)
                statementsArray.forEach((statement) => {
                    const li = document.createElement('li');
                    li.textContent = statement; // O texto já está limpo no JS
                    statementsList.appendChild(li);
                });
                // Insere lista *depois* do texto da pergunta
                questionText.after(statementsList);
            } else if (currentQuestion.tipo === 'AG' || currentQuestion.tipo === 'VF') {
                console.warn(`Questão ${questionNum} (ID: ${currentQuestion.id}) é ${currentQuestion.tipo} mas falta array de afirmações/statements.`);
                // Opcional: Inserir uma mensagem de erro onde a lista deveria estar
            }

            // Carrega opções A-E (funciona para MC, AG e VF agora)
            createMcOptions(currentQuestion);

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

        // Adiciona afirmações específicas para AG e VF
        if (currentQuestion.tipo === 'AG') {
            answerData.statements = currentQuestion.afirmacoes; // Usar nome genérico 'statements'
        } else if (currentQuestion.tipo === 'VF') {
            answerData.statements = currentQuestion.vfStatements; // Usar nome genérico 'statements'
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


            // Adiciona lista de afirmações/statements se for AG ou VF
            if ((answer.type === 'AG' || answer.type === 'VF') && answer.statements && Array.isArray(answer.statements)) {
                const statementsList = document.createElement('ol');
                statementsList.classList.add('review-statements'); // Classe genérica
                statementsList.setAttribute('start', 'I');
                answer.statements.forEach(statement => {
                    const li = document.createElement('li');
                    li.textContent = statement;
                    statementsList.appendChild(li);
                });
                reviewItem.appendChild(statementsList);
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

    // Função auxiliar para criar as opções na tela de revisão (ajustada)
    function createReviewOption(container, letter, optionText, answerData) {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('review-option');

        // Texto da opção formatado (ex: "A) V, V, F, F, V")
        optionDiv.textContent = `${letter}) ${optionText}`;

        const isUserAnswer = (letter === answerData.userAnswer);
        const isCorrectAnswer = (letter === answerData.correctAnswer);

        if (isCorrectAnswer) {
            optionDiv.classList.add('correct');
        }

        if (isUserAnswer) {
            const indicator = document.createElement('span');
            indicator.classList.add('user-answer-indicator');
            indicator.textContent = ' (Sua Resposta)';
            optionDiv.appendChild(indicator);

            if (!answerData.isCorrect) {
                optionDiv.classList.add('incorrect', 'user-selected');
            } else {
                optionDiv.classList.add('user-selected');
            }
        }

        container.appendChild(optionDiv);
    }

    // --- Iniciar ---
    initQuiz(); // Chama a função inicializadora
});
