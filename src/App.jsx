import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= "/" element={<ItemListContainer/>} />
        <Route path= "/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route path= "/cart" element={<Cart/>} />
        <Route path= "/detalle/:detalleId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
