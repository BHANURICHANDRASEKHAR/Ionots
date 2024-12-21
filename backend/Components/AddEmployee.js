import Form from "../Modals/TransactionSchema.js";
import express from 'express';
const router = express.Router();

export default router.post('/', async (req, res) => {
  const { Adminusername, title,deadline,assignedTo,assignedBy,description} = req.body;

  try {
   

    const newTask = await Form.create({
      Adminusername, title,deadline,assignedTo,assignedBy,description
    });

    res.status(200).send({ status: true, msg: 'Form Submitted Successfully', data: newTask });
  } catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
});
