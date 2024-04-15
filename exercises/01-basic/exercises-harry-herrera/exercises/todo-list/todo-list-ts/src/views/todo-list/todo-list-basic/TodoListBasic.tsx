
import { useEffect, useState } from 'react'

// Styles
import styles from './TodoListBasic.module.css'

function TodoListBasic() {

  const [lsNewTask, setLSNewTask] = useState('')
  const [lsArraytask, setLSArraytask] = useState([])

  useEffect(() => {
    console.log(lsNewTask)
    console.log(lsArraytask)
  }, [lsNewTask, lsArraytask])

  return (
    <>
      <section className={styles.tlb}>
        <header className={styles.tlb__header}>
          <h2>Todo List Basic</h2>
        </header>
        
        <form className={styles.tlb__form}>
          <input className={styles.tlb__form_input} id='input_task' type='text' placeholder='Enter a task' />
          <button className={styles.tlb__form_button} id='button_task' type='button'>Add Task</button>
        </form>

        <div className={styles.tlb__task}>
          <h3 className={styles.tlb__task_subtitle}>Tasks Added</h3>

        </div>
      </section>
    </>
  )
}

export default TodoListBasic
