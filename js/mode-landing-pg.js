let intMode;

// FOR THE MODE-LANDING-BG.HTML PAGE
let modeSet1 = document.querySelector('.time-based-game');
let modeSet2 = document.querySelector('.no-based-game');


let goToTheProperty = (value) => {
    window.location.assign('mode.html');
    console.log('start');
    if(value === "time based Game") {
         console.log("1 is true");
    } else if(value === "question-no based Game") {
        console.log("2 is true");
    }
    intMode = value;
    console.log('sop');
}

modeSet1.onclick = () => {
     goToTheProperty("time based Game");
};
modeSet2.onclick = () => {
     goToTheProperty("question-no based Game");
};

