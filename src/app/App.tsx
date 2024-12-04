import { Routes, Route } from 'react-router-dom'
import MainLayout from './routes/MainLayout'
import { Home, Headphones, Speakers, Earphones } from './pages'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="headphones"
          element={<Headphones />}
        />
        <Route
          path="speakers"
          element={<Speakers />}
        />
        <Route
          path="earphones"
          element={<Earphones />}
        />
      </Route>
    </Routes>
  )
}

export default App
