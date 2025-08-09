import { useState } from "react";
import useFetch from "../hooks/UseFetch.js";
import { getAllBooks } from "../services/BookService.js";
import { getAllBorrowers } from "../services/BorrowerService.js";

export default function LoanForm({ onSubmit }) {
    const { data: books, loading: loadingBooks } = useFetch(getAllBooks);
    const { data: borrowers, loading: loadingBorrowers } = useFetch(getAllBorrowers);

    const [formData, setFormData] = useState({
        book_id: "",
        borrower_id: "",
        due_date: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ book_id: "", borrower_id: "", due_date: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6 max-w-md">
            <label className="block">
                <span className="text-gray-700">Select Book</span>
                {loadingBooks ? (
                    <select disabled className="border p-2 w-full mt-1 rounded">
                        <option>Loading books...</option>
                    </select>
                ) : (
                    <select
                        name="book_id"
                        value={formData.book_id}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full mt-1 rounded"
                    >
                        <option value="" disabled>
                            -- Select Book --
                        </option>
                        {books.map((book) => (
                            <option key={book.id} value={book.id}>
                                {book.title}
                            </option>
                        ))}
                    </select>
                )}
            </label>

            <label className="block">
                <span className="text-gray-700">Select Borrower</span>
                {loadingBorrowers ? (
                    <select disabled className="border p-2 w-full mt-1 rounded">
                        <option>Loading borrowers...</option>
                    </select>
                ) : (
                    <select
                        name="borrower_id"
                        value={formData.borrower_id}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full mt-1 rounded"
                    >
                        <option value="" disabled>
                            -- Select Borrower --
                        </option>
                        {borrowers.map((b) => (
                            <option key={b.id} value={b.id}>
                                {b.name}
                            </option>
                        ))}
                    </select>
                )}
            </label>

            <label className="block">
                <span className="text-gray-700">Due Date</span>
                <input
                    type="date"
                    name="due_date"
                    value={formData.due_date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]} // gak boleh tanggal sebelum hari ini
                    className="border p-2 w-full mt-1 rounded"
                />
            </label>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
                Create Loan
            </button>
        </form>
    );
}
