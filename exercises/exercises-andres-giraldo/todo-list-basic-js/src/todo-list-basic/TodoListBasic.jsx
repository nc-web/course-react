
import { useState } from "react"

export default function TodoListBasic() {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    
    function changeTask() {
        const inputTask = document.querySelector('#inputTask').value
        console.log(inputTask)
        setTask(inputTask)
    }

    function addTasks() {
        setTasks([...tasks, task])
        clearInput()
    }

    function clearInput() {
        document.querySelector('#inputTask').value = ''
    }
    
    
    return(
        <>
            <h2>TODO LIST BASIC</h2>
            {task}
            <div>
                <input id="inputTask" onChange={changeTask} type="text" placeholder="Add Task"/>
                <button onClick={addTasks}>+</button>
            </div>

            <div>
                <h4>TASKS</h4>
                <div>
                    {
                        tasks.map(x => (
                            <p key={x}>{x}</p>
                        ))
                    }
                </div>
            </div>
            
        </>
    )
}