//! This project has
// * local storage
// * jquery
// * bootstrap

const StartDate = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
const now = moment().hours();

function colorCode() {
  $(".description").each(function () {
    const time = parseInt($(this).attr("id"));

    if (time < now) {
      $(this).addClass("past");
    } else if (time === now) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
colorCode();

//jquery sandwich example
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("btn clicked");
    var userText = $(this).siblings(".description").val();
    console.log(userText);
    var hour = $(this).parent().attr("id");
    console.log(hour);
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
});
