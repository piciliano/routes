import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from '../pages/contact/contact'
import { Home } from '../pages/home/home'
import App from '../App'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}