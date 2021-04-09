/* Funcion que formatea una fecha obtenida desde la 
    db con el formato yyyy-mm-dd */
const formatDate = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

/* Funcion que calcula la descripcion del tipo de 
    operacion de acuerdo a su id */
const convertTypeOperation = type_id => {
  const formatedType = type_id === 1 ? "Ingreso" : "Egreso";
  return formatedType;
};

/* Funcion que devuelve un array con las operaciones formateadas */
export const formatOperations = operations => {
  return operations.map(operation => {
    const {
      id,
      concept,
      amount,
      date_registered,
      type_operation_id,
    } = operation;

    /* Se formatea la fecha */
    const formatedDate = formatDate(date_registered);
    /* Se formatea el tipo de operacion */
    const formatedType = convertTypeOperation(type_operation_id);

    return { id, concept, amount, date: formatedDate, type: formatedType };
  });
};

/* Funcion que devuelve el token decodificado y permite que se 
    obtengan sus datos */
export const getUserFromToken = token => {
  if (token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error(error);
    }
  }
  return null;
};