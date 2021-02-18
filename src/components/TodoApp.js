import React, {Component, useState} from 'react';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Button, TextField } from '@material-ui/core';

export const TodoApp = props => {
    
    const todos = useFormInput([]);
    const text = useFormInput('');
    const priority = useFormInput(0);
    const dueDate = useFormInput(moment());

    function useFormInput(initialValue) {

        const [value, setValue] = useState(initialValue);
        const handleChange = e => setValue(e.target.value);

        return{
            value,
            setValue,
            onChange: handleChange
        };
    };


    const handleSubmit = e => {

        e.preventDefault();

        if (!text.value.length || !priority.value.length || !dueDate.value)
            return;

        const newTodo = {
            text: text.value,
            priority: priority.value,
            dueDate: dueDate.value,

        };
        
        todos.setValue([...todos.value, newTodo]);
        text.setValue('');
        priority.setValue(0);
        dueDate.setValue(moment());
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <h3>New TODO</h3>
                <TextField id="text" label="Text" 
                 onChange={text.onChange} value={text.value}
                 InputLabelProps={{ shrink: true }}/>
                
                <br/>
                <br/>
                <TextField id="priority" label="Priority" type="number" 
                 onChange={priority.onChange} value={priority.value} 
                 InputLabelProps={{ shrink: true }}/>
                <br/>
                <br/>

                <DatePicker
                    id="due-date"
                    selected={dueDate.value}
                    placeholderText="Due date"
                    onChange={dueDate.onChange}>
                </DatePicker>
                <br/>
                <br/>
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                    Add #{todos.value.length + 1}
                </Button>
            </form>
            <br/>
            <br/>
            <TodoList todoList={todos.value}/>
        </div>
    );
}