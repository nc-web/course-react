
import { Routes, Route } from 'react-router-dom'

// Views
import Home from '../views/home/Home.js'
import AboutAs from '../views/about/AboutDesktop.js'

// Todo List's
import SectionTL01 from '../views/todo-list-01/SectionTL01'
import SectionTL02 from '../views/todo-list-02/SectionTL02'


const routes = () => {

    return (
        <>
            <Routes>
                {/* <Route path='/' element={<LayoutDesktop/>}/> */}
                <Route index path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutAs/>} />
                <Route path='/todo-list-01' element={<SectionTL01/>}/>
                <Route path='/todo-list-02' element={<SectionTL02/>}/>
            </Routes>
        </>      
    )

}

export default routes