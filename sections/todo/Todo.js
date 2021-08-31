import { useState } from 'react'
import clsx from 'clsx'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Icon from '../../components/icon/Icon'

import style from './todo.module.scss'

export default function Todo() {
	const [input, setInput] = useState('')
	const [todoArray, setTodoArray] = useState([
		{title: 'Reading about Angi Studio', finished: false}, 
		{title: 'Writing a recommendation letter', finished: false}
	])

	function onChangeHandler(event) {
		setInput(event.target.value)
	}

	function addTodo() {
		setTodoArray([...todoArray, { title: input, finished: false }])
	}

	function finishTodo(item) {
		item.finished = !item.finished;
		setTodoArray([...todoArray])
	}

	return (
		<div className={clsx(['section', style.todo])}>
			<>
				<div className='label'> New to-do </div>
				<div className={style.wrapper}>
					<Input placeholder='Your text...' onChange={(event) => onChangeHandler(event)} />
					<Button title='Add to-do' onClick={() => addTodo()} />
				</div>
			</>
			<div className={style.todoListContainer}>
				<div className='label'> Current to-do&apos;s </div>
				{todoArray.length > 0 && (
					<div className={style.todoList}>
						{todoArray && todoArray.map((item, key) => (
							<div className={clsx([style.wrapper, item.finished && style.finished])} key={key} onClick={() => finishTodo(item)}>
								<div className={style.todoListItem}>	{item.title}</div>
								<div className={style.icon}> {item.finished && (<Icon iconTitle='check' />)} </div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
