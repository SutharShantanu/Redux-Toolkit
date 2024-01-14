import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

function App() {
    return (
        <div className="text-center p-8">
            <AddTodo />
            <Todos />
        </div>
    );
}

export default App;
