const axios = require('axios');

exports.homeRoutes = (req, res) => {
    //send a get request to /api/users end-point
    axios.get('http://localhost:3000')
        .then(function (response) {
            //console.log(response.data);
            res.render('index', {users: response.data});
        })
        .catch(err => {
            res.send(err);
    })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000', { params: { id: req.query.id } })
        .then(function (userinfo){
            res.render("update_user", { user: userinfo.data });
        })
        .catch(err => {
            res.send(err);
    })
    //res.render('update_user');
}