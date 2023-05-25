const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*   useCreateIndex: true, */
    /* useFindAndModify:false */
}).then(() => {
    console.log(`Mongodb Connection successful..`);
}).catch((err) => console.log(`Mongodb Connection Failed ${err}`));