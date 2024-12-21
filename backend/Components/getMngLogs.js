// getmnglogs
/**getemplogs */
import express from 'express';
import FormData from "../Modals/TransactionSchema.js";
const router=express.Router();
router.get('/', async (req, res) => {
   
    try {
      const data = await FormData.find({assignedBy:req.query._id}); 
      console.log(data);
      res.status(200).send({ status: true, data: data });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;