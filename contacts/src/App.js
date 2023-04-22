import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'

export default function App() {
    return (
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Users/>} />
                        <Route path='/create' element={<CreateUser/>} />
                        <Route path='/update/user/:id' element={<UpdateUser/>} />
                    </Routes>
                </BrowserRouter>
            </div>
    );
}
