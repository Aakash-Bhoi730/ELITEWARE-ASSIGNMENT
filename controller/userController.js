// const { response } = require('express');
const User = require( '../models/usermodel');


// GET ALL USERS 

const index = (req, res) => {   
    User.paginate({},{page:req.query.page ,limit:req.query.limit, sort: req.query.sort.name, orderBy: req.query.orderBy})
   User.find()
    .then(user => {
            res.status(200).json({
                data:user
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "An error Occured : " + error
            })
        })
}


//  Get User by ID

const show = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.status(200).json({
                data: user
            })
        })
        .catch(error => {
            res.status(400).json({
                message: 'An error Occured!', error
            })
        })
}
// POST User 
const add = (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    })
    user.save()
        .then(user => {
            res.status(201).json({
                message: 'user  Added Successfully!'
            })
        })
        .catch(error => {
            res.status(400).json({
                message: 'An error Occured!', error
            })
        })
}

// Update User By ID
const update = (req, res) => {
    let userId = req.params.id
    let updateData = ({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    })

    User.findByIdAndUpdate(userId, { $set: updateData })
        .then(user => {
            res.status(200).json({
                message: "User Updated Successfully !"
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "An error Occured!" + error
            })
        })
}

// Delete a user by ID

const destroy = (req, res) => {
    User.findOneAndRemove(req.params.id)
        .then(user => {
            res.status(200).json({
                message: "User Deleted Successfully "
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "An error occured " + error
            })
        })
}



module.exports = {
    index, add, show, update, destroy
};