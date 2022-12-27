
import { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { Article, Div, Ul, Li, H4, P, Input, Button } from 'nc-styles-react'

// Icons
import { mdiDeleteForever } from '@mdi/js'

const TodoList01 = () => {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [statusItem, setStatusItem] = useState(false)

  useEffect(() => {
    console.log(items)
  }, [items, statusItem])

  const handleAddItem = (e) => {
    e.preventDefault()

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      status: false
    }

    setItems(arrayTemp => [...arrayTemp, item])
    setNewItem('')
  }

  const handleDeleteItem = (id) => {
    const newArray = items.filter(x => x.id !== id)
    setItems(newArray)
  }

  const handleStatusItem = (id) => {
    // (items[id].status = true
    /*
    items.map(function(id) {
      if (x.id === id) {
        x.status = true
        setStatusItem(false)
      }
    })
    */
  }

  return (
    <>
      <Article jcCenter padding='1rem' bgColorBlue300 width='20rem' borderRadius='1rem' >
        <Div>
          <Input type='text' onChange={e => setNewItem(e.target.value)} value={newItem}/>
          <Button onClick={handleAddItem}>Add</Button>
        </Div>
        <Div>
          <Ul>
            {
              items.map(x => {
                return (
                  <Div key={x.id} display='flex' aiCenter marginY='.5rem'>
                    <Input type='checkbox' onClick={() => handleStatusItem(x.id)} />
                    <Li><P colorWhite>{x.value}</P></Li>
                    <Button onClick={() => handleDeleteItem(x.id)} button1 marginL='1rem' bgColorRed500>
                      <Icon path={mdiDeleteForever} size='1rem' color='#FFFFFF' />
                    </Button>
                  </Div>
                )
              })
            }
          </Ul>
        </Div>
      </Article>
    </>
  )
}

export default TodoList01
