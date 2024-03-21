let buttons = document.querySelectorAll("button");
let userInput = document.getElementById("inputField");
let output = "";

const arrayOfButtons = Array.from(buttons);

arrayOfButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      output = "";
      userInput.value = output;
    } else if (e.target.innerHTML == "DEL") {
      output = output.substring(0, output.length - 1);
      userInput.value = output;
    } else if (e.target.innerHTML == "=") {
      output = eval(output);
      userInput.value = output;
    } else {
      output += e.target.innerHTML;
      userInput.value = output;
    }
  });
});