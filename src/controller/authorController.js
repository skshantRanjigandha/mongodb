
const authorModel = require('../models/authorModel.js')

const bookAuthorModel = require('../models/bookAuthorModel.js')

const createAuthor = async function (req, res) {
let data = req.body

let savedData = await authorModel.create(data)

  res.send( { msg: savedData } )

}
 


const createBooks = async function (req, res) {
    let data = req.body
    
    let bookData = await bookAuthorModel.create(data)

    res.send( { msg: bookData } )

}


const findBooks = async function (req, res) {

    let data = req.body.author_Name
    let auth_id = await authorModel.find({author_Name: data})

    console.log(auth_id)

    let findBookData = await bookAuthorModel.find({author_id : auth_id[0].author_id}).select({name:1,_id:0})
    res.send( { msg: findBookData } )

}

const findUpdatedBooks = async function (req, res) {

    let data = req.body.name
    let auth_id = await bookAuthorModel.findOneAndUpdate({name: data}, {$set:{price: 100}, data},{new:true})

    console.log(auth_id)

    let updateData = await authorModel.find({author_id:  auth_id.author_id}).select({name: "two states",_id:0})
       console.log(updateData)
       res.send( { msg: {name: updateData[0].name,price: auth_id.price}} )

}


const findRangedBooks = async function (req, res) {


    let data = (await bookAuthorModel.find({price:{$gte:50, $lte:100}}).select({author_id: 1,_id:0})).map(s => s.author_id)

    let newData = data.filter((item,index) => data.indexOf(item) === index)
   // console.log(authid)
 let name = []
    for(let i in newData) {
    name.push(...await authorModel.find({author_id: newData[i]}).select({name: 1 ,_id:0}))

    }
       //console.log(authName)
       res.send( { msg: name })

}


module.exports.createAuthor =  createAuthor
module.exports.createBooks =  createBooks
module.exports.findBooks =  findBooks
module.exports.findUpdatedBooks = findUpdatedBooks 
module.exports.findRangedBooks = findRangedBooks 