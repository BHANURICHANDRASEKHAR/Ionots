/**getemplogs */
import express from 'express';
import ProjectsData from "../Modals/TransactionSchema.js";
const router=express.Router();
router.get('/', async (req, res) => {
  
    try {
      const users = await ProjectsData.find(req.query.role.assignedTo);
    
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;