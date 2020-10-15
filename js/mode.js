let intMode = localStorage.getItem("mode");

// FOR THE MODE.HTML FILE
let radOne = document.querySelector('#rad1');
let radTwo = document.querySelector('#rad2');
let inputOne = document.querySelector('#ip1');
let inputTwo = document.querySelector('#ip2');
let loadBtn = document.querySelector('#load');
let closeBtn = document.querySelector('#close');

inputTwo.value = " ";
console.log(inputTwo.value);
inputTwo.oninput = () => {
    console.log(inputTwo.value);
}
    
loadBtn.onclick = () => {
    window.location.assign('quiz.html');
};
closeBtn.onclick = () => {
    window.location.assign('mode-landing-pg.html');
};



// PARAMETERS THAT WILL BE GOTTEN
// intMode - this is the mode that will be sent to the backend;
