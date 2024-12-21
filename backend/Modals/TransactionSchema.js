import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: false,
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', 
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  progress: {
    type: Number, 
    default: 0,
    required:false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  actionAt: {
    type: Date,
    
    required: false,
  },
  Adminusername:{
    type: String,
    required: true,
    ref: 'Admin',
  }
});

export default mongoose.model('Project', ProjectSchema);
