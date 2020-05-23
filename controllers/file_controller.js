const File=require('../models/File');
const csv = require('csv-parser')
//for deleting the module
const fs=require('fs');
const path=require('path');


// rendering home page
module.exports.home=async function(req,res){
    let files=await File.find({});
     return res.render('uploadCSV',{
        title:"CSV|Display",
        files:files
    });
}

//controller for uploading file
module.exports.upload=async function(req,res){
   
        try{ 
            let file=await File.create({

            })
            File.uploadedAvatar(req,res,function(err){
                if(req.file.originalname.split('.').pop()!='csv')
                return res.redirect('/');
                   
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

//controller for dispalying file
module.exports.display=async function(req,res){
    const results = [];
    let file= await File.findById(req.params.id)
    
    fs.createReadStream(path.join(__dirname,'..',file.avatar))
    .pipe(csv({mapHeaders: ({ header, index }) => header.toLowerCase()}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
//     console.log( Object.keys(results[0]).length);
//    console.log(Object.keys(results[0]))
       return res.render('displayCSV',{
        title:"CSV|Display",
        results:results
    });
  });
}