// INITIALIZING VARIABLES
let answer = [], cAns = [], result, ans;
var i = 0, id = 1, resVal = 0;

// DECLARING DOM ELEMENTS
let ids = document.querySelector('#ids');
let qPane = document.querySelector('#q-pane');
let options = document.querySelectorAll('.opt');
let opCnt = document.querySelectorAll('.option');
let optOne = document.querySelector('.option-one');
let optTwo = document.querySelector('.option-two');
let optThree = document.querySelector('.option-three');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.nxt');
let skipBtn = document.querySelector('.skip');
let finishBtn = document.querySelector('.finish');
let refreshBtn = document.querySelector('.refresh');

// BIG ARRAY OF DATA NEEDED FOR A SESSION
let questions = [ 
    {question: "what did God create on the first day", options: [ "day and night", "stones", "book" ], answer: "day and night"}, 
    {question: "where was Jesus born", options: [ "guest house", "hotel", "manger" ], answer: "manger"},
    {question: "what verse is 'Jesus Wept' found in", options: [ "Hab. 1: 1", "John 11: 35", "Matt. 16: 20" ], answer: "John 11: 35"}, 
    {question: "how many Commandments were given to Moses on mount Sinai", options: [ "2", "10", "15" ], answer: "10"},
    {question: "who was the angel that appeared to Mary", options: [ "Angel Micheal", "Angel Gabriel", "Angel Micah" ], answer: "Angel Gabriel"}
];

// GETTING THE OPTIONS VALUE
{
    // FUNCTION
    let optionButtonStyle = () => {
        opCnt[0].onclick = () => {
            opCnt[0].style.background = " rgb(206, 206, 136)";
            opCnt[1].style.background = "#f5f5dc";
            opCnt[2].style.background = "#f5f5dc";
        }
        opCnt[1].onclick = () => {
            opCnt[1].style.background = " rgb(206, 206, 136)";
            opCnt[0].style.background = "#f5f5dc";
            opCnt[2].style.background = "#f5f5dc";
        }
        opCnt[2].onclick = () => {
            opCnt[2].style.background = " rgb(206, 206, 136)";
            opCnt[0].style.background = "#f5f5dc";
            opCnt[1].style.background = "#f5f5dc";
        }
    }

    // LOOP
    for (let j = 0; j < options.length; j++) { 
        let viewButton = options[j]; 
        viewButton.addEventListener('click', () => { 
            optionButtonStyle();
            optionChosen = options[j].innerHTML;
        }); 
    }
    for (let j = 0; j < opCnt.length; j++) { 
        let pushBtn = opCnt[j]; 
        pushBtn.addEventListener('click', () => { 
            //pushBtn.style.background = "beige";
            options[j].click();
        }); 
    }
}

{
    let validateButtonStyle = () => {
        if(opCnt[0].innerHTML === ans) {
            opCnt[0].style.background = "rgb(17, 163, 29)";
            opCnt[1].style.background = "#f5f5dc";
            opCnt[2].style.background = "#f5f5dc";
        } else if(opCnt[1].innerHTML === ans) {
            opCnt[1].style.background = "rgb(17, 163, 29)";
            opCnt[0].style.background = "#f5f5dc";
            opCnt[2].style.background = "#f5f5dc";
        } else if(opCnt[2].innerHTML === ans) {
            opCnt[2].style.background = "rgb(17, 163, 29)";
            opCnt[0].style.background = "#f5f5dc";
            opCnt[1].style.background = "#f5f5dc";
        }
    }
}

// FUNCTION TO PASS IN THE DATA FROM THE BIG ARRAY TO THEIR RESPECTIVE DATA FIELD
let assignValues = () => {
    qPane.innerHTML = questions[i].question;
    ids.innerHTML = `Question ${i + 1}`;
    optOne.innerHTML = questions[i].options[0];
    optTwo.innerHTML = questions[i].options[1];
    optThree.innerHTML = questions[i].options[2];
    console.log(options[1].innerHTML);
}
let checkId = 0;

