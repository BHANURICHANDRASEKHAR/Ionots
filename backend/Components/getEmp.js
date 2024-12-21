import express from 'express';
import Employee from "../Modals/AddEmp.js";
const router=express.Router();
router.get('/', async (req, res) => {
    try {
      const users = await Employee.find({role:'employee'},{
        username:1,
        _id:1,
      });
    
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;