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

function validPassword(id) {
  var len = id.length;
  if (id == "") {
    document.getElementById("password-err").innerHTML =
      " <img src='../images/check/invalid.gif'class='i'/> Password Required";
  } else {
    if (!(len < 13 && len > 6)) {
      document.getElementById("password-err").innerHTML =
        " <img src='../images/check/invalid.gif' class='i'/> Wrong Password";
    } else {
      document.getElementById("password-err").innerHTML =
        " <img src='../images/check/valid.gif' class='i'/>";
      return 1;
    }
  }
  return 0;
}

function validate() {
  var status = false;

  const statusArr = [];
  var userId = document.frm.userId.value;
  var country = document.frm.country.value;
  var password = document.frm.password.value;

  statusArr[1] = validCountry(country);
  statusArr[2] = validId(userId);
  statusArr[3] = validPassword(password);

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
  if (validate()) {
    window.location.replace("dashboard.html");
  }
  return false;
}
