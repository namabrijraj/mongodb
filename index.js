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
    isPublish:Boolean,
    price:Number
});

const Course = mongoose.model('Course',courseSchema)

async function createCourse(){    
    const course = new Course({
        name:'Frontend',
        author:'DAMAYANTI',
        tags: ['Node','express'],
        isPublish:false,
        price:50
    });
    const result =  await course.save();
    console.log(result);
}
async function getCourse(){  
    const course = await Course
    //.find({author:/^na/i}) start
    //.find({author:/ti$/i}) // end
    .find({author:/.*am.*/i}) // contain
                    //.find({isPublish:false,author:'NAMA'})
                    //.find().limit(1)
                    //.find().limit(5).sort({name:-1}).select({name:1,tags:1})
                    //.find().or([{author:'NAMA'},{isPulish:true}]).limit(5).sort({name:-1})
    console.log(course)
}





getCourse()





