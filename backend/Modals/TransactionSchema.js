import mongoose from "mongoose";
const TransactionSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  UserName:{
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  actionAt:{
    type: Date,
  
  },  
  resolvedBy:{
    type: String,
    default: null,
}
});

export default mongoose.model("Transaction", TransactionSchema);
