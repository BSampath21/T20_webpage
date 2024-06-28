function validateForm() {
  const ame = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phonenum").value.trim();
  const teamName = document.getElementById("teamName").value;

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

function conditionalFields() {
  const teamName = document.getElementById("teamName");
  const notification = document.getElementById("flexCheck");
  const likeT20 = document.getElementById("flexRadio");

  if (teamName.value !== "") {
    notification.style.display = "block";
    likeT20.style.display = "block";
  } else {
    notification.style.display = "none";
    likeT20.style.display = "none";
  }
}
