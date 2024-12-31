function func() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("Password").value;  

  if (username === "Entri Elevate" && password === "admin123") { 
      alert("Login Successfully!!! WELCOME");
      window.location.assign("Homepage.html");
  } else {
      alert("Invalid username or password");
  }
}

function forg() {
  let email = prompt("Enter the email");

  if (email === "EntriElevate") { 
      alert("Verification Code sent to your email");
  } else {
      alert("Invalid Email");
  }
}
