const models =require('../models');
const userWorkingDay = models.UsersWorkingDay;

let createuserWorkingDay = (req,res)=>{
    let data ={
      userId:req.body.userId,
      workingDayId:req.body.workingDayId
    }
    userWorkingDay.create(data)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while create userWorkingDay creation : ", err)
  })
}

let getuserWorkingDay = (req,res)=>{
    userWorkingDay.findAll({})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while get userWorkingDays Data : ", err)
  })
}

let updateuserWorkingDay = (req,res)=>{
    let id = req.params.id; 
    let data ={
        userId:req.body.userId,
        workingDayId:req.body.workingDayId
    };

    userWorkingDay.update(data,{where:{id:id}})
    .then(()=>{
        res.json('userWorkingDay Data Updated SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Updating userWorkingDay Data');
    })
}

let deleteuserWorkingDay =(req,res)=>{
    let id = req.params.id
    userWorkingDay.destroy({where:{id:id}})
    .then(()=>{
        res.json('userWorkingDay Deleted SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Delete userWorkingDay');
    })
}

let finduserWorkingDayById =(req,res)=>{
    let id =req.params.id;
    userWorkingDay.findByPk(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err,'error during get userWorkingDaydata  by id');
    })
}
module.exports={
    createuserWorkingDay,
    getuserWorkingDay,
    updateuserWorkingDay,
    deleteuserWorkingDay,
    finduserWorkingDayById
}