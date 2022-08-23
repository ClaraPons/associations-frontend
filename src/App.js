import { BrowserRouter, Routes, Route } from "react-router-dom";

import Associations from "./pages/Associations"
import Association from "./pages/Association"
import Formulaire from "./pages/Formulaire"
import Admin from "./pages/Admin";


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Associations/>}/>
      <Route path='/:slug' element={<Association/>}/>
      <Route path='/formulaire' element={<Formulaire/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;