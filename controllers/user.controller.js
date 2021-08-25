
const models = require('../models');
const User = models.User;
const Company = models.Company;
const userWorkingDay = models.UsersWorkingDay;
const WorkingDay = models.WorkingDay;



let createUser = (req, res) => {
    let data = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyId: req.body.companyId
    }
    User.create(data)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log("Error while create user creation : ", err)
        })
}

let getUser = (req, res) => {
    User.findAll({
        include: [
            {
                model: Company, as: "company",

            }, {
                model:WorkingDay, through: {
                    model: userWorkingDay,
                    // where:{userId:2}
                  },as: "days"
            }
        ]
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log("Error while get Users Data : ", err)
        })
}

let updateUser = (req, res) => {
    let id = req.params.id;
    let data = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyId: req.body.companyId
    };

    User.update(data, { where: { id: id } })
        .then(() => {
            res.json('user Data Updated SuccessFully')
        }).catch(err => {
            console.log(err, 'Error During Updating User Data');
        })
}

let deleteUser = (req, res) => {
    let id = req.params.id
    User.destroy({ where: { id: id } })
        .then(() => {
            res.json('User Deleted SuccessFully')
        }).catch(err => {
            console.log(err, 'Error During Delete User');
        })
}

let findUserById = (req, res) => {
    let id = req.params.id;
    User.findByPk(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err, 'error during get userdata  by id');
        })
}
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    findUserById
}