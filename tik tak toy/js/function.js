var player1;
var player2;
var turn = 1;
var main = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var p1 = [];
var p2 = [];
$(document).ready(function () {
  $("#details").hide();
  $("#GamePlateForm").hide();
  $("#start").on("click", function () {
    $("#start").hide();

    $("#details").show();
  });
  $("#startGame").on("click", function () {
    player1 = $("#player1").val();
    player2 = $("#player2").val();
    console.log(player1);
    console.log(player2);
    $("#details").hide();
    $("#GamePlateForm").show();
    $(".step").css({
      width: "90%",
      height: "50px",
      "background-color": "red",
      margin: "2px",
    });
    $(".turn")
      .text("turn  player is  " + player1)
      .css("color", "red");
  });
  $(".step").click(function () {
    if (turn % 2 == 1) {
      var r = this.id;
      p1.push(r);
      $(".turn").text(player1).css("color", "green");
      $(this).html("0").css("background-color", "green");
    } else {
      var r = this.id;
      p2.push(r);
      $(".turn").text(player2).css("color", "blue");
      $(this).html("X").css("background-color", "blue");
    }
    console.log("main " + main);
    console.log("p1 " + p1);
    console.log("p2 " + p2);
    turn++;
    result();
  });
  function result() {
    if (p1.length > 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < main.length; j++) {
          if (main[i][j] == p1[j]) {
           alert("player one wines");
          }
        }
      }
    }
    else if(p2.lenth>3){
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < main.length; j++) {
          if (main[i][j] == p2[j]) {
            alert("player two wines");
          }
        }
      }
    }
    else if(p1.lenth>4 ){
      console.log("draw match");
    }
  }
});
