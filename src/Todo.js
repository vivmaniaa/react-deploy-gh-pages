import React from 'react';

export default function Todo({ todo, toggleTodo }) {
	const handlerToggleTodo = () => {
		toggleTodo(todo.id);
	};
	return (
		<div>
			<div>
				<input type="checkbox" checked={todo.complete} onChange={handlerToggleTodo} />
				<span>{todo.name}</span>
			</div>
		</div>
	);
}
