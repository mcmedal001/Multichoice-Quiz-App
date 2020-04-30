let interval;
        let score = 0;
        let scoreContainer = document.getElementById("score");

        let questions = [
            {
                question: "What is the capital of Denmark?",
                a: "Antananarivo",
                b: "Zagreb",
                c: "Utrecht",
                d: "Copenhagen",
                correct: "D"
            },
            {
                question: "What is the capital of Tanzania",
                a: "Malabo",
                b: "Dodoma",
                c: "Dar es Salaam",
                d: "Nouakchott",
                correct: "B"
            },
            {
                question: "What is the capital of Niger?",
                a: "Porto Novo",
                b: "Accra",
                c: "Ankara",
                d: "Niamey",
                correct: "D"
            },
            {
                question: "What is the capital of Turkey?",
                a: "Ankara",
                b: "Istanbul",
                c: "Antalya",
                d: "Jerusalem",
                correct: "A"
            },
            {
                question: "Where is the Executive capital of South Africa?",
                a: "Cape Town",
                b: "Pretoria",
                c: "Johannesburg",
                d: "Durban",
                correct: "B"
            },
            {
                question: "What is the capital of Hungary?",
                a: "Zagreb",
                b: "Budapest",
                c: "Bucharesti",
                d: "Tripoli",
                correct: "B"
            },
            {
                question: "What is the capital of Bulgaria?",
                a: "Manila",
                b: "Sofia",
                c: "Arkansas",
                d: "Berlin",
                correct: "B"
            },
            {
                question: "What is the capital of Nigeria?",
                a: "Lagos",
                b: "Abuja",
                c: "Ikire",
                d: "Ajebo",
                correct: "B"
            },
            {
                question: "What is the capital of Brazil?",
                a: "Buenos Aries",
                b: "Sao Paolo",
                c: "Rio de Janeiro",
                d: "Brasilia",
                correct: "D"
            },
            {
                question: "What is the capital of Croatia?",
                a: "Zagreb",
                b: "Belgrade",
                c: "Oslo",
                d: "Helsinki",
                correct: "A"
            },
            {
                question: "What is the capital of Finland?",
                a: "London",
                b: "Helsinki",
                c: "Quebec",
                d: "Slovakials",
                correct: "B"
            },
        ];

        let questions2 = [];

        for (let i in questions) {
            let randomIndex = Math.floor(Math.random() * questions.length);
            while(questions2.includes(questions[randomIndex])){
                randomIndex = Math.floor(Math.random() * questions.length);
            }
            questions2[i]  = questions[randomIndex];
        }

        const choiceA = document.getElementById("A");
        const choiceB = document.getElementById("B");
        const choiceC = document.getElementById("C");
        const choiceD = document.getElementById("D");
        let question = document.querySelector(".question");

        const lastQuestion = questions2.length - 1;
        let runningQuestion = 0;
        let count = 0;

        

        function displayQuestions() {
            this.countdownTimer()
            let singleQuestion = questions2[runningQuestion];
            question.innerHTML = "<p>"+ singleQuestion.question +"</p>";
            choiceA.innerHTML = singleQuestion.a;
            choiceB.innerHTML = singleQuestion.b;
            choiceC.innerHTML = singleQuestion.c;
            choiceD.innerHTML = singleQuestion.d;
        }  

        function checkAnswer(answer, clicked) {
            let correctAnswer = questions2[runningQuestion].correct;
            let answerPopup = document.querySelector(".answer-popup");
            
            if (clicked == correctAnswer) {
                answer.target.classList.remove("wrong");
                answer.target.classList.add("correct");
                answerPopup.classList.remove("answer-popup-wrong");
                answerPopup.classList.add("answer-popup-correct");
                answerPopup.innerHTML = "Correct";
                score = score+10;
                scoreContainer.innerHTML = score;                
            } else {
                answer.target.classList.add("wrong");
                answerPopup.classList.remove("answer-popup-right");
                answerPopup.classList.add("answer-popup-wrong");
                // choice.classList.add("wrong");
                answerPopup.innerHTML = "Wrong";
            }

            document.querySelector(".answer-popup").style.display = "flex";

            count = 0;
            if(runningQuestion < lastQuestion){
                runningQuestion++;
                } 

            setTimeout(()=>{
                document.querySelector(".answer-popup").style.display = "none";
                answer.target.classList.remove("correct");
                answer.target.classList.remove("wrong");

                if(runningQuestion == lastQuestion) {
                    let finalScoreModal = document.querySelector(".final-score");
                    let currentScore = document.querySelector(".current-score span");
                    finalScoreModal.style.display = "flex";
                    currentScore.textContent = score;
                    this.storeHighScore();
                    clearInterval(interval);

                } else {
                    this.displayQuestions();
                    this.countdownTimer();
                }


            }, 2500);
                            
        }

        function countdownTimer() {
            clearInterval(interval);
            let count = 15;
            interval = setInterval(function(){
                document.getElementById('timer').innerHTML=count + " secs left";
                count--;
                if (count < 0){
                    clearInterval(interval);
                    document.getElementById('timer').innerHTML='Time Up!';
                    alert("You didn't answer on time. Click OK to go to the next question.");
                    this.displayQuestions();                  
                }
            }
            , 1000);
        }
        
        
        let closeModal = document.getElementById("close-modal");

        function closeModalFn() {
            let finalScoreModal = document.querySelector(".final-score");
                finalScoreModal.style.display = "none";
        }
        
        closeModal.addEventListener('click', closeModalFn);

        
        function storeHighScore() {
            let savedHighScore = localStorage.getItem('highScore');

            if (score > savedHighScore) {
                localStorage.setItem('highScore', score);
                let displayedHighScore = document.querySelector(".high-score span");
                displayedHighScore.textContent = score;
            } else {
                localStorage.setItem('highScore', savedHighScore);
                let displayedHighScore = document.querySelector(".high-score span");
                displayedHighScore.textContent = savedHighScore;
            }

        }
        
        
       

        



        



         