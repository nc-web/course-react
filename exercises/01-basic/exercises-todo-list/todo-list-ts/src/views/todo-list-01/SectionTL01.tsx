
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
          <h2 className={styles.section__header_title} > EXERCISE TODO LIST 01 </h2>
          <div>
            <h4 className={styles.section__header_autor}>Autor: </h4>
            <p>Andres Giraldo Arenas</p>  
          </div>
          <div>
            <h4 className={styles.section__header_tdetails}>Detalles tecnicos: </h4>
            <small>Todo List con opciones Agregar, Editar, Eliminar y Completar. Almacenados en un useState Array. Estilos con CSS nativo</small>  
          </div>
        </div>

        <div className={styles.section__body} >
          <TodoList01/>
        </div>

      </section>
    </LayoutTodoDesktop>
  )
}
