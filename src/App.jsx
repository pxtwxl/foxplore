import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import GalleryPage from './Pages/GalleryPage'
import AboutUS from './Pages/AboutUS'
import TourDetail from './Pages/TourDetail'
import './App.css'

function About() {
  return <div>About Page</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>
    </Router>
  )
}

export default App