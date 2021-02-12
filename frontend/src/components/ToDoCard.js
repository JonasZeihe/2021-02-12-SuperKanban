function ToDoCard({description, status}) {
    return (
        <li>
            <h2>
                {description}
            </h2><br/>
            <h3>
                {status}
            </h3>
        </li>
    )
}

export default ToDoCard;