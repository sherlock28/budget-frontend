import React, { useState } from "react";
import { useLocation } from "wouter";
import { useOperations } from "hooks/useOperations";
import ListOperationsEdit from "components/OperationsEdit";

export default function ShowOperations() {
  // eslint-disable-next-line
  const [operations, setOperations] = useOperations();
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  // eslint-disable-next-line
  const [amount, setAmount] = useState(0);
  // eslint-disable-next-line
  const [concept, setConcept] = useState("");
  // eslint-disable-next-line
  const [date, setDate] = useState("");

  // eslint-disable-next-line
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    if (name === "concept") setConcept(value);
    if (name === "date_registered") setDate(value);
  };

  const handleEdit = id => {
    // eslint-disable-next-line
    const op = operations.filter(op => op.id === id);
    setAmount(op[0].amount);
    setConcept(op[0].concept);
    setDate(op[0].date)
  };

  return (
    <>
      <ListOperationsEdit
        operations={operations}
        handleChange={handleChange}
        handleEdit={handleEdit}
        amount={amount}
        concept={concept}
        date={date}
      />
    </>
  );
}
