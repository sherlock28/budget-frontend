import React from "react";

const handleChange = e => {
  const { name, value } = e.target;
  console.log(name, value);
};

const handleSubmit = e => {
  e.preventDefault();
};

export default function EditOperation() {
  return (
    <div className="row justify-content-center">
      <div className="col-auto text-center">
        <div className="card p-3">
          <div className="card-body">

            <h4 className="card-title">Agregar operación</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input
                  onChange={handleChange}
                  name="amount"
                  className="form-control"
                  placeholder="Monto..."
                  required
                />
              </div>

              <div className="form-group">
                <input
                  onChange={handleChange}
                  name="concept"
                  className="form-control"
                  placeholder="Concepto..."
                  required
                />
              </div>

              <div className="input-group mb-3">
                <select
                  onChange={handleChange}
                  name="type_operation"
                  className="custom-select"
                >
                  <option defaultValue>Tipo de operación...</option>
                  <option value="Egreso">Egreso</option>
                  <option value="Ingreso">Ingreso</option>
                </select>
              </div>

              <div className="form-group">
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
