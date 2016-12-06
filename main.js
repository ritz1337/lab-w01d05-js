console.log('hello from main.js');

// wire up elements on the page
var todosEl = document.querySelector('.todos');
var newTodoEl = document.querySelector('.new-todo');

// write handlers
var handleKeypress = function(evt) {
  if ( evt.keyCode !== 13 ) { return false; }
  var inputVal = evt.target.value;
  if ( inputVal === '' ) { return false; }
  console.log(inputVal);
  var todoEl = renderTodo(inputVal);
  todosEl.innerHTML += todoEl;
}

var handleClick = function(evt) {
  var node = evt.target;
  if (node.classList.contains('todo')) {
    return node.classList.toggle('completed');
  }
  if (node.classList.contains('remove')) {
    node.parentElement.remove();
  }
}

// render an li
var renderTodo = function(todo) {
  // var li = document.createElement('li');
  // var span = document.createElement('span');
  // li.classList.add('todo');
  // li.textContent = todo;
  // span.classList.add('remove');
  // span.textContent = 'x';
  // li.appendChild(span);
  // li.addEventListener('click', handleClick);
  // return li;
  return '<li class="todo">' + todo + '<span class="remove">x</span></li>'
}

// register event listener
newTodoEl.addEventListener('keypress', handleKeypress);
todosEl.addEventListener('click', handleClick);
