import React from 'react';
import { Button, Popconfirm } from 'antd';
import Cookie from 'js-cookie';
import {Context} from '../Context/UserContext.jsx'  
const App = () => {
  const {setShow,show}=React.useContext(Context)
  const handleConfirm = () => {
    Cookie.remove('x-token');
    setShow(!show);
    console.log('You clicked Logout!',show);
  };

  

  return (
    <div className='button  text-center '>
      <Popconfirm
        title="Are you sure to Logout?"
        onConfirm={handleConfirm}
        okText="Yes"
        cancelText="No"
        className="custom-popconfirm"
      >
        <Button className='btn1' >Logout</Button>
      </Popconfirm>
    </div>
  );
};

export default App;
