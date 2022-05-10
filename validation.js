$(document).ready(function () {
  //   $(".error").hide();
  $("#submit").click((e) => {
    e.preventDefault();
  });

  $("#submit").on("click", function () {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var regex = /^[A-Za-z]{3,16}$/;

    var isValid = regex.test(firstName);
    if (!isValid) {
      alert("please enter valid first Name");
      $(".firstName").text(
        "enter name must grater then 3 or less then 20 must have alfabets "
      );
      
      return false;
    }
    else{
        $(".firstName").text(
            " "
          );
    }
    var isValidlastName = regex.test(lastName);
    if (!isValidlastName) {
      alert("please enter valid data for last name");
      $(".lastName").text(
        "enter name must grater then 3 or less then 20 must have alfabets "
      );
      return false;
    }else{
        $(".lastName").text(
            " "
          );
    }

    var email=$("#email").val();
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var isvalidEmail= mailformat.test(email);
     if (!isvalidEmail) {
        alert("enter valid email");
        $(".email").text(
          "enter valid email "
        );
        return false;
      }else{
        $(".email").text(
            " "
          );
    }
      

      var Address = $("#Address").val();
      var AddressValid = /^[A-Za-z]{5,36}$/;
  
      var isValidAddressValid = AddressValid.test(Address);
      if (!isValidAddressValid) {
        alert("please enter valid Address");
        $(".Address").text(
          "enter valid Address "
        );
        return false;
      }else{
        $(".Address").text(
            " "
          );
    }

    var phoneNum = $("#phoneNumber").val();
    var regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
    var phone = phoneNum.match(regExp);
    if (!phone) {
        alert("please enter valid number ");
        $(".phoneNumber").text(
          "enter valid  phone Number "
        );
        return false;
    } else {
        $(".phoneNumber").text(
            " "
          );
    }
//     var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
//   var phone = phoneNum.match(regExp);
//   if (phone) {
//     alert('yes');
//     return true;
//   }
//   else{
//   alert('no');
//   return false;
// }
    
    

  });
});
