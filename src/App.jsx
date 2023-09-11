
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./Module/Home"
import Layout from "./Layout/Layout"
import Project from "./Module/Project"
import Contact from "./Module/Contact"
import Carreer from "./Module/Career"

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/career" element={<Carreer/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
