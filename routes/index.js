const express= require('express');/*It will fetch old instance of express if we are adding it for second time*/
/*express is required only once*/
const router=express.Router();

const fileController=require('../controllers/file_controller');
console.log('router loaded');

router.get('/',fileController.upload);

//for any further routes access from here
//router.use('/routername',require('./routerfile));


module.exports=router;