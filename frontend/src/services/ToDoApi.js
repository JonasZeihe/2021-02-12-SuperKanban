import axios from "axios";
import {useState, useEffect} from "react";


function GetTodos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        loadTodos()
    }, [])

    function loadTodos() {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
    }
    return todos;
}

export default GetTodos;


