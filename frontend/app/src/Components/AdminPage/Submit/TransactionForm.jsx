import React from 'react';
import Image from './Img';
import Form from './Form';

export default function TransactionForm() {
  return (
    <div className="container-lg  mt-5">
      <div className="row">
        <div className="col-sm-6 ">
          <Image />
        </div>
        <div className="col-sm-6  ">
          <Form />
        </div>
      </div>
    </div>
  );
}
