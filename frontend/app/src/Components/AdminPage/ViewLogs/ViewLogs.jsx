import React,{useState,useEffect,useContext} from 'react'
import Loader from '../../Loader/Loader'
import { Context } from '../../Context/UserContext';
import LogStep from './LogsSteps.jsx'
import getLogs from './getLogs.js'
import Nodata from '../../../Nodata.jsx'
export default function ViewLogs() {
  const [loading,setloading]=useState(false);
  const {role,data,setdata}=useContext(Context);
  
  useEffect(()=>{
    if(data.length==0)
     {
      getLogs(setloading,setdata,role)
     }
  },[])
  if(loading)
  {
    return <div className='d-flex justify-content-center'><Loader/></div>
  }
return (
  <div className='container mt-4'>
  <h1 className="login-name mb-3 mt-4">Assigned Tasks Logs</h1>
  {data.length==0 ? <Nodata/>  :  <LogStep transactions={data} role={role} setdata={setdata}/>}
  </div>
)
}
