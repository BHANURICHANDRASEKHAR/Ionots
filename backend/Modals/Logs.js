import mongoose from "mongoose";
const LogSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  managerEmail: {
    type: String, 
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Log", LogSchema);
