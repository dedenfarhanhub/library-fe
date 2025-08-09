import { useState, useEffect } from "react";

export default function BorrowerForm({ onSubmit, initialData }) {
    const [formData, setFormData] = useState({
        id_card_number: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ id_card_number: "", name: "", email: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 space-y-2">
            <input
                type="text"
                name="id_card_number"
                placeholder="ID Card Number"
                value={formData.id_card_number}
                onChange={handleChange}
                className="border p-2 w-full"
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                {initialData ? "Update Borrower" : "Add Borrower"}
            </button>
        </form>
    );
}
