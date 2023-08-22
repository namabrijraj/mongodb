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

const Course = mongoose.model('Course',courseSchema)

async function createCourse(){    
    const course = new Course({
        name:'Node Course',
        author:'DAMAYANTI',
        tags: ['Node','express'],
        isPublish:false
    });
    const result =  await course.save();
    console.log(result);
}
async function getCourse(){  
    const course = await Course
                    //.find({isPublish:false,author:'NAMA'})
                    //.find().limit(1)
                    //.find().limit(5).sort({name:-1}).select({name:1,tags:1})
                    .find().limit(5).sort({name:-1}).count()
    console.log(course)
}






getCourse()





