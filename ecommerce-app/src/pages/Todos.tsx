import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoContext from "../TodoContext";
import { useState } from 'react';

function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "Complete React Assignment",
            description: "Finish implementing props drilling and Context API examples.",
            status: "PENDING",
            createdAt: "2026-02-20T09:30:00Z"
        },
        {
            id: 2,
            name: "Practice SQL Queries",
            description: "Solve 15 SQL queries covering joins and aggregate functions.",
            status: "IN_PROGRESS",
            createdAt: "2026-02-21T14:15:00Z"
        },
        {
            id: 3,
            name: "Update Resume",
            description: "Add latest frontend project details and skills.",
            status: "COMPLETED",
            createdAt: "2026-02-18T11:00:00Z"
        },
        {
            id: 4,
            name: "Learn Axios",
            description: "Implement GET, POST, PUT, DELETE requests using Axios.",
            status: "PENDING",
            createdAt: "2026-02-22T16:45:00Z"
        },
        {
            id: 5,
            name: "Build Todo Application",
            description: "Develop a full CRUD Todo app using React and Bootstrap.",
            status: "IN_PROGRESS",
            createdAt: "2026-02-23T08:20:00Z"
        }
    ]);

    const addTodo = ( formValues: any ) => {
        setTodos([...todos, { ...formValues, id: todos.length + 1, createdAt: new Date().toISOString() }])
    };

    const deleteTodo = (id: number) => {
        const filteredTodos = todos.filter((todo: any) => todo.id !== id);
        setTodos(filteredTodos)
    }

    return (
        <div className="container">

            <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
                <div className="row">
                    <div className="col-sm-6">
                        <TodoList/>
                    </div>

                    <div className="col-sm-6">
                        <AddTodo/>
                    </div>
                </div>
            </TodoContext.Provider>

        </div>
    )
}

export default Todos;