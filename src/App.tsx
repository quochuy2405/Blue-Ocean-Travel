import { Route, Routes } from 'react-router-dom'
import { Home, DetailTravel, Travel } from './page'


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/:id" element={<DetailTravel />} />
      </Routes>
    </div>
  )
}

export default App
