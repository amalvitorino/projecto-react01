import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>

      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route  path="/empresa"><Empresa/></Route>
        <Route  path="/contato"><Contato/></Route>
      </Switch>
    </div>
  )
}
export default App;
