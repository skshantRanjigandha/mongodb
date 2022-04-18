const express = require('express')
const app = express()

const bodyParser = require('body-parser');

const route = require('./routes/route');

const  mongoose= require('mongoose')


mongoose.connect("mongodb+srv://sushantkb:TM8BFATdO1usEQ5Q@cluster0.ubaqb.mongodb.net/bookschema11?retryWrites=true&w=majority",{useNewUrlParser: true})
.then(()=>
console.log("mongoDb is connected"))
.catch( err =>  console.log(err))


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
    
app.listen(process.env.PORT || 4000, function() {

    
console.log('Express app running on port ' + (process.env.PORT || 4000))
});
