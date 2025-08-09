export default function BorrowerList({ borrowers, onEdit, onDelete }) {
    return (
        <table className="w-full border">
            <thead>
            <tr>
                <th className="border p-2">ID Card</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {borrowers.map((b) => (
                <tr key={b.id}>
                    <td className="border p-2">{b.id_card_number}</td>
                    <td className="border p-2">{b.name}</td>
                    <td className="border p-2">{b.email}</td>
                    <td className="border p-2 space-x-2">
                        <button
                            onClick={() => onEdit(b.id)}
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
    );
}
