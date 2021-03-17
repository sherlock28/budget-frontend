import { useState, useEffect } from "react";
import getOperations from 'services/getOperations';

export function useOperations() {
    const [operations, setOpertions] = useState([]);

    useEffect(() => {
        getOperations().then(resOperations => {
            setOpertions(resOperations)
        });
    }, []);

    return [operations];
}
