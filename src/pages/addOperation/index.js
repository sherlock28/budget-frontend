import React, { useState } from "react";
import { useLocation } from "wouter";
import saveOperations from "services/saveOperation";
import styles from "./AddOperation.module.css";

export default function AddOperation() {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const [amount, setAmount] = useState(0);
  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");
  const [typeOperation, setTypeOperation] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    name === "amount"
      ? setAmount(value)
      : name === "concept"
      ? setConcept(value)
      : name === "date_registered"
      ? setDate(value)
      : setTypeOperation(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      amount,
      concept,
      date_registered: date,
      type_operation: typeOperation,
    };
    saveOperations(data).then(res => pushLocation("/"));
  };

  return (
    <div className="row d-flex justify-content-center mt-5 mx-0">
      <div className="col-md-6 text-center">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Agregar operación</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  onChange={handleChange}
                  name="amount"
                  className={`${styles.font_size_custom} form-control`}
                  placeholder="$ Monto..."
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Ingresa el monto de la operación."
                  required
                />
              </div>

              <div className="form-group">
                <input
                  onChange={handleChange}
                  name="concept"
                  className={`${styles.font_size_custom} form-control`}
                  placeholder="Concepto..."
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Ingresa el concepto de la operación."
                  required
                />
              </div>

              <div className="form-group">
                <input
                  onChange={handleChange}
                  type="date"
                  name="date_registered"
                  max="3000-12-31"
                  min="1900-01-01"
                  className={`${styles.font_size_custom} form-control`}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Selecciona la fecha de la operación."
                  required
                />
              </div>

              <div className="input-group mb-3">
                <select
                  onChange={handleChange}
                  name="type_operation"
                  className={`${styles.font_size_custom} custom-select`}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Selecciona el tipo de la operación."
                >
                  <option defaultValue value="Egreso">
                    Egreso
                  </option>
                  <option value="Ingreso">Ingreso</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
