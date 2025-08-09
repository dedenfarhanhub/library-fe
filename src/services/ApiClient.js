import toast from "react-hot-toast";

const API_URL =  import.meta.env.VITE_API_URL

async function request(endpoint, options = {}, showSuccess = false) {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        });

        const contentType = res.headers.get("content-type") || "";

        let data = null;

        if (contentType.includes("application/json")) {
            const text = await res.text();
            try {
                data = text ? JSON.parse(text) : null;
            } catch (parseErr) {
                console.warn("Failed to parse JSON:", parseErr);
                data = null;
            }
        }

        if (!res.ok) {
            const errorMsg =
                data && typeof data === "object" && data.error
                    ? data.error
                    : typeof data === "string"
                        ? data
                        : "Something went wrong";

            toast.error(errorMsg);
            return Promise.reject(errorMsg);
        }

        if (showSuccess) {
            toast.success(
                data && data.message
                    ? data.message
                    : "Success"
            );
        }

        return data;
    } catch (err) {
        console.error("API Error:", err);
        toast.error(err.message || "Something went wrong");
        return Promise.reject(err);
    }
}


export default {
    get: (endpoint) => request(endpoint),
    post: (endpoint, body, showSuccess = true) =>
        request(endpoint, { method: "POST", body: JSON.stringify(body) }, showSuccess),
    put: (endpoint, body, showSuccess = true) =>
        request(endpoint, { method: "PUT", body: JSON.stringify(body) }, showSuccess),
    patch: (endpoint, body, showSuccess = true) => {
        const options = { method: "PATCH" };
        if (body !== undefined && body !== null) {
            options.body = JSON.stringify(body);
        }
        return request(endpoint, options, showSuccess);
    },
    delete: (endpoint, showSuccess = true) =>
        request(endpoint, { method: "DELETE" }, showSuccess),
};
