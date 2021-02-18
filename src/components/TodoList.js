import React from 'react';
import {Todo} from './Todo';

export const TodoList = ({todoList}) => (
    <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo, i) => (
                    <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
                ))}
            </tbody>
    </table>

);