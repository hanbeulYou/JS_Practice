const feelingForm = document.getElementById("feeling-form");
const feelingInput = document.querySelector("#feeling-form input");
const feelingList = document.getElementById("feelings__list");

const FEELING_KEY = 'feeling';

let feelings = [];

function saveFeelings(){
    localStorage.setItem(FEELING_KEY, JSON.stringify(feelings));
}

function downFeeling(event){
    const li = event.target.parentElement;
    feelings = feelings.filter(item => item.id == li.id);
    if(feelings[0].value > 0){
        feelings[0].value -= 10;
    }
    saveFeelings();
}

function upFeeling(event){
    const li = event.target.parentElement;
    feelings = feelings.filter(item => item.id == li.id);
    if(feelings[0].value < 100){
        feelings[0].value += 10;
    }
    saveFeelings();
}

function deleteFeeling(event){
    const li = event.target.parentElement;
    feelings = feelings.filter(item => item.id != li.id);
    li.remove();
    saveFeelings();
}

function postFeelings(newFeeling){
    const li = document.createElement("li");
    li.id = newFeeling.id;
    const span = document.createElement("span");
    const downButton = document.createElement("button");
    const upButton = document.createElement("button");
    const delButton = document.createElement("button");
    const feelingValue = document.createElement("progress");
    li.appendChild(span);
    li.appendChild(downButton);
    li.appendChild(feelingValue);
    li.appendChild(upButton);
    li.appendChild(delButton);
    feelingList.appendChild(li);
    span.innerText = newFeeling.text;
    downButton.innerText = "🔻";
    feelingValue.value = newFeeling.value;
    feelingValue.max = 100;
    upButton.innerText = "🔺";
    delButton.innerText = "❌";
    downButton.addEventListener("click", downFeeling);
    upButton.addEventListener("click", upFeeling);
    delButton.addEventListener("click", deleteFeeling);
}

function feelingSubmit(event){
    event.preventDefault();
    const newFeeling = feelingInput.value;
    feelingInput.value = "";
    const newFeelingObj = {
        text: newFeeling,
        value: 50,
        id: Date.now(),
    };
    feelings.push(newFeelingObj);
    postFeelings(newFeelingObj);
    saveFeelings();
}

function updateProgress(){

}

feelingForm.addEventListener("submit", feelingSubmit);

const savedFeelings = localStorage.getItem(FEELING_KEY);

// 얘를 그냥 거기에 넣어버릴까 save에
if(savedFeelings !== null){
    const parsedFeelings = JSON.parse(savedFeelings);
    feelings = parsedFeelings;
    parsedFeelings.forEach(postFeelings);
}