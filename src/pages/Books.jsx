import { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import {
    createBook,
    updateBook,
    deleteBook,
    getBookById, getAllBooks,
} from "../services/BookService";
import Layout from "../components/Layout.jsx";
import useFetch from "../hooks/UseFetch.js";
import TableSkeleton from "../components/TableSkeleton.jsx";

export default function Books() {
    const [editData, setEditData] = useState(null);
    const { data: books, loading, fetchData: fetchBooks } = useFetch(getAllBooks);

    const handleCreate = async (data) => {
        if (editData) {
            await updateBook(editData.id, data);
            setEditData(null);
        } else {
            await createBook(data);
        }
        await fetchBooks();
    };

    const handleEdit = async (bookId) => {
        const freshData = await getBookById(bookId);
        setEditData(freshData);
    };

    const handleDelete = async (id) => {
        await deleteBook(id);
        await fetchBooks();
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Book Management</h1>
                <BookForm onSubmit={handleCreate} initialData={editData} />
                {loading ? (
                    <TableSkeleton />
                ) : (
                    <BookList
                        books={books || []}
                        onEdit={(b) => handleEdit(b.id)}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </Layout>
    );
}
