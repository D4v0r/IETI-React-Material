import React from 'react';

export const Todo = ({text, priority, dueDate}) =>(
    <tr>
        <td>{text}</td>
        <td>{priority}</td>
        <td>{dueDate.format('DD-MM-YYYY')}</td>
    </tr>
);