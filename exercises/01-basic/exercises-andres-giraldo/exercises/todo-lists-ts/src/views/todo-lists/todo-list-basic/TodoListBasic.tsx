
import { useState, useEffect } from 'react'

// Styles
import styles from './TodoListBasic.module.css'




export default function TodoListBasic() {

    const [lsNewTask, setLSNewTask] = useState('')
    const [lsArrayTask, setLSArrayTask] = useState([])

    useEffect(() => {
      
        console.log(lsNewTask)
        console.log(lsArrayTask)
      
    }, [lsNewTask, lsArrayTask])
    

    return(
        <>
            <section className={styles.tlb}>

                <header className={styles.tlb__header}>
                    <h2>TODO LIST BASIC</h2>
                </header>

                <form className={styles.tlb__form}>
                    <input className={styles.tlb__form_inputtask} type="text" name="" id="" />
                    <button className={styles.tlb__form_buttontask} type="button">ADD TASK</button>
                </form>

                <div className={styles.tlb__tasks}>
                    <h4>Tasks</h4>
                </div>

            </section>
            
        </>
    )

}