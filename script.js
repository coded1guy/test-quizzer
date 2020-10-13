let answer = [], result, cAns = [];
var i = 0, id = 1, resVal = 0;

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


let questions = [ 
    {question: "what did God create on the first day", options: [ "day and night", "stones", "book" ], answer: "day and night"}, 
    {question: "where was Jesus born", options: [ "guest house", "hotel", "manger" ], answer: "manger"},
    {question: "what verse is 'Jesus Wept' found in", options: [ "Hab. 1: 1", "John 11: 35", "Matt. 16: 20" ], answer: "John 11: 35"}, 
    {question: "how many Commandments were given to Moses on mount Sinai", options: [ "2", "10", "15" ], answer: "10"},
    {question: "who was the angel that appeared to Mary", options: [ "Angel Micheal", "Angel Gabriel", "Angel Micah" ], answer: "Angel Gabriel"}
];
{
    for (let j = 0; j < options.length; j++) { 
        let viewButton = options[j]; 
        viewButton.addEventListener('click', () => { 
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

let assignValues = () => {
    qPane.innerHTML = questions[i].question;
    ids.innerHTML = `Question ${i + 1}`;
    optOne.innerHTML = questions[i].options[0];
    optTwo.innerHTML = questions[i].options[1];
    optThree.innerHTML = questions[i].options[2];
    console.log(options[1].innerHTML);
}
let checkId = 0;
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
{
    prevBtn.style.display = "inline-block";
    prevBtn.disabled = true;
    finishBtn.style.display = "none";
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
    }
}
// const assignValues = () => {
    
// }aler
alert('bgg');
