import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from "./pages/Home"
import Viaggio from "./pages/Viaggio"
import { destinazioni } from './data/data'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Viaggio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
