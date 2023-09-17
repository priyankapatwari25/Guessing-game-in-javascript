let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;

document.getElementById("submit").onclick = function () 
{
    let x = document.getElementById("guess").value;

    if (x == y) 
    {
        alert("Congratulations!!! You guessed correctly in "  + guess +  " attempts ");
    }

    else if (x > y) 
    {
        guess++;
        alert("Sorry!! Guess a smaller number");
    }

    else 
    {
        guess++;
        alert("Sorry!! Guess a greater number");
    }

}
