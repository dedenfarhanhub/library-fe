import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Loans from "./pages/Loans";
import Borrowers from "./pages/Borrowers.jsx";

const root = document.getElementById("root");

createRoot(root).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/borrowers" element={<Borrowers />} />
                <Route path="/loans" element={<Loans />} />
            </Routes>
        </BrowserRouter>

        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 3000,
            }}
        />
    </>
);
