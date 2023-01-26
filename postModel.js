const mongoose=require('mongoose');

const schema=mongoose.Schema(
    {
        name:'String',
        email:'String',
        message:'String'

    },{timestamps:true});

    const Post=mongoose.model('Post',schema);

    module.exports = Post;