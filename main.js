let input = document.querySelector('form');
let list = document.querySelector('#list');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let listCounter = 1;

//Disables and hides the "select-all"-checkbox before any li-elements have been added.
document.getElementById("select-all").disabled = true;
document.getElementById("select-all").style.opacity = 0;

let selectAll = document.getElementById("select-all");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    //Enables and shows the checkbox when a li-element has been added.
    document.getElementById("select-all").disabled = false;
    document.getElementById("select-all").style.opacity = 1;

    document.getElementById('delete').style.display = "none";
    document.getElementById('delete').disabled = true;

    //Shows the tool for manipulating the list.
    document.querySelector(".notepad-footer").style.display = "block";

    let inputValue = document.getElementById('todo').value
    let text = document.createTextNode(inputValue);
    let p = document.createElement('p');
    p.appendChild(text);

    if (inputValue === "") {
      return;
    }

    let listItem = document.createElement('li');
    list.appendChild(listItem);

    //Creates a label and a container.
    let label = document.createElement('label');
    let liContainer = document.createElement('div');
    liContainer.className = "list-item"

    //Adds the label-element to the li-element and then the container to the label-element.
    listItem.appendChild(label);
    label.appendChild(liContainer);


    //Creates a checkbox.
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = listCounter;
    checkbox.name = "checkbox";
    checkbox.className = "item-checkbox";
    checkbox.id = "item-checkbox" + listCounter;
    checkbox.className = "item-checkbox";

    //Adds the checkbox and the text to the container.
    liContainer.appendChild(checkbox);
    liContainer.appendChild(p);

    listCounter++;

    //Creates a closebutton and adds it to the container.
    let closeButton = document.createElement('span');
    closeButton.className = "close";
    closeButton.textContent = "❌";
    liContainer.appendChild(closeButton);

    //When the close button is clicked it removes the li-element and the toolbox.
    //And if there is no li-elements the "select-all"-checkbox is not showned.
    closeButton.onclick = function () {
      listItem.remove();

      if (!list.children.length) {
        listCounter = 1;
        document.getElementById("select-all").style.opacity = 0;
        document.querySelector(".notepad-footer").style.display = "none";
      }

      listItemCounter();
    }

    input.reset();
    listItemCounter();

    checkbox.addEventListener('change', function (event) {
      event.preventDefault();

      let counter = document.querySelector('#counter');
      let checkboxes = document.querySelectorAll('.item-checkbox');
      let count = checkboxes.length;

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          count--;
        }
      }

      if (count < 1) {
        counter.textContent = count + " items left";
      }

      else if (count === 1) {
        counter.textContent = count + " item left";
      }

      else {
        counter.textContent = count + " items left";
      }

      const atLeastOneChecked = document.querySelector('input[type="checkbox"]:checked');

      if (atLeastOneChecked) {
        deleteButton.style.display = "block";
        deleteButton.disabled = false;
      }

      else {
        deleteButton.style.display = "none";
        deleteButton.disabled = true;
      }
    });

    let deleteButton = document.getElementById('delete');

    deleteButton.onclick = function (event) {
      let listItem = document.querySelectorAll('li');

      event.preventDefault();

      const selectedObjects = [];
      let indexForArray = 0;
      for (let i = 0; i < listItem.length; i++) {
        let checkbox = listItem[i].querySelector('.item-checkbox');

        if (checkbox.checked === true) {
          selectedObjects[indexForArray] = i;
          indexForArray++;
        }
      }

      for (let m = selectedObjects.length - 1; m >= 0; m--) {
        list.removeChild(list.getElementsByTagName("li")[selectedObjects[m]]);
      }

    }
  }
});

selectAll.addEventListener("change", selectAllCheckboxes);
let allSelected = false;

function selectAllCheckboxes() {
  let checkboxes = document.querySelectorAll('.item-checkbox');

  if (allSelected === false) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }

    listItemCounter();
    allSelected = true;
  }

  else if (allSelected === true) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }

    listItemCounter();
    allSelected = false;
  }
};

//Counts each listitem that isn't marked as checked.
function listItemCounter() {
  let counter = document.querySelector('#counter');
  let checkboxes = document.querySelectorAll('.item-checkbox');
  let uncheckedCount = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === false) {
      uncheckedCount++;
    }
  }

  if (uncheckedCount === 1) {
    counter.textContent = uncheckedCount + " item left";
  }

  else {
    counter.textContent = uncheckedCount + " items left";
  }
}

let allButton = document.querySelector('#all');
let activeButton = document.querySelector('#active');
let completedButton = document.querySelector('#completed');
let deleteButton = document.getElementById('delete');

//When the "All"-button is clicked it shows all li-elements in the list.
allButton.addEventListener("click", function (event) {
  event.preventDefault();

  let listItem = document.querySelectorAll('li');

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].style.display = "block";
  }
});

//When the "Active"-button is clicked it shows all li-elements that is not marked as checked in the list.
activeButton.addEventListener("click", function (event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('.item-checkbox');
  let listItem = document.querySelectorAll('li');

  //Each checkbox index is match to the li-elements index.
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      listItem[i].style.display = "none";
    }

    else {
      listItem[i].style.display = "block";
    }
  }
});

//When the "Completed"-button is clicked it shows all li-elements that is marked as checked.
completedButton.addEventListener("click", function (event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('.item-checkbox');
  let listItem = document.querySelectorAll('li');

  //Each checkbox index is match to the li-elements index.
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      listItem[i].style.display = "block";
    }

    else {
      listItem[i].style.display = "none";
    }
  }
});

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {

    let atLeastOneChecked = false;

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked === true) {
        atLeastOneChecked = true;
      }
    });

    if (atLeastOneChecked) {
      deleteButton.style.display = "block";
      deleteButton.disabled = false;
    }

    else {
      deleteButton.style.display = "none";
      deleteButton.disabled = true;
    }
  });
});