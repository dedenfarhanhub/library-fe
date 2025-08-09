export default function TableSkeleton({ rows = 5 }) {
    return (
        <div className="animate-pulse overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: rows }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                        {Array.from({ length: 4 }).map((_, colIdx) => (
                            <td key={colIdx} className="px-6 py-4 whitespace-nowrap">
                                <div className="h-4 bg-gray-300 rounded"></div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
