import exp from "express";
import cors from "cors";
import data from "./data.json" assert { type: "json" };;

const app=exp();
const port =3000;
app.listen(port,(err)=>console.log("server start running" ));
app.use(cors(
    {
        methods:["GET","DELETE","POST","PUT"],
        origin:"http://localhost:4200"
    }
))
app.get('',(req,res)=>res.send({message:"root"}));

app.get("/api/data",(req,res)=>res.send(data));