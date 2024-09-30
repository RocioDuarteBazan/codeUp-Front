import Home from "./views/Home/Home"
import Events from "./views/Events/Events"
import Places from "./views/Places/Places"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import EventOne from "./views/Event/EventOne"
import LayoutMain from "./views/LayoutMain"



import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventOne />} />
          <Route path="/places" element={<Places />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
