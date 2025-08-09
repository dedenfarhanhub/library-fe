import Layout from "../components/Layout";
import TableSkeleton from "../components/TableSkeleton";
import LoanForm from "../components/LoanForm";
import LoanList from "../components/LoanList";
import { getAllLoans, createLoan, returnLoan } from "../services/LoanService";
import useFetch from "../hooks/UseFetch";

export default function Loans() {
    const { data: loans, loading, fetchData: fetchLoans } = useFetch(getAllLoans);

    const handleCreate = async (data) => {
        await createLoan(data);
        await fetchLoans();
    };

    const handleReturn = async (id) => {
        await returnLoan(id);
        await fetchLoans();
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Loan Management</h1>
                <LoanForm onSubmit={handleCreate} />
                {loading ? (
                    <TableSkeleton />
                ) : (
                    <LoanList
                        loans={loans || []}
                        onReturn={handleReturn}
                    />
                )}
            </div>
        </Layout>
    );
}
