var userInput = document.querySelector('.new-todo');
console.log(userInput);
var addItem = document.querySelector('.todos');


var createItem = function(input) {

  if(event.keyCode === 13) {

    var inputValue = event.target.value;
    var listItem = document.createElement('li');
    listItem.setAttribute('class', 'todo')
    addItem.appendChild(listItem);
    listItem.innerHTML = inputValue + '<span class= "remove"> x </span>';
    event.target.value = "";

  };

};


userInput.addEventListener('keypress', createItem);


// var toggleCompletion = function(event) {
//   event.target.classList.toggle('complete');
// }

// // listItem.addEventListener('click',toggleCompletion);


var toggleCompletion = function(event) {
  // console.log(event.target.tagName) returns LI in uppercase
  if(event.target.tagName.toLowerCase() === 'li'){
        event.target.classList.toggle('complete');
  }
}

addItem.addEventListener('click', toggleCompletion);

var removeSpan = function(event) {
  // console.log(event.target.tagName) returns LI in uppercase
  if(event.target.tagName.toLowerCase() === 'span'){
    event.target.parentNode.remove(); // Removes the parentNode of event.target('span') which is 'li'

  }
}

addItem.addEventListener('click', removeSpan);

