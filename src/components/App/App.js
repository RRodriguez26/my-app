import './App.css';
import MovieList from '../../MovieList';
import {MovieProvider} from '../../MovieContext';
import AddMovie from '../../AddMovie';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess'

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <MovieList/>
      <AddMovie/>
      <Alert title="Items not added" type="error">
    <div>Your item are out of stock.</div>
  </Alert>
  <CartSuccess/>
    </div>
    </MovieProvider>
    
  );
}

export default App;
