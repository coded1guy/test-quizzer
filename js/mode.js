let modeSet = localStorage.getItem("mode"), details, playerType, categorytype;
let InpOneModSel = document.querySelector('#d-parameter');

let inputTemplate1 = `<legend for="ip1">SPECIFIC AMOUNT OF TIME</legend> <input type="text" id="ip1">`;
let inputTemplate2 = `<legend for="ip1">SPECIFIC NUMBER OF QUESTIONS</legend> <input type="text" id="ip1">`;

if(modeSet === "time based Game") {
    InpOneModSel.innerHTML = inputTemplate1;
} else if(modeSet === "question-no based Game") {
    InpOneModSel.innerHTML = inputTemplate2;
}


// FOR THE MODE.HTML FILE 

let radOne = document.querySelector('#rad1');
let radTwo = document.querySelector('#rad2');
let inputOne = document.querySelector('#ip1');
let inputTwo = document.querySelector('#ip2');
let loadBtn = document.querySelector('#load');
let closeBtn = document.querySelector('#close');

inputTwo.value = " ";
    
loadBtn.onclick = () => {
    if(modeType !== "" && detailInfo !== "" && playerType !== "" && categorytype !== "") {
        let modeData = { 
            modeType : modeSet, 
            detailInfo : details, 
            playerType : playerNo, 
            categorytype : category
        };
        let data = JSON.stringify(modeData);
        console.log(data);
    }
    //window.location.assign('quiz.html');
};
closeBtn.onclick = () => {
    window.location.assign('mode-landing-pg.html');
};

radOne.onchange = () => {
    details = "Single-player";
}
radTwo.onchange = () => {
    details = "multiple-players";
}

inputOne.oninput = () => {
    playerNo = inputOne.value;
}
inputTwo.oninput = () => {
    category = inputTwo.value;
}

// PARAMETERS THAT WILL BE GOTTEN
// intMode - this is the mode that will be sent to the backend;