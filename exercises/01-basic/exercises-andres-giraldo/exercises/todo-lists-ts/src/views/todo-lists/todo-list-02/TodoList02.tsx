

import { useState, useEffect, useRef } from 'react'

// Styles
import styles from './TodoList02.module.css'



interface ITodoList {
    id: number,
    tasks?: string,
    status?: boolean
}

type TypeTodoList = ITodoList[]


export default function TodoList02() {

    const refInputTask = useRef<HTMLInputElement>()

    const [lsNewTask, setLSNewTask] = useState<string | undefined>('')
    const [lsArrayTask, setLSArrayTask] = useState<TypeTodoList>([])
    const [lsStatusTask, setLSStatusTask] = useState<boolean>(false)

    useEffect(() => {
      
        console.log(lsNewTask)
        console.log(lsArrayTask)
      
    }, [lsNewTask, lsArrayTask, lsStatusTask])

    const handleOnChangeInputTask = () => {
        setLSNewTask(refInputTask.current?.value)
    }

    const addTask = () => {
        setLSArrayTask([
            ...lsArrayTask, 
            {
                id: Math.floor(Math.random() * 1000),
                tasks: lsNewTask,
                status: false
            }
        ])

        setLSNewTask('')
    }

    const removeTask = (id: number) => {
        setLSArrayTask([...lsArrayTask.filter(x => x.id !== id)])
    }
    

    return(
        <>
            <section className={styles.tlb}>

                <header className={styles.tlb__header}>
                    <h2>TODO LIST 02</h2>
                </header>

                <form className={styles.tlb__form}>
                    <input ref={refInputTask} onChange={handleOnChangeInputTask} value={lsNewTask} className={styles.tlb__form_inputtask} type="text" name="" id="" />
                    <button onClick={addTask} className={styles.tlb__form_buttontask} type="button">ADD TASK</button>
                </form>

                <div className={styles.tlb__tasks}>
                    <h4>Tasks</h4>
                    {
                        lsArrayTask.map(x => {
                            return (
                                <div className={styles.tlb__tasks_items} >
                                    <p>{x.tasks}</p>
                                    <a onClick={() => removeTask(x.id)} className={styles.tlb__tasks_a}>
                                        <svg className={styles.tlb__tasks_a_svg_delete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                                    </a>
                                    
                                </div>
                                
                            )
                        })
                    }
                </div>

            </section>
            
        </>
    )

}