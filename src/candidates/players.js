let player = function(req,res){

    let y = req.params.index
    console.log(y)

    let players =
[
{
"name": "manish",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": [
"swimming"
]
},
{
"name": "gopal",
"dob": "1/09/1995",
"gender": "male",
"city": "delhi",
"sports": [
"soccer"
],
},
{
"name": "lokesh",
"dob": "1/1/1990",
"gender": "male",
"city": "mumbai",
"sports": [
"soccer"
],
},
]

Arr.push(y)

res.send({data:players , status :true})
}


    module.exports.player =player

    //now we have to export in route.js