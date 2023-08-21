const mongoose = require("mongoose")
// mongodb://localhost/test
mongoose.connect('mongodb://localhost/playgroup')
.then(() => console.log('DB connected'))
.catch((error) => console.log('Not connected'))