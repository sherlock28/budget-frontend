import { API_URL } from "services/settings";

export default function deleteOperation({id}) {
    return fetch(`${API_URL}/operations/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
