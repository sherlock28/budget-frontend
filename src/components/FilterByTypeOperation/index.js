import React from "react";
import styles from "./FilterByTypeOperation.module.css";

export default function FilterByTypeOperation({
  typeOperation,
  handleChangeSelect,
}) {
  return (
    <>
      <h3 className="text-center mt-5 mb-1">Filtrar por tipo de operación</h3>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="input-group mb-1">
              <select
                onChange={handleChangeSelect}
                className={`${styles.select} custom-select`}
                name="type_operation"
                value={typeOperation}
              >
                <option defaultValue value="Todos">Todos</option>
                <option value="Ingreso">Ingreso</option>
                <option value="Egreso">Egreso</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
