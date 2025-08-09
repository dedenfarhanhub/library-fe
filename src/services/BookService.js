import apiClient from "./ApiClient";

export function getAllBooks() {
    return apiClient.get("/books");
}

export function getBookById(id) {
    return apiClient.get(`/books/${id}`);
}

export function createBook(data) {
    return apiClient.post("/books", data);
}

export function updateBook(id, data) {
    return apiClient.put(`/books/${id}`, data);
}

export function deleteBook(id) {
    return apiClient.delete(`/books/${id}`);
}
