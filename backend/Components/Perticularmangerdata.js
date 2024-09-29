// getPerticularmnglogs

import express from 'express';
import Absentlist from "../Modals/TransactionSchema.js";
const router=express.Router();
router.get('/', async (req, res) => {
    const {_id}= req.query;
   
    try {
      const users = await Absentlist.find({resolvedBy:_id}); 
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;