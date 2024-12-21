// getPerticularmnglogs

import express from 'express';
import Data from "../Modals/TransactionSchema.js";
const router=express.Router();
router.get('/', async (req, res) => {
    const {_id}= req.query;
   console.log(req.query._id)
    try {
      const users = await Data.find({assignedTo :_id});
      console.log(users); 
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;