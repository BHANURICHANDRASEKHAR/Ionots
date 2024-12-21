import React,{useContext, useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/logo.png';
import Logout from './Logout.jsx';
import { Context } from '../Context/UserContext.jsx';
function BasicExample() {
  const {role} =useContext(Context);
  
  const navbardata={
    'employee':[{
      to:'View Assigned Tasks',
      link:'/employee/view-assigned-tasks'
    },{
      to:'View All Tasks',
      link:'/employee/view-all-tasks'
    }],
    'manager':[{
      to:'Project Assign Form',
      link:'/manager/project-assign-form'
    },{
      to:'View All Assigned Tasks',
      link:'/manager/view-all-assigned-tasks'
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
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" className='mt-3 p-3'>
          <Nav className="me-auto  " >
            <NavLink to="/" className='me-lg-5 mx-lg-5 fs-4'>Home</NavLink>
            {
              navbardata[role.role] &&
              navbardata[role.role].map((item,index) => (
                <NavLink key={index} to={item.link} className='me-5 fs-4'>{item.to}</NavLink>
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
