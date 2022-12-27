
import { useState, useEffect } from 'react'
import { Article, Div, H5, Input, Button } from 'nc-styles-react'

const TodoList01 = () => {
  const [stateList, setStateList] = useState([])

  useEffect(() => {
    console.log(stateList)
  }, [stateList])

  const handleChange = (e) => {
    setStateList(e.target.value)
  }

  const handleAddTodo = () => {
    e.preventDefault()
    setStateList([...stateList])
  }

  return (
    <>
        <Article>
            <Div>
                <H5>TODO LIST 01</H5>
            </Div>
            <Div>
                <Input type="text" onChange={handleChange} />
                <Button onClick={handleAddTodo}>Add</Button>
            </Div>
            <Div>

            </Div>
        </Article>
    </>
  )
}

export default TodoList01
