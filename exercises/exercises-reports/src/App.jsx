
import { useState } from 'react'
import { Header, Div, H2 } from 'nc-styles-react'

// Reports
import ReportHelloWorld from './js-pdf/exercises/hello-world/HelloWorld'
import ReportImage from './js-pdf/exercises/images/Image01'
import ReportMultiPage from './js-pdf/exercises/multi-pages/MultiPage'
import ReportFonts from './js-pdf/exercises/fonts/Font01'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <H2 textCenter colorGray800>REPORTS JS PDF</H2>
      </Header>
      
      {/* <ReportHelloWorld /> */}
      {/* <ReportImage /> */}
      {/* <ReportMultiPage /> */}
      <ReportFonts />
    </>
  )
}

export default App
