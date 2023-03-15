import React from 'react';
import '../css/Home.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard.js';
import NewTicket from './NewTicket.js';
import MyTicket from './MyTicket.js';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col-2 sidebar pt-5">
                    <span className="d-block border border-danger text-center p-3">
                        <img src={Dashboard} alt="" className="me-2" />
                        <span className="sidebarLinks">Dashboard</span>
                    </span>
                    <span className="d-block border border-danger text-center p-3">
                        <img src={New_Ticket} alt="" className="me-3" />
                        <span className="sidebarLinks">New Ticket</span>
                    </span>
                    <span className="d-block border border-danger text-center p-3">
                        <img src={My_Ticket} alt="" className="me-4" />
                        <span className="sidebarLinks">My Ticket</span>
                    </span>
                </div> */}
                <Sidebar />
                <div className="col-10">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="/new_ticket" element={<NewTicket />} />
                        <Route path="/my_ticket" element={<MyTicket />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;