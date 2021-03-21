import React from "react";
import styles from "./ListOperationsEdit.module.css";
import { formatMoney } from "accounting-js";
import ModalEdit from "components/ModalEdit";

export default function ListOperationsEdit({
  operations,
  handleChange,
  handleEdit,
  handleSubmit,
  amount,
  concept,
  date,
}) {
  return (
    <>
      <ModalEdit
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        amount={amount}
        concept={concept}
        date={date}
      />

      <h3 className="text-center mt-5 mb-3">Operaciones</h3>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              {operations.map(op => {
                return (
                  <li
                    key={op.id}
                    className="list-group-item list-group-item-action py-2"
                  >
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-column">
                        <p className="font-weight-lighter my-0">{op.date}</p>
                        <p className="font-weight-normal my-0">{op.type}</p>
                        <p className="font-weight-bolder my-0">{op.concept}</p>
                        <p className={styles.amount_list}>
                          {formatMoney(op.amount, "€", 2, ".", ",")}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleEdit(op.id)}
                          className="btn btn-primary mr-1"
                          type="button"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-danger ml-1">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
