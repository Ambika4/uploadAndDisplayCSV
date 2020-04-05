module.exports.upload=async function(req,res){
       try{
            let file= await File.findById(req.params.id);
            File.uploadedAvatar(req,res,function(err){
                if(err){console.log('multer error',err)}
                //Always check for file
                if(req.file){
                    //this is saving the path of uploaded file into the avatar field into the user
                    if(file.avatar){
                        fs.unlinkSync(path.join(__dirname,'..',file.avatar));
                    }
                    file.avatar=File.avatarPath + '/' +req.file.filename;
                    
                }
                file.save();
                console.log(req.file);
                return res.redirect('back');
                
            })
        }catch(err){
            req.flash('error',err);
            return res.redirect('back');
        }
    

}
