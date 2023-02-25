let input = document.querySelector('form');
let list = document.querySelector('#list');

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

    //Shows the notepad-footer.
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
    closeButton.textContent = "X";
    liContainer.appendChild(closeButton);

    //When the close button is clicked it removes the li-element and the notepad-footer.
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