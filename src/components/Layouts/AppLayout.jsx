import React from 'react'
import { Outlet } from 'react-router';
import Nav from '../Nav';

function AppLayout() {
  return (
      <div className="container-fluid w-vw h-100 bg-dark text-white">
          <Nav />
          <Outlet />
    </div>
  );
}

export default AppLayout