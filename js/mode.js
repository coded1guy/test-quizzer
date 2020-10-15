let radOne = document.querySelector('#rad1');
let radTwo = document.querySelector('#rad2');
let inputOne = document.querySelector('#ip1');
let inputTwo = document.querySelector('#ip2');
let loadBtn = document.querySelector('#load');
let closeBtn = document.querySelector('#close');
let modeSet1 = document.querySelector('.time-based-game');
let modeSet2 = document.querySelector('.no-based-game');

// {
//     inputTwo.value = " ";
//     console.log(inputTwo.value);
//     inputTwo.oninput = () => {
//         console.log(inputTwo.value);
//     }
// }


let goToTheProperty = (value) => {
    window.location.assign('mode.html');
    console.log('start');
    if(value === "time based Game") {
        console.log("1 is true");
    } else if(value === "question-no based Game") {
        console.log("2 is true");
    }
    console.log('sop');
}

modeSet1.onclick = () => {
    goToTheProperty("time based Game");
};
modeSet2.onclick = () => {
    goToTheProperty("question-no based Game");
};


loadBtn.onclick = () => {
    window.location.assign('quiz.html');
};
closeBtn.onclick = () => {
    window.location.assign('mode-landing-pg.html');
};
