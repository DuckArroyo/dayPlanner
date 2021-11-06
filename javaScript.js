const StartDate = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
const currentTime = $("#currentTime").text(moment().format("LT"));
//!Testing the Date.prototype
// let now2 = Date.now();
// console.log(now2);
// let hourNow = now2.getHours();
// console.log(hourNow);

const now = moment().hours();
//console.log(now);

//jquery sandwich example
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    //console.log("btn clicked");
    var userText = $(this).siblings(".description").val();
    //console.log(userText);
    var hour = $(this).parent().attr("id");
    //console.log(hour);
    localStorage.setItem(hour, userText);
  });

  $("#priority .description").val(localStorage.getItem("priority"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
  $("#19 .description").val(localStorage.getItem("19"));
  $("#20 .description").val(localStorage.getItem("20"));
  $("#21 .description").val(localStorage.getItem("21"));
  $("#22 .description").val(localStorage.getItem("22"));
  $("#23 .description").val(localStorage.getItem("23"));
  $("#24 .description").val(localStorage.getItem("24"));

  function colorCode() {
    $(".description").each(function () {
      const time = parseInt($(this).parent().attr("id"));
      if (time < now) {
        $(this).addClass("past");
      } else if (time === now) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (time != now) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
    });
  }
  colorCode();
});
