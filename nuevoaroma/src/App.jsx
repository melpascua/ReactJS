import './App.css';
import NavBar from './components/containers/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/common/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ItemListContainer}/>
          <Route path='/categoria/:categoriaId' element={ItemListContainer}/>
          <Route path='/item/:itemId' element={ItemDetailContainer}/>
          <Route path='*' element={<h2>404 NOT FOUND</h2>}/>

        </Routes>
        </BrowserRouter>
        <NavBar></NavBar>
      </div>
      <div>
        <ItemListContainer>
        </ItemListContainer>
      </div>
      <div>
        <ItemDetailContainer></ItemDetailContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;   


