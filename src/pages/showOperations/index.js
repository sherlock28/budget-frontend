import React, { useState } from "react";
import { useOperations } from "hooks/useOperations";
import ListOperationsEdit from "components/OperationsEdit";
import FilterByTypeOperation from "components/FilterByTypeOperation";
import updateOperation from "services/updateOperation";
import deleteOperation from "services/deleteOperation";
import getOperations from "services/getOperations";
import getOperationsByType from "services/getOperationByType";

export default function ShowOperations() {
  const [operations, setOperations] = useOperations();

  const [id, setId] = useState(null);
  const [amount, setAmount] = useState(0);
  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");
  const [typeOperation, setTypeOperation] = useState("Todos");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    if (name === "concept") setConcept(value);
    if (name === "date_registered") setDate(value);
  };

  const handleChangeSelect = e => {
    const { value } = e.target;
    if (value !== "Todos") {
      getOperationsByType({ typeOperation: value }).then(operations => {
        setOperations(operations);
        setTypeOperation(value);
      });
    } else {
      getOperations().then(op => {
        setOperations(op);
      });
    }
  };

  const handleDelete = id => {
    setId(id);
  };

  const handleSubmitDelete = () => {
    deleteOperation({ id }).then(res =>
      getOperations().then(op => setOperations(op))
    );
  };

  const handleEdit = id => {
    const op = operations.filter(op => op.id === id);
    setId(op[0].id);
    setAmount(op[0].amount);
    setConcept(op[0].concept);
    setDate(op[0].date);
  };

  const handleSubmitEdit = () => {
    updateOperation({ id, concept, amount, date_registered: date }).then(
      res => {
        getOperations().then(op => {
          setOperations(op);
        });
      }
    );
  };

  return (
    <>
      <FilterByTypeOperation
        typeOperation={typeOperation}
        handleChangeSelect={handleChangeSelect}
      />

      <ListOperationsEdit
        operations={operations}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmitEdit={handleSubmitEdit}
        handleDelete={handleDelete}
        handleSubmitDelete={handleSubmitDelete}
        amount={amount}
        concept={concept}
        date={date}
      />
    </>
  );
}
