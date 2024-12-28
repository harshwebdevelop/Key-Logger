const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startbtn.disabled = true;
    stopbtn.disabled = false;
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    logDiv.textContent = "";
    stateDiv.textContent = " ";
    startbtn.disabled = false;
    stopbtn.disabled = true;
})

function handledown(e) {
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent = "key is down";
}

function handleup(e) {
    logDiv.textContent = `key ${e.key} pressed up`;
    stateDiv.textContent = "key is up";
}