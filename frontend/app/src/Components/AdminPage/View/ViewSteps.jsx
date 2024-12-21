import React, { useState } from 'react';
import { Steps, Pagination } from 'antd'; 
import Nodata from '../../../Nodata'
const App = ({ transactions }) => {
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
        paginatedTransactions.length === 0 ? (
          <Nodata />
        ) : (
          paginatedTransactions.map((transaction, index) => {
            const status1 = transaction.status;
            return (
              <div className="mb-2 border border-2 p-4" key={index}>
                <Tr list={transaction} />
                <Steps
                  items={[
                    {
                      title: 'Task Assigned',
                      subTitle: transaction?.createdAt?.slice(0, 10) || 'N/A',
                      status: 'finish', 
                    },
                    {
                      title: 'Pending',
                      status: status1 === 'Pending' ? 'process' : 'finish', // In process if Pending, else finished
                    },
                    {
                      title:  status1 === 'Accepted' ? 'Accepted' :'Rejected',
                      status: status1 === 'Accepted' ? 'process' : status1 === 'Complete' ? 'finish' : 'error', // Process if Accepted, finished if Complete, otherwise wait
                    },
                    {
                      title: 'Complete',
                      status: status1 === 'Complete' ? 'finish' : 'wait', 
                    },
                  ]}/>
              </div>
            );
          })
        )
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

const Tr = ({ list }) => {
  return (
    <div className='tr mb-3 mt-3'>
      <label className='m-1'>
        Title: <b>{list.title}</b>
      </label>
      <label className='m-1'>
        Project Deadline: <b>{list.deadline.slice(0,10)}</b>
      </label>
      <label className='m-1'>
        Project Assigned To: <b>{list.assignedTo}</b>
      </label>
      <label className='m-1'>
        Status: <b>{list.status}</b>
      </label>
    </div>
  );
};

const Filters = ({ handleEventChange, selectedEvent }) => {
  const Events = ['Pending', 'Rejected', 'Accepted','Complete'];
  return (
    <div>
      <select onChange={handleEventChange} value={selectedEvent} className='form-select mb-3 w-25'>
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
