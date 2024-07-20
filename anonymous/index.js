const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/',(req,res)=>{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys++;
        }
    }
    const noOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    });
});

app.post('/',(req,res)=>{
    // puuting an unhealthy kedney
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done"
    });
});

//making kidneys healthy
app.put('/',(req,res)=>{
    if(isThereAtleastOneUnhealthyKidney()){
        for (let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else{
        res.status(411).json({msg: "all kidneys are healthy"});
    }
    
});

//removing all the unhealthy kidneys
app.delete('/',(req,res)=>{
    //only if atleast one unhealthy kidney is there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()){
        const newkidneys =[];
        for (let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newkidneys;
        res.json({msg: "done"});
    }
    else{
        res.status(411).json({msg: "you have no bad kidneys"});
    }



});

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port);