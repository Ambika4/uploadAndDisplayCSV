const mongoose=require('mongoose');

const multer=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/uploads/avatars');
const fileSchema = new mongoose.Schema({
  //It store path of the uploads
  avatar:{
    type:String
},
name:{
  type:String
}
},{
    timestamps:true

});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..', AVATAR_PATH));
    },
    //here file.fieldname is Avatar
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

//static function
//single function id for only one file will uploaded in avatar
fileSchema.statics.uploadedAvatar=multer({
  storage: storage,
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);}
  }).single('avatar');

  //for checking file type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /csv/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: CSV File only!');
  }
}
// as AVATAR_PATH need to publicly available
fileSchema.statics.avatarPath=AVATAR_PATH;

const File = mongoose.model('File',fileSchema);

module.exports=File;

