let input = document.querySelector('form');
let list = document.querySelector('#list');

document.getElementById("checkbox").disabled = true;
document.getElementById("checkbox").style.opacity = 0;

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("checkbox").disabled = false;
    document.getElementById("checkbox").style.opacity = 1;

    let inputValue = document.getElementById('todo').value
    let text = document.createTextNode(inputValue);

    let listItem = document.createElement('li');
    list.appendChild(listItem);

    let label = document.createElement('label');
    let liContainer = document.createElement('div');
    listItem.appendChild(label);
    label.appendChild(liContainer);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "checkbox";

    liContainer.appendChild(checkbox);
    liContainer.appendChild(text);

    // let closeButton = document.createElement('span');
    // closeButton.className = "close";
    // closeButton.textContent = "X";
    // liContainer.appendChild(closeButton);

    listItem.appendChild(label);

    input.reset();
  }
});



