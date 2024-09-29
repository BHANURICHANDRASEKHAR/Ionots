import React,{useContext, useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { json, NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/logo.jpg';
import Logout from './Logout.jsx';
import getToken from '../Context/token.js';
import { Context } from '../Context/UserContext.jsx';
function BasicExample() {
  const {role} =useContext(Context);
 
  // useEffect(()=>{
  //   const token = getToken();
  //   if(token)
  //   {
  //     setUser(JSON.parse(token).username);
  //   }
  //   else{
  //     setUser('manager');
  //   }
  // },[]);
  const navbardata={
    'employee':[{
      to:'Transaction Submission Form',
      link:'/employee/transaction-submission-form'
    },{
      to:'View Transactions',
      link:'/employee/view-transactions'
    }],
    'manager':[{
      to:'View All Transactions',
      link:'/manager/view-all-transactions'
    },{
      to:'View Audit Logs',
      link:'/manager/view-audit-logs'
    }]
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ display: 'flex' }}>
      <Container>
        <img 
          src={logo} 
          className='medha' 
          alt="Company Logo" 
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  " >
            <NavLink to="/" className='me-5 mx-5'>Home</NavLink>
            {
              navbardata[role.role] &&
              navbardata[role.role].map((item,index) => (
                <NavLink key={index} to={item.link} className='me-5 '>{item.to}</NavLink>
              ))
            }
          </Nav>
          
          <Nav className="ms-auto  ">
            <NavLink className='me-5 mt-2 ' style={{color:'#1556ff',textTransform:'uppercase'}} ><b>{role.username}</b></NavLink>
            <Logout></Logout>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
