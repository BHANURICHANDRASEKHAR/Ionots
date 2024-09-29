// import React, { useState } from 'react'
// import Input from '../../Login/Input.jsx'
// import ImageUploadForm from './AddImage.jsx'
// import add from '../../../assets/add.svg'
// import addData from './add.js'
// import { Context } from '../../Context/UserContext.jsx'
// import { useContext } from 'react'
// export default function InputList({data,setdata}) {
//   const [loading,setloading]=useState(false)
//   const {edit}=useContext(Context)
    // const onHandler=(e)=>{
    //     setdata({...data,[e.target.name]:e.target.value})
    // }
//     function submit()
//     {
//       if(edit)
//       {
//         addData(data,setloading,'editEmployee');
//       }
//       else{
//         addData(data,setloading,'addEmployee');

//       }
//     }
//        const Designation = ['HR',"Manager",'Sales']
//     const Gender=['Male','Female']
//     const Course=['MCA',"BCA","BSC"]
//   return (
//     <div className='container-fluid'>
//     <div className='row'>
//       <div className='col-sm-6 '>
//        <img src={add} className='svg-container h-100'/>
//       </div>
//       <div className='col-sm-6 mt-0 p-0  '>
//       <div className="Auth-form-container">
//       <div className="Auth-form-content">
//         <Input
//           label="name"
//           placeholder="Enter name"
//           type="text"
//           handler={onHandler}
//           value={data.name}
//           name="name"
//         />
//         <Input
//           label="email"
//           placeholder="Enter email"
//           type="email"
//           handler={onHandler}
//           value={data.email}
//           name="email"
//         />
//         <Input
//           label="Number"
//           placeholder="Enter Phone Number"
//           type="text"
//           handler={onHandler}
//           value={data.number}
//           name="number"
//         />
//         <MapStateToProps
//           label='Select Designation:'
//           data={Designation}
//           handler={onHandler}
//           value={data.Designation}
//           name='Designation'
//         />
//         <RadioGroup
// label="Select Gender:"
// data={Gender}
// handler={onHandler}
// value={data.gender}
// name="gender"
// />
// <CheckboxGroup
// label="Select Skills:"
// data={Course}
// handler={onHandler}
// value={data.skills}
// name="skills"
// />

// <ImageUploadForm setdata={setdata} data={data}/>
// <button className='btn btn-primary w-100 mt-3' onClick={submit} disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
//       </div>
//     </div>
//       </div>
//     </div>
//   </div>
  
//   )
// }
// const MapStateToProps=React.memo(({label,handler,value,data,name}) =>{
//   return(
//      <div className="form-group mt-2 w-100">
//      <label >{label} </label>
//      <select  value={value} onChange={handler} name={name} className='form-select mt-2 form-select-lg bg-light mb-3'> 
//        <option value="" disabled>-- Select --</option>
//          {data.map(branch => (
//            <option key={branch} value={branch}>{branch}</option>
//          ))}
//      </select>
//      </div>
//   )
//   })
//   const RadioGroup = React.memo(({ label, handler, value, data, name }) => {
//     return (
//       <div className="form-group mt-2 w-100">
//         <label>{label}</label>
//         <div className="mt-2">
//           {data.map((option, index) => (
//             <div key={index} className="form-check m-4 form-check-inline">
//               <input
//                 className="form-check-input "
//                 type="radio"
//                 name={name}
//                 value={option}
//                 checked={value === option}
//                 onChange={handler}
//               />
//               <label className="form-check-label">{option}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   });
//   const CheckboxGroup = React.memo(({ label, handler, value, data, name }) => {
//     const handleCheckboxChange = (event) => {
//       const selectedValue = event.target.value;
//       if (event.target.checked) {
//         handler({ target: { name, value: [...value, selectedValue] } });
//       } else {
//         handler({ target: { name, value: value.filter((item) => item !== selectedValue) } });
//       }
//     };
  
//     return (
//       <div className="form-group mt-3 w-100">
//         <label>{label}</label>
//         <div className="mt-2">
//           {data.map((option, index) => (
//             <div key={index} className="form-check m-3 form-check-inline">
//               <input
//                 className="form-check-input "
//                 type="checkbox"
//                 name={name}
//                 value={option}
//                 checked={value.includes(option)}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label">{option}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   });
  
import React,{useState,useEffect, useContext} from 'react'
import Input from '../../Login/Input'
import submissionForm from './formsubmit.js'
import { Context } from '../../Context/UserContext.jsx'
export default function Form() {
    const [data,setdata]=useState({
        transactionType:'',
        ammount:'',
        description:''

    })
    const type=[
      { text: 'Invoice', value: 'Invoice' },
      { text: 'Expense', value: 'Expense' },
      { text: 'Refund', value: 'Refund' },
      { text: 'Reimbursement', value: 'Reimbursement' }
    ]
    const {role}=useContext(Context)
    const [loading,setloading]=useState(false)
    const onHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    function submit()
    {
        submissionForm(setloading,data,role,setdata)
    }
  return (
    <div className="Auth-form-container mt-5">
    <h1 className="login-name m-4">Transaction Form</h1>
    <div className="Auth-form-content">
      
      <MapStateToProps
      label="Select Transaction Type "
       data={type}
      handler={onHandler}
      value={data.transactionType}
      name="transactionType"
    />
   

      <Input
        label="Ammount"
        placeholder="Enter Ammount"
        type="text"
        handler={onHandler}
        value={data.ammount}
        name="ammount"
      />
      <Input
        label="Description"
        placeholder="Enter Description"
        type="text"
        handler={onHandler}
        value={data.description}
        name="description"
      />
    
  <div className='d-flex justify-content-center mt-4'><button className='btn btn-primary w-50 mt-3' disabled={loading} onClick={submit}>{loading ? 'Loading ...' : "Submit"}</button>
  </div>
    </div>
  </div>
  )
}
const MapStateToProps=React.memo(({label,handler,value,data,name}) =>{
  return(
     <div className="form-group mt-2 w-100">
     <label >{label} </label>
     <select  value={value} onChange={handler} name={name} className='form-select mt-2 form-select-lg bg-light mb-3'> 
       <option value="" disabled>-- Select --</option>
         {data.map(branch => (
           <option key={branch} value={branch.value} className='text-dark'>{branch.text}</option>
         ))}
     </select>
     </div>
  )
  })