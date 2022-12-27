
import {} from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Todo List
import TodoList01 from './TodoList01'

const TodoListDesktop01 = () => {
  return (
    <>
      <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' colorBlue600> EXERCISES TODO LIST 01 </H4>
        </Div>

        <Div display='grid' gridTemplateColumns='repeat(1, minmax(0, 1fr))' gap='1rem' justifyContent='center'>
          <TodoList01 />
        </Div>
      </Section>
    </>
  )
}

export default TodoListDesktop01
