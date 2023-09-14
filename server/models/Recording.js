const mongoose=require('mongoose');
const {Schema,model}=mongoose;

const recordingshema=new mongoose.Schema({

    path:{type:String,required:true},
    author:{type:Schema.Types.ObjectId,ref:'Users'},
});

const Recording=model('Recording',recordingshema);

module.exports=Recording;