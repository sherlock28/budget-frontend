import Navbar from "components/Navbar";

import Home from "pages/home";
import AddOperations from "pages/addOperation";
import ShowOperations from "pages/showOperations";
import SignIn from "pages/signIn";
import SignUp from "pages/signUp";

import { Route, Switch } from "wouter";
import "./App.css";

import { UserContextProvider } from "context/UserContext";

/* Este el componente principal, donde se declara el navbar
    que sera comun a todas las paginas, las rutas disponibles 
    y la pagina que se mostrara por cada ruta*/
function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Switch>
        <Route path="/" component={SignUp} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/agregar" component={AddOperations} exact />
        <Route path="/operaciones" component={ShowOperations} exact />
        <Route path="/login" component={SignIn} exact />
      </Switch>
    </UserContextProvider>
  );
}

export default App;
