// /**
//  * Created by javdev on 4/6/2017.
//  */
// var mongoose = require('mongoose');
//
// var Schema = mongoose.Schema;
//
// var tagsSchema = new Schema({id: Number, title: String});
// var categoriesSchema = new Schema({idcategories: Number, name: String});
// var  InterestSchema = new Schema({label: String});
//
// var userSchema = new Schema({
//      name: String,
//      pos_latitude:{type:Number},
//      pos_longitude:{type:Number},
//     evt_tags: [tagsSchema],
//     evt_categories: [categoriesSchema],
//     interests:[InterestSchema]
//
// }, {collection: "users"});
// module.exports = mongoose.model('User', userSchema);
//
