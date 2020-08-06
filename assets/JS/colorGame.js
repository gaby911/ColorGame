
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var mesageDisplay = document.querySelector("#mesage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares =3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares =6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
});
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color 
    colorDisplay.textContent = pickedColor;
    this.textContent =" New Colors";
    mesageDisplay.textContent ="";
    //change the colors of the squares
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


for(var i=0; i<squares.length;i++){
    //add initial colors  to squared
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            mesageDisplay.textContent = "Corect!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor ="#232323";
            mesageDisplay.textContent="Try again!";
        }
    });
}

function changeColors(color){
    //loop through all the squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

//Math.random() will pick a number between 0 and 1
//Math.floor() will remove the decimals and make a round number
function pickColor(){
    var random = Math.floor(Math.random()*colors.length );
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    //add num random colors to array
    for(var i=0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array 
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random()*256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random()*256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}