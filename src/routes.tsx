import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produtos } from './pages/Produtos'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
        <Route
          path='/produto/:id'
          element={<Produtos />}
        />
      </Routes>
    </BrowserRouter>
  )
}
