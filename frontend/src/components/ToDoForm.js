
import {useState} from "react";

export default function AddToDoForm({onAdd}) {

    const [description, setDescription] = useState("");

    return <form onSubmit={event => {
        event.preventDefault()
        onAdd({description: description, status: "OPEN"})
        setDescription("")

    }}>

        <lable>
            Description
            <input value={description} onChange={event => setDescription(event.target.value)}/>
            <button type="submit">Drück mich für neues to do </button>

        </lable>

    </form>
}
