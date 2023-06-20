//define api requests

// require mongoose schema,
// already defined in the../ model / model.js file.
var userDB = require('../model/model');

// DEFINING CRUD ACTIONS.

//create and save user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({message: "invalid request! content is empty"});
        return;
    }

    //new user instance
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save new user to database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "oops... error ocurred while creating a user"
            });
        });
}

//get all users (or a single user)
exports.find = (req, res) => {

   if (req.query.id) { //single user
       const id = req.query.id;

       userDB.findById(id)
           .then(data => {
               if (!data) {
                    res.status(404).send({message: `user with id ${id} not found`})
                } else {
                   res.send(data)
                }
            })
           .catch(err => {
               res.status(500).send({ message: `oops, something went wrong while fetchinng the user data with the id ${id}` })
            })
               
    } else { //all users
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "oops, something went wrong while fetchinng the user data"
                });
            });
    }
}

//update existing user by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400)
            .send({message: "error! update data is empty"})
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `unable to update the user with the ${id}, maybe user not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "oops, something went wrong while updating user data"
            });
        });
}

//delete a user by id
exports.delete = (req, res) => {
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `unable to delete user with the id ${id}, maybe id is invalid` })
            } else {
                res.send({
                    message: "user deleted successfully..."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `oops, something went wrong, unable to delete user with the id ${id}`
            });
        });
}