// FUNCTION FOR THE SCOREBOARD
let checkAnswer = () => {
    answer[checkId] = optionChosen;
    cAns[checkId] = questions[checkId].answer;
    console.log(answer);
    console.log(cAns);
    console.log(checkId);
    checkId++;
}
let getResult = () => {
    for(let a= 0; a< answer.length; a++) {
        console.log(answer[a]);
        console.log(cAns[a]);
        if(answer[a] === cAns[a]) {
            resVal ++;
            console.log(resVal);
        }

    }
    alert(`you got ${resVal} right`);
}

// ALL BUTTON EVENT LISTENERS
{
    prevBtn.style.display = "inline-block";
    prevBtn.disabled = true;
    finishBtn.style.display = "none";
    refreshBtn.style.display = "none";
    assignValues();
    
    nextBtn.onclick = () => {
        i++;
        prevBtn.disabled = false;
        if(i >= questions.length - 1) {
            nextBtn.style.display = "none";
            finishBtn.style.display = "inline-block";
            skipBtn.disabled = true;
        }
        assignValues();
        checkAnswer();
    }
    
    prevBtn.onclick = () => {
        i--;
        skipBtn.disabled = false;
        finishBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
        if(i === 0) {
            prevBtn.disabled = true;
        }
        assignValues();
    }
    
    skipBtn.onclick = () => {
        i++;
        prevBtn.disabled = false;
        prevBtn.style.display = "inline-block";
        if(i >= questions.length - 1) {
            nextBtn.style.display = "none";
            finishBtn.style.display = "inline-block";
            skipBtn.disabled = true;
        }
        assignValues();
    }
    finishBtn.onclick = () => {
        checkAnswer();
        setTimeout (getResult(), 5000);
        finishBtn.style.display = "none";
        prevBtn.style.display = "none";
        skipBtn.style.display = "none";
        refreshBtn.style.display = "inline-block";
    }
    refreshBtn.onclick = () => {
        window.location.replace('index.html');
    }
}





// {
//     let bigD = [
//         {"id":35,"category":"w","question":"Abraham has how many wives.","answer":"2 - Sarah & Keturah",
//         "reference":"Gen.12:5, 25:1","option1":"2","option2":"3","option3":"1"},{"id":49,"category":"w",
//         "question":"How old was Ishmael when Isaac was born?","answer":"14 years","reference":" Gen. 16:16, 21:5",
//         "option1":"14 years","option2":"13 years","option3":"15 years"},
//         {"id":14,"category":"w","question":"He served as human guide to the Israelite on their journey from mount Sinai toward Canaan",
//         "answer":"Hobab","reference":"Num.10:29-33","option1":"Levi","option2":"Hobab","option3":"Joshua"},
//         {"id":21,"category":"w","question":"What is it that is common to the life of Jesus, Jonah & Paul?",
//         "answer":"3 days","reference":" Jesus: Matt. 12:40 Jonah: Jonah 1:17 Paul: Act 9:9","option1":"4 hours",
//         "option2":"3 days","option3":"3 minutes"},
//         {"id":7,"category":"w","question":"Deborah judged Israel for how many years?","answer":"40years",
//         "reference":" Judges 5:31","option1":"30 years","option2":"40 years","option3":"35 years"},
//         {"id":28,"category":"w","question":"Paul wrote how many Epistles? ","answer":"13","reference":"","option1":"11",
//         "option2":"13","option3":"14"},
//         {"id":42,"category":"w","question":"Recite Proverbs 4 : 23",
//         "answer":"Keep thy heart with all diligence;\nFor out of it?are?the issues of life.","reference":"Proverbs 4:23",
//         "option1":"","option2":"","option3":""}
//     ]

//     console.log(bigD[0]);
//     console.log(bigD[0].id);
// }