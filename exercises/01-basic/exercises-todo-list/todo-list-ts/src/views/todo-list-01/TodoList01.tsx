
import { useState, useEffect } from 'react'

// Styles
import styles from './TodoList01.module.css'


interface ITodoList {
  id: number,
  taks: string,
  status: boolean
}

type TypeTodoList = ITodoList[]

// const InitTodoList: TypeTodoList = { 
//   id: 0,
//   taks: '',
//   status: false
// }



export default function TodoList01() {

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState<TypeTodoList>([])
  const [statusItem, setStatusItem] = useState(false)

  useEffect(() => {
    console.log(items)
  }, [items, statusItem])

  const handleAddItem = (e: Event) => {
    e.preventDefault()
    
    const input = e.target as HTMLInputElement
    setNewItem(input.value)

    // Math.floor(Math.random() * 1000),
    setItems(
      [
        {
        id: 1,
        taks: newItem,
        status: false
        }
      ]
    )

    
    
    console.log(items)

    //setItems(arrayTemp:  => [...arrayTemp, item])
    //setNewItem('')
  }

   const handleDeleteItem = (id: number) => {

  //   let x: number;
  //   const newArray: number[] = items.filter(x => x !== id)
  //   setItems(newArray)
  }


  const handleStatusItem = (id: number) => {
    
  //   items[id].status = true
    
  //   items.map(x = (id) => {
  //     if (x.id === id) {
  //       x.status = true
  //       setStatusItem(false)
  //     }
  //   })

  }

  return (
    <>
      <article className={styles.tl1}>
        
        <div className={styles.tl1__header}>

        </div>
        
        <div className={styles.tl1__form}>
          <input type='text' onChange={e => setNewItem(e.target.value)} value={newItem}/>
          <button onClick={handleAddItem}>Add</button>
        </div>
        
        <div className={styles.tl1__taks}>
          <ul>
            {
              items.map(x => {
                return (
                  <div className={styles.tl1__tasks_items} key={x.id}>
                    <input type='checkbox' onClick={() => handleStatusItem(x.id)} />
                    <li><p>{x.taks}</p></li>
                    <button onClick={() => handleDeleteItem(x.id)}>Add</button>
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
