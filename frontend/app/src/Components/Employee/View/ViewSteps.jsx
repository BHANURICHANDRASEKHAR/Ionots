import React, { useState } from 'react';
import { Steps, Pagination } from 'antd'; // Import Steps and Pagination from Ant Design

const App = ({ transactions }) => {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [pageSize, setPageSize] = useState(5); // Items per page

  // Pagination logic
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTransactions = transactions.slice(startIndex, endIndex);

  const onChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className='steps-small'>
      {paginatedTransactions.map((transaction, index) => {
        const status1 = transaction.status;
        return (
          <div className='mb-2 border border-2 p-4' key={index}>
            <Tr list={transaction} />
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
      })}

 
      <Pagination
        current={currentPage}
        total={transactions.length}
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
        Type: <b>{list.transactionType}</b>
      </label>
      <label className='m-1'>
        Amount: <b>{list.amount}</b>
      </label>
      <label className='m-1'>
        Status: <b>{list.status}</b>
      </label>
    </div>
  );
};
