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
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
  if (name==null || name=="") {
    name.focus();
    return false;
  } 
  if (subject==null ||subject=="") {
    subject.focus();
    return false;
  }
  if (email==null || email=="") {
    email.focus();
    pattern = function (){
      function isEmail(email) { 
        return true;
      }
      return true;
  }
    
    return false;
  }
  if (message==null ||message=="") {
    message.focus();
    return false;
  }
  else {
    var url = "https://wa.me/9121058131?text="
      + "Name: " + name + "%0a"
      + "Subject: " + subject + "%0a"
      + "Email: " + email + "%0a"
      + "Messsage: " + message;

  window.open(url, '_blank').focus();
  }

}
