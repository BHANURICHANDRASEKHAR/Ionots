import Absentlist from "../Modals/TransactionSchema.js";
import express from 'express';
const router = express.Router();

export default router.post('/', async (req, res) => {
  const { username, email,transactionType,ammount,description} = req.body;

  try {
    const existingUser = await Absentlist.findOne({ email: email });
    
    if (existingUser) {
      
      return res.status(200).send({ status: false, msg: 'User already exists' });
    }

    const newUser = await Absentlist.create({
    UserName: username,
    userEmail: email,
    transactionType,  
    amount: ammount,
    description
    });

    res.status(200).send({ status: true, msg: 'Form Submitted Successfully', data: newUser });
  } catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
});
