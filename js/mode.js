let modeSet = "bi", details, playerType, categorytype;
// FOR THE MODE.HTML FILE localStorage.getItem("mode")

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