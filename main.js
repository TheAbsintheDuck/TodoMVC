let input = document.querySelector('form');
let list = document.querySelector('#list');
const checkboxes = document.querySelectorAll('#item.checkbox');

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
    checkbox.value = 1;
    checkbox.name = "checkbox";
    checkbox.id = "item-checkbox";

    //Adds the checkbox and the text to the container.
    liContainer.appendChild(checkbox);
    liContainer.appendChild(text);

    //If the user clicks the checkbox the text inside the container is striked out.
    checkbox.addEventListener('change', function (event) {
      if (this.checked) {
        liContainer.style.textDecoration = 'line-through';
      }

      else {
        liContainer.style.textDecoration = '';
      }
    });

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
        document.getElementById("select-all").style.opacity = 0;
        document.querySelector(".notepad-footer").style.display = "none";
      }
    }

    input.reset();
  }
});

let allButton = document.querySelector('#all');
let activeButton = document.querySelector('#active');
let completedButton = document.querySelector('#completed');

allButton.addEventListener("click", function (event) {
  event.preventDefault();

  let listItem = document.querySelectorAll('li');

  for (let i = 0; i < listItem.length; i++) {

    listItem[i].style.display = "block";
  }
});

activeButton.addEventListener("click", function (event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('#item-checkbox');
  let listItem = document.querySelectorAll('li');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      listItem[i].style.display = "none";
    } else {
      listItem[i].style.display = "block";
    }
  }
});

completedButton.addEventListener("click", function (event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('#item-checkbox');
  let listItem = document.querySelectorAll('li');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      listItem[i].style.display = "block";
    } else {
      listItem[i].style.display = "none";
    }
  }
});




checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    let atLeastOneChecked = false;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        atLeastOneChecked = true;
      }
    });

    if (atLeastOneChecked) {
      deleteButton.style.display = "block";
      deleteButton.disabled = false;
    } else {
      deleteButton.style.display = "none";
      deleteButton.disabled = true;
    }

  });

});
      


deleteButton.addEventListener("click", function (event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('#item-checkbox');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const index = list.indexOf(i);      
      list.splice(index, 1);
    } 
  }
  
});
