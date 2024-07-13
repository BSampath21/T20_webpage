function validateForm() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phonenum").value.trim();
  const teamName = document.getElementById("team").value;

  if (!name.match(/^[a-zA-Z ]+$/)) {
    alert("Name should contain only alphabets and spaces");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Enter a valid email address");
    return false;
  }

  if (!phone.match(/^\d{10}$/)) {
    alert("number should contain 10 digits");
    return false;
  }

  if (teamName === "") {
    alert("select a Team Name");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mail.test(email);
}

function toggleAdditionalFields() {
  var teamName = document.getElementById("team").value;
  var notificationFields = document.getElementById("conditionalFields");
  var t20Fields = document.getElementById("t20Fields");

  if (teamName.value !== "") {
      notificationFields.style.display = "block"; 
      t20Fields.style.display = "block";  
  } else {
      notificationFields.style.display = "none";  
      t20Fields.style.display = "none";  
  }
  document.getElementById("errorContainer").style.display = "none";
}

function resetForm() {
  document.getElementById("contact").reset(); 
  document.getElementById("notificationFields").style.display = "none";  
  document.getElementById("errorContainer").style.display = "none";
}

