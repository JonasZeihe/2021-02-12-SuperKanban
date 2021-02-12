import logo from './logo.svg';
import './App.css';
import ToDoApi from "./services/ToDoApi";
import GetTodos from "./services/ToDoApi";
import ToDoCard from "./components/ToDoCard";

function App() {

    const toDoData = GetTodos();

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <ul>
                {toDoData.map(element => <ToDoCard
                key={element.id}
                description={element.description}
                status={element.status}
                />)}
            </ul>
        </div>
    );
}

export default App;
