// setStatus
import express from 'express';
import Absentlist from "../Modals/TransactionSchema.js"; // Ensure the path to your model is correct
import mongoose from 'mongoose'; // Import mongoose to validate ObjectId

const router = express.Router();

router.post('/', async (req, res) => {
    const [userdata, value, mngdata] = req.body; // Destructure the incoming data from the request body
    const {_id}=userdata; 
 
    try {
        

        const userToUpdate = await Absentlist.findById(_id);

        if (!userToUpdate) {
            return res.status(404).send({ status: false, msg: 'Data Not Found' });
        }

        userToUpdate.status = value; 
        userToUpdate.resolvedBy=mngdata._id;
        userToUpdate.actionAt=new Date();
        await userToUpdate.save(); 
        res.status(200).send({ status: true, data: userToUpdate });
    } catch (e) {
        console.error('Error fetching user:', e.message); 
        res.status(500).send({ status: false, msg: 'Internal Server Error' }); // Send a generic error message
    }
});

export default router;
