
import { useState, useEffect } from 'react'

// Styles
import styles from './TodoList01.module.css'


export default function TodoList01() {

  const [lsNewTask, setLSNewTask] = useState<string>('')
  const [lsArrayTask, setLSArrayTask] = useState<Array<string>>([])

  useEffect(() => {
    // console.log(lsNewTask)
    console.log(lsArrayTask)
  }, [lsArrayTask])


  const handleOnChangeInputTask = (e: Event) => {
    const inputTask = e.target as HTMLInputElement
    setLSNewTask(inputTask.value)
  }


  const addItem = () => {

    setLSArrayTask([...lsArrayTask, lsNewTask])

    console.log(lsArrayTask)
    setLSNewTask('')
  }


  return (
    <>
      <article className={styles.tl1}>
        
        <div className={styles.tl1__header}>
          <h4>TODO LIST 01</h4>
        </div>
        
        <div className={styles.tl1__form}>
          <input className={styles.tl1__form_input} type='text' onChange={() => handleOnChangeInputTask} value={lsNewTask} />
          {/* <input className={styles.tl1__form_input} type='text' onChange={e => setNewItem(e.target.value)} value={newItem}/> */}
          <div className={styles.tl1__form_input_contb}>
            <button className={styles.tl1__form_button} onClick={addItem}>
              <svg className={styles.tl1__form_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
              Agregar
            </button>
          </div>
          
        </div>
        
        <div className={styles.tl1__taks}>
            {
              lsArrayTask.map(x => {
                return (
                  <div className={styles.tl1__tasks_items} key={x}>
                    
                    <svg className={styles.tl1__tasks_items_svg_point_false} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-four-points-circle</title><path d="M8.17 2.76C9.39 2.26 10.69 2 12 2C13.31 2 14.61 2.26 15.83 2.76C17.04 3.26 18.14 4 19.07 4.93C20 5.86 20.74 6.96 21.24 8.17C21.74 9.39 22 10.69 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C10.69 22 9.39 21.74 8.17 21.24C6.96 20.74 5.86 20 4.93 19.07C3.05 17.2 2 14.65 2 12C2 9.35 3.05 6.8 4.93 4.93C5.86 4 6.96 3.26 8.17 2.76M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z" /></svg>
                    
                    <p>{x}</p>
                    
                  </div>
                )
              })
            }
        </div>
      </article>
    </>
  )
}
