//sidebar variables

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


function gotowhatsapp() {

  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var url = "https://wa.me/7042228596?text="
      + "Name: " + name + "%0a"
      + "Subject: " + subject + "%0a"
      + "Email: " + email + "%0a"
      + "Messsage: " + message;

  window.open(url, '_blank').focus();
}

