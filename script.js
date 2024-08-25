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
    {
        question: "Congregavit nos in unum Christi amor",
        options: ["キリストの愛が私たちを一つに集めた", "神の慈悲が私たちを守っている", "キリストの力が私たちを救った", "天の父が私たちを見守っている"],
        answer: "キリストの愛が私たちを一つに集めた"
    },
    {
        question: "Exsultemus et in ipso iucundemur",
        options: ["その中で喜びに満たされよう", "一緒に笑顔になろう", "愛の中で楽しもう", "互いに祝福しよう"],
        answer: "その中で喜びに満たされよう"
    },
    {
        question: "Timeamus et amemus Deum vivum",
        options: ["生きている神を畏れ、愛そう", "永遠の神に祈りを捧げよう", "生ける神を称えよう", "神の存在を信じよう"],
        answer: "生きている神を畏れ、愛そう"
    },
    {
        question: "Et ex corde diligamus nos sincero",
        options: ["心から誠実に愛し合おう", "互いを尊重し、理解しよう", "誠実に真心を込めて接しよう", "互いに思いやりを持とう"],
        answer: "心から誠実に愛し合おう"
    }
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
