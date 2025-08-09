import apiClient from "./ApiClient";

export function getAllBorrowers() {
    return apiClient.get("/borrowers");
}

export function getBorrowerById(id) {
    return apiClient.get(`/borrowers/${id}`);
}

export function createBorrower(data) {
    return apiClient.post("/borrowers", data);
}

export function updateBorrower(id, data) {
    return apiClient.put(`/borrowers/${id}`, data);
}

export function deleteBorrower(id) {
    return apiClient.delete(`/borrowers/${id}`);
}
