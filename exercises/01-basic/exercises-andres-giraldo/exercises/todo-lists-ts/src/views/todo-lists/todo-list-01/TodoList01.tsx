
import { useState, useEffect } from 'react'

// Styles
import styles from './TodoList01.module.css'


export default function TodoList01() {

    const [lsNewTask, setLSNewTask] = useState<string>('')
    const [lsArrayTask, setLSArrayTask] = useState<Array<string>>([])

    useEffect(() => {
      
        console.log(lsNewTask)
        console.log(lsArrayTask)
      
    }, [lsNewTask, lsArrayTask])

    const handleOnChangeInputTask = (e: Event) => {
        const inputTask = e.target as HTMLInputElement
        setLSNewTask(inputTask.value)
    }

    const addTask = () => {
        setLSArrayTask([...lsArrayTask, lsNewTask])
        setLSNewTask('')
    }
    

    return(
        <>
            <section className={styles.tlb}>

                <header className={styles.tlb__header}>
                    <h2>TODO LIST 01</h2>
                </header>

                <form className={styles.tlb__form}>
                    <input onChange={handleOnChangeInputTask} className={styles.tlb__form_inputtask} type="text" name="" id="" />
                    <button onClick={addTask} className={styles.tlb__form_buttontask} type="button">ADD TASK</button>
                </form>

                <div className={styles.tlb__tasks}>
                    <h4>Tasks</h4>
                    {
                        lsArrayTask.map(x => {
                            return (
                                <p>{x}</p>
                            )
                        })
                    }
                </div>

            </section>
            
        </>
    )

}