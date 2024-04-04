
var timeRemain;
var score;
var action;
var playing = false;
document.getElementById("startreset").onclick = function () {
    // var y = document.getElementById("question");
    //
    if (playing == true) {
        location.reload();
        document.getElementById("startreset").innerHTML = "<button>Start Game</button>";
    }
    else {
        playing = true;
        timeRemain = 60;
        score = 0;
        document.getElementById("value").innerHTML = score;
        document.getElementById("remaining time").innerHTML = timeRemain;
        document.getElementById("startreset").innerHTML = "<button>Reset game</button> ";
        
        startCountDown();
        generateQA();
    }
}

    function startCountDown() {
        action = setInterval(function () {
            timeRemain -= 1;
            document.getElementById("remaining time").innerHTML = timeRemain;
            if (timeRemain == 0) {
                stopCountDown();
                show("game");
                document.getElementById("game").innerHTML = "<p> GAME OVER </p>" + "<p> Your score is :</p>" + score;
        
                hide("time");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";


            }
        }, 1000);
        
    }
    function stopCountDown() {
        clearInterval(action);
    }
    function show(id) {
        document.getElementById(id).style.display = "block";
    }
    function hide(id) {
        document.getElementById(id).style.display = "none";
}
function generateQA() {
    var x = document.getElementById("question");
    var a = 1 + (Math.round(Math.random() * 9));
    var b = 1 + (Math.round(Math.random() * 9));
    var correctAns = a * b;
    x.innerHTML = "<h1>" + a + " x " + b + "</b>";
    var ans = [correctAns];
    var option = 1 + (Math.round(Math.random() * 3));
    document.getElementById("box" + option).innerHTML = correctAns;
    for (i = 1; i < 5; i++) {
        var wrongAns;
        if (i != option) {
            wrongAns = (1 + (Math.round(Math.random() * 9))) * (1 + Math.round(Math.random() * 9));
            document.getElementById("box" + i).innerHTML = wrongAns;
            document.getElementById("box" + i).onclick = function () {
                show("wrong");
                setInterval(function () {
                    hide("wrong")
                }, 1000);
                generateQA();
            }
        }
    }
    document.getElementById("box" + option).onclick = function () {
        show("correct");
        setInterval(function () {
            hide("correct");
        }, 1000);
        score++;
        document.getElementById("score").innerHTML = score;
        generateQA();
    }
   
}
    
