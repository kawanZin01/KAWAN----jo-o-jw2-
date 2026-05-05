 const userModel = require ("../models/userModel")


function getALLUsers(request, response) {
       const users =  userModel.findALL()

    return response.json(users)
}

module.exports = {
    getALLUsers
}