export default function BookList({ books, onEdit, onDelete }) {
    return (
        <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Book List</h2>
            <table className="table-auto w-full border">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-2 py-1">ID</th>
                    <th className="border px-2 py-1">Title</th>
                    <th className="border px-2 py-1">ISBN</th>
                    <th className="border px-2 py-1">Stock</th>
                    <th className="border px-2 py-1">Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((b) => (
                    <tr key={b.id}>
                        <td className="border px-2 py-1">{b.id}</td>
                        <td className="border px-2 py-1">{b.title}</td>
                        <td className="border px-2 py-1">{b.isbn}</td>
                        <td className="border px-2 py-1">{b.stock}</td>
                        <td className="border px-2 py-1 space-x-2">
                            <button
                                onClick={() => onEdit(b)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(b.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
