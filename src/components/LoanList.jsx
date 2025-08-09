export default function LoanList({ loans, onReturn }) {
    return (
        <table className="w-full border">
            <thead>
            <tr>
                <th className="border p-2">Book</th>
                <th className="border p-2">Borrower</th>
                <th className="border p-2">Due Date</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {loans.map((loan) => (
                <tr key={loan.id}>
                    <td className="border p-2">{loan.book?.title}</td>
                    <td className="border p-2">{loan.borrower?.name}</td>
                    <td className="border p-2">
                        {new Date(loan.due_date).toLocaleDateString()}
                    </td>
                    <td className="border p-2">{loan.status}</td>
                    <td className="border p-2">
                        {!loan.returned_at && (
                            <button
                                onClick={() => onReturn(loan.id)}
                                className="bg-green-500 text-white px-2 py-1 rounded"
                            >
                                Return
                            </button>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
