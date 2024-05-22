
import { useState, useEffect, useRef } from 'react'

// Styles
import styles from './TodoList04.module.css'


interface ITodoList {
  id: number,
  taks?: string,
  status?: boolean
}

interface ITodoListAPI {
  userId: number,
  id: number,
  title: string,
  body: string
}

type TypeTodoList = ITodoList[]
type TypeTodoListAPI = ITodoListAPI[]


export default function TodoList04() {

  const refInputTask = useRef<HTMLInputElement>()
  
  const [lsNewTask, setLSNewTask] = useState<string | undefined> ('')
  const [lsArrayTask, setLSArrayTask] = useState<TypeTodoList>([])
  const [lsArrayTaskAPI, setLSArrayTaskAPI] = useState<TypeTodoListAPI>([])
  const [lsStatusTask, setLSStatusTask] = useState<boolean>(false)

  useEffect(() => {
    // console.log(lsNewTask)
    // console.log(lsArrayTask)
    // console.log(lsStatusTask)
  }, [lsNewTask, lsArrayTask, lsStatusTask])

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((res) => console.log('API:', res))
  .then((res) => setLSArrayTaskAPI())
  .catch((err) => console.error('API Error: ', err))
  


  const handleOnChangeInputTask = () => {
    setLSNewTask(refInputTask.current?.value)
  }


  const addItem = () => {
    setLSArrayTask(
      [
        ... lsArrayTask,
        {
        id: Math.floor(Math.random() * 1000),
        taks: lsNewTask,
        status: false
        }
      ]
    )

    console.log(lsArrayTask)
    setLSNewTask('')
  }

  const removeItem = (id: number) => {
    setLSArrayTask([...lsArrayTask.filter(x => x.id !== id)])
  }


  const checkItem = (id: number) => {
    
    const taskFound = lsArrayTask.find(x => x.id === id)
    // console.log(taskFound)

    if (taskFound) {
      if (taskFound?.status === false) {
        taskFound.status = true
        setLSStatusTask(true)
        console.log(taskFound)
      } else if (taskFound?.status === true){
        taskFound.status = false
        setLSStatusTask(false)
        console.log(taskFound)
      }
    }

    // stateItems.map(x => {
    //   if (x.id === id) {
    //     if (x.status === false) {
    //           x.status = true
    //           setStateStatusItem(true)
    //         } else {
    //           x.status = false
    //           setStateStatusItem(false)
    //         }             
    //   }
    // })

  }

  return (
    <>
      <article className={styles.tl1}>
        
        <div className={styles.tl1__header}>
          <h4>TODO LIST 04</h4>
        </div>
        
        <div className={styles.tl1__form}>
          <input ref={refInputTask} className={styles.tl1__form_input} type='text' onChange={handleOnChangeInputTask} value={lsNewTask}/>
          <div className={styles.tl1__form_input_contb}>
            <button className={styles.tl1__form_button} onClick={addItem}>
              <svg className={styles.tl1__form_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
              Agregar
            </button>
          </div>
          
        </div>
        
        <div className={styles.tl1__taks}>
          <ul>
            {
              lsArrayTask.map(x => {
                return (
                  <div className={styles.tl1__tasks_items} key={x.id}>
                    
                    { x.status === false ? 
                      (
                        <svg className={styles.tl1__tasks_items_svg_point_false} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-four-points-circle</title><path d="M8.17 2.76C9.39 2.26 10.69 2 12 2C13.31 2 14.61 2.26 15.83 2.76C17.04 3.26 18.14 4 19.07 4.93C20 5.86 20.74 6.96 21.24 8.17C21.74 9.39 22 10.69 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C10.69 22 9.39 21.74 8.17 21.24C6.96 20.74 5.86 20 4.93 19.07C3.05 17.2 2 14.65 2 12C2 9.35 3.05 6.8 4.93 4.93C5.86 4 6.96 3.26 8.17 2.76M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z" /></svg> 
                      ) : (
                        <svg className={styles.tl1__tasks_items_svg_point_true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-decagram</title><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>
                      )
                    }
                    
                    <p>{x.id} - {x.taks} - {x.status}</p>
                    <div className={styles.tl1__tasks_items_cont_svg}>
                      <a className={styles.tl1__tasks_items_a_svg_delete} onClick={() => removeItem(x.id)}>
                        <svg className={styles.tl1__tasks_items_svg_delete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                      </a>
                      {/* <a href="">
                        <svg className={styles.tl1__tasks_items_svg_edit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                      </a> */}
                      <a className={styles.tl1__tasks_items_a_svg_check} onClick={() => checkItem(x.id)}>
                        <svg className={styles.tl1__tasks_items_svg_check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-decagram</title><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </article>
    </>
  )
}
