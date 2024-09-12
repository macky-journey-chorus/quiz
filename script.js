const questions = [
    {
        question: "Ubi caritas et amor",
        options: ["優しさと平和の場所", "友情と団結の場", "慈しみと愛のあるところ", "調和と理解の場"],
        answer: "慈しみと愛のあるところ"
    },
    {
        question: "Deus ibi est",
        options: ["神の恵みが溢れている", "神はここにいます", "神が全てを見守っている", "神の存在が感じられる"],
        answer: "神はここにいます"
    },
    {
        question: "Congregavit nos in unum Christi amor",
        options: ["キリストの愛が私たちを一つに集めた", "神の愛によって私たちは一つになった", "キリストの慈愛が私たちを導いた", "神の意志により私たちは集まった"],
        answer: "キリストの愛が私たちを一つに集めた"
    },
    {
        question: "Exsultemus et in ipso iucundemur",
        options: ["共に祝福を受けよう", "神の喜びを共に分かち合おう", "その中で喜びに満たされよう", "心からの笑顔を分かち合おう"],
        answer: "その中で喜びに満たされよう"
    },
    {
        question: "Timeamus et amemus Deum vivum",
        options: ["神の存在を恐れず、信じよう", "神を愛し、畏れよう", "生きている神を畏れ、愛そう", "神に感謝し、称えよう"],
        answer: "生きている神を畏れ、愛そう"
    },
    {
        question: "Et ex corde diligamus nos sincero",
        options: ["心を込めて真実に愛し合おう", "お互いに心を開いて話そう", "誠実に助け合い、支え合おう", "心から誠実に愛し合おう"],
        answer: "心から誠実に愛し合おう"
    },
    {
        question: "Simul ergo cum in unum, congregamur",
        options: ["集まり、共に強くなろう", "私たちは共に集まった", "皆で集い、一つになろう", "祈りのために集まろう"],
        answer: "皆で集い、一つになろう"
    },
    {
        question: "Ne nos mente dividamur, caveamus",
        options: ["心を分かたれないように気をつけよう", "争いを避け、共に歩もう", "私たちの心が離れないようにしよう", "お互いを大切にしよう"],
        answer: "心を分かたれないように気をつけよう"
    },
    {
        question: "Cessent jurgia maligna, cessent lites",
        options: ["悪しき争いをやめよう", "口論を避け、平和を求めよう", "争いごとをすべて終わらせよう", "怒りを捨て、調和を求めよう"],
        answer: "悪しき争いをやめよう"
    },
    {
        question: "Et in medio nostri sit, Christus Deus",
        options: ["神であるキリストは、私たちのただ中におられる", "神であるキリストが共に歩んでいる", "神であるキリストは私たちの真ん中にいる", "神であるキリストが我らを導く"],
        answer: "神であるキリストは、私たちのただ中におられる"
    },
    {
        question: "Simul quoque cum beatis, videamus",
        options: ["神の栄光を共に目にしよう", "聖人たちと共に見るだろう", "天国の光を目指そう", "神の御顔を共に見よう"],
        answer: "聖人たちと共に見るだろう"
    },
    {
        question: "Glorianter vultum tuum, Christe Deus",
        options: ["あなたの栄光の御顔を見つめよう", "キリストの栄光を讃えよう", "キリストの御顔を賛美しよう", "永遠にあなたの光を見上げよう"],
        answer: "あなたの栄光の御顔を見つめよう"
    },
    {
        question: "Gaudium quod est immensum, atque probum",
        options: ["計り知れない喜びと善", "無限の幸福と美徳", "果てしない楽しみと希望", "永遠の平和と真実"],
        answer: "計り知れない喜びと善"
    },
    {
        question: "Seacula per infinita, saeculorum",
        options: ["時代が永遠に続く", "永遠の栄光の中で", "時の果てまで続く", "限りなく続く未来"],
        answer: "時代が永遠に続く"
    },
    {
        question: "Amen",
        options: ["そうなりますように", "永遠に", "神に感謝", "真に"],
        answer: "そうなりますように"
    }
];

// クイズコンテナの取得
const quizContainer = document.getElementById('quiz-container');

// クイズの表示処理
questions.forEach((q, i) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionText = document.createElement('h3');
    questionText.textContent = `問題 ${i + 1}: ${q.question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    questionDiv.appendChild(resultDiv);

    // 選択肢をシャッフルして表示
    const shuffledOptions = q.options.sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            if (option === q.answer) {
                resultDiv.textContent = '正解！';
                resultDiv.style.color = '#28a745';
            } else {
                resultDiv.textContent = '不正解。再挑戦できます。';
                resultDiv.style.color = '#dc3545';
            }
        };
        optionsDiv.appendChild(button);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});
