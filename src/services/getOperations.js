import { API_URL } from "services/settings";

export default function getOperations() {
  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { operations } = response.data;
      return operations;
    });
}
