import "./TodoInput.css";

const TodoInput = ({ todo, setTodo, addTodo }) => {

    return (

        <div className="to-do-input">

            <input

                type="text"

                name="todo"

                value={todo}

                placeholder="Create a new todo"

                onChange={(e) => {

                    setTodo(e.target.value);

                }}

            />

            <button className="add-button" onClick={addTodo}>

                Add a ToDo

            </button>

        </div>

    );

};




export default TodoInput; 