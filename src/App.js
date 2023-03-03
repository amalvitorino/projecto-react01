import './App.css';
import Condicional from './components/Condiconal';
import Evento from './components/Evento';
import Form from './components/Form';
function App() {
const url = 'https://via.placeholder.com/150'
const nome = 'amal';
  return (
    <div className='App'>
      <h1>Renderizacao condicional</h1>
      <Condicional/>
    </div>
  );
}
export default App;
