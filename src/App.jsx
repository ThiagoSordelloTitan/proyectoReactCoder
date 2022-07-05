import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
      <ItemListContainer greeting={"Contador"} />
      <ItemDetailContainer />

      </body>
    </div>
  );
}

export default App;
