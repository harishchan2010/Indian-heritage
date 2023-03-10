function validateForm() {
    var x = document.forms["myForm"]["FN"]["LN"]["EMAIL"]["Google default browser"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  