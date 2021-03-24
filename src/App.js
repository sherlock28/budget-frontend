import Navbar from "components/Navbar";

import Home from "pages/home";
import AddOperations from 'pages/addOperation';
import ShowOperations from 'pages/showOperations';

import { Route, Switch } from "wouter";
import "./App.css";

/* Este el componente principal, donde se declara el navbar
    que sera comun a todas las paginas, las rutas disponibles 
    y la pagina que se mostrara por cada ruta*/
function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/agregar" component={AddOperations} exact/>
          <Route path="/operaciones" component={ShowOperations} exact/>
      </Switch>
    </>
  );
}

export default App;
