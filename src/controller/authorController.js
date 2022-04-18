const  newauthorModel = require('../models/newauthorModel.js')

const createnewAuthor = async function (req, res) {
let data =req.body
let SavedData = await newauthorModel.create(data)
res.send({msg: SavedData})

}




    module.exports.createnewAuthor = createnewAuthor
  
   