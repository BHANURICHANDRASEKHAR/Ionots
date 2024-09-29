import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from 'dotenv';
import MongooDB from './dataBase.js';
import getEmployeeLogs from "./Components/getEmpLogs.js";
import getUsers from './Components/getEmp.js'
import MngLogs from './Components/getMngLogs.js'
import ADDUser from './Components/addUser.js'
import LoginUser from './Components/loginUser.js'
import SetStatus from './Components/ChangeStatus.js'
import PerticularManager from './Components/Perticularmangerdata.js'
const app = express();
env.config();
MongooDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200, 
}));

import route from './Components/AddEmployee.js';
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/submitform', route);

app.use('/getEmployees', getUsers);


app.use('/adduser',ADDUser);
app.use('/getemplogs',getEmployeeLogs);
app.use('/getUsers', LoginUser);
app.use('/getmnglogs',MngLogs);
app.use('/setStatus',SetStatus);
app.use('/getPerticularmnglogs',PerticularManager)
var port=process.env.port || 5000

app.listen(port, () => {
    console.log(`Listening on port 5000`);
});
