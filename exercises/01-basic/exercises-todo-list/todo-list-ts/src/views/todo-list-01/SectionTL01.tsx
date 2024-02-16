
// Layout
import LayoutTodoDesktop from '../../layouts/LayoutTodoDesktop'

// Styles
import styles from './HeaderTL01.module.css' 

// Todo List
import TodoList01 from './TodoList01'


export default function SectionTL01 () {
  return (
    <LayoutTodoDesktop>
      <section className={styles.section} >
        <div className={styles.section__header} >
          <h4 className={styles.section__header_title} > EXERCISES TODO LIST 01 </h4>
        </div>

        <div className={styles.section__body} >
          <TodoList01/>
        </div>
      </section>
    </LayoutTodoDesktop>
    
  )
}
