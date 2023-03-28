const startBtn = document.getElementById("start");
const outputNumEl = document.getElementById("numbers");
const timer = document.getElementById("timer");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");
const hideField = document.querySelector(".hide-field")


const numArr = ["1","2","3","4","5","6","7","8","9","0"]

let score = 0
let timerCounter = 10

function startGame(){
    startBtn.remove()
    randomNumbers()
}

function randomNumbers(){
    let fullNum = "";
    for(i=0;i<numArr.length;i++){
        fullNum += numArr[Math.floor(Math.random() * numArr.length)];
    }
    outputNumEl.textContent = fullNum
    setTimeout(()=>{
        let intervalId = setInterval(()=>{
            if(timerCounter === 1){
                clearInterval(intervalId);
                timerCounter = 11
            }
            timerCounter-=1
            timer.textContent = timerCounter
        },1000)
    })
    setTimeout(()=>{
        outputNumEl.textContent = ""
        hideField.classList.remove("hide-btn")
        timer.classList.add("hide-btn")
    }, 10000)
    

    function checkAnswerWrapper(){
        submitBtn.removeEventListener("click", checkAnswerWrapper);
        checkAnswer(fullNum)
    }
    submitBtn.addEventListener("click", checkAnswerWrapper)

}


function checkAnswer(answer){
    const input = document.getElementById("input");
    if(input.value === answer){
        alert("good")
        score+=1
    }else{
        alert("incorrect")
        score-=1
    }
    scoreEl.textContent = score
    input.value = ""
    submitBtn.classList.add("hide-btn")
    nextBtn.classList.add("display-btn")
    
    
}


function nextQuestion(){
    nextBtn.classList.remove("display-btn")
    submitBtn.classList.remove("hide-btn")
    hideField.classList.add("hide-btn")
    timer.classList.remove("hide-btn")
    randomNumbers()

}




startBtn.addEventListener("click", startGame)
nextBtn.addEventListener("click", nextQuestion)