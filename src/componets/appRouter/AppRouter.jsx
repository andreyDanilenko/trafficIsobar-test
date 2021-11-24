import React from "react";
import ExamplePage from "../../pages/ExamplePage";
import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/example' element={<ExamplePage />} />
        </Routes>
    )
}

export default AppRouter;