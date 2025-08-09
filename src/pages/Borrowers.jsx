import { useState } from "react";
import Layout from "../components/Layout";
import TableSkeleton from "../components/TableSkeleton";
import BorrowerForm from "../components/BorrowerForm";
import BorrowerList from "../components/BorrowerList";
import {
    getAllBorrowers,
    getBorrowerById,
    createBorrower,
    updateBorrower,
    deleteBorrower,
} from "../services/BorrowerService";
import useFetch from "../hooks/UseFetch";

export default function Borrowers() {
    const [editData, setEditData] = useState(null);
    const { data: borrowers, loading, fetchData: fetchBorrowers } = useFetch(getAllBorrowers);

    const handleCreate = async (data) => {
        if (editData) {
            await updateBorrower(editData.id, data);
            setEditData(null);
        } else {
            await createBorrower(data);
        }
        await fetchBorrowers();
    };

    const handleEdit = async (id) => {
        const data = await getBorrowerById(id);
        setEditData(data);
    };

    const handleDelete = async (id) => {
        await deleteBorrower(id);
        await fetchBorrowers();
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Borrower Management</h1>
                <BorrowerForm onSubmit={handleCreate} initialData={editData} />
                {loading ? (
                    <TableSkeleton />
                ) : (
                    <BorrowerList
                        borrowers={borrowers || []}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </Layout>
    );
}
