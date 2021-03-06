const express= require('express');/*It will fetch old instance of express if we are adding it for second time*/
/*express is required only once*/
const router=express.Router();

console.log('router loaded');

const homeController=require('../controllers/file_controller');
router.get('/',homeController.home);
router.use('/files',require('./files'));

//for any further routes access from here
//router.use('/routername',require('./routerfile));


module.exports=router;