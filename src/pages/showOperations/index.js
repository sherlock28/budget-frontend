import React, { useState } from "react";
import { useOperations } from "hooks/useOperations";
import ListOperationsEdit from "components/OperationsEdit";
import updateOperation from "services/updateOperation";
import getOperations from "services/getOperations";

export default function ShowOperations() {
  const [operations, setOperations] = useOperations();

  const [id, setId] = useState(null);
  const [amount, setAmount] = useState(0);
  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    if (name === "concept") setConcept(value);
    if (name === "date_registered") setDate(value);
  };

  const handleEdit = id => {
    const op = operations.filter(op => op.id === id);
    setId(op[0].id);
    setAmount(op[0].amount);
    setConcept(op[0].concept);
    setDate(op[0].date);
  };

  const handleSubmit = () => {
    updateOperation({ id, concept, amount, date_registered: date })
    .then(res => {
      getOperations().then(op => {
          setOperations(op);
        });
      });
  };

  return (
    <>
      <ListOperationsEdit
        operations={operations}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        amount={amount}
        concept={concept}
        date={date}
      />
    </>
  );
}
