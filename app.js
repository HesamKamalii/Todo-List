const $ = document;
let divPElem = $.querySelector("pElem-div");
let pElem = $.querySelector(".PElem");
let pDiv = $.querySelector(".p-div");
let starDiv = $.querySelector(".star-div");
let checkboxElem = $.querySelector(".checkedbox");
let starOff = $.querySelector(".star-off");
let starOn = $.querySelector(".star-on");
let starSpan = $.querySelector("#star-span");
let AddTaskBtn = $.querySelector("#Add-Task-Btn");
let taskSection = $.querySelector(".task-section");
let singleTask = $.querySelector(".single-task");
let partOfSideSection = $.querySelectorAll(".sidetop");
let PlusFolderIcon = $.querySelector(".fa-plus");
let multiplication = $.querySelector(".fa-xmark");
let form = $.querySelector("form");
let formInput = $.querySelector("#project-name");
let submit = $.querySelector("#submit");
let inboxSection = $.querySelector(".inbox-section");
let sidebarSubBottom = $.querySelector(".sidebar-subbottom");
let project = $.querySelector(".project");
let newProjaect = $.querySelector(".new-projaect");

const todo = [
  {
    id: length + 1, // number
    pSection: "loremloremloremloremlorem", // string
    isWrap: 0, // string
    isStarOff: true,
  },
];

///////////////////////// checkbox //////////////////////

function changeCheckBox(event) {
  let getEvent = event.target.parentNode.parentNode.parentNode;
  getEvent.classList.toggle("strike-through");

  console.log(getEvent);
  // console.log("checked");
}

////////////////////// toggle p Elem /////////////////

function togglePElem(event) {
  let foundEvent = event.target;

  if (event.target.innerText.length < 85) {
    event.preventDefault();
  } else {
    foundEvent.classList.toggle("PElem");
  }

  // console.log(event.target.innerText.length);

  // foundEvent.classList.remove("PElem")

  console.log("p clicked");
  console.log(foundEvent);
}

//////////////////// star ////////////////////

function changeBtnValue(event) {
  // starOff.classList.toggle('star-on')
  console.log(event.target);
  event.target.classList.toggle("fa-solid");

  console.log("starclicked");
}

/////////////////////////////add task /////////////////////

function addNewToDo() {
  console.log("clicked");
  let openPrompt = prompt("enter your task");
  // let newPElem = document.createElement('p')
  // newPElem.innerHTML = openPrompt
  let valuePrompt = openPrompt;
  if (openPrompt === "") {
    alert(" please write a task ");
  } else {
    const newTodo = {
      id: todo.length + 1, // number
      pSection: valuePrompt, // string
      isWrap: 0, // string
      isStarOn: false,
      isCheckBoxoff: true,
    };
    todo.push(newTodo);
    console.log(todo);
    taskSection.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="single-task">
           <div>
              <label class="container"  onchange = "changeCheckBox(event)">
                <input type="checkbox"  class="checkedbox">
                <div class="checkmark"></div>
            </label>
            </div>
              <p class="PElem" onclick="togglePElem(event)">
               ${valuePrompt}
              </p>
             <div class="star-div" onclick = "changeBtnValue(event)">
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
       `
    );
  }
}

starDiv.addEventListener("click", changeBtnValue);
pElem.addEventListener("click", togglePElem);
checkboxElem.addEventListener("change", changeCheckBox);
AddTaskBtn.addEventListener("click", addNewToDo);
partOfSideSection.forEach((el) => {
  el.addEventListener("click", function test() {
    partOfSideSection.forEach((cl) => {
      cl.classList.remove("sidetop-clicked");
    });
    el.classList.add("sidetop-clicked");
  });

  console.log("side clicked");
});

function toggleInput() {
  if (PlusFolderIcon.classList.contains("rotated") == true) {
    PlusFolderIcon.classList.remove("rotated");
    form.toggleAttribute("hidden");
  } else {
    PlusFolderIcon.classList.add("rotated");
    form.toggleAttribute("hidden");
    formInput.value = "";
    formInput.focus();
  }
}
function addNewProject() {
  partOfSideSection.forEach((cl) => {
    cl.classList.remove("sidetop-clicked");
  });
  toggleInput();
  console.log("plus log");
}
PlusFolderIcon.addEventListener("click", addNewProject);

function preventSubmit(e) {
  e.preventDefault();
}

function createNewFolder(e) {
  let inputValue = formInput.value;
  if (e.key === "Enter") {
    preventSubmit(e);
    if (inputValue === "") {
      alert(" Pleas Add Correct Value");
    } else {
      newProjaect.insertAdjacentHTML(
        "beforebegin",
        `
           <div class="project">
              <i class="folder fa-solid fa-folder" ></i>
              <p class="project-name"> ${inputValue} </p>
            </div>`
      );
      

      formInput.value = "";
      if (PlusFolderIcon.classList.contains("rotated") == true) {
        PlusFolderIcon.classList.remove("rotated");
        form.toggleAttribute("hidden");
      }
    }
  }
  // project.forEach((el) => {

  //   el.classList.add("sidetop-clicked");
  // })
}

form.addEventListener("keydown", createNewFolder);
submit.addEventListener("submit", preventSubmit);
window.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.key === "Escape") {
    if (PlusFolderIcon.classList.contains("rotated") == true) {
      PlusFolderIcon.classList.remove("rotated");
      form.toggleAttribute("hidden");
      inboxSection.classList.add("sidetop-clicked");
    }
  }
});
