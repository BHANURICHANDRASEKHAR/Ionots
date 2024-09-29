import React,{useState,useEffect, useContext} from 'react'
import getLogs from './getLogs.js'
import ViewStep from './ViewSteps.jsx'
import Loader from '../../Loader/Loader.jsx'
import { Context } from '../../Context/UserContext';
export default function ViewTransactions() {
    const {role,empdata,setempdata} =useContext(Context);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        if(empdata.length==0)
          {
            getLogs(setLoading,setempdata,role)
          }
     
    },[]);
    if(loading) {
        return <div className='d-flex justify-content-center'><Loader/></div>
    }
  return (
    <div className='container mt-4'>
    <h1 className="login-name mb-3 mt-4">View All Transactions</h1>
    <ViewStep transactions={empdata}/>
    </div>
  )
}
