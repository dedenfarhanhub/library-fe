import { useState, useEffect } from "react";

export default function BookForm({ onSubmit, initialData }) {
    const [form, setForm] = useState({ title: "", isbn: "", stock: "" });

    useEffect(() => {
        if (initialData) {
            setForm({
                title: initialData.title || "",
                isbn: initialData.isbn || "",
                stock: initialData.stock || "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(form);
        setForm({ title: "", isbn: "", stock: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-white rounded shadow">
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Book Title"
                className="border p-2 w-full"
                required
            />
            <input
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                placeholder="ISBN"
                className="border p-2 w-full"
                required
            />
            <input
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="Stock"
                type="number"
                className="border p-2 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
            </button>
        </form>
    );
}
