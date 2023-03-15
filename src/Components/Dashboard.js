import React from 'react';
import Footer from './Footer';

const box = [
    {
        spec: 'Total Tickets',
        total: 12
    },
    {
        spec: 'Total Solved',
        total: 8
    },
    {
        spec: 'Total Awaiting Approval',
        total: 2
    },
    {
        spec: 'Total in Progess',
        total: 2
    },
]
const Dashboard = () => {
    return (
        <>
            <div>
                <p className="text-center heading">Dashboard</p>
                <div className="boxDiv d-flex flex-row">
                    {
                        box.map((val, index) => {
                            return (
                                <div id={`box-${index + 1}`} className="box text-center">
                                    <p>{val.spec}</p>
                                    <h1>{val.total}</h1>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Footer className="footer" />
        </>
    );
}

export default Dashboard;
