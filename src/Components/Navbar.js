import React from 'react'
import '../styles/Navbar.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
    return (
        <>
            <div className="container-fluid navbar">
                <div className="row w-100">
                    <div className="col-2">
                        <h1 className="title">Helpdesk</h1>
                    </div>
                    <div className="offset-8 col-2 d-flex align-items-center">
                        <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
                            <Button className="bg-dark text-white fs-5 fw-bold navBtn">BM</Button>
                            <Button className="bg-white text-dark fs-5 fw-bold navBtn">BI</Button>
                        </ButtonGroup>
                        <NotificationsIcon className="col-3 navIcons ms-4" />
                        <PersonIcon className="col-3 navIcons ms-4" />
                        <LogoutIcon className="col-3 navIcons ms-4" />
                    </div>
                </div>
            </div>
            {/* <Routes>
                <Route index element={<Home />} />
                <Route path="/signin" element={<Signin />} />
            </Routes> */}
        </>
    )
}

export default Navbar;