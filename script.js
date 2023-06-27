const display = document.getElementById("display");
const buttons = document.getElementById("buttons");



buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (target.innerHTML === "C") {
    display.value = "";
  }
  else if (target.classList.contains("number")) {
    display.value += target.innerHTML;
  } 
  else if (target.classList.contains("operator")) {
    let lastchar = display.value[display.value.length - 1];
    const operatorArray = ["+", "-", "*", "/", "^", "%", "."];
    if (operatorArray.includes(lastchar)) {
      display.value = display.value.slice(0, -1) + target.innerHTML;
    }
    else { 
      display.value += target.innerHTML;
    }
  }
  else if (target.innerHTML === "=") {
    if (display.value.length !== 0) {
      // handling unexpected errors;
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax error";
      }
    }
    else {
      display.value = "";
    }
  }
  

});

const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%" || event.key === "^" || event.key === ".") {
    let lastchar = display.value[display.value.length - 1];
    const operatorArray = ["+", "-", "*", "/", "^", "%", "."];
    if (operatorArray.includes(lastchar)) {
      display.value = display.value.slice(0, -1) + event.key;
   }
    else {
      display.value += event.key;
    }
  }
else if (/^\d$/.test(event.key)) {
  display.value += event.key;
}
  
});

document.addEventListener("keydown",(event) => {
  if(event.key === "=" || event.key === "Enter"){
    if(display.value.length !== 0) {
      try {
        display.value = eval(display.value);
      } catch (error){
        display.value = "Syntax Error";
      } 
    } else {
      display.value = "";
    }
  }
});

document.addEventListener("keydown",(event) => {
  if(event.key === "clear" || event.key === "Delete"){
    display.value="";
    
  }
});



























// Check if the pressed key is a number or an operator
// if (/[0-9+\-*/]/.test(key)) {
//   resultInput.value += key;
// }
