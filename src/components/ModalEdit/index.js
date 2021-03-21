import React from "react";

export default function ModalEdit({ handleChange, handleSubmitEdit, amount, concept, date }) {

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Editar operación
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    name="amount"
                    value={amount || ''}
                    className="form-control"
                    placeholder="$ Monto..."
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ingresa el monto de la oparación."
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    onChange={handleChange}
                    name="concept"
                    value={concept || ''}
                    className="form-control"
                    placeholder="Concepto..."
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ingresa el concepto de la oparación."
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    onChange={handleChange}
                    type="date"
                    name="date_registered"
                    value={date || ''}
                    max="2100-12-31"
                    min="1950-01-01"
                    className="form-control"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Selecciona la fecha de la oparación."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                onClick={handleSubmitEdit}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
