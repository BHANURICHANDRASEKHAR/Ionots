import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import EmployeePage from '../Employee/EmployeePage';
import SubmitTransaction from '../Employee/Submit/TransactionForm';
import ViewTransactions from '../Employee/View/ViewTransactions';
import ViewLogs from '../AdminPage/ViewLogs/ViewLogs';
import ViewAllTransactions from '../AdminPage/ViewAll/ViewAllTransactions';
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
        
        {role.role === 'employee' && (
          <React.Fragment> 
            <Route path="/employee/transaction-submission-form" element={<SubmitTransaction />} />
            <Route path="/employee/view-transactions" element={<ViewTransactions />} />
          </React.Fragment>
        )}

        {role.role === 'manager' && (
          <React.Fragment>
            <Route path="/manager/view-all-transactions" element={<ViewAllTransactions />} />
            <Route path="/manager/view-audit-logs" element={<ViewLogs />} />
          </React.Fragment>
        )}

        {/* Redirect to home if user role doesn't match */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </React.Fragment>
  );
}
