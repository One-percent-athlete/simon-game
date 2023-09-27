var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function () {
        if(!started) {

        $("h1").text("Level " + level);
        nextSequence();
        stared = true;

        };

});

$(".btn").click(function(){

        var userSelectedColor = $(this).attr('id');
        userClickedPattern.push(userSelectedColor);

        playSound(userSelectedColor);

        animateClick(userSelectedColor);

        checkAnwser(userClickedPattern.length - 1);

});

function checkAnwser (currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
                console.log("success");

                if (userClickedPattern.length === gamePattern.length) {
                        setTimeout(function () {
                                nextSequence();
                        }, 1000);
                }

        } else {
                console.log("wrong");
                $("body").addClass("game-over")
                setTimeout(function(){
                        $("body").removeClass("game-over");
                }, 200);
                var wrongSound = new Audio('sounds/wrong.mp3');
                wrongSound.play();
                $("h1").text("Game Over! Press Any Key to Start");
                startOver();

        }

}


function nextSequence() {

        userClickedPattern = [];

        level++;

        $("h1").text("Level " + level);

        randomNumber = Math.floor(Math.random() * 4);
        var randomChoosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChoosenColor);
        $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
       
}


function playSound(name){

        var sound = new Audio('sounds/' + name + '.mp3');
        sound.play();

};


function animateClick (color) {

        $("#" + color).addClass("pressed");
        setTimeout(function(){
                $("#" + color).removeClass("pressed");
        }, 100);

};

function startOver() {

        started = false;
        gamePattern = [];
        level = 0;

}