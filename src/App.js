import styles from "./App.module.css";
import Navbar from 'components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className={styles.title}>Presupuesto personal</h1>
        <div className="row">
          <div className="col-sm-6">Aquí el balance total</div>
          <div className="col-sm-6">Aquí la lista de operaciones</div>
        </div>
      </div>
    </>
  );
}

export default App;
