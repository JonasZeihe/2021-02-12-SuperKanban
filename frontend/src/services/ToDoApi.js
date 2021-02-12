import axios from "axios";
import {useState, useEffect} from "react";


function GetTodos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        loadTodos()
    }, [])

    function loadTodos() {
        axios.get("http://localhost:8080/api/todo")
            .then(response => setTodos(response.data))
    }
    return todos;
}

export default GetTodos;


