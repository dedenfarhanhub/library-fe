function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Library Loan</h1>
                <ul className="flex gap-4">
                    <li>
                        <a href="/" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/books" className="hover:underline">
                            Books
                        </a>
                    </li>
                    <li>
                        <a href="/borrowers" className="hover:underline">
                            Borrowers
                        </a>
                    </li>
                    <li>
                        <a href="/loans" className="hover:underline">
                            Loans
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;