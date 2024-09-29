/**getemplogs */
import express from 'express';
import Absentlist from "../Modals/TransactionSchema.js";
const router=express.Router();
router.get('/', async (req, res) => {
    const {_id,email}=req.query;
    
    try {
      const users = await Absentlist.find({userEmail: email}); 
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;