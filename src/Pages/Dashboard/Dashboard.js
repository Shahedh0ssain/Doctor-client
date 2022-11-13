import React from 'react';
import { Link,Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='mx-4'>
            <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl'>Dashboard</h1>
                <Outlet />
               
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>MY Appoinment</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;