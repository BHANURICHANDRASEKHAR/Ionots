import React from 'react';
import { useTable } from '@tanstack/react-table';

const TransactionTable = ({ data }) => {
  // Define the columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'Transaction Type',
        accessor: 'type', 
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  // Define the table instance with data and columns
  const tableInstance = useTable({ columns, data });

  // Destructure properties from tableInstance to build the UI
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headers from react-table
    rows, // rows for the table
    prepareRow, // function to prepare row
  } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
                key={column.id}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                    key={cell.id}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Sample data to populate the table
const transactionData = [
  {
    type: 'Invoice',
    amount: '1000',
    description: 'Invoice Payment',
    status: 'Pending',
  },
  {
    type: 'Expense',
    amount: '200',
    description: 'Office Supplies',
    status: 'Approved',
  },
  {
    type: 'Reimbursement',
    amount: '300',
    description: 'Travel Reimbursement',
    status: 'Rejected',
  },
];

// App Component
const App = () => {
  return (
    <div>
      <h1>Transaction Table</h1>
      <TransactionTable data={transactionData} />
    </div>
  );
};

export default App;
