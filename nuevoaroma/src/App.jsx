import './App.css';
import NavBar from './components/containers/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Footer from './components/common/footer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
      </div>
      <div>
        <ItemListContainer>
        </ItemListContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;   


