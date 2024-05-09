
import { useEffect, useRef, useState } from 'react'

// Styles
import styles from './TodoList03.module.css'

interface ITodoList03 {
  id: number,
  taks?: string,
  status?: boolean
}

type TypeTodoList03 = ITodoList03[]

export default function TodoList03() {

  const [lsNewTask, setLSNewTask] = useState<string | undefined>('')
  const [lsArraytask, setLSArraytask] = useState<TypeTodoList03>([])
  const [lsStatusTask, setLSStatusTask] = useState<boolean>(false)

  const refInput = useRef<HTMLInputElement>()

  useEffect(() => {
    console.log(lsNewTask)
    console.log(lsArraytask)
    console.log(lsStatusTask)
}, [lsNewTask, lsArraytask, lsStatusTask])

const handleNewTask = () => {
    setLSNewTask(refInput.current?.value)
  }
  

  const handleAddTask = () => {
    setLSArraytask([...lsArraytask, {
      id: Math.floor(Math.random() * 1000),
      taks: lsNewTask,
      status: lsStatusTask,
    }])
    setLSNewTask('')
  }

  const handleDelete = () => {
    setLSArraytask(lsArraytask.filter((task) => task.id!== task.id))
  }

  return (
    <>
      <section className={styles.tlb}>
        <header className={styles.tlb__header}>
          <h2>Todo List 03</h2>
        </header>
        
        <form className={styles.tlb__form}>
          <input className={styles.tlb__form_input} id='input_task' type='text' placeholder='Enter a task' ref={refInput} value={lsNewTask} onChange={handleNewTask} />
          <button className={styles.tlb__form_button} id='button_task' type='button' onClick={handleAddTask} >Add Task</button>
        </form>

        <div className={styles.tlb__task}>
          <h3 className={styles.tlb__task_subtitle}>Tasks Added</h3>
            {
              lsArraytask.map((task, index) => {
                return (
                  <div className={styles.tlb__task_item} key={index}>
                    <p className={styles.tlb__task_item_text}>{task.id}</p>
                    <p className={styles.tlb__task_item_text}>{task.taks}</p>
                    <p className={styles.tlb__task_item_text}>{task.status}</p>
                    <a className={styles.tlb__task_item_button} onClick={handleDelete}>
                      <svg className={styles.tlb__task_item_button_remove} viewBox="0 0 24 24">
                        <title>delete-forever</title>
                        <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                      </svg>
                    </a>
                    <a className={styles.tlb__task_item_button} onClick={handleDelete}>
                      <svg className={styles.tlb__task_item_button_edit} viewBox="0 0 24 24">
                        <title>pencil</title>
                        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                      </svg>
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
