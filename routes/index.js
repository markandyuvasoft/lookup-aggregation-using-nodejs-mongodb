import express from 'express'
import User from '../models/user.js'
import Data from '../models/data.js'


const indexrouter=express.Router()

// GET METHOD STUDENT START.............................................................................................
indexrouter.get("/user",async(req,res)=>{

   try{
       const get= await User.find()
   
       res.send(get)
      
       }catch(err){
   
        res.send(err)
       }
})
// GET METHOD STUDENT END.............................................................................................


// POST API START...........................................................................................................
indexrouter.post("/user",(req,res,next)=>{

  const user = new User(req.body)

  user.save().then(()=>{
      res.status(201).send(user)
  }).catch((err)=>{

      res.status(400).send(err)
  }) 
})
// POST API END..........................................................................................................



// GET METHOD STUDENT START.............................................................................................
indexrouter.get("/data",async(req,res)=>{

    try{
        const get= await Data.find()
    
        res.send(get)
       
        }catch(err){
    
         res.send(err)
        }
 })
 // GET METHOD STUDENT END.............................................................................................
 

// POST API START...........................................................................................................
indexrouter.post("/data",(req,res,next)=>{

    const data = new Data(req.body)
  
    data.save().then(()=>{
        res.status(201).send(data)
    }).catch((err)=>{
  
        res.status(400).send(err)
    }) 
  })
  // POST API END..........................................................................................................
  

indexrouter.get("/max",(req,res,next)=>{

    User.aggregate([
        { $lookup:
            {
               from: "datas",
               localField: "contact_name",
               foreignField: "name",
               as: "address"
            }
        }
    ])

    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'error occured!'
        })
    })
    
    })
    


 export default indexrouter

