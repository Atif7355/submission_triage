const express = require("express");

const Router = express.Router();

const dbconnected = require("./dbconnection");

Router.get("/" , (req , res)=>{
    const data=[{name:"yogayata" , email:"yogayatajugnu@gmail.com"}];
    res.send(data);
});

Router.get("/api/model" , (req , res) =>{
    dbconnected.query("select * from model" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/users" , (req , res) =>{
    dbconnected.query("select * from users" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/overview" , (req , res) =>{
    dbconnected.query("select * from overview" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.put("/api/updateEntrycur/:id" , (req , res) =>{
    const updatedata =  req.body.mapto
    var sql = "UPDATE curlist SET mapto=? where id='"+req.params.id+"' ";
    dbconnected.query( sql , updatedata , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Updated Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});


Router.put("/api/updateEntrycurup/:id" , (req , res) =>{
    const updatedata =  req.body.mapto
    var sql = "UPDATE curlist SET mapto=? where id='"+req.params.id+"' ";
    dbconnected.query( sql , updatedata , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Updated Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});


Router.get("/api/curlist" , (req , res) =>{
    dbconnected.query("select * from curlist" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});


Router.get("/api/modelf" , (req , res) =>{
    dbconnected.query("select * from modelf" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});


Router.get("/api/filter" , (req , res) =>{
    dbconnected.query("select * from filter" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/filter2" , (req , res) =>{
    dbconnected.query("select * from filter2" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/triage" , (req , res) =>{
    dbconnected.query("select * from triage" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/distriage1" , (req , res) =>{
    dbconnected.query("select  rules , rel1 , rel2 , cur from triage where cur=1 LIMIT 1 " , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/distriage2" , (req , res) =>{
    dbconnected.query("select  rules , rel1 , rel2 , cur from triage where cur=2 LIMIT 1" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.get("/api/distriage3" , (req , res) =>{
    dbconnected.query("select rules , rel1 , rel2 , cur from triage where cur=3 LIMIT 1" , (err , rows , fields) =>
    {
     if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});


Router.put("/api/updatet1/:id" , (req , res) =>{

    var sql = "UPDATE triage SET cur=? where id="+req.body.id+" ";

    const up = [req.body.cur];

    dbconnected.query( sql ,up, (err , rows , fields) =>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});


Router.put("/api/updatetriage1" , (req , res) =>{

    var sql = "UPDATE triage SET cur=? where cur=1 ";

    const up = [req.body.cur];

    dbconnected.query( sql ,up, (err , rows , fields) =>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.put("/api/updatetriage2" , (req , res) =>{

    var sql = "UPDATE triage SET cur=? where cur=2 ";

    const up = [req.body.cur];

    dbconnected.query( sql ,up, (err , rows , fields) =>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.put("/api/updatetriage3" , (req , res) =>{

    var sql = "UPDATE triage SET cur=? where cur=3 ";

    const up = [req.body.cur];

    dbconnected.query( sql ,up, (err , rows , fields) =>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.post("/api/addEntry" , (req , res) =>{
    
    const rule =  req.body.rule;
    const rel1 =  req.body.rel1;
    const rel2 =  req.body.rel2;
    const cur =  req.body.cur;
    
    dbconnected.query(` INSERT INTO triage ( rules , rel1 , rel2 , cur ) VALUES ( "${rule}" ,"${rel1}" , "${rel2}" , "${cur}" )` , (err , rows , fields) =>
    {
        if(!err)
        {
            res.status(200).json({success:" Entry Added!! "});
        }
        else
        {
            console.log(err);
        }
    });
});

Router.post("/api/addEntrycur" , (req , res) =>{
    
    const name =  req.body.name;
    const datem =  req.body.datem;
    const empid =  req.body.empid;
    const mapto =  req.body.mapto;
    const type = req.body.type;
    
    dbconnected.query(` INSERT INTO curlist ( name , datem , empid , mapto , type ) VALUES ( "${name}" ,"${datem}" , "${empid}" , "${mapto}" , "${type}" )` , (err , rows , fields) =>
    {
        if(!err)
        {
            res.status(200).json({success:" Entry Added!! "});
        }
        else
        {
            console.log(err);
        }
    });
});

Router.delete("/api/deleteEntry1" , (req , res) =>{
    dbconnected.query( "DELETE FROM triage where cur=1 " , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Deleted Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});


Router.delete("/api/deleteEntry2" , (req , res) =>{
    dbconnected.query( "DELETE FROM triage where cur=2 " , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Deleted Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});

Router.delete("/api/deleteEntrycur/:id" , (req , res) =>{
    dbconnected.query( "DELETE FROM curlist where id='"+req.params.id+"' " , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Deleted Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});

Router.delete("/api/deleteEntry3" , (req , res) =>{
    dbconnected.query( "DELETE FROM triage where cur=3 " , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Deleted Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });
});



Router.put("/api/over/:inputValue2" , (req , res) =>{

    var sql = "UPDATE queue SET c_name=? , b_name=? , exp=?, days=?, ind_group=? , pro=? , rec1=? , rec2=? , rec3=? ,status=? where id='"+req.params.id+"' ";
    dbconnected.query( "select SUM(no_sum) As no_sum from overview where date_f="+req.params.inputValue2+" " , (err , rows , fields) =>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

Router.put("/api/updateEntrymodel" , (req , res) =>{

    const updatedata7 = [req.body.new1 ,req.body.new2 , req.body.new3 , req.body.new4 , req.body.new5 , req.body.new6 , req.body.new7 ];

    var sql7 = "UPDATE model SET cur=? where id='7' ";

    const new1 = [req.body.new1];
    const new2 = [req.body.new2];
    const new3 = [req.body.new3];
    const new4 = [req.body.new4];
    const new5 = [req.body.new5];
    const new6 = [req.body.new6];
    const new7 = [req.body.new7];

   var sqlq = "UPDATE model  SET cur = CASE id WHEN 1 THEN ?  WHEN 2 THEN ? WHEN 3 THEN ? WHEN 4 THEN ? WHEN 5 THEN ? WHEN 6 THEN ? WHEN 7 THEN ? END WHERE id BETWEEN 1 AND 7";
    dbconnected.query( sqlq , updatedata7 , (err , result) =>
    {
        if(!err)
        {
            res.status(200).json({success:"Data Updated Successfully!!"});
        }
        else
        {
            console.log(err);
        }
    });

});

module.exports = Router