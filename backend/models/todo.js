 const mongoose=require("mongoose")


const todoScheme=new mongoose.Schema({
    name:{type:String,reqiired:true,minlength:3,maxlength:200},
    author: String,
    uid: String,
    isComplete: Boolean,
    date: {type:Date , default:new Date()}


})

const Todo = mongoose.model('Todo',todoScheme)

 exports.Todo = Todo
//  module.exports=Todo
// module.exports.Todo=Todo

// export default Todo;