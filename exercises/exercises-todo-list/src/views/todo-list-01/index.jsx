
import { useState, useEffect, useRef } from 'react'

// Components Base
import Form from '@components/form'
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'
import Input from '@components/input'
import Button from '@components/button'

// Components Advanced

const index = () => {

  const [stateTitle, setStateTitle] = useState('')
  const [stateTodo, setStateTodo] = useState([])
  const inputTodoRef = useRef(null)

  useEffect(() => {

    console.log('stateTodo :', stateTodo)

  }, [stateTodo])

  const handleChangeTodo = (e) => {
    setStateTitle(e.target.value)
  }

  const handleAddTodo = (e) => {
    
    e.preventDefault()

    const todo = {
      id: Date.now(),
      title: stateTitle,
      complete: false
    }

    const newTodo = [...stateTodo]
    newTodo.unshift(todo)
    setStateTodo(newTodo)
    setStateTitle('')
  }

  return (
    <>
      <Div>
        <H4>Todo List 01</H4>
      </Div>
      <Div>
        <Form>
          <Input type='text' onChange={handleChangeTodo} value={stateTitle} />
          <Button onClick={handleAddTodo}>Add Todo</Button>
        </Form>
        
      </Div>
      <Div>
        {
          stateTodo.map((item) => (
            <Div key={item.id}>{item.title}</Div>
          ))
        }
      </Div>
    </>
  )
}

export default index
