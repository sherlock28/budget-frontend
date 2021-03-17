import Navbar from "components/Navbar";

import Home from "pages/home";
import AddOperations from 'pages/addOperation';
import EditOperations from "pages/editOperation";
import ShowOperations from 'pages/showOperations';

import { Route, Switch } from "wouter";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/agregar" component={AddOperations} exact/>
          <Route path="/editar/:id" component={EditOperations} exact/>
          <Route path="/operaciones" component={ShowOperations} exact/>
      </Switch>
    </>
  );
}

export default App;
