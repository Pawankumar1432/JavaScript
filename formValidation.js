function validateForm() {
    var isValid = true;
    var name1=/^[A-Za-z]+/
    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
  
    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    // Name validation
    if (name ==="" || !name.match(name1)) {
      document.getElementById("nameError").innerText = "Name is only text format";
      isValid = false;
    }
      
  
    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Enter a valid email address";
      isValid = false;
    }
  
    // Password validation
    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Password must be at least 8 characters";
      isValid = false;
    }
  
    return isValid;
  }