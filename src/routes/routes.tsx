import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Template } from '../components/Template'
import { Contact } from '../pages/contact/contact'
import { Home } from '../pages/home/home'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="home" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}