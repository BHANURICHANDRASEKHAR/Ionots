import React, { useEffect, useState,useContext } from 'react'
import ViewTable from './ViewTable'
import getManagerLogs from './getAllLogs'
import Loader from '../../Loader/Loader'
import { Context } from '../../Context/UserContext'
import Nodata from '../../../Nodata'
export default function ViewAllTransactions() {
    const [loading,setLoading]=useState(false)
    const {userdata,setuserdata,role} =useContext(Context)
    useEffect(()=>{
        if(userdata.length==0)
        {

          getManagerLogs(setLoading,setuserdata,role)
        }
    },[])
    if(loading) {
        return <div className='d-flex justify-content-center'><Loader/></div>
    }
  return (
    <div  className='container mt-4'>
    <h1 className="login-name mt-4 mb-3">View All Transactions</h1>
    <div className='table-fluid'>
     {
       userdata.length==0  ? <Nodata/> : <ViewTable data={userdata}/>
     }
    </div>
    </div>
  )
}
