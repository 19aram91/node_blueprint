const User = require('../models/users');

const userCtrl = {
    addUser(req, res){
        let user = new User(req.body);
        user.save()
          .then(user=>res.json(user))
          .catch(err=>res.send(err))
    },

    listAllUsers(req, res){
        User.find({})
          .then(list=>res.json(list))
          .catch(err=>res.send(err))
    },

    getUser(req, res){
        User.findById(req.params.id)
          .then(user=>res.json(user))
          .catch(err=>res.send(err))
    },

    deleteUser(req, res){
        User.remove({_id: req.params.id})
          .then(res.json({ message: 'User successfully deleted' }))
          .catch(err=>res.send(err))
    },

    updateUserInfo(req,res){
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(user=>res.json(user))
            .catch(err=>res.send(err))
    }
}

module.exports = userCtrl;
