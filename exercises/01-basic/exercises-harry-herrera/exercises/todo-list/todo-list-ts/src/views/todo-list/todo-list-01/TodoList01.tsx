
import React, { useEffect, useState } from 'react'

// Styles
import styles from './TodoList01.module.css'

export default function TodoList01() {

  const [lsNewTask, setLSNewTask] = useState<string>('')
  const [lsArraytask, setLSArraytask] = useState<Array<string>>([])

  useEffect(() => {
    console.log(lsNewTask)
    console.log(lsArraytask)
  }, [lsNewTask, lsArraytask])

  const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLSNewTask(event.target.value)
  }

  const handleAddTask = () => {
    setLSArraytask([...lsArraytask, lsNewTask])
    setLSNewTask('')
  }

  return (
    <>
      <section className={styles.tlb}>
        <header className={styles.tlb__header}>
          <h2>Todo List 01</h2>
        </header>
        
        <form className={styles.tlb__form}>
          <input className={styles.tlb__form_input} id='input_task' type='text' placeholder='Enter a task' onChange={handleNewTask} />
          <button className={styles.tlb__form_button} id='button_task' type='button'  onClick={handleAddTask} >Add Task</button>
        </form>

        <div className={styles.tlb__task}>
          <h3 className={styles.tlb__task_subtitle}>Tasks Added</h3>
            {
              lsArraytask.map((task, index) => {
                return (
                  <div className={styles.tlb__task_item} key={index}>
                    <p className={styles.tlb__task_item_text}>{task}</p>
                    <button className={styles.tlb__task_item_button} type='button' onClick={() => setLSArraytask(lsArraytask.filter((task, index) => index!== index))}>Delete</button>
                  </div>
                )
              })
            }
        </div>
      </section>
    </>
  )
} 
