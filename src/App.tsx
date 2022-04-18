import './App.css'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Styles/Responsive.scss'
import Home from './Page/Home'
import DetailTravel from './Page/DetailTravel'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailTravel />} />
      </Routes>
    </div>
  )
}

export default App
