//! This project has
// * local storage
// * jquery
// * bootstrap

const StartDate = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Storage
var saveToDo = function () {
  localStorage.setItem("toDo", JSON.stringify(tasks));
};

var loadToDo = function () {
  toDos = JSON.parse(localStorage.getItem("toDo"));
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!toDo) {
    toDo = [];
  }
};
