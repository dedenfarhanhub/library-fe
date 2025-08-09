import apiClient from "./ApiClient";

export function getAllLoans() {
    return apiClient.get("/loans");
}

export function getLoanById(id) {
    return apiClient.get(`/loans/${id}`);
}

export function createLoan(data) {
    return apiClient.post("/loans", data);
}

export function returnLoan(id) {
    return apiClient.patch(`/loans/${id}/return`, null);
}
