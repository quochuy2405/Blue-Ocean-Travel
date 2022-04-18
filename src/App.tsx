import { Route, Routes } from 'react-router-dom'
import { Home, DetailTravel } from './page'

function App(): JSX.Element {
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
