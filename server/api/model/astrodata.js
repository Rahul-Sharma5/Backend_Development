const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const astroScheme = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    taskName:String,
    description:String,
    status:String,
    date:String
})

astroScheme.plugin(mongoosePagination);

module.exports = mongoose.model('Astrodata', astroScheme);