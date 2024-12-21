// setStatus
import express from "express";
import Absentlist from "../Modals/TransactionSchema.js"; 


const router = express.Router();

router.post("/", async (req, res) => {
  const [userdata, value] = req.body; 
  const { _id } = userdata;
  console.log(_id)
  try {
    const userToUpdate = await Absentlist.findById(_id);

    if (!userToUpdate) {
      return res.status(404).send({ status: false, msg: "Data Not Found" });
    }

    userToUpdate.status = value;
    userToUpdate.actionAt = new Date();
    await userToUpdate.save();
    res.status(200).send({ status: true, data: userToUpdate });
  } catch (e) {
    console.error("Error fetching user:", e.message);
    res.status(500).send({ status: false, msg: "Internal Server Error" }); 
  }
});

export default router;
