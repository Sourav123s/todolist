"use strict";
// console.log("sourav");

const map = [{}];

let arr = [];
let input;
var id = [];
var del = [];
// //////////////////////////////////////////
// /////////SELECTION DOM
const lableinputForm = document.querySelector(".form-control");
const lableItem = document.querySelector(".movements__type movements__task");

const containerTask = document.querySelector(".movements");

const btnSubmit = document.querySelector(".btn");
const btnDelete = document.querySelector(".btn-delete");

let taskID = document.getElementById("task0");
// ////////////////////////////////
// SUBMIT BUTTION
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  input = lableinputForm.value;
  // console.log(input);
  arr.push(input);
  console.log(arr);

  lableinputForm.value = "";
  updateUI(arr);
});

// ////////////////////////////
// delete button
// btnDelete.addEventListener("click", function (e) {
//   e.preventDefault();
//   const idx = +arr.indexOf(lableItem.value);
//   const id = document.getElementById(`task${idx + 1}`);

//   console.log(idx);
// });

// updateUI

const updateUI = function (arr) {
  containerTask.innerHTML = "";
  arr.forEach((item, i) => {
    id[i] = `${taskID}`;
    del[i] = `${btnDelete}`;
    const html = `   <div class="movements__row">
    <div class="movements__type movements__task"id="${id[i]}" >
      ${i + 1}:${item}
      <button class="${del[i]}">Delete</button>
    </div>
  </div>`;

    containerTask.style.opacity = 100;
    containerTask.insertAdjacentHTML("beforeend", html);
  });
  console.log(id);
  del.forEach(function (item, i) {
    item.addEventListener("click", deleteItem(arr, i));
  });
  // id.forEach(function (item) {
  //   btnDelete.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     console.log("hi");
  //   });
  // });
};
const deleteItem = function (arr, i) {
  arr.splice(i, 1);
  return arr;
};

arr.forEach(function (item, i) {
  console.log(item, i);
});

console.log(id);
var close = document.getElementsByClassName("btn-delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
console.log(close);
