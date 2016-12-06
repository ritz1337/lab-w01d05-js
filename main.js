// target some DOM nodes

var newTodo = document.querySelector('.new-todo');
var todos = document.querySelector('.todos');

// something i'll use later
var todo;

// rendering a STRING of html
// add with todos.innerHTML += todo;
var renderTodoStr = function(todo) {
  return '<li class="todo">' + todo + '<span class="remove">x</span></li>';
}


// rendering DOM nodes
// add with todos.appendChild(todo);
var renderTodoDOM = function(todo) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  li.classList.add('todo');
  span.classList.add('remove');
  li.textContent = todo;
  span.textContent = 'x';
  li.appendChild(span);
  return li;
}

// when a user enters text in the input field and hits return
// take that text
// make a new LI with that text
// add that LI to the list
// clear out the input field

// defining event handler
//  evt.keyCode // number for the character type on the DL
//  evt.target // what element the event was triggered on
//  evt.target.value || newTodo.value // value of input element
var handleInput = function(evt) {
  // if not "return" key return false
  if (evt.keyCode !== 13) {
    return false;
  }
  var val = newTodo.value;
  // if empty string return false;
  if (!val) {
    return false;
  }
  // render to DOM with nodes
  // var todo = renderTodoDOM(val);
  // todos.appendChild(todo);

  // render to DOM with strings
  var todo = renderTodoStr(val);
  // todos.innerHTML = todos.innerHTML + todo;
  todos.innerHTML += todo;
}


// wire up the DOM
newTodo.addEventListener('keyup', handleInput);





