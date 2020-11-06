function cekInput() {
    var inputText = document.getElementById("input");
    var checkButton = document.getElementById("btnCheck");

    if(inputText.value.length == 0 || inputText.value == null) {
        checkButton.disabled = true;
    }
    else {
        checkButton.disabled = false;
    }
}

function startGame() {
    var inputText = document.getElementById("input");
    var startButton = document.getElementById("btnStart");
    inputText.disabled = false;
    startButton.disabled = true;
}