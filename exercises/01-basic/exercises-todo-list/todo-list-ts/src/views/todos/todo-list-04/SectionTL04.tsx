
// Layout
import LayoutTodoDesktop from '../../../layouts/LayoutTodoDesktop'

// Styles
import styles from './SectionTL04.module.css' 

// Todo List
import TodoList04 from './TodoList04'


export default function SectionTL04 () {
  return (
    <LayoutTodoDesktop>
      <section className={styles.section} >

        <div className={styles.section__body} >
          <TodoList04/>
        </div>

        <div className={styles.section__header} >
          <h2 className={styles.section__header_title} > EXERCISE TODO LIST 04 </h2>
          <div>
            <h4 className={styles.section__header_autor}>Autor: </h4>
            <p>Andres Giraldo Arenas</p>  
          </div>
          <div>
            <h4 className={styles.section__header_tdetails}>Detalles tecnicos: </h4>
            <small>Todo List con opciones Agregar, Editar, Eliminar y Completar. Almacenados en un useState Array. Estilos con CSS nativo</small>  
          </div>
        </div>

      </section>
    </LayoutTodoDesktop>
  )
}
