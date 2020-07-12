import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';
import { getNodeText } from '@testing-library/react';
const TODO_SAVED_DATA = 'TODO_SAVED_DATA';
function App() {
	const [ todos, setTodos ] = useState([]);
	const newTodoName = useRef();

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(TODO_SAVED_DATA));
		if (storedTodos.length) setTodos(storedTodos);
	}, []);

	useEffect(
		() => {
			localStorage.setItem(TODO_SAVED_DATA, JSON.stringify(todos));
		},
		[ todos ]
	);

	const toggleTodo = id => {
		const newTodoList = [ ...todos ];
		newTodoList.map(todo => {
			if (todo.id === id) todo.complete = !todo.complete;
			return todo;
		});
		setTodos(newTodoList);
	};

	const handlerAddTodo = e => {
		let todoName = newTodoName.current.value;
		if (todoName === '') return;
		setTodos(prevTodo => {
			return [ ...prevTodo, { id: uuid(), name: todoName, complete: false } ];
		});
		newTodoName.current.value = null;
	};
	const handlerClearComplete = e => {
		const newTodos = [ ...todos ];
		const incompleteTodos = newTodos.filter(todo => !todo.complete);
		console.log(incompleteTodos);
		setTodos(incompleteTodos);
	};

	const incompleteTodos = e => {
		const newTodos = [ ...todos ];
		const incompleteTodos = newTodos.filter(todo => !todo.complete);
		return incompleteTodos.length;
	};

	return (
		<div>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={newTodoName} type="text" />
			<button onClick={handlerAddTodo}>Add Todo</button>
			<button onClick={handlerClearComplete}>Clear Complete</button>
			<div>{incompleteTodos()} left to do</div>
		</div>
	);
}

export default App;
