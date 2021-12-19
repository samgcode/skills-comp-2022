import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router