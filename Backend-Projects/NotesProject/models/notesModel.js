const mongoose=require("mongoose");

const NotesSchema=new mongoose.Schema({
    title:String,
    body:String,
    userId:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
});

const Notesmodel=mongoose.model("note",NotesSchema);

module.exports=Notesmodel;