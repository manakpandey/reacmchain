import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import AppBar from '../../components/header/Header';

import './factoryHome.css';

const FactoryHome = () => {
    return (
        <div className='container'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='content'>
                <AppBar title='Dashboard'/>
            </div>
        </div>
    )
}

export default FactoryHome;