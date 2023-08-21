const mongoose = require("mongoose")
// mongodb://localhost/test
mongoose.connect('mongodb://localhost/playgroup')
.then(() => console.log('DB connected'))
.catch((error) => console.log('Not connected'))


const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags: [String],
    date:{type:Date,default:Date.now},
    isPublish:Boolean
});

async function createCourse(){
    const Course = mongoose.model('Course',courseSchema)
    const course = new Course({
        name:'Express Course',
        author:'NAMA',
        tags: ['Node','express'],
        isPublish:true
    });

    const result =  await course.save();
    console.log(result);
}
createCourse()





