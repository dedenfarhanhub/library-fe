import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;