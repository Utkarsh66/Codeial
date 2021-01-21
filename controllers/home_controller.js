const Post = require('../models/post')

module.exports.home = function(req,res){
    //  res.cookie('user_id',25);
    // Post.find({},function(err,posts){
    //     if(err){
    //         console.log('Error in fetching contacts from posts');
    //         return;
    //     }
    //   //  console.log('Todo:',Todo);
    // return res.render('home',{
    //     title: "Codial | Home",
    //     post_List: posts
    // });
    // });

    //populate the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        return res.render('home',{
            title: "Codeial|Home",
            posts:posts
        }
    );})
} 

module.exports.actionName = function(req,res){
    return res.end('<p>We will rise</p>')
}

