import React from 'react';
import '../styles/Home.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard.js';
import NewTicket from './NewTicket.js';
import MyTicket from './MyTicket.js';
import Signin from './Signin.js';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-10 p-0">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="/new_ticket" element={<NewTicket />} />
                        <Route path="/my_ticket" element={<MyTicket />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;