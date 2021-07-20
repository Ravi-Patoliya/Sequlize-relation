const models =require('../models');
const Company = models.Company;

let createCompany = (req,res)=>{
    let data ={
    name: req.body.name
    }
    Company.create(data)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while create Company creation : ", err)
  })
}

let getCompany = (req,res)=>{
    Company.findAll({})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log("Error while get Companys Data : ", err)
  })
}

let updateCompany = (req,res)=>{
    let id = req.params.id; 
    let data ={
        name: req.body.name
    };

    Company.update(data,{where:{id:id}})
    .then(()=>{
        res.json('Company Data Updated SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Updating Company Data');
    })
}

let deleteCompany =(req,res)=>{
    let id = req.params.id
    Company.destroy({where:{id:id}})
    .then(()=>{
        res.json('Company Deleted SuccessFully')
    }).catch(err=>{
        console.log(err,'Error During Delete Company');
    })
}

let findCompanyById =(req,res)=>{
    let id =req.params.id;
    Company.findByPk(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err,'error during get Companydata  by id');
    })
}
module.exports={
    createCompany,
    getCompany,
    updateCompany,
    deleteCompany,
    findCompanyById
}