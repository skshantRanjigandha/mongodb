
const UserModel = require('../models/userModel.js')

const createUser = async function (req, res) {

    let data = req.body
    let savedData = await UserModel.create(data)

    res.send( { msg: savedData} )
}


const craea = async function (req, res) {


    let allUsers = await UserModel.find()

    res.send( { msg: allUsers } )
}



const allBooks = async function (req, res) {


  const authorDetails = await UserModel.find(authorName: "chetan Bhagat")

    res.send( { msg: allUsers } )

module.exports.createUser = createUser

module.exports.getUsersData = getUsersData
