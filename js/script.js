
function validName(name) {
   var string = /^[a-zA-Z ]+$/;

   if (name == "") {
      document.getElementById("name-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Name Required";
   } else {
      if (string.test(name) == false) {
         document.getElementById("name-err").innerHTML =
            " <img src='../images/check/invalid.gif'class='i'/> Alphabate text only";
      } else {
         document.getElementById("name-err").innerHTML =
            " <img src='../images/check/valid.gif' class='i'/>";
         return 1;
      }
   }
   return 0;
}

function validId(id) {
   var len = id.length;
   if (id == "") {
      document.getElementById("userid-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> UserID Required";
   } else {
      if (!(len < 13 && len > 4)) {
         document.getElementById("userid-err").innerHTML =
            " <img src='../images/check/invalid.gif' class='i'/> UserID must be length of 5 to 12";
      } else {
         document.getElementById("userid-err").innerHTML =
            " <img src='../images/check/valid.gif' class='i'/>";
         return 1;
      }
   }
   return 0;
}

function validEmail(id) {
   var string = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var len = id.length;
   if (id == "") {
      document.getElementById("email-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Email Required";
   } else {
      if (string.test(id) == false) {
         document.getElementById("email-err").innerHTML =
            " <img src='../images/check/invalid.gif'class='i'/> Invalid Email";
      } else {
         document.getElementById("email-err").innerHTML =
            " <img src='../images/check/valid.gif' class='i'/>";
         return 1;
      }
   }
   return 0;
}

function validGender(gen) {
   if (!(gen[0].checked || gen[1].checked)) {
      document.getElementById("gender-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Gender Required";
      return 0;
   } else {
      document.getElementById("gender-err").innerHTML =
         " <img src='../images/check/valid.gif' class='i'/>";
      return 1;
   }
}

function validCountry(country) {
   if (country == "none") {
      document.getElementById("country-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Country Required";
      return 0;
   } else {
      document.getElementById("country-err").innerHTML =
         " <img src='../images/check/valid.gif' class='i'/>";
      return 1;
   }
}

function validPassword(id) {
   var len = id.length;
   if (id == "") {
      document.getElementById("password-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Password Required";
   } else {
      if (!(len < 13 && len > 6)) {
         document.getElementById("password-err").innerHTML =
            " <img src='../images/check/invalid.gif' class='i'/> Password must be length of 7 to 12";
      } else {
         document.getElementById("password-err").innerHTML =
            " <img src='../images/check/valid.gif' class='i'/>";
         return 1;
      }
   }
   return 0;
}

function conPassword(id, pass, passvalid) {
   var len = id.length;
   if (passvalid) {
      if (id == "") {
         document.getElementById("conPassword-err").innerHTML =
            " <img src='../images/check/invalid.gif'class='i'/> Confirm Password Required";
      } else {
         if (!(pass === id)) {
            document.getElementById("conPassword-err").innerHTML =
               " <img src='../images/check/invalid.gif' class='i'/> Password Does not match!";
         } else {
            document.getElementById("conPassword-err").innerHTML =
               " <img src='../images/check/valid.gif' class='i'/>";
            return 1;
         }
      }
   }
   return 0;
}


function validLanguage(lan) {

// console.log(lan[0].value + ' ');
   if (!(lan[0] || lan[1])){
      document.getElementById("language-err").innerHTML =
         " <img src='../images/check/invalid.gif'class='i'/> Language Required";
      return 0;
   } else {
      document.getElementById("language-err").innerHTML =
         " <img src='../images/check/valid.gif' class='i'/>";
      return 1;
   }
}

function validate() {
   var status = false;

   const statusArr = [];
   var name = document.frm.name.value;
   var userId = document.frm.userId.value;
   var email = document.frm.email.value;
   var gender = document.frm.gender;
   var country = document.frm.country.value;
   var password = document.frm.password.value;
   var confirmPassword = document.frm.confirmPassword.value;
   var language =document.querySelectorAll('input[type="checkbox"]:checked');

   // var markedCheckbox = document.getElementsByName('lan');
  
   

   // var language= document.querySelector('input[name="del[]"]:checked');

   statusArr[0] = validName(name);
   statusArr[1] = validId(userId);
   statusArr[2] = validEmail(email);
   statusArr[3] = validGender(gender);
   statusArr[4] = validCountry(country);
   statusArr[5] = validPassword(password);
   statusArr[6] = conPassword(confirmPassword, password, statusArr[5]);
   statusArr[7] = validLanguage(language);

   for (let i = 0; i < statusArr.length; i++) {
      if (statusArr[i] == 0) {
         status = false;
         break;
      }
      status = true;
   }

   return status;
}

function redirect() {
   if(validate()){
      window.location.replace("dashboard.html");
      // window.location.replace("https://www.w3schools.com");
      // return true;
   }
   return false;
}
