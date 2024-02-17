
// Layout
import LayoutTodoDesktop from '../../layouts/LayoutTodoDesktop'

// Styles
import styles from './SectionTL01.module.css' 

// Todo List
import TodoList01 from './TodoList01'


export default function SectionTL01 () {
  return (
    <LayoutTodoDesktop>
      <section className={styles.section} >

        <div className={styles.section__header} >
          <h2 className={styles.section__header_title} > EXERCISES TODO LIST 01 </h2>
          <div>
            <h3>Detalles tecnicos: </h3>
            <p>Todo List con opciones Agregar, Editar, Eliminar y Completar. Almacenados en un useState Array. Estilos con CSS nativo</p>  
          </div>
        </div>

        <div className={styles.section__body} >
          <TodoList01/>
        </div>

      </section>
    </LayoutTodoDesktop>
  )
}
