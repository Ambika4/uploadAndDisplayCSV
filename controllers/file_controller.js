const File=require('../models/File');
//for deleting the module
const fs=require('fs');
const path=require('path');

module.exports.home=async function(req,res){
    let files=await File.find({});
     return res.render('uploadCSV',{
        title:"CSV|Display",
        files:files
    });
}

module.exports.upload=async function(req,res){
   
        try{
            
            let file=await File.create({

            })
            File.uploadedAvatar(req,res,function(err){
                if(err){console.log('multer error',err)}
                //Always check for file
                if(req.file){
                    // console.log(req.file)
                    //this is saving the path of uploaded file into the avatar field into the user
                        if(file.avatar){
                        fs.unlinkSync(path.join(__dirname,'..',file.avatar));
                        }
                    
                    file.avatar=File.avatarPath + '/' +req.file.filename;
                    file.name=req.file.originalname;
                    
                }
                file.save();
                return res.redirect('/');
                
            })


        }catch(err){  
            return res.redirect('back');
        }

}
