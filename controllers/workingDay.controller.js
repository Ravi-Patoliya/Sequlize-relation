const models =require('../models');
const WorkingDay = models.WorkingDay;

let createWorkingDay = (req,res)=>{
    let data ={
      weekDay:req.body.weekDay,
      isWorking:req.body.isWorking
    }
    WorkingDay.create(data)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while create WorkingDay creation : ", err)
  })
}

let getWorkingDay = (req,res)=>{
    WorkingDay.findAll({})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while get WorkingDays Data : ", err)
  })
}

let updateWorkingDay = (req,res)=>{
    let id = req.params.id; 
    let data ={
      weekDay:req.body.weekDay,
      isWorking:req.body.isWorking
    };

    WorkingDay.update(data,{where:{id:id}})
    .then(()=>{
        res.json('WorkingDay Data Updated SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Updating WorkingDay Data');
    })
}

let deleteWorkingDay =(req,res)=>{
    let id = req.params.id
    WorkingDay.destroy({where:{id:id}})
    .then(()=>{
        res.json('WorkingDay Deleted SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Delete WorkingDay');
    })
}

let findWorkingDayById =(req,res)=>{
    let id =req.params.id;
    WorkingDay.findByPk(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err,'error during get WorkingDaydata  by id');
    })
}
module.exports={
    createWorkingDay,
    getWorkingDay,
    updateWorkingDay,
    deleteWorkingDay,
    findWorkingDayById
}