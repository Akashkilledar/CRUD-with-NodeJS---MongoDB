let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')
// let cors = require('cors')
// Cross-Origin Resource Sharing
// import cors for connections between frontend and backend
// It allows a client web application to interact with resources in a different domain.


mongoose.connect('mongodb://localhost:27017/company')
    .then((res) => {
        console.log('Database Connencted Successfull!!!');
    }).catch((err) => {
        console.log('Something Went wrong' + err);
    })


//Creating Employee Schema

let employeeSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    mobile: Number
});

//Cretaing Employee Model

let Employees = mongoose.model('employee', employeeSchema);

let app = express();
app.use(express.json());
app.use(bodyParser.json({limit : "15mb"}));
app.use(bodyParser.urlencoded({limit: "15mb"}));
app.use(cors());



app.get('/', (req, res) => {

    res.send("<h1>Node Server Running Successfully...</h1>")
});

app.get('/employees' , async (req,res) =>{

    try{
   let allEmployees=  await Employees.find({})

   console.log(allEmployees);
   res.json({status : "Success" , data : allEmployees})
    }catch(err){
res.json({status : "Failed", data: "Something Went Wrong"})
    }

});

app.get('/employees/:id', async (req, res) =>{
    try{
   let singleEmplyoee = await Employees.findById(req.params.id);
   res.json({status :"Succuess" , data: singleEmplyoee})
}catch(err){
    res.send({staus:"Failed" , body: "Something went Wrong"})
}
});

app.post('/employees' , async (req,res)=>{
    try{
    let body = req.body

   let singleEmplyoee = await Employees.create({
        name : body.name,
        surname : body.surname,
        email : body.email,
        mobile : body.mobile
    });
    console.log(singleEmplyoee);

    res.send({status : "success" , data : singleEmplyoee})
    }catch(err){
        res.send({status : "Failed", data :err})
    }
});

app.put('/employees/:id', async  (req,res)=>{
    try{
    // console.log(req.params.id);
    let  employeeID = req.params.id
    let body = req.body;
    let updatedEmployee =   await Employees.findByIdAndUpdate(employeeID , body, {new:true})
    res.send({status: "Upadted Employee", data :updatedEmployee})
    }catch(err){
        res.send({staus:"Failed" , body: "Something went Wrong"})
    }
});

app.delete('/employees/:id' , async (req,res)=>{
    try{
    let employeeID = req.params.id;
    let deletedEmployee = await Employees.findByIdAndDelete(employeeID);

    res.send(deletedEmployee)
    }catch(err){
        res.send({staus:"Failed" , body: "Something went Wrong"})
    }
})



app.listen(8081, () => {
    console.log("Server running on http://localhost:8081");

})