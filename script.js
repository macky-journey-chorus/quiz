const questions = [
    {
        question: "Ubi caritas et amor",
        options: ["慈しみと愛のあるところ", "喜びと平和のあるところ", "正義と真実のあるところ", "信頼と友情のあるところ"],
        answer: "慈しみと愛のあるところ"
    },
    {
        question: "Deus ibi est",
        options: ["神はここにいます", "天使はそこにいます", "神の愛が満ちています", "神々が集まる場所"],
        answer: "神はここにいます"
    },
    // 他の問題もここに追加できます...
];

const quizContainer = document.getElementById('quiz-container');

questions.forEach((q, i) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionText = document.createElement('h3');
    questionText.textContent = `問題 ${i + 1}: ${q.question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            const result = document.createElement('div');
            result.className = 'result';
            if (option === q.answer) {
                result.textContent = '正解！';
                result.style.color = '#28a745';
            } else {
                result.textContent = `不正解。正解は「${q.answer}」です。`;
                result.style.color = '#dc3545';
            }
            questionDiv.appendChild(result);
            button.disabled = true;
            Array.from(optionsDiv.children).forEach(btn => btn.disabled = true);
        };
        optionsDiv.appendChild(button);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});
