import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailAccPage from "../pages/DetailAccPage";
import HomePage from "../pages/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/accommodation/:id" element={<DetailAccPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router