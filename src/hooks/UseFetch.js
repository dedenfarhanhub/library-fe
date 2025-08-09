import { useState, useEffect, useCallback } from "react";

export default function useFetch(apiFn) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const result = await apiFn(...args);
            setLoading(false)
            setData(result);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err);
            setData([]);
        }
    }, [apiFn]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, fetchData };
}
