import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
function App() {
const url = 'https://via.placeholder.com/150'
const nome = 'amal';
  return (
    <div className='App'>
      < Frase />
      < SayMyName name = {nome}/>
      < Pessoa nome="Amal" idade = "17" foto = {url}/>
    </div>
  );
}
export default App;
