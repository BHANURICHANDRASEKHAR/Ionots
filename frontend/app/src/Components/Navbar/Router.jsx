import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import EmployeePage from '../Employee/EmployeePage';
import SubmitTransaction from '../AdminPage/Submit/TransactionForm';
import ViewTransactions from '../AdminPage/View/ViewTransactions';
import ViewLogs from '../Employee/ViewLogs/ViewLogs';
import ViewAllTransactions from '../Employee/ViewAll/ViewAllTransactions';
import Nav from './Nav'; 
import Home from '../Home';
import { Context } from '../Context/UserContext';
import PageNotFound from '../../PageNotFound';
export default function Router() {
  const { role } = React.useContext(Context); 

  if (!role) {
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {role.role === 'manager' && (
          <React.Fragment> 
            <Route path="/manager/project-assign-form" element={<SubmitTransaction />} />
            <Route path="/manager/view-all-assigned-tasks" element={<ViewTransactions />} />
          </React.Fragment>
        )}

        {role.role === 'employee' && (
          <React.Fragment>
            <Route path="/employee/view-assigned-tasks" element={<ViewAllTransactions />} />
            <Route path="/employee/view-all-tasks" element={<ViewLogs />} />
          </React.Fragment>
        )}

        
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </React.Fragment>
  );
}
