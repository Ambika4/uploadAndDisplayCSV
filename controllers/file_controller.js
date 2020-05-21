const File=require('../models/File');
//for deleting the module
const fs=require('fs');
const path=require('path');

module.exports.home=function(req,res){
     return res.render('uploadCSV',{
        title:"CSV|Display"
    });
}

module.exports.update=async function(req,res){
   
        try{
            
            File.uploadedAvatar(req,res,function(err){
                if(err){console.log('multer error',err)}
                //Always check for file
                if(req.file){
                    //this is saving the path of uploaded file into the avatar field into the user
                        if(file_name.avatar){
                        fs.unlinkSync(path.join(__dirname,'..',file_name.avatar));
                        }
                    
                    file_name.avatar=File.avatarPath + '/' +req.file.filename;
                    
                }
                file_name.save();
                console.log(req.file);
                return res.redirect('back');
                
            })
        }catch(err){  
            return res.redirect('back');
        }

}