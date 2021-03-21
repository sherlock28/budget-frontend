import { API_URL } from "services/settings";
import { convertTypeOperation, formatDate } from "libs/libs";

export default function getOperations() {
  return fetch(`${API_URL}/operations`)
    .then(res => res.json())
    .then(response => {
      const { operations } = response.data;

      const formatedOperations = operations.map(operation => {
        const {
          id,
          concept,
          amount,
          date_registered,
          type_operation_id,
        } = operation;

        const formatedDate = formatDate(date_registered);
        const formatedType = convertTypeOperation(type_operation_id);

        return { id, concept, amount, date: formatedDate, type: formatedType };
      });

      return formatedOperations;
    });
}
