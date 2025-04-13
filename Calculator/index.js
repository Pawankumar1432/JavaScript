 
    function calculate(operator) {
        // Get the values from the input fields
        // and convert them to numbers
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let result;
        // Perform the calculation based on the operator
        // and display the result if input is Validate input
        if (isNaN(num1) || isNaN(num2)) {
             alert("Please enter valid numbers!");
            return;
        } else {
          switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': if(num2!=0){
                       result = num1 / num2;
                      } else {
                            result = "Cannot divide by zero!";
                        } 
                    break;
            case '%': result = num1 % num2; break;
            default: result = "Unknown operator";
          }
        }
        
       // Display the result in the result div
       var res= document.getElementById('result')
       res.innerText = "Result: " + result;
       result=""
    }

 