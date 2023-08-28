const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
.then(() => console.log("CONNECTED"))
.catch((err) => console.log("Not CONNECTED",err));


const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    isPublish:Boolean,
    price:Number
})

const Course = mongoose.model('exercise',courseSchema);

async function getCourse(){
    const res = await Course.find({isPublish:true,tags:'backend'}).sort('-price').select('name author tags')

    console.log(res);
}

getCourse()



