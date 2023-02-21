let input = document.querySelector('form');
let list = document.querySelector('#list');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let inputValue = document.getElementById('todo').value
        let text = document.createTextNode(inputValue);

        let li = document.createElement('li');
        li.appendChild(text);
        list.appendChild(li);

        input.reset();
    }
});

var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}   