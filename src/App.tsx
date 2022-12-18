import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Details from './pages/Details'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
    <NavBar />    
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Container>
  </>
  )
}

export default App
