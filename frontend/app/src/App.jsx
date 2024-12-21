import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login/Login.jsx';
import { Context } from './components/Context/UserContext.jsx';
import getToken from './components/Context/token.js';
import { Toaster } from 'react-hot-toast';
import Loader from './Components/Loader/Loader.jsx';
import Router from './components/Navbar/Router.jsx';

function App() {
  const { show } = React.useContext(Context);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    const token = getToken();
    if (token) {
      setUser(token);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [show]);

  if (loading) {
    return <div className="d-flex justify-content-center"><Loader /></div>;
  }

  return (
    <React.Fragment>
      {user === null ? <Login /> : <Router />}
      <Toaster position="top-right" reverseOrder={true} />
    </React.Fragment>
  );
}

export default App;

// API endpoint
export const api = 'http://localhost:5000';
