//! This project has
// * local storage
// * jquery
// * bootstrap

const StartDate = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//jquery sandwich example
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("btn clicked");
    var userText = $(this).siblings(".description").val();
    console.log(userText);
    var hour = $(this).parent().attr("id");
    console.log(hour);
    localStorage.setItem(hour, userText);
    // const toDos = {
    //   text: userText,
    //   time: hour
    // }
    // localStorage.setItem(toDos);
  });
  $("#priority .description").val(localStorage.getItem("#priority"));
  $("#9am .description").val(localStorage.getItem("#9am"));
});
