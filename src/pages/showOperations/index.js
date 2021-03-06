import React, { useState } from "react";

/* ------- HOOKS ------- */
import { useOperations } from "hooks/useOperations";
import { useUser } from "hooks/useUser";
import { useLocation } from "wouter";

/* ------- COMPONENTS ------- */
import ListOperationsEdit from "components/OperationsEdit";
import FilterByTypeOperation from "components/FilterByTypeOperation";
import NoOperationsYet from "components/NoOperationsYet";

/* ------- SERVICES ------- */
import updateOperation from "services/updateOperation";
import deleteOperation from "services/deleteOperation";
import getOperations from "services/getOperations";
import getOperationsByType from "services/getOperationByType";

/* Esta es la pagina ShowOperations la cual se divide en dos 
    componentes <FilterByTypeOperation/> y <ListOperationsEdit/>*/
export default function ShowOperations() {
  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();
  const { jwt, isLogged, userId } = useUser();

  /* Se obtiene las operaciones usando el hook useOperations() */
  const [operations, setOperations] = useOperations();

  /* Se crean los estados que representan los campos 
      en el formulario para editar las operaciones */
  const [amount, setAmount] = useState(0);
  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");

  /* Estado que representa el id de la operacion que fue 
      seleccionada para editar o para eliminar */
  const [id, setId] = useState(null);

  /* Estado que representa el filtro de tipo de 
      operacion seleccionado */
  const [typeOperation, setTypeOperation] = useState("Todos");

  /* Funcion que carga en los estados los valores obtenidos de 
      los campos del formulario de edicion de las operaciones */
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    if (name === "concept") setConcept(value);
    if (name === "date_registered") setDate(value);
  };

  /* Funcion que permite manejar que operaciones deben 
      ser mostradas de acuerdo al tipo de operacion que 
      se haya seleccionado en el filtro */
  const handleChangeSelect = e => {
    const { value } = e.target;
    if (value !== "Todos") {
      if (isLogged) {
        getOperationsByType({ typeOperation: value, jwt, userId }).then(
          operations => {
            setOperations(operations);
            setTypeOperation(value);
          }
        );
      }
    } else {
      if (isLogged) {
        getOperations({ jwt, userId }).then(op => {
          setOperations(op);
          setTypeOperation(value);
        });
      }
    }
  };

  /* Funcion que setea el estado con el id de 
      la oparacion a borrar */
  const handleDelete = id => {
    setId(id);
  };

  /* Funcion que llamar al servicio para borrar una operacion 
      cuando se confirma la decision */
  const handleSubmitDelete = () => {
    if (isLogged) {
      deleteOperation({ id, jwt }).then(res =>
        getOperations({ jwt, userId }).then(op => setOperations(op))
      );
    }
  };

  /* Funcion que permite cargar los campos del formulario de 
      edicion con los valores de los estados que lo representan */
  const handleEdit = id => {
    const op = operations.filter(op => op.id === id);
    setId(op[0].id);
    setAmount(op[0].amount);
    setConcept(op[0].concept);
    setDate(op[0].date);
  };

  /* Funcion que llamar al servicio para actualizar una operacion */
  const handleSubmitEdit = () => {
    if (isLogged) {
      updateOperation({ id, concept, amount, date_registered: date, jwt }).then(
        res => {
          getOperations({ jwt, userId }).then(op => {
            setOperations(op);
          });
        }
      );
    }
  };

  if (!isLogged) pushLocation("/login");

  return (
    <>
      <FilterByTypeOperation
        typeOperation={typeOperation}
        handleChangeSelect={handleChangeSelect}
      />

      <div className="container">
        <div className="row">
          {operations.length === 0 ? (
            <div className="col-md-12">
              <NoOperationsYet />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
