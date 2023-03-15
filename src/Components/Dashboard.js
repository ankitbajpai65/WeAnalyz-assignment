import React from 'react';
import Footer from './Footer';

const Dashboard = () => {
    return (
        <>
            <div>
                <p className="text-center heading">Dashboard</p>
                <div className="boxDiv d-flex flex-row">
                    <div id="box-1" className="box text-center">
                        <p>Total Tickets</p>
                        <h1>12</h1>
                    </div>
                    <div id="box-2" className="box text-center">
                        <p>Total Solved</p>
                        <h1>8</h1>
                    </div>
                    <div id="box-3" className="box text-center">
                        <p>Total Awaiting Approval</p>
                        <h1>2</h1>
                    </div>
                    <div id="box-4" className="box text-center">
                        <p>Total in Progess</p>
                        <h1>2</h1>
                    </div>
                </div>
            </div>
            <Footer className="footer" />
        </>
    );
}

export default Dashboard;
