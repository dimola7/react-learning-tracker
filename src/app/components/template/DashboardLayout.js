import React from 'react';
import Navbar from '../Navbar/Navbar';

const DashboardLayout = ({children, title}) => {
    return (
        <>
            <Navbar title={title}/>
            <div>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout
