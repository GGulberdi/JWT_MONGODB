// const mongoose = require('mongoose')
// const Schema = mongoose.Schema


// const StaffSchema = new Schema({
//   name:{type:String, maxlength:60, minlength:2},
//   surname:{type:String,maxlength:60,minlength:2},
//   age:{type:Number},
//   phone:{type:Number},
//   section:{type:String,maxlength:1000,minlength:10},
//   jobType:{type:String},
//   branch:{type:String},
//   address:{type:String},
//   createdAt:{type:Date,default:Date.now}
// })

// module.exports = mongoose.model('staff', StaffSchema)

const mongoose = require('mongoose');
const schemaStaff = new mongoose.Schema(
      { 
        name:String,
        email:String,
        phone:Number,
        position:String,
        department:String,
        jobTitle: String,
        additionalInfo: String,
        isActive: Boolean
      },
      { timestamps: true }
    );
    schemaStaff.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Staff  = mongoose.model("staff", schemaStaff);
    module.exports = Staff;