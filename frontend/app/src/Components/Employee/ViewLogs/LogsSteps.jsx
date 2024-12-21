import React, { useState } from 'react';
import { Steps, Pagination, Button } from 'antd'; 
import Nodata from '../../../Nodata.jsx'
import {setStatus} from './getLogs.js'
const App = ({ transactions,role,setdata  }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [pageSize, setPageSize] = useState(5); 
  const [selectedStatus, setSelectedStatus] = useState(''); 


  const filteredTransactions = selectedStatus
    ? transactions.filter((transaction) => transaction.status === selectedStatus)
    : transactions;

  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  const onChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleEventChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className='steps-small'>
      <Filters handleEventChange={handleEventChange} selectedEvent={selectedStatus} />

   {
    paginatedTransactions.length==0 ? <Nodata/> : paginatedTransactions.map((transaction, index) => {
      const status1 = transaction.status;
      return (
        <div className='mb-2 border border-2 p-4' key={index}>
          <Tr list={transaction} role={role} setdata={setdata} index={index} t_data={paginatedTransactions}/>
          <Steps
            current={status1 === 'Pending' ? 1 : 3}
            status={status1 === 'Reject' ? 'error' : 'process'}
            items={[
              {
                title: 'Transaction Submitted',
                subTitle: transaction.createdAt.slice(0, 10),
              },
              {
                title: 'Pending',
              },
              {
                title: status1 === 'Rejected' ? 'Rejected' : 'Approved',
                subTitle: transaction.actionAt,
                status: status1 === 'Rejected' ? 'error' : 'finish',
              },
            ]}
          />
        </div>
      );
    })
   }

      <Pagination
        current={currentPage}
        total={filteredTransactions.length}
        pageSize={pageSize}
        onChange={onChangePage}
        showSizeChanger
        showQuickJumper
      />
    </div>
  );
};

export default App;

const Tr = ({ list,role,setdata,index,t_data }) => {
  const [loading,setLoading]=useState(false)
  return (
    <div className='tr mb-3 mt-3'>
      <label className='m-1'>
        Title: <b>{list.title}</b>
      </label>
      <label className='m-1'>
        Project Deadline: <b>{list.deadline.slice(0,10)}</b>
      </label>
      <label className='m-1'>
        Project Assigned By: <b>{list.Adminusername}</b>
      </label>
      <label className='m-1'>
        Status: <b>{list.status}</b>
      </label>
      {
        (list.status!='Rejected' && list.status!='Completed') && <label className='mt-1'>
        <b>Change Project Status</b>&ensp;&ensp;
         <Button className='bg-success text-white' onClick={()=>{setStatus(list,'Completed',setLoading,index,setdata,t_data)}}>
                    {loading ? 'Loading...' : 'Complete'}
          </Button>
      </label>
      }
    </div>
  );
};


const Filters = ({ handleEventChange, selectedEvent }) => {
  const Events = [ 'Rejected', 'Approved'];

  return (
    <div className='mt-4'>
      <select onChange={handleEventChange} value={selectedEvent} className='form-select mb-3 w-lg-25'>
        <option value=''>Show All</option>
        {Events.map((event, index) => (
          <option key={index} value={event}>
            {event}
          </option>
        ))}
      </select>
    </div>
  );
};

