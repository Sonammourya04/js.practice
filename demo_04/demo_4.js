//create unordered  list.allow users to add and remove list items dynamically using buttons
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var ul = document.querySelector('ul');

add.addEventListener("click", function() {
    var inp = document.querySelector("input");
    if (inp.value.trim() !== '') {
        var li = document.createElement('li'); // Create a new li element
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ''; // Clear the input field
    }
});

remove.addEventListener("click", function() {
    var li = ul.lastElementChild; // Get the last li element
    if (li) { // Check if there is an li element to remove
        ul.removeChild(li);
    }
});
