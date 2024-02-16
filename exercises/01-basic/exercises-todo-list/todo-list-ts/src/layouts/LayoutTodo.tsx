

// Layouts
import LayoutTodoMobile from "./LayoutTodoMobile"
import LayoutTodoDesktop from "./LayoutTodoDesktop"


const LayoutTodo = () => {

    if (window.innerWidth <= 425) {
        <LayoutTodoMobile/>
    }

    if (window.innerWidth > 425) {
        <LayoutTodoDesktop/>
    }

}

export default LayoutTodo