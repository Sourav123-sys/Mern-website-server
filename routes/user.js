const express = require('express');
const router =  express.Router();


const {userById,read,update,purchaseHistory} = require("../controllers/user")
const {requireSignin,isAuth,isAdmin} = require("../controllers/auth")

router.get('/secret/:userId',requireSignin,isAuth,isAdmin,(req,res) => {


    res.json({
       user: req.profile
    });
})


router.get('/user/:userId',requireSignin,read)
//isAuth o use kora jabe
router.put('/user/:userId',requireSignin,update)
////isAuth o use kora jabe

router.get('/orders/by/user/:userId', requireSignin,  purchaseHistory);


router.param("userId",userById)

module.exports = router